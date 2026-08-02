import { computed, ref } from 'vue'
import type { Locale, SiteContent } from './types'
import en from './en'
import zh from './zh'
import jp from './jp'

const dictionary: Record<Locale, SiteContent> = { en, zh, jp }
const locales: Locale[] = ['en', 'jp', 'zh']

function detectInitialLocale(): Locale {
  const saved = localStorage.getItem('locale')
  if (saved && locales.includes(saved as Locale)) return saved as Locale
  const browser = navigator.language.toLowerCase()
  if (browser.startsWith('zh')) return 'zh'
  if (browser.startsWith('ja')) return 'jp'
  return 'en'
}

const currentLocale = ref<Locale>(detectInitialLocale())

export function useLocale() {
  const setLocale = (locale: Locale) => {
    currentLocale.value = locale
    localStorage.setItem('locale', locale)
  }

  const content = computed<SiteContent>(() => dictionary[currentLocale.value])

  return { locale: currentLocale, locales, setLocale, content }
}
