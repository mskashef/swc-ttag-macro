console.log('locale on babel-plugin-macros: ' + process.env.LOCALE)
const locale = process.env.LOCALE == 'ir' ? 'fa' : 'en'
module.exports = process.env.LOCALE
  ? {
      ttag: { resolve: { translations: `i18n/${locale}.po` } }
    }
  : {}
