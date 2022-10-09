import mergeImages from "merge-images";
import Checklist from "./Checklist";
import React, { useEffect, useState } from "react";
import faceMount from "./assets/face_mount.png";
import "./App.css";
import { Radio, Typography, Button, InputNumber, Input } from "antd";
import downloadMetadata from "./downloadMetadata";

const { Title } = Typography;

function importAll(r) {
  return r.keys().map(r);
}

function downloadImage(b64, name) {
  const link = document.createElement("a");
  link.download = name;
  link.href = b64;
  link.click();
}

const backgrounds = importAll(
  require.context("./assets/bg", false, /\.(png|jpe?g|svg)$/)
);
const shields = importAll(
  require.context("./assets/shields", false, /\.(png|jpe?g|svg)$/)
);
const lefts = importAll(
  require.context("./assets/left", false, /\.(png|jpe?g|svg)$/)
);
const rights = importAll(
  require.context("./assets/right", false, /\.(png|jpe?g|svg)$/)
);
const faces = importAll(
  require.context("./assets/face", false, /\.(png|jpe?g|svg)$/)
);

// File names are looking like 'myAsset.h45hC0dE.png' and we want to allow for periods in the filename
const dropAssetSuffix = (c) =>
  c
    .split(".")
    .slice(0, c.split(".").length - 2)
    .join(".");

const extractName = (name) => {
  const prefixTrimmed = name.substring("/static/media/".length);
  return dropAssetSuffix(prefixTrimmed);
};

function App() {
  const crestCountFromLS = JSON.parse(localStorage.getItem("crestCount"));
  const assetCountsFromLS = JSON.parse(localStorage.getItem("assetCounts"));

  const [bg, setBg] = useState(backgrounds[0]);
  const [shield, setShield] = useState(shields[0]);
  const [left, setLeft] = useState(lefts[0]);
  const [right, setRight] = useState(rights[0]);
  const [face, setFace] = useState(faces[0]);
  const [count, setCount] = useState(crestCountFromLS || 0);
  const [assetCounts, setAssetCounts] = useState(
    assetCountsFromLS ||
      [...shields, ...lefts, ...rights, ...faces].reduce(
        (agg, cur) => ({
          ...agg,
          [cur]: 0,
        }),
        {}
      )
  );
  const [crestName, setCrestName] = useState("");

  const getAssetNames = () => {
    return {
      shield: extractName(shield),
      left: extractName(left),
      right: extractName(right),
      face: extractName(face),
    };
  };

  const downloadRef = React.createRef();

  const rollForAsset = (assetList) => {
    let assetIndex = Math.floor(Math.random() * shields.length);
    let assetKey = assetList[assetIndex];
    while (assetCounts[assetKey] >= 12) {
      assetIndex = Math.floor(Math.random() * shields.length);
      assetKey = assetList[assetIndex];
    }
    return assetIndex;
  };

  const randomize = () => {
    const shieldIndex = rollForAsset(shields);
    const leftIndex = rollForAsset(lefts);
    const rightIndex = rollForAsset(rights);
    const faceIndex = rollForAsset(faces);

    setShield(shields[shieldIndex]);
    setLeft(lefts[leftIndex]);
    setRight(rights[rightIndex]);
    setFace(faces[faceIndex]);
  };

  const download = React.useCallback(() => {
    const name = crestName;
    if (crestName.length < 3) {
      return;
    }
    const assetNames = getAssetNames();
    mergeImages([bg, shield, left, right, faceMount, face]).then((b64) => {
      downloadImage(b64, `${count}.png`);
      downloadMetadata({ ...assetNames, name }, count);
    });
    const newCrestCount = count + 1;
    const newAssetCounts = {
      ...assetCounts,
      [shield]: assetCounts[shield] + 1,
      [left]: assetCounts[left] + 1,
      [right]: assetCounts[right] + 1,
      [face]: assetCounts[face] + 1,
    };
    setAssetCounts(newAssetCounts);
    setCount(newCrestCount);
    setCrestName("");

    localStorage.setItem("crestCount", newCrestCount);
    localStorage.setItem("assetCounts", JSON.stringify(newAssetCounts));

    randomize();
  }, [bg, shield, left, right, face, count, setCount, crestName]);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "\\") {
        e.preventDefault();
        if (window.pressed) return;
        downloadRef.current.click();
      }

      if (e.key === "Enter") {
        e.preventDefault();
        if (window.pressed) return;
        randomize();
      }

      window.pressed = true;
    });

    document.addEventListener("keyup", (e) => {
      e.preventDefault();
      window.pressed = false;
    });
  }, [downloadRef, setCount, count, download, randomize]);

  return (
    <div className="App">
      <header className="App-header">
        <Title level={2}>{crestName || "_"}</Title>
        <div style={{ position: "relative", width: 512, height: 512 }}>
          <img
            alt=""
            src={bg}
            style={{
              position: "absolute",
              width: 512,
              height: 512,
              top: 0,
              left: 0,
            }}
          />
          <img
            alt=""
            src={shield}
            style={{
              position: "absolute",
              width: 512,
              height: 512,
              top: 0,
              left: 0,
            }}
          />
          <img
            alt=""
            src={left}
            style={{
              position: "absolute",
              width: 512,
              height: 512,
              top: 0,
              left: 0,
            }}
          />
          <img
            alt=""
            src={right}
            style={{
              position: "absolute",
              width: 512,
              height: 512,
              top: 0,
              left: 0,
            }}
          />
          <img
            alt=""
            src={faceMount}
            style={{
              position: "absolute",
              width: 512,
              height: 512,
              top: 0,
              left: 0,
            }}
          />
          <img
            alt=""
            src={face}
            style={{
              position: "absolute",
              width: 512,
              height: 512,
              top: 0,
              left: 0,
            }}
          />
        </div>
        <br />
        <div style={{ width: "300px", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
              value={crestName}
              maxLength="32"
              status={
                crestName.length >= 30
                  ? crestName.length < 32
                    ? "warning"
                    : "error"
                  : null
              }
              onChange={(e) => {
                setCrestName(e.target.value);
              }}
            />
            {crestName.length > 25 ? (
              <span
                style={{
                  ...(crestName.length < 30
                    ? { color: "green" }
                    : crestName.length < 32
                    ? { color: "orange" }
                    : { color: "red" }),
                  position: " absolute",
                  right: 5,
                  top: 0,
                }}
              >
                {crestName.length}
              </span>
            ) : null}
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}></div>
          <InputNumber
            value={count}
            onChange={setCount}
            style={{ width: "100%" }}
          />
          <Button ref={downloadRef} onClick={download}>
            download
          </Button>
        </div>
        <br />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Radio
            style={{
              width: "100%",
              padding: "4px",
              fontSize: "18px",
              display: "none",
            }}
            value={bg}
          />
          <Checklist
            title="Shield"
            items={shields}
            selected={shield}
            assetCounts={assetCounts}
            onChange={(e) => setShield(e.target.value)}
          />
          <Checklist
            title="Left"
            items={lefts}
            selected={left}
            assetCounts={assetCounts}
            onChange={(e) => setLeft(e.target.value)}
          />
          <Checklist
            title="Right"
            items={rights}
            selected={right}
            assetCounts={assetCounts}
            onChange={(e) => setRight(e.target.value)}
          />
          <Checklist
            title="Face"
            items={faces}
            selected={face}
            assetCounts={assetCounts}
            onChange={(e) => setFace(e.target.value)}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
