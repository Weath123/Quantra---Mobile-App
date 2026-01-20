/**
 * Storage utility for caching pulled data
 */

let cache = {};

/**
 * Save pulled data to cache
 */
export const saveData = (key, data) => {
  try {
    cache[key] = {
      data,
      timestamp: new Date().toISOString(),
    };
    return true;
  } catch (error) {
    console.error('Error saving data:', error);
    return false;
  }
};

/**
 * Get cached data
 */
export const getData = (key) => {
  try {
    return cache[key] || null;
  } catch (error) {
    console.error('Error getting data:', error);
    return null;
  }
};

/**
 * Check if cached data is still fresh (within specified minutes)
 */
export const isFresh = (key, minutes = 5) => {
  try {
    const cached = cache[key];
    if (!cached) return false;
    
    const cacheTime = new Date(cached.timestamp).getTime();
    const now = new Date().getTime();
    const diffMinutes = (now - cacheTime) / (1000 * 60);
    
    return diffMinutes < minutes;
  } catch (error) {
    console.error('Error checking data freshness:', error);
    return false;
  }
};

/**
 * Clear all cached data
 */
export const clearCache = () => {
  cache = {};
};

export default {
  saveData,
  getData,
  isFresh,
  clearCache,
};
