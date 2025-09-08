#!/bin/bash

echo "🔧 修复 Ruby 版本和区域设置问题..."

# 1. 检查当前 Ruby 版本
CURRENT_RUBY_VERSION=$(ruby -v | grep -o '[0-9]\+\.[0-9]\+\.[0-9]\+' | head -1)
echo "当前 Ruby 版本: $CURRENT_RUBY_VERSION"

# 2. 更新 Gemfile 使用当前 Ruby 版本
echo "📝 更新 Gemfile..."
if [ -f "Gemfile.backup" ]; then
    cp Gemfile.backup Gemfile
fi

# 更新 Gemfile 中的 Ruby 版本
if grep -q 'ruby ' Gemfile; then
    sed -i.bak "s/ruby .*/ruby \"$CURRENT_RUBY_VERSION\"/" Gemfile
else
    echo "ruby \"$CURRENT_RUBY_VERSION\"" >> Gemfile
fi

echo "已更新 Gemfile Ruby 版本为: $CURRENT_RUBY_VERSION"

# 3. 更新 vercel.json 使用正确的 Ruby 版本
echo "🔧 更新 vercel.json..."
cat > vercel.json << EOF
{
  "build": {
    "env": {
      "RUBY_VERSION": "$CURRENT_RUBY_VERSION"
    }
  },
  "buildCommand": "bundle install && bundle exec jekyll build",
  "outputDirectory": "_site"
}
EOF

# 4. 设置区域设置（使用 C.UTF-8 作为备选）
echo "🌐 设置区域设置..."
export LC_ALL=C.UTF-8
export LANG=C.UTF-8

# 5. 清理并重新安装依赖
echo "🔄 重新安装依赖..."
if [ -f "Gemfile.lock" ]; then
    rm -f Gemfile.lock
fi

# 使用正确的区域设置安装依赖
LC_ALL=C.UTF-8 LANG=C.UTF-8 bundle install

# 6. 测试构建
echo "🧪 测试构建..."
if LC_ALL=C.UTF-8 LANG=C.UTF-8 bundle exec jekyll build; then
    echo "✅ 构建成功！"
    
    # 7. Git 操作
    echo "📤 提交更改..."
    
    git config pull.rebase false
    git add .
    git commit -m "Fix Ruby version compatibility and locale settings

- Update Gemfile to use Ruby $CURRENT_RUBY_VERSION
- Update vercel.json with correct Ruby version
- Fix locale settings for UTF-8 support
- Regenerate Gemfile.lock with correct dependencies"
    
    echo "推送到远程..."
    if git push origin main; then
        echo "✅ 成功推送！"
    else
        echo "❌ 推送失败，请手动推送"
    fi
    
else
    echo "❌ 构建仍然失败，让我们检查详细错误..."
    
    # 显示详细的错误信息
    echo "🔍 运行详细诊断..."
    echo "Ruby 版本: $(ruby -v)"
    echo "Bundler 版本: $(bundle -v)"
    echo "当前目录: $(pwd)"
    echo "Gemfile 内容:"
    cat Gemfile
    echo ""
    echo "重新尝试构建并显示详细错误:"
    LC_ALL=C.UTF-8 LANG=C.UTF-8 bundle exec jekyll build --verbose
fi

echo "🏁 脚本执行完成"
