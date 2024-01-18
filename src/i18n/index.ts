import spanish from 'src/i18n/es.json'
import english from 'src/i18n/en.json'

const LANGUAGES = {
  SPANISH: 'es',
  ENGLISH: 'en',
}

export const getI18N = ({
  currentLocale = 'es',
}: {
  currentLocale: string | undefined
}) => {
  if (currentLocale === LANGUAGES.SPANISH) return spanish
  if (currentLocale === LANGUAGES.ENGLISH) return english
}
