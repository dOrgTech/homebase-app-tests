let cachedDAOName = null;
let lastGeneratedTime = null;
const daoNameCacheDuration = 20 * 60 * 1000; // 20 minutes in milliseconds

const generateDAOName = () => {
  const currentTime = +new Date();
  
  // Check if the DAOName is not cached or if it's been cached for more than 20 minutes
  if (!cachedDAOName || (currentTime - lastGeneratedTime) > daoNameCacheDuration) {
    cachedDAOName = `New${Math.floor(currentTime / 1000)}DAO`;
    lastGeneratedTime = currentTime;
  }

  return cachedDAOName;
};

export { generateDAOName };
