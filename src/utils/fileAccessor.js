const getAssetsImgUrl = (url) => {
  return new URL(`../assets/img/${url}`, import.meta.url).href;
}
const getAssetsMusicUrl = (url) => {
  return new URL(`../assets/music/${url}`, import.meta.url).href;
}
export {
  getAssetsImgUrl,
  getAssetsMusicUrl
};