import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import textura from '../assets/snow.png'


function CapThree() {

    const mountRef = useRef();


    const w = window.innerWidth;
    const h = window.innerHeight;

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 1000);
        const rerender = new THREE.WebGLRenderer()
        rerender.setSize(w, h)
        mountRef.current.appendChild(rerender.domElement)

        const light = new THREE.DirectionalLight(0xffffff, 8);
        light.position.set(-3, -2, 5).normalize();
        scene.add(light)

        const geometry = new THREE.BoxGeometry(4,4,4);
        const textureLoader = new THREE.TextureLoader()
        const texture = textureLoader.load(textura)
        const material = new THREE.MeshStandardMaterial({
            color: 0x3ef4f4,
            bumpMap: texture,
            bumpScale: -4000000 
        })
        const cube = new THREE.Mesh(geometry, material)

        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(10, 10);
        texture.offset.set(0.1, 0.1);

        


        
        scene.add(cube);

        camera.position.z = 10

        cube.position.x = 0;
        

        function animate() {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            rerender.render(scene, camera)
            requestAnimationFrame(animate); 
        }
        animate()

        return () => {
            mountRef.current.removeChild(rerender.domElement)
        }

    }, [])

    return (
        <div ref={mountRef}></div>
    )
}

export { CapThree }