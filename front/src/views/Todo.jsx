import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ParticlesBg from 'particles-bg'
import Card from '../components/Card'
const Todo = () => {

  const [todo, setTodo] = useState([])


  const { id } = useParams()


  useEffect(() => {

    let getTodo = async () => {

      const res = await axios.get(`http://127.0.0.1:8000/api/todos/todo/${id}/`)
      setTodo(res.data)
    }

    getTodo()
  }, [id])


  return (
    <main>
      <Card todo={todo}></Card>
      <ParticlesBg color="#333D51" type="lines" bg={true} />
    </main>
  )
}

export default Todo