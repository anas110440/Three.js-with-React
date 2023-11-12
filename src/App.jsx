import React from 'react';
import './App.css';
import MyFBXViewer from './components/MyFBXViewer';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

import image1 from './img/1.jpg';
import image2 from './img/2.jpg';
const sections = [
  {
    title: 'Neom Cube 3D MODEL',
    image: image1,
    path: 'models/Neom Cube.FBX',
    scale: 0.02,
    color: 0xcb8136,
  },
  {
    title: 'MAWHIBA BUIDLING 3D MODEL',
    image: image2,
    path: 'models/MAWHIBA BUIDLING 3D MODEL.FBX',
    scale: 0.004,
    color: 0xb7b7b7,
  },
];
function App() {
  return sections.map((section) => (
    <section key={section.title}>
      <div className="outer">
        <div className="inner">
          <div
            className="bg one"
            style={{ backgroundImage: `url(${section.image})` }}
          >
            <h2>{section.title}</h2>
            <div style={{ width: '80%', margin: 'auto', height: '400px' }}>
              <Canvas>
                <Suspense fallback={null}>
                  <MyFBXViewer
                    path={section.path}
                    scale={section.scale}
                    color={section.color}
                  />
                  <OrbitControls />
                  <Environment preset="dawn" />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  ));
}

export default App;
