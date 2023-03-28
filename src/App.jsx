import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Clone } from '@react-three/drei';
import './App.css'

import * as THREE from 'three';



function App() {

    const { scene: modelA } = useGLTF('./model_a.gltf');
    const { scene: modelB } = useGLTF('./model_b.gltf');
    const { scene: modelC } = useGLTF('./model_c.gltf');

    const dimensionsA = getModelDimensions(modelA);
    const dimensionsB = getModelDimensions(modelB);
    const dimensionsC = getModelDimensions(modelC);
    const targetHeight = 4; // 2 units height

    const scaleFactorA = targetHeight / dimensionsA.y;
    const scaleFactorB = targetHeight / dimensionsB.y;
    const scaleFactorC = targetHeight / dimensionsC.y;

    return (
        <>
            <Canvas>
                <OrbitControls />
                <ambientLight position={[ 1, 2, 3 ]} />
                <directionalLight />

                <Clone object={ modelA } scale={ scaleFactorA } position={ [ 6, -3, 0] } />
                <Clone object={ modelB } scale={ scaleFactorB } position={ [ 0, -3, 0 ] } />
                <Clone object={ modelC } scale={ scaleFactorC } position={ [ -5, -1, 0 ] } />

                <Clone object={ modelA } position={ [ 6, 3, 0] } />
                <Clone object={ modelB } position={ [ 0, 3, 0 ] } />
                <Clone object={ modelC } position={ [ -5, 3, 0 ] } />

            </Canvas>
        </>
    )
}

const getModelDimensions = (model) => {
    const boundingBox = new THREE.Box3().setFromObject(model);
    const size = new THREE.Vector3();
    boundingBox.getSize(size);
    return size;
}

export default App
