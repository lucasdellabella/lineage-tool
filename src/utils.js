export const extractName = (name) => {
  const prefixTrimmed = name.substring("/static/media/".length);
  return dropAssetSuffix(prefixTrimmed);
};

const dropAssetSuffix = (c) =>
  c
    .split(".")
    .slice(0, c.split(".").length - 2)
    .join(".");
