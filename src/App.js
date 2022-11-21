import mergeImages from "merge-images";
import Checklist from "./Checklist";
import React, { useCallback, useEffect, useState } from "react";
import faceMount from "./assets/face_mount.png";
import "./App.css";
import { Radio, Typography, Button, InputNumber, Input } from "antd";
import downloadMetadata from "./downloadMetadata";
import { extractName } from "./utils";

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

function App() {
  const crestCountFromLS = JSON.parse(localStorage.getItem("crestCount"));
  const assetCountsFromLS = JSON.parse(localStorage.getItem("assetCounts"));

  const [bg, setBg] = useState(backgrounds[0]);
  const [shield, setShield] = useState(shields[0]);
  const [left, setLeft] = useState(lefts[0]);
  const [right, setRight] = useState(rights[0]);
  const [face, setFace] = useState(faces[0]);
  const [count, setCount] = useState(crestCountFromLS || 0);

  const [lockedColumns, setLockedColumns] = useState({
    left: false,
    right: false,
    shield: false,
    face: false,
  });

  const toggleColumnLock = useCallback(
    (colName) =>
      setLockedColumns({
        ...lockedColumns,
        [colName]: !lockedColumns[colName],
      }),
    [setLockedColumns, lockedColumns]
  );

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
    let assetIndex = Math.floor(Math.random() * assetList.length);
    let assetKey = assetList[assetIndex];
    while (assetCounts[assetKey] >= 12) {
      assetIndex = Math.floor(Math.random() * assetList.length);
      assetKey = assetList[assetIndex];
    }
    return assetIndex;
  };

  const randomize = useCallback(() => {
    const shieldIndex = rollForAsset(shields);
    const leftIndex = rollForAsset(lefts);
    const rightIndex = rollForAsset(rights);
    const faceIndex = rollForAsset(faces);

    if (!lockedColumns.shield) {
      setShield(shields[shieldIndex]);
    }
    if (!lockedColumns.left) {
      setLeft(lefts[leftIndex]);
    }
    if (!lockedColumns.right) {
      setRight(rights[rightIndex]);
    }
    if (!lockedColumns.face) {
      setFace(faces[faceIndex]);
    }
  }, [setShield, setLeft, setRight, setFace, lockedColumns]);

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
      [shield]: (assetCounts[shield] || 0) + 1,
      [left]: (assetCounts[left] || 0) + 1,
      [right]: (assetCounts[right] || 0) + 1,
      [face]: (assetCounts[face] || 0) + 1,
    };
    setAssetCounts(newAssetCounts);
    setCount(newCrestCount);
    setCrestName("");

    localStorage.setItem("crestCount", newCrestCount);
    localStorage.setItem("assetCounts", JSON.stringify(newAssetCounts));

    randomize();
  }, [bg, shield, left, right, face, count, setCount, crestName, randomize]);

  const keydownEvtListener = useCallback(
    (e) => {
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
    },
    [downloadRef, randomize, lockedColumns]
  );

  const keyupEvtListener = useCallback((e) => {
    e.preventDefault();
    window.pressed = false;
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keydownEvtListener);
    document.addEventListener("keyup", keyupEvtListener);

    // must remove the old, now invalid event listeners when they change.
    return () => {
      document.removeEventListener("keydown", keydownEvtListener);
      document.removeEventListener("keyup", keyupEvtListener);
    };
  }, [keydownEvtListener, keyupEvtListener]);

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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "200px",
            overflow: "scroll",
            border: "1px solid black",
            flex: "1 0 auto",
          }}
        >
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
            title="Left"
            items={lefts}
            selected={left}
            assetCounts={assetCounts}
            onChange={(e) => setLeft(e.target.value)}
            toggleLockOverlay={() => toggleColumnLock("left")}
            locked={lockedColumns["left"]}
          />
          <Checklist
            title="Face"
            items={faces}
            selected={face}
            assetCounts={assetCounts}
            onChange={(e) => setFace(e.target.value)}
            toggleLockOverlay={() => toggleColumnLock("face")}
            locked={lockedColumns["face"]}
          />
          <Checklist
            title="Shield"
            items={shields}
            selected={shield}
            assetCounts={assetCounts}
            onChange={(e) => setShield(e.target.value)}
            toggleLockOverlay={() => toggleColumnLock("shield")}
            locked={lockedColumns["shield"]}
          />
          <Checklist
            title="Right"
            items={rights}
            selected={right}
            assetCounts={assetCounts}
            onChange={(e) => setRight(e.target.value)}
            toggleLockOverlay={() => toggleColumnLock("right")}
            locked={lockedColumns["right"]}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
