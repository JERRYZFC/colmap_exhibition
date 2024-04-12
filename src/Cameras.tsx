import { useEffect, useRef } from "react";
import * as THREE from "three";
import PyramidOutline from "./PyramidOutline";

interface CamerasProps {
  url: string;
}

const Cameras: React.FC<CamerasProps> = ({ url }) => {
  const groupRef = useRef<THREE.Group>(new THREE.Group());

  useEffect(() => {
    const fetchCameras = async () => {
      const response = await fetch(url);
      const data = await response.json();

      data.forEach((item: any) => {
        const materialB = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          side: THREE.DoubleSide,
          wireframe: true,
        });
        const camera = PyramidOutline(new THREE.Vector3(0.06, 0.06, 0.045));

        camera.position.set(...(item.position as [number, number, number]));
        camera.quaternion.set(
          ...(item.quaternion as [number, number, number, number])
        );
        camera.rotateX(THREE.MathUtils.degToRad(90));

        groupRef.current.add(camera);
      });
    };

    fetchCameras();
  }, [url]);

  return <primitive object={groupRef.current} />;
};

export default Cameras;
