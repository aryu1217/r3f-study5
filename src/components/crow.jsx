/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/banana.glb -o src/components/Banana.jsx -r public -k 
*/

import React from "react";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useExplode } from "../hooks/useExplode";
import { Logo } from "./logo";

export function Crow(props) {
  const { nodes, materials } = useGLTF("/models/banana.glb");
  const group = useRef();
  useExplode(group, { distance: 50, enableRotation: true });
  return (
    <>
      <group {...props} dispose={null} ref={group}>
        <mesh
          name="origin"
          geometry={nodes.origin.geometry}
          material={materials.lambert2SG}
          position={[0.002, 0.105, -0.341]}
        />
        <mesh
          name="Geo_Raven_cell"
          geometry={nodes.Geo_Raven_cell.geometry}
          material={materials.lambert2SG}
          position={[-3.617, -8.754, -10.161]}
        />
        <mesh
          name="Geo_Raven_cell001"
          geometry={nodes.Geo_Raven_cell001.geometry}
          material={materials.lambert2SG}
          position={[4.674, -19.665, 0.877]}
        />
        <mesh
          name="Geo_Raven_cell003"
          geometry={nodes.Geo_Raven_cell003.geometry}
          material={materials.lambert2SG}
          position={[-9.297, 8.191, 11.809]}
        />
        <mesh
          name="Geo_Raven_cell007"
          geometry={nodes.Geo_Raven_cell007.geometry}
          material={materials.lambert2SG}
          position={[-0.119, -9.221, -18.352]}
        />
        <mesh
          name="Geo_Raven_cell008"
          geometry={nodes.Geo_Raven_cell008.geometry}
          material={materials.lambert2SG}
          position={[5.958, -7.211, -5.708]}
        />
        <mesh
          name="Geo_Raven_cell009"
          geometry={nodes.Geo_Raven_cell009.geometry}
          material={materials.lambert2SG}
          position={[-2.425, -12.399, -4.161]}
        />
        <mesh
          name="Geo_Raven_cell010"
          geometry={nodes.Geo_Raven_cell010.geometry}
          material={materials.lambert2SG}
          position={[5.032, -4.894, 1.945]}
        />
        <mesh
          name="Geo_Raven_cell012"
          geometry={nodes.Geo_Raven_cell012.geometry}
          material={materials.lambert2SG}
          position={[4.451, -23.082, 3.944]}
        />
        <mesh
          name="Geo_Raven_cell014"
          geometry={nodes.Geo_Raven_cell014.geometry}
          material={materials.lambert2SG}
          position={[3.048, -11.113, -21.156]}
        />
        <mesh
          name="Geo_Raven_cell015"
          geometry={nodes.Geo_Raven_cell015.geometry}
          material={materials.lambert2SG}
          position={[0.552, -9.972, 0.053]}
        />
        <mesh
          name="Geo_Raven_cell017"
          geometry={nodes.Geo_Raven_cell017.geometry}
          material={materials.lambert2SG}
          position={[-3.073, -23.62, 6.75]}
        />
        <mesh
          name="Geo_Raven_cell018"
          geometry={nodes.Geo_Raven_cell018.geometry}
          material={materials.lambert2SG}
          position={[-2.766, -11.15, -20.517]}
        />
        <mesh
          name="Geo_Raven_cell019"
          geometry={nodes.Geo_Raven_cell019.geometry}
          material={materials.lambert2SG}
          position={[-0.134, -15.473, -26.853]}
        />
        <mesh
          name="Geo_Raven_cell020"
          geometry={nodes.Geo_Raven_cell020.geometry}
          material={materials.lambert2SG}
          position={[-7.138, -2.916, 0.717]}
        />
        <mesh
          name="Geo_Raven_cell022"
          geometry={nodes.Geo_Raven_cell022.geometry}
          material={materials.lambert2SG}
          position={[-6.432, -23.467, 5.992]}
        />
        <mesh
          name="Geo_Raven_cell024"
          geometry={nodes.Geo_Raven_cell024.geometry}
          material={materials.lambert2SG}
          position={[5.261, 19.087, 11.922]}
        />
        <mesh
          name="Geo_Raven_cell025"
          geometry={nodes.Geo_Raven_cell025.geometry}
          material={materials.lambert2SG}
          position={[9.96, -3.39, -3.841]}
        />
        <mesh
          name="Geo_Raven_cell027"
          geometry={nodes.Geo_Raven_cell027.geometry}
          material={materials.lambert2SG}
          position={[-2.468, 13.213, 21.333]}
        />
        <mesh
          name="Geo_Raven_cell030"
          geometry={nodes.Geo_Raven_cell030.geometry}
          material={materials.lambert2SG}
          position={[-4.463, -22.719, 3.651]}
        />
        <mesh
          name="Geo_Raven_cell031"
          geometry={nodes.Geo_Raven_cell031.geometry}
          material={materials.lambert2SG}
          position={[5.561, -23.466, 5.706]}
        />
        <mesh
          name="Geo_Raven_cell032"
          geometry={nodes.Geo_Raven_cell032.geometry}
          material={materials.lambert2SG}
          position={[0.037, -20.662, -36.603]}
        />
        <mesh
          name="Geo_Raven_cell034"
          geometry={nodes.Geo_Raven_cell034.geometry}
          material={materials.lambert2SG}
          position={[3.192, 23.191, 21.261]}
        />
        <mesh
          name="Geo_Raven_cell036"
          geometry={nodes.Geo_Raven_cell036.geometry}
          material={materials.lambert2SG}
          position={[4.351, 18.479, 16.927]}
        />
        <mesh
          name="Geo_Raven_cell037"
          geometry={nodes.Geo_Raven_cell037.geometry}
          material={materials.lambert2SG}
          position={[-7.065, -2.439, -3.884]}
        />
        <mesh
          name="Geo_Raven_cell040"
          geometry={nodes.Geo_Raven_cell040.geometry}
          material={materials.lambert2SG}
          position={[7.899, -5.156, -12.403]}
        />
        <mesh
          name="Geo_Raven_cell041"
          geometry={nodes.Geo_Raven_cell041.geometry}
          material={materials.lambert2SG}
          position={[-2.969, -9.13, 4.57]}
        />
        <mesh
          name="Geo_Raven_cell043"
          geometry={nodes.Geo_Raven_cell043.geometry}
          material={materials.lambert2SG}
          position={[2.224, 17.643, 20.649]}
        />
        <mesh
          name="Geo_Raven_cell044"
          geometry={nodes.Geo_Raven_cell044.geometry}
          material={materials.lambert2SG}
          position={[5.311, 4.249, 2.54]}
        />
        <mesh
          name="Geo_Raven_cell045"
          geometry={nodes.Geo_Raven_cell045.geometry}
          material={materials.lambert2SG}
          position={[-0.253, -12.531, -7.374]}
        />
        <mesh
          name="Geo_Raven_cell047"
          geometry={nodes.Geo_Raven_cell047.geometry}
          material={materials.lambert2SG}
          position={[-4.632, 19.222, 15.799]}
        />
        <mesh
          name="Geo_Raven_cell050"
          geometry={nodes.Geo_Raven_cell050.geometry}
          material={materials.lambert2SG}
          position={[-0.09, 18.468, 31.043]}
        />
        <mesh
          name="Geo_Raven_cell051"
          geometry={nodes.Geo_Raven_cell051.geometry}
          material={materials.lambert2SG}
          position={[-9.091, 5.926, 3.147]}
        />
        <mesh
          name="Geo_Raven_cell052"
          geometry={nodes.Geo_Raven_cell052.geometry}
          material={materials.lambert2SG}
          position={[-6.605, 14.233, 13.537]}
        />
        <mesh
          name="Geo_Raven_cell055"
          geometry={nodes.Geo_Raven_cell055.geometry}
          material={materials.lambert2SG}
          position={[4.871, -23.737, 7.857]}
        />
        <mesh
          name="Geo_Raven_cell056"
          geometry={nodes.Geo_Raven_cell056.geometry}
          material={materials.lambert2SG}
          position={[-2.437, -24.169, 9.652]}
        />
        <mesh
          name="Geo_Raven_cell059"
          geometry={nodes.Geo_Raven_cell059.geometry}
          material={materials.lambert2SG}
          position={[1.719, -11.754, -15.098]}
        />
        <mesh
          name="Geo_Raven_cell061"
          geometry={nodes.Geo_Raven_cell061.geometry}
          material={materials.lambert2SG}
          position={[-4.406, -16.031, -0.123]}
        />
        <mesh
          name="Geo_Raven_cell062"
          geometry={nodes.Geo_Raven_cell062.geometry}
          material={materials.lambert2SG}
          position={[-2.005, 8.921, 4.695]}
        />
        <mesh
          name="Geo_Raven_cell063"
          geometry={nodes.Geo_Raven_cell063.geometry}
          material={materials.lambert2SG}
          position={[-8.567, -5.856, 6.971]}
        />
        <mesh
          name="Geo_Raven_cell064"
          geometry={nodes.Geo_Raven_cell064.geometry}
          material={materials.lambert2SG}
          position={[-2.336, -2.635, -8.76]}
        />
        <mesh
          name="Geo_Raven_cell066"
          geometry={nodes.Geo_Raven_cell066.geometry}
          material={materials.lambert2SG}
          position={[3.606, -5.263, 8.675]}
        />
        <mesh
          name="Geo_Raven_cell067"
          geometry={nodes.Geo_Raven_cell067.geometry}
          material={materials.lambert2SG}
          position={[7.872, -24.012, 8.344]}
        />
        <mesh
          name="Geo_Raven_cell068"
          geometry={nodes.Geo_Raven_cell068.geometry}
          material={materials.lambert2SG}
          position={[-5.268, -11.098, -1.244]}
        />
        <mesh
          name="Geo_Raven_cell070"
          geometry={nodes.Geo_Raven_cell070.geometry}
          material={materials.lambert2SG}
          position={[9.245, 3.281, 8.555]}
        />
        <mesh
          name="Geo_Raven_cell072"
          geometry={nodes.Geo_Raven_cell072.geometry}
          material={materials.lambert2SG}
          position={[4.358, -13.465, -2.522]}
        />
        <mesh
          name="Geo_Raven_cell073"
          geometry={nodes.Geo_Raven_cell073.geometry}
          material={materials.lambert2SG}
          position={[-9.445, 2.388, 8.631]}
        />
        <mesh
          name="Geo_Raven_cell077"
          geometry={nodes.Geo_Raven_cell077.geometry}
          material={materials.lambert2SG}
          position={[0.182, 19.859, 19.622]}
        />
        <mesh
          name="Geo_Raven_cell078"
          geometry={nodes.Geo_Raven_cell078.geometry}
          material={materials.lambert2SG}
          position={[2.489, 9.989, 20.396]}
        />
        <mesh
          name="Geo_Raven_cell080"
          geometry={nodes.Geo_Raven_cell080.geometry}
          material={materials.lambert2SG}
          position={[3.829, -20.869, 2.051]}
        />
        <mesh
          name="Geo_Raven_cell081"
          geometry={nodes.Geo_Raven_cell081.geometry}
          material={materials.lambert2SG}
          position={[4.236, -22.121, 2.284]}
        />
        <mesh
          name="Geo_Raven_cell083"
          geometry={nodes.Geo_Raven_cell083.geometry}
          material={materials.lambert2SG}
          position={[0.413, 20.036, 29.344]}
        />
        <mesh
          name="Geo_Raven_cell084"
          geometry={nodes.Geo_Raven_cell084.geometry}
          material={materials.lambert2SG}
          position={[5.065, -3.788, -15.667]}
        />
        <mesh
          name="Geo_Raven_cell086"
          geometry={nodes.Geo_Raven_cell086.geometry}
          material={materials.lambert2SG}
          position={[-2.296, -13.647, -12.885]}
        />
        <mesh
          name="Geo_Raven_cell002"
          geometry={nodes.Geo_Raven_cell002.geometry}
          material={materials.lambert2SG}
          position={[-8.371, -6.205, -11.824]}
        />
        <mesh
          name="Geo_Raven_cell004"
          geometry={nodes.Geo_Raven_cell004.geometry}
          material={materials.lambert2SG}
          position={[-3.948, 10.427, 15.155]}
        />
        <mesh
          name="Geo_Raven_cell005"
          geometry={nodes.Geo_Raven_cell005.geometry}
          material={materials.lambert2SG}
          position={[3.026, -3.041, -17.277]}
        />
        <mesh
          name="Geo_Raven_cell006"
          geometry={nodes.Geo_Raven_cell006.geometry}
          material={materials.lambert2SG}
          position={[-2.69, -3.301, -17.967]}
        />
        <mesh
          name="Geo_Raven_cell011"
          geometry={nodes.Geo_Raven_cell011.geometry}
          material={materials.lambert2SG}
          position={[9.567, -6.497, -6.566]}
        />
        <mesh
          name="Geo_Raven_cell023"
          geometry={nodes.Geo_Raven_cell023.geometry}
          material={materials.lambert2SG}
          position={[9.485, -3.64, 1.352]}
        />
        <mesh
          name="Geo_Raven_cell026"
          geometry={nodes.Geo_Raven_cell026.geometry}
          material={materials.lambert2SG}
          position={[-3.192, 23.191, 21.261]}
        />
        <mesh
          name="Geo_Raven_cell028"
          geometry={nodes.Geo_Raven_cell028.geometry}
          material={materials.lambert2SG}
          position={[5.098, -7.258, -21.217]}
        />
        <mesh
          name="Geo_Raven_cell029"
          geometry={nodes.Geo_Raven_cell029.geometry}
          material={materials.lambert2SG}
          position={[-4.688, -22.867, 5.934]}
        />
        <mesh
          name="Geo_Raven_cell033"
          geometry={nodes.Geo_Raven_cell033.geometry}
          material={materials.lambert2SG}
          position={[-5.729, -6.844, -18.834]}
        />
        <mesh
          name="Geo_Raven_cell035"
          geometry={nodes.Geo_Raven_cell035.geometry}
          material={materials.lambert2SG}
          position={[-4.804, -23.501, 7.038]}
        />
        <mesh
          name="Geo_Raven_cell039"
          geometry={nodes.Geo_Raven_cell039.geometry}
          material={materials.lambert2SG}
          position={[-3.698, -24.274, 6.116]}
        />
        <mesh
          name="Geo_Raven_cell042"
          geometry={nodes.Geo_Raven_cell042.geometry}
          material={materials.lambert2SG}
          position={[3.603, -23.046, 5.71]}
        />
        <mesh
          name="Geo_Raven_cell046"
          geometry={nodes.Geo_Raven_cell046.geometry}
          material={materials.lambert2SG}
          position={[2.635, 22.836, 20.692]}
        />
        <mesh
          name="Geo_Raven_cell049"
          geometry={nodes.Geo_Raven_cell049.geometry}
          material={materials.lambert2SG}
          position={[-6.491, 0.986, -2.159]}
        />
        <mesh
          name="Geo_Raven_cell053"
          geometry={nodes.Geo_Raven_cell053.geometry}
          material={materials.lambert2SG}
          position={[6.713, -4.329, -7.548]}
        />
        <mesh
          name="Geo_Raven_cell054"
          geometry={nodes.Geo_Raven_cell054.geometry}
          material={materials.lambert2SG}
          position={[-9.242, 11.129, 12.219]}
        />
        <mesh
          name="Geo_Raven_cell057"
          geometry={nodes.Geo_Raven_cell057.geometry}
          material={materials.lambert2SG}
          position={[3.045, -23.613, 6.767]}
        />
        <mesh
          name="Geo_Raven_cell058"
          geometry={nodes.Geo_Raven_cell058.geometry}
          material={materials.lambert2SG}
          position={[-2.48, -23.895, 8.856]}
        />
        <mesh
          name="Geo_Raven_cell065"
          geometry={nodes.Geo_Raven_cell065.geometry}
          material={materials.lambert2SG}
          position={[9.436, -9.327, -13.383]}
        />
        <mesh
          name="Geo_Raven_cell069"
          geometry={nodes.Geo_Raven_cell069.geometry}
          material={materials.lambert2SG}
          position={[-9.384, 6.909, 6.27]}
        />
        <mesh
          name="Geo_Raven_cell074"
          geometry={nodes.Geo_Raven_cell074.geometry}
          material={materials.lambert2SG}
          position={[-6.68, -6.043, 7.103]}
        />
        <mesh
          name="Geo_Raven_cell075"
          geometry={nodes.Geo_Raven_cell075.geometry}
          material={materials.lambert2SG}
          position={[-4.181, -0.496, -11.611]}
        />
        <mesh
          name="Geo_Raven_cell076"
          geometry={nodes.Geo_Raven_cell076.geometry}
          material={materials.lambert2SG}
          position={[1.03, 1.033, -12.826]}
        />
        <mesh
          name="Geo_Raven_cell085"
          geometry={nodes.Geo_Raven_cell085.geometry}
          material={materials.lambert2SG}
          position={[8.692, -2.927, 9.888]}
        />
        <mesh
          name="Geo_Raven_cell087"
          geometry={nodes.Geo_Raven_cell087.geometry}
          material={materials.lambert2SG}
          position={[-8.832, -8.167, 0.625]}
        />
        <mesh
          name="Geo_Raven_cell088"
          geometry={nodes.Geo_Raven_cell088.geometry}
          material={materials.lambert2SG}
          position={[7.674, 2.258, 9.7]}
        />
        <mesh
          name="Geo_Raven_cell089"
          geometry={nodes.Geo_Raven_cell089.geometry}
          material={materials.lambert2SG}
          position={[-2.685, -0.076, 9.693]}
        />
        <mesh
          name="Geo_Raven_cell090"
          geometry={nodes.Geo_Raven_cell090.geometry}
          material={materials.lambert2SG}
          position={[8.074, 4.439, 16.308]}
        />
        <mesh
          name="Geo_Raven_cell091"
          geometry={nodes.Geo_Raven_cell091.geometry}
          material={materials.lambert2SG}
          position={[2.532, -6.257, -11.059]}
        />
        <mesh
          name="Geo_Raven_cell092"
          geometry={nodes.Geo_Raven_cell092.geometry}
          material={materials.lambert2SG}
          position={[-3.009, -13.531, -20.275]}
        />
      </group>
      <Logo
        className="pointer-cursor"
        scale={[0.21, 0.21, 0.21]}
        onClick={() =>
          window.open("https://www.kumoh.ac.kr/ko/index.do?sso=ok", "_blank")
        }
      />
    </>
  );
}

useGLTF.preload("/models/banana.glb");
