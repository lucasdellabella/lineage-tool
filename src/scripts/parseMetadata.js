const fs = require("fs");

const descFrags = {
  back: {},
  left: {},
  right: {},
};

const attribute = (type, attrList) => {
  return attrList.find(({ trait_type }, i) => trait_type === type);
};

// const setDescription = (blob) => {
//   const name = blob.name;
//   const center = center(blob.attributes);
//   const desc = `
//     Hailing from ${descFrags.back[center(blob.attributes)]}, the ${name}
//     ${descFrags.right[right(blob.attributes)]}. Now ${
//     descFrags.left[left(blob.attributes)]
//   }, they look towards the future with a glint in their eye.
//     Their future is bright. The only question: what comes next?
//   `;

//   blob.description = desc;
// };

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

const workOnFile = (i) => {
  const path = `src/generatedAssets/${i}.json`;
  const blob = JSON.parse(fs.readFileSync(path));

  const { attributes } = blob;

  // Replace Groodu's Compassion Asset

  if (
    // center(attributes).value.toLowerCase() === "moribund mists".toLowerCase()
    // left(attributes).value.toLowerCase() === "thespin skytram".toLowerCase()
    // right(attributes).value.toLowerCase() === "goblets of skourd"
    back(attributes).value.toLowerCase() === "treasure chamber"
    // blob.image === "166.png"
  ) {
    console.log(`--- ${blob.name} ---`);
    console.log(blob);
    //   blob.attributes = [
    //     { ...center(attributes) },
    //     { ...left(attributes), value: "Soothounds" },
    //     { ...right(attributes) },
    //     { ...back(attributes) },
    //   ];
    //   console.log("\n");

    //   fs.writeFileSync(path, JSON.stringify(blob), {
    //     encoding: "utf8",
    //     flag: "w",
    //   });

    //   console.log(JSON.parse(fs.readFileSync(path)));
    // }
  }
};

const main = () => {
  console.log("\n\n\n\n\n");
  for (let i = 0; i < 192; i++) {
    workOnFile(i);
  }
};

// const main = () => {
//   console.log("\n\n\n\n\n");
//   let arr = [];
//   for (let i = 0; i < 142; i++) {
//     arr.push(workOnFile(i));
//     console.log(workOnFile(i));
//   }

//   const x = arr.sort().forEach((x) => console.log(x));
// };

main();
