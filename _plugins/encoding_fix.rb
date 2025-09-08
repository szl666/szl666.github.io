# 修复编码问题的插件
Encoding.default_external = Encoding::UTF_8
Encoding.default_internal = Encoding::UTF_8

Jekyll::Hooks.register :site, :pre_render do |site|
  # 确保所有处理都使用 UTF-8
  site.config['encoding'] = 'utf-8'
end
