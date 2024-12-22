import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Sistem Management Sekolah'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
