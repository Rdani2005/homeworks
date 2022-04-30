// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

import ParticlesBg from 'particles-bg'
// import Card from '../components/Card'
import Todos from '../components/Todos'
const TodosPage = () => {
    return (
        <main className="">
            <Todos />
            <ParticlesBg color="#333D51" type="thick" bg={true} />
        </main>
    )
}

export default TodosPage