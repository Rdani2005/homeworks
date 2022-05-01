// import axios from 'axios'
import React from 'react'

import Particles from "react-tsparticles";

import { loadFireworksPreset } from "tsparticles-preset-fireworks"
// import { Link } from 'react-router-dom'

//import ParticlesBg from 'particles-bg'
// import Card from '../components/Card'
import Todos from '../components/Todos'
const TodosPage = () => {

    const particlesInit = async (engine) => {
        await loadFireworksPreset(engine);
    };

    return (
        <main className="">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{ preset: "fireworks" }}
            />
            <Todos />

        </main>
    )
}

export default TodosPage