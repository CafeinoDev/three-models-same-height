# Auto-Scaling 3D Models

A utility for Three.js and React Three Fiber to automatically scale 3D models to a consistent size based on their bounding box dimensions.

## Usage

1. Import the utility function.

```javascript
import { getModelDimensions } from './path/to/utility';
```
2. Load your models using useGLTF or gltfjsx.
```
import { useGLTF } from '@react-three/drei';

const { scene: modelA } = useGLTF('path/to/modelA.glb');
const { scene: modelB } = useGLTF('path/to/modelB.glb');
```
3. Compute the dimensions of each model using the getModelDimensions function.
```
const dimensionsA = getModelDimensions(modelA);
const dimensionsB = getModelDimensions(modelB);
```
4. Determine the target size you want for all models.
```
const targetHeight = 2; // 2 units height
```
5. Calculate the scale factor needed to resize each model to the target size based on their dimensions.
```
const scaleFactorA = targetHeight / dimensionsA.y;
const scaleFactorB = targetHeight / dimensionsB.y;
```
6. Apply the scale factor to each model using the scale property.
```
<primitive object={modelA} scale={[scaleFactorA, scaleFactorA, scaleFactorA]} />
<primitive object={modelB} scale={[scaleFactorB, scaleFactorB, scaleFactorB]} />
```
## Utility Function
Here is the utility function used to compute the model's dimensions based on its bounding box.
```
import * as THREE from 'three';

function getModelDimensions(model) {
  const boundingBox = new THREE.Box3().setFromObject(model);
  const size = new THREE.Vector3();
  boundingBox.getSize(size);
  return size;
}
```