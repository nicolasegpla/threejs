import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function Light() {

    const mountRef = useRef()

    const w = window.innerWidth
    const h = window.innerHeight

    useEffect(() => {

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000 )
        const rerender = new THREE.WebGLRenderer()
        rerender.setSize(w, h);
        mountRef.current.appendChild(rerender.domElement)

        const geometry = new THREE.BoxGeometry(4, 4, 4);
        const material = new THREE.MeshStandardMaterial({color :0x4e4e99})
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)

        const light = new THREE.DirectionalLight(0xffffff, 8);
        light.position.set(-3, -2, 5).normalize();
        scene.add(light)

        camera.position.z = 10

        cube.rotation.x = 10;
        cube.rotation.y = 10;
        

        function animate () {
            requestAnimationFrame(animate);
            rerender.render(scene, camera)
        }

        animate()


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

export { Light }