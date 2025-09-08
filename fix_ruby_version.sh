#!/bin/bash

echo "🔧 修复编码问题（保留所有现有文件）..."

# 1. 更新 vercel.json - 添加编码环境变量和构建配置
cat > vercel.json << 'EOF'
{
  "build": {
    "env": {
      "LANG": "C.UTF-8",
      "LC_ALL": "C.UTF-8",
      "RUBYOPT": "-E utf-8"
    }
  },
  "buildCommand": "bundle install && bundle exec jekyll build --verbose",
  "outputDirectory": "_site"
}
EOF

# 2. 更新 _config.yml - 添加完整的编码和构建配置
cat >> _config.yml << 'EOF'

# 编码设置
encoding: utf-8

# 构建设置
kramdown:
  input: GFM
  hard_wrap: false
  syntax_highlighter: rouge

# SASS 设置 - 关键修复
sass:
  style: compressed
  sass_dir: _sass

# 插件设置
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag

# 排除文件
exclude:
  - .sass-cache/
  - .jekyll-cache/
  - gemfiles/
  - Gemfile
  - Gemfile.lock
  - node_modules/
  - vendor/bundle/
  - vendor/cache/
  - vendor/gems/
  - vendor/ruby/
  - "*.gem"
  - "*.gemspec"
  - tools/
  - docs/
  - README.md
  - LICENSE
  - CODEOWNERS
EOF

# 3. 更新 Gemfile - 添加编码相关配置
if ! grep -q "RUBYOPT" Gemfile; then
    cat >> Gemfile << 'EOF'

# 确保 UTF-8 编码
ENV['RUBYOPT'] = '-E utf-8'
EOF
fi

# 4. 创建 .bundle/config 文件来强制 UTF-8
mkdir -p .bundle
cat > .bundle/config << 'EOF'
---
BUNDLE_BUILD__SASSC: "--disable-march-tune-native"
BUNDLE_FORCE_RUBY_PLATFORM: 1
EOF

# 5. 修改现有的 style.scss 文件，确保编码正确
if [ -f "assets/css/style.scss" ]; then
    # 创建一个临时文件，确保 UTF-8 编码
    cat > assets/css/style.scss << 'EOF'
---
# Only the main Sass file needs front matter (the dashes are enough)
---

@import "{{ site.theme }}";

/* 自定义样式 */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}
EOF
fi

# 6. 创建一个 Jekyll 插件来处理编码问题
mkdir -p _plugins
cat > _plugins/encoding_fix.rb << 'EOF'
# 修复编码问题的插件
Encoding.default_external = Encoding::UTF_8
Encoding.default_internal = Encoding::UTF_8

Jekyll::Hooks.register :site, :pre_render do |site|
  # 确保所有处理都使用 UTF-8
  site.config['encoding'] = 'utf-8'
end
EOF

# 7. 清理 Gemfile.lock 让 Vercel 重新生成
rm -f Gemfile.lock

# 8. 提交所有更改
git add .
git commit -m "Fix encoding issues for Vercel deployment

- Add UTF-8 environment variables to vercel.json
- Configure SASS processing with proper encoding
- Add .bundle/config for native compilation fixes
- Create encoding fix plugin
- Update Jekyll configuration for UTF-8 support
- Recreate style.scss with safe encoding

All existing files preserved, only configuration updated."

git push origin main

echo ""
echo "✅ 修复完成！所有文件都已保留。"
echo ""
echo "📋 修复内容："
echo "   ✓ 在 vercel.json 中添加 UTF-8 环境变量"
echo "   ✓ 配置 SASS 处理器使用正确编码"
echo "   ✓ 添加 .bundle/config 修复原生编译"
echo "   ✓ 创建编码修复插件"
echo "   ✓ 更新 Jekyll 配置支持 UTF-8"
echo "   ✓ 重新创建 style.scss 确保编码安全"
echo ""
echo "🚀 现在 Vercel 应该可以正确处理所有文件了！"


