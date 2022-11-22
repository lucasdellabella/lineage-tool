const fs = require("fs");
const { createCrestDescription } = require("./descriptionFragments");

const descFrags = {
  back: {},
  left: {},
  right: {},
};

const attribute = (type, attrList) => {
  return attrList.find(({ trait_type }, i) => trait_type === type);
};

const center = (attributes) => {
  return attribute("Centerpiece", attributes);
};
const left = (attributes) => {
  return attribute("Left Ornament", attributes);
};
const right = (attributes) => {
  return attribute("Right Ornament", attributes);
};
const back = (attributes) => {
  return attribute("Back Plating", attributes);
};

const setDescription = (blob) => {
  const name = blob.name;
  const description = createCrestDescription({
    crestName: name,
    leftName: left(blob.attributes).value,
    rightName: right(blob.attributes).value,
    backName: back(blob.attributes).value,
  });

  blob.description = description;
};

const workOnFile = (i) => {
  const path = `src/generatedAssets/${i}.json`;
  const blob = JSON.parse(fs.readFileSync(path));

  const { attributes } = blob;

  // console.log(`--- ${blob.name} | ${blob.image} ---`);
  setDescription(blob);
  // console.log(blob.description);
  // console.log("\n");

  if (
    false &&
    ([
      "Elder Tree",
      "Mohoan Purification Pond",
      "Moribund Mists",
      "Ruinous Storm",
      "Runic Inscription",
      "Treasure Chamber",
      "Shattered Cosmos",
    ].includes(back(attributes).value) ||
      ["[Forgotten]"].includes(right(attributes).value))
  ) {
    console.log(`--- ${blob.name} | ${blob.image} ---`);
    setDescription(blob);
    console.log(blob.description);
    console.log("\n");
  }

  if (
    // center(attributes).value.toLowerCase() === "moribund mists".toLowerCase()
    // left(attributes).value.toLowerCase() === "thespin skytram".toLowerCase()
    // right(attributes).value.toLowerCase() === "goblets of skourd"
    // back(attributes).value.toLowerCase() === "mohoan purification pond"
    // blob.image === "166.png"
    false
  ) {
    // console.log(blob);
    //   blob.attributes = [
    //     { ...center(attributes) },
    //     { ...left(attributes), value: "Soothounds" },
    //     { ...right(attributes) },
    //     { ...back(attributes) },
    //   ];
    //   console.log("\n");
    // }
  }
  fs.writeFileSync(path, JSON.stringify(blob), {
    encoding: "utf8",
    flag: "w",
  });
  // console.log(JSON.parse(fs.readFileSync(path)));
};

const main = () => {
  console.log("\n\n\n\n\n");
  for (let i = 0; i < 192; i++) {
    workOnFile(i);
  }
};

main();
