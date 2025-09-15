from scholarly import scholarly
import json
from datetime import datetime
import os
import time
import random
import signal
import sys
import platform

class TimeoutException(Exception):
    pass

def timeout_handler(signum, frame):
    raise TimeoutException("操作超时")

def is_timeout_supported():
    """检查是否支持signal超时"""
    return platform.system() != 'Windows' and hasattr(signal, 'SIGALRM')

def get_scholar_data_with_retry():
    """带重试机制和超时控制的Google Scholar数据获取"""
    max_retries = 2  # 减少重试次数
    base_delay = 10
    
    # 配置scholarly使用更宽松的设置
    try:
        scholarly.use_proxy(http="http://proxy-server:port", https="https://proxy-server:port")
    except:
        pass  # 如果没有代理就跳过
    
    for attempt in range(max_retries):
        try:
            print(f"尝试获取数据 (第 {attempt + 1} 次)...")
            
            # 设置超时（仅在支持的系统上）
            timeout_set = False
            if is_timeout_supported():
                try:
                    signal.signal(signal.SIGALRM, timeout_handler)
                    signal.alarm(180)  # 3分钟超时
                    timeout_set = True
                except:
                    pass
            
            # 添加随机延迟避免被检测
            delay = random.uniform(5, 15)
            print(f"等待 {delay:.1f} 秒避免被检测...")
            time.sleep(delay)
            
            # 搜索作者
            print("正在搜索作者信息...")
            author = scholarly.search_author_id(os.environ['GOOGLE_SCHOLAR_ID'])
            
            # 填充基本信息
            print("正在获取基本信息...")
            scholarly.fill(author, sections=['basics', 'indices', 'counts'])
            
            # 取消超时
            if timeout_set:
                signal.alarm(0)
            
            # 处理数据
            name = author['name']
            author['updated'] = str(datetime.now())
            
            # 只获取基本发表信息，不获取详细的publications避免超时
            if 'publications' in author:
                author['publications'] = {v['author_pub_id']:v for v in author['publications'][:10]}  # 只取前10篇
            else:
                author['publications'] = {}
            
            print(f"成功获取 {name} 的数据")
            print(f"总引用数: {author.get('citedby', 0)}")
            print(f"h-index: {author.get('hindex', 0)}")
            
            return author
            
        except TimeoutException:
            print(f"第 {attempt + 1} 次尝试超时")
            if timeout_set:
                signal.alarm(0)
        except Exception as e:
            print(f"第 {attempt + 1} 次尝试失败: {str(e)}")
            if 'timeout_set' in locals() and timeout_set:
                signal.alarm(0)
            
        if attempt < max_retries - 1:
            delay = base_delay * (2 ** attempt) + random.uniform(0, 5)
            print(f"等待 {delay:.1f} 秒后重试...")
            time.sleep(delay)
        else:
            # 如果所有尝试都失败，使用备用数据
            print("所有尝试都失败，使用现有数据...")
            return create_fallback_data()

def create_fallback_data():
    """创建备用数据，基于已有的gs_data.json"""
    try:
        # 尝试读取现有数据
        if os.path.exists('../gs_data.json'):
            with open('../gs_data.json', 'r', encoding='utf-8') as f:
                existing_data = json.load(f)
                existing_data['updated'] = str(datetime.now()) + " (fallback)"
                return existing_data
    except:
        pass
    
    # 如果没有现有数据，创建基本结构
    return {
        "name": "Zhilong Song",
        "affiliation": "Southeast University", 
        "citedby": 796,  # 从之前的数据
        "hindex": 10,
        "i10index": 10,
        "publications": {},
        "updated": str(datetime.now()) + " (fallback)",
        "scholar_id": "3MkXEhUAAAAJ"
    }

def main():
    try:
        # 获取数据
        author = get_scholar_data_with_retry()
        
        # 创建输出目录
        os.makedirs('results', exist_ok=True)
        
        # 保存完整数据
        with open('results/gs_data.json', 'w', encoding='utf-8') as outfile:
            json.dump(author, outfile, ensure_ascii=False, indent=2)
        
        # 保存shields.io格式数据
        shieldio_data = {
            "schemaVersion": 1,
            "label": "citations",
            "message": f"{author.get('citedby', 0)}",
        }
        with open('results/gs_data_shieldsio.json', 'w', encoding='utf-8') as outfile:
            json.dump(shieldio_data, outfile, ensure_ascii=False, indent=2)
        
        print("数据保存成功!")
        
    except Exception as e:
        print(f"获取数据失败: {str(e)}")
        # 即使失败也不退出，使用备用数据
        author = create_fallback_data()
        
        os.makedirs('results', exist_ok=True)
        with open('results/gs_data.json', 'w', encoding='utf-8') as outfile:
            json.dump(author, outfile, ensure_ascii=False, indent=2)
        
        shieldio_data = {
            "schemaVersion": 1,
            "label": "citations", 
            "message": f"{author.get('citedby', 0)}",
        }
        with open('results/gs_data_shieldsio.json', 'w', encoding='utf-8') as outfile:
            json.dump(shieldio_data, outfile, ensure_ascii=False, indent=2)
        
        print("使用备用数据保存成功!")

if __name__ == "__main__":
    main()
