import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Particles from "react-tsparticles";

import Card from '../components/Card'

import { loadSnowPreset } from "tsparticles-preset-snow";

const Todo = () => {

  const [todo, setTodo] = useState([])


  const { id } = useParams()


  useEffect(() => {

    let getTodo = async () => {

      const res = await axios.get(`https://homeworks-rdani.herokuapp.com/api/todos/todo/${id}/`)
      setTodo(res.data)
    }

    getTodo()
  }, [id])


  const particlesInit = async (engine) => {
    await loadSnowPreset(engine);
  };

  return (
    <main>
      <Particles options={{ preset: "snow" }} init={particlesInit} />
      <Card todo={todo}></Card>
    </main>
  )
}

export default Todo