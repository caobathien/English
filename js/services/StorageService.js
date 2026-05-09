/**
 * ============================================
 * StorageService - localStorage wrapper
 * ============================================
 */
class StorageService {
  constructor(prefix = 'eng_daily_') {
    this.prefix = prefix;
  }

  _key(key) {
    return this.prefix + key;
  }

  save(key, value) {
    try {
      localStorage.setItem(this._key(key), JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn('StorageService: save failed', e);
      return false;
    }
  }

  load(key, defaultValue = null) {
    try {
      const data = localStorage.getItem(this._key(key));
      return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
      console.warn('StorageService: load failed', e);
      return defaultValue;
    }
  }

  remove(key) {
    localStorage.removeItem(this._key(key));
  }

  clear() {
    const keys = Object.keys(localStorage).filter(k => k.startsWith(this.prefix));
    keys.forEach(k => localStorage.removeItem(k));
  }
}

window.StorageService = StorageService;
