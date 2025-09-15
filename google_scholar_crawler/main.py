from scholarly import scholarly
import json
from datetime import datetime
import os
import time
import random

def get_scholar_data_with_retry():
    """带重试机制的Google Scholar数据获取"""
    max_retries = 3
    base_delay = 5
    
    for attempt in range(max_retries):
        try:
            print(f"尝试获取数据 (第 {attempt + 1} 次)...")
            
            # 添加随机延迟避免被检测
            time.sleep(random.uniform(2, 5))
            
            # 搜索作者
            author = scholarly.search_author_id(os.environ['GOOGLE_SCHOLAR_ID'])
            
            # 填充详细信息
            scholarly.fill(author, sections=['basics', 'indices', 'counts', 'publications'])
            
            # 处理数据
            name = author['name']
            author['updated'] = str(datetime.now())
            author['publications'] = {v['author_pub_id']:v for v in author['publications']}
            
            print(f"成功获取 {name} 的数据")
            print(f"总引用数: {author.get('citedby', 0)}")
            print(f"论文数量: {len(author['publications'])}")
            
            return author
            
        except Exception as e:
            print(f"第 {attempt + 1} 次尝试失败: {str(e)}")
            if attempt < max_retries - 1:
                delay = base_delay * (2 ** attempt) + random.uniform(0, 2)
                print(f"等待 {delay:.1f} 秒后重试...")
                time.sleep(delay)
            else:
                raise e

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
        raise e

if __name__ == "__main__":
    main()
