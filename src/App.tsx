import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Grid, OrbitControls } from "@react-three/drei";
import { AxesHelper } from "three";
import PointCloud from "./PointCloud";
import Cameras from "./Cameras";
import "./styles.css";

const Axes = () => {
  const axesHelper = new AxesHelper(0.4);
  axesHelper.setColors(
    new THREE.Color(0xff0000),
    new THREE.Color(0x00ff00),
    new THREE.Color(0x0000ff)
  );

  return <primitive object={axesHelper} />;
};

const App = () => {
  return (
    <Canvas camera={{ fov: 50, position: [5, 2, 6] }}>
      <ambientLight intensity={1} />
      <Cameras url="cameras.json" />
      <PointCloud filename="points3D_cleaned.txt" />
      <Axes />
      <OrbitControls makeDefault />
      <Grid
        position={[0, -1.5, 0]}
        args={[50, 50]}
        fadeDistance={25}
        sectionColor="#ffffff"
        cellColor="#ffffff"
      />
    </Canvas>
  );
};

export default App;
