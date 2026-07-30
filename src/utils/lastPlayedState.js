const LAST_PLAYED_AT_KEY = 'imaginalo_last_played_at'

export function recordLastPlayed() {
  try {
    window.localStorage.setItem(LAST_PLAYED_AT_KEY, new Date().toISOString())
  } catch {
    /* localStorage no disponible */
  }
}

export function getDaysSinceLastPlayed() {
  try {
    const raw = window.localStorage.getItem(LAST_PLAYED_AT_KEY)

    if (!raw) return null

    const lastPlayed = new Date(raw)

    if (Number.isNaN(lastPlayed.getTime())) return null

    const msPerDay = 1000 * 60 * 60 * 24

    return Math.floor((Date.now() - lastPlayed.getTime()) / msPerDay)
  } catch {
    return null
  }
}
