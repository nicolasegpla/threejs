import { useEffect, useRef } from "react";
import * as THREE from 'three';


function FirstScene() {

    const mountRef = useRef()

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75, window.innerWidth / window.innerHeight, 0.1, 1000
        );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement)
    

        const geometry = new THREE.BoxGeometry(3, 3, 3);
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube)
        

        const geometryTwo = new THREE.BoxGeometry(6, 2, 6);
        const materialTwo = new THREE.MeshBasicMaterial({color: 0xf3f389})
        const cubetwo = new THREE.Mesh(geometryTwo, materialTwo);
        scene.add(cubetwo)

        const geometryThree = new THREE.BoxGeometry(2, 8, 2);
        const materialThree = new THREE.MeshBasicMaterial({color: 0xe3e300})
        const cubeThree = new THREE.Mesh(geometryThree, materialThree);
        scene.add(cubeThree);

        camera.position.z = 15

        cube.position.x = 6;
        cubetwo.position.y = 8;
        cubeThree.position.x = -6

        function animate() {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            cubetwo.rotation.x += 0.02;
            cubetwo.rotation.y += 0.02;
            cubeThree.rotation.x += 0.04;
            cubeThree.rotation.y += 0.04;
            renderer.render(scene, camera)
            requestAnimationFrame(animate); 
        }
        animate()

        return () => {
            mountRef.current.removeChild(renderer.domElement)
        }

    }, [])

    return(
        <>
            <div ref={mountRef}></div>
        </>
    )
}

export { FirstScene }