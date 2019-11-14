const HEAD_TAG = '</head>'

/**
 * Inject style to HTML <head>
 * @param {string} html 
 * @param {string} cssText 
 */
const inject = (html, cssText) => {
  if (html.indexOf(`<style id="typography">`) > -1) {
    return html
  }

  const headIndex = html.indexOf(HEAD_TAG)
  if (headIndex === -1) {
    return html
  }

  const style = `<style id="typography">${cssText}</style>`
  return `${html.substring(0, headIndex)}${style}${html.substring(headIndex, html.length)}`
}

module.exports = inject