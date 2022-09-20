
import mergeImages from 'merge-images';
import Checklist from './Checklist';
import React, { useEffect, useState } from 'react';
import faceMount from './assets/face_mount.png'
import './App.css';
import { Button, InputNumber } from 'antd';

function importAll(r) {
  return r.keys().map(r);
}

function downloadImage(b64, name) {
  const link = document.createElement('a');
  link.download = name
  link.href = b64;
  link.click();
}

const backgrounds = importAll(require.context('./assets/bg', false, /\.(png|jpe?g|svg)$/));
const shields = importAll(require.context('./assets/shields', false, /\.(png|jpe?g|svg)$/));
const lefts = importAll(require.context('./assets/left', false, /\.(png|jpe?g|svg)$/));
const rights = importAll(require.context('./assets/right', false, /\.(png|jpe?g|svg)$/));
const faces = importAll(require.context('./assets/face', false, /\.(png|jpe?g|svg)$/));

function App() {
  const [bg, setBg] = useState(backgrounds[0]);
  const [shield, setShield] = useState(shields[0]);
  const [left, setLeft] = useState(lefts[0]);
  const [right, setRight] = useState(rights[0]);
  const [face, setFace] = useState(faces[0]);
  const [name, setName] = useState(0);

  const downloadRef = React.createRef();

  const randomize = () => {
    setBg(backgrounds[Math.floor(Math.random() * backgrounds.length)]);
    setShield(shields[Math.floor(Math.random() * shields.length)]);
    setLeft(lefts[Math.floor(Math.random() * lefts.length)]);
    setRight(rights[Math.floor(Math.random() * rights.length)]);
    setFace(faces[Math.floor(Math.random() * faces.length)]);
  };

  const download = React.useCallback(() => {
    mergeImages([bg, shield, left, right, faceMount, face]).then((b64) => downloadImage(b64, `${name}.png`));
    setName(name + 1);
    randomize();
  }, [bg, shield, left, right, face, name, setName])

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (window.pressed) return;
        downloadRef.current.click();
      }

      if (e.key === ' ') {
        e.preventDefault();
        if (window.pressed) return;
        randomize();
      }

      window.pressed = true
    })

    window.addEventListener('keyup', (e) => {
      e.preventDefault();
      window.pressed = false
    })
  }, [downloadRef, setName, name, download]);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ position: 'relative', width: 512, height: 512 }}>
          <img alt="" src={bg} style={{ position: 'absolute', width: 512, height: 512, top: 0, left: 0 }} />
          <img alt="" src={shield} style={{ position: 'absolute', width: 512, height: 512, top: 0, left: 0 }} />
          <img alt="" src={left} style={{ position: 'absolute', width: 512, height: 512, top: 0, left: 0 }} />
          <img alt="" src={right} style={{ position: 'absolute', width: 512, height: 512, top: 0, left: 0 }} />
          <img alt="" src={faceMount} style={{ position: 'absolute', width: 512, height: 512, top: 0, left: 0 }} />
          <img alt="" src={face} style={{ position: 'absolute', width: 512, height: 512, top: 0, left: 0 }} />
        </div>
        <br />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <InputNumber value={name} onChange={setName} />
          <Button ref={downloadRef} onClick={download}>download</Button>
        </div>
        <br />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Checklist title="Background" items={backgrounds} selected={bg} onChange={e => setBg(e.target.value)} />
          <Checklist title="Shield" items={shields} selected={shield} onChange={e => setShield(e.target.value)} />
          <Checklist title="Left" items={lefts} selected={left} onChange={e => setLeft(e.target.value)} />
          <Checklist title="Right" items={rights} selected={right} onChange={e => setRight(e.target.value)} />
          <Checklist title="Face" items={faces} selected={face} onChange={e => setFace(e.target.value)} />
        </div>
      </header>
    </div>
  );
}

export default App;
