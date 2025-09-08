#!/bin/bash

echo "🔧 开始修复 Jekyll 站点..."

# 1. 检查并创建必要文件
echo "📝 检查必要的配置文件..."

# 检查 vercel.json 是否存在，如果不存在则创建
if [ ! -f "vercel.json" ]; then
    echo "创建 vercel.json..."
    cat > vercel.json << 'EOF'
{
  "build": {
    "env": {
      "RUBY_VERSION": "3.3.0",
      "LANG": "en_US.UTF-8",
      "LC_ALL": "en_US.UTF-8"
    }
  },
  "buildCommand": "export LANG=en_US.UTF-8 && export LC_ALL=en_US.UTF-8 && bundle install && bundle exec jekyll build",
  "outputDirectory": "_site"
}
EOF
else
    echo "更新现有的 vercel.json..."
    # 备份原文件
    cp vercel.json vercel.json.backup
    cat > vercel.json << 'EOF'
{
  "build": {
    "env": {
      "RUBY_VERSION": "3.3.0",
      "LANG": "en_US.UTF-8",
      "LC_ALL": "en_US.UTF-8"
    }
  },
  "buildCommand": "export LANG=en_US.UTF-8 && export LC_ALL=en_US.UTF-8 && bundle install && bundle exec jekyll build",
  "outputDirectory": "_site"
}
EOF
fi

# 2. 修复 _config.yml
echo "🔧 修复 _config.yml..."
if ! grep -q "encoding: utf-8" _config.yml 2>/dev/null; then
    echo "encoding: utf-8" >> _config.yml
    echo "已添加 UTF-8 编码设置到 _config.yml"
fi

# 3. 检查并修复 CSS 文件
echo "🎨 检查 CSS 文件..."

# 创建 assets/css 目录（如果不存在）
mkdir -p assets/css

# 检查 style.scss 文件
if [ -f "assets/css/style.scss" ]; then
    # 备份原文件
    cp assets/css/style.scss assets/css/style.scss.backup
    
    # 检查文件是否已有 @charset 声明
    if ! head -1 assets/css/style.scss | grep -q "@charset"; then
        echo "添加 UTF-8 charset 到 style.scss..."
        
        # 创建临时文件，添加 @charset 声明
        cat > assets/css/style.scss.tmp << 'EOF'
@charset "UTF-8";

---
---

@import "{{ site.theme }}";
EOF
        
        # 如果原文件有其他内容，追加到新文件
        if [ -s assets/css/style.scss ]; then
            echo "" >> assets/css/style.scss.tmp
            tail -n +1 assets/css/style.scss >> assets/css/style.scss.tmp
        fi
        
        mv assets/css/style.scss.tmp assets/css/style.scss
    fi
else
    echo "创建 style.scss 文件..."
    cat > assets/css/style.scss << 'EOF'
@charset "UTF-8";

---
---

@import "{{ site.theme }}";
EOF
fi

# 4. 更新 Gemfile（如果需要）
echo "💎 检查 Gemfile..."
if [ -f "Gemfile" ]; then
    if ! grep -q 'ruby "3.3.0"' Gemfile; then
        # 备份 Gemfile
        cp Gemfile Gemfile.backup
        
        # 更新或添加 Ruby 版本
        if grep -q 'ruby ' Gemfile; then
            sed -i.bak 's/ruby .*/ruby "3.3.0"/' Gemfile
        else
            echo 'ruby "3.3.0"' >> Gemfile
        fi
        echo "已更新 Gemfile 中的 Ruby 版本"
    fi
fi

# 5. 清理并重新生成 Gemfile.lock
echo "🔄 重新生成依赖..."
if [ -f "Gemfile.lock" ]; then
    rm Gemfile.lock
fi

# 设置环境变量并安装依赖
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

bundle install

# 6. 测试构建
echo "🧪 测试构建..."
if bundle exec jekyll build; then
    echo "✅ 构建成功！"
else
    echo "❌ 构建失败，请检查错误信息"
    exit 1
fi

# 7. Git 操作
echo "📤 处理 Git 操作..."

# 设置合并策略（避免之前的 git pull 问题）
git config pull.rebase false

# 拉取远程更改
echo "拉取远程更改..."
if ! git pull origin main --no-rebase; then
    echo "⚠️ Git pull 失败，可能需要手动解决冲突"
    echo "请运行以下命令手动解决："
    echo "git status"
    echo "git add ."
    echo "git commit -m 'Resolve conflicts'"
    exit 1
fi

# 添加所有更改
git add .

# 提交更改
git commit -m "Fix Jekyll site: encoding issues, dependencies, and configuration

- Add UTF-8 encoding support
- Update vercel.json with proper environment variables
- Fix CSS charset issues
- Update Ruby version and dependencies
- Resolve build errors"

# 推送到远程
echo "推送到远程仓库..."
if git push origin main; then
    echo "✅ 成功推送到远程仓库！"
else
    echo "❌ 推送失败，请检查错误信息"
    exit 1
fi

echo ""
echo "🎉 修复完成！"
echo ""
echo "📋 修复内容总结："
echo "   ✓ 更新了 vercel.json 配置"
echo "   ✓ 添加了 UTF-8 编码支持"
echo "   ✓ 修复了 CSS 字符集问题"
echo "   ✓ 更新了依赖关系"
echo "   ✓ 测试构建成功"
echo "   ✓ 推送到远程仓库"
echo ""
echo "🚀 你的站点现在应该可以在 Vercel 上正常部署了！"

