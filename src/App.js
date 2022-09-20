
import mergeImages from 'merge-images';
import Checklist from './Checklist';
import React, { useEffect, useState } from 'react';
import faceMount from './assets/face_mount.png'
import './App.css';

function importAll(r) {
  return r.keys().map(r);
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
  const [image, setImage] = useState(null);

  useEffect(() => {
    mergeImages([bg, shield, left, right, faceMount, face]).then((b64) => setImage(b64));
  }, [bg, shield, left, right, face]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={image} style={{ width: 512, height: 512 }} />
        <br />
        <button>download</button>
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
