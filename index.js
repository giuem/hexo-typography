const Typography = require('typography')
const inject = require('./lib/inject')
const resolveTheme = require('./lib/resolve-theme')
const log = hexo.log

if (!hexo.config.typography || !hexo.config.typography.theme) {
  return
}

const { theme } = hexo.config.typography
const themeConfig = resolveTheme(theme)
if (!themeConfig) {
  log.warn(`
Typography theme ${theme} is not installed.
To install it, try:
  npm install ${theme} or yarn add ${theme}`
  .trim())
  return
}

const typography = new Typography(themeConfig)
const styles = typography.toString()

hexo.extend.filter.register('after_render:html', function after_render(html) {
  return inject(html, styles)
})