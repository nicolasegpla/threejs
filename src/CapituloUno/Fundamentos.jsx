import { useRef, useEffect } from "react"
import * as THREE from 'three' //Vamos a importar todos los elemntos de three.js y lo vamos a asignar a THREE

function Fundamentos() {

    const mountRef = useRef()

    const w = window.innerWidth;
    const h = window.innerHeight;

    useEffect(() => {

        //En esta parte creamos los tres objetos basicos para trabajar con con three.js 
        //scene: Escena (THREE.Scene): Contiene todos los objetos y elementos de nuestra escena.
        //camera: Cámara (THREE.Camera): Define el punto de vista desde el cual se observa la escena.
        //rerender: Renderizador (THREE.WebGLRenderer): Renderiza la escena desde la perspectiva de la cámara y muestra el resultado en la pantalla.

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
        const rerender = new THREE.WebGLRenderer()
        rerender.setSize(w, h);
        mountRef.current.appendChild(rerender.domElement);

        const geometry = new THREE.BoxGeometry(4,4,4);
        const material = new THREE.MeshBasicMaterial({color: 0x8282f1});
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube);

        camera.position.z = 10;

        function animation() {
            requestAnimationFrame(animation);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            rerender.render(scene, camera)
        }

        animation()

        return () => {
            mountRef.current.removeChild(rerender.domElement)
        }
        
    }, [])

    return(
        <>
            <div ref={mountRef}></div>
        </>
    )
}

export { Fundamentos }