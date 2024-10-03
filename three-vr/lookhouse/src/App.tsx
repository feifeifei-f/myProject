// import { FC, useEffect, useRef } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/Addons.js";
// import b from './assets/cloakroom/mobile_b.jpg'
// import d from './assets/cloakroom/mobile_d.jpg'
// import f from './assets/cloakroom/mobile_f.jpg'
// import l from './assets/cloakroom/mobile_l.jpg'
// import r from './assets/cloakroom/mobile_r.jpg'
// import u from './assets/cloakroom/mobile_u.jpg'
// const Index: FC = () => {
//   const ref = useRef(null);

//   const loadTextrue = (url: any) => {
//     const loader = new THREE.TextureLoader();
//     const texture = loader.load(url);
//     const material = new THREE.MeshBasicMaterial({
//       map: texture,
//       side: THREE.DoubleSide, 
//     });
//     return material;
//   };

//   useEffect(() => {
//     const width = window.innerWidth,
//       height = window.innerHeight;

//     // init

//     const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
//     camera.position.z = 1;

//     const scene = new THREE.Scene();

//     // 图片数组
//     const arr = [
//       loadTextrue(b),
//       loadTextrue(d),
//       loadTextrue(f),
//       loadTextrue(l),
//       loadTextrue(r),
//       loadTextrue(u),
//     ] 

//     const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
//     const material = new THREE.MultiMaterial(arr);

//     const mesh = new THREE.Mesh(geometry, material);
//     scene.add(mesh);
//     // 坐标线
//     const xy = new THREE.AxesHelper();
//     scene.add(xy);

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(width, height);
//     renderer.setAnimationLoop(animate);
//     ref.current.appendChild(renderer.domElement);

//     // animation

//     function animate(time: any) {
//       // mesh.rotation.x = time / 2000;
//       // mesh.rotation.y = time / 1000;

//       renderer.render(scene, camera);
//     }
//     // 鼠标移动
//     new OrbitControls(camera, renderer.domElement);
//   }, []);
//   return (
//     <>
//       <div ref={ref} className="box"></div>
//     </>
//   );
// };

// export default Index;

import { FC, useEffect, useRef } from "react";  
import * as THREE from "three";  
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; // 确保导入路径正确  
import b from './assets/cloakroom/mobile_b.jpg';  
import d from './assets/cloakroom/mobile_d.jpg';  
import f from './assets/cloakroom/mobile_f.jpg';  
import l from './assets/cloakroom/mobile_l.jpg';  
import r from './assets/cloakroom/mobile_r.jpg';  
import u from './assets/cloakroom/mobile_u.jpg';  
  
const Index: FC = () => {  
  const ref = useRef(null);  
  
  useEffect(() => {  
    const width = window.innerWidth;  
    const height = window.innerHeight;  
  
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);  
    camera.position.z = 5; // 调整相机位置以便更好地查看场景  
  
    const scene = new THREE.Scene();  
  
    const loader = new THREE.TextureLoader();  
    const geometries = [  
      new THREE.BoxGeometry(0.2, 0.2, 0.2), // 假设所有盒子大小相同  
      // ... 可以为每个盒子创建不同的几何体，如果需要的话  
    ];  
  
    geometries.forEach((geometry, index) => {  
      const url = [b, d, f, l, r, u][index]; // 根据索引选择图片  
      loader.load(url, (texture) => {  
        const material = new THREE.MeshBasicMaterial({  
          map: texture,  
          side: THREE.DoubleSide,  
        });  
        const mesh = new THREE.Mesh(geometry, material);  
        scene.add(mesh);  
      });  
    });  
  
    const xy = new THREE.AxesHelper(5); // 调整坐标线大小以便更好地查看  
    scene.add(xy);  
  
    const renderer = new THREE.WebGLRenderer({ antialias: true }); // 注意：antialias可能不是有效的属性，通常我们省略或设置为false  
    renderer.setSize(width, height);  
    renderer.setAnimationLoop(() => {  
      renderer.render(scene, camera);  
    });  
    ref.current.appendChild(renderer.domElement);  
  
    new OrbitControls(camera, renderer.domElement);  
  
    // 清理函数（可选，但推荐在useEffect的返回函数中添加，以便在组件卸载时清理资源）  
    return () => {  
      // 例如：停止动画循环、销毁渲染器、控制器等  
      // renderer.dispose(); // 注意：Three.js的WebGLRenderer没有dispose方法，这里仅作为示例  
      // OrbitControls的实例通常不需要显式销毁，但您可以调用其.dispose()方法（如果存在）或将其与DOM元素分离  
    };  
  }, []);  
  
  return <div ref={ref} className="box"></div>;  
};  
  
export default Index;