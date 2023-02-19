import { OrbitControls } from "@react-three/drei";
import { useControls, button } from "leva";

export default function Experience() {
  const { position, color, visible, button } = useControls({
    position: {
      value: { x: -2, y: 0, z: 0 },
      min: -4,
      max: 4,
      step: 0.01,
    },
    color: "lightseagreen",
    visible: true,
    clickMe: button(() => {
      console.log("button clicked");
    }),
  });
  console.log(position);
  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh position={[position.x, position.y, position.z]} visible={visible}>
        <sphereGeometry />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
