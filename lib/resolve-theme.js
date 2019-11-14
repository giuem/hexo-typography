function resolveTheme(theme) {
  try {
    return require(theme)
  } catch (error) {
    return false
  }
}

module.exports = resolveTheme
