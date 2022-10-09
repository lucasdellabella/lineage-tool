import { saveAs } from "file-saver";

const downloadMetadata = (
  {
    shield: rawShield,
    left: rawLeft,
    right: rawRight,
    face: rawFace,
    name: rawName,
  },
  count
) => {
  const description = `
    Your family's story began in the depths of the anuran bog where you paddled day after day through viscous waters. ___
    After the long and hard journey you found yourself in 
  `;

  const shield = JSON.stringify(rawShield);
  const left = JSON.stringify(rawLeft);
  const right = JSON.stringify(rawRight);
  const face = JSON.stringify(rawFace);
  const name = JSON.stringify(rawName);

  const data = `
  {
    "name": ${name},
    "symbol": "CREST",
    "description": "<INSERT FLAVORFUL DESCRIPTION HERE>",
    "image": "${count}.png",
    "attributes": [
      {
        "trait_type": "Centerpiece",
        "value": ${face}
      },
      {
        "trait_type": "Left Ornament",
        "value": ${left}
      },
      {
        "trait_type": "Right Ornament",
        "value": ${right}
      },
      {
        "trait_type": "Back Plating",
        "value": ${shield}
      }
    ],
    "properties": {
      "files": [
        {
          "uri": "${0}.png",
          "type": "image/png"
        }
      ],
      "category": "image"
    }
  } 
`;

  const blob = new Blob([data], { type: "text/plain;charset=utf-8" });
  saveAs(blob, `${count}.json`);
};

export default downloadMetadata;
