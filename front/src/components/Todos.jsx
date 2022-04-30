import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

let getContent = (note) => {
    let content = note.description.replaceAll('\n', ' ')

    if (content.length > 45) {
        return content.slice(0, 45) + '...'
    } else {
        return content
    }


}

const Todos = () => {
    const [todos, setTodo] = useState([])

    let getTodo = async () => {
        const res = await axios.get('http://127.0.0.1:8000/api/todos/')
        setTodo(res.data)
    }

    const getUrgency = (urgency) => {
        if (urgency === "HG") {
            return "High"
        } else if (urgency === "MD") {
            return "Medium"
        }

        return "Low"

    }

    const FinishTodo = (id, e) => {
        axios.delete(`/api/todos/todo/${id}/`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        setTodo(todos.filter(todo => todo.id !== id))
    }


    useEffect(() => {
        getTodo()
    }, [])


    return (
        <div className="container my-5">
            <div className="row">
                {
                    todos.map((todo) => {
                        return (
                            <div className="col-lg-4 mb-4" key={todo.id}>
                                <div className="card text-center glass text-white" >
                                    <div className="card-header">
                                        <h3>{todo.title}</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>{getContent(todo)}</p>
                                        <p>Nivel de urgencia:&nbsp;
                                            <i className={"badge " + (todo.urgency === "HG" ? "bg-danger" : (todo.urgency === "MD") ? "bg-warning" : "bg-success")}>{getUrgency(todo.urgency)}</i>
                                        </p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <Link to={`/todo/${todo.id}`} className="btn btn-success">Ver trabajo</Link>
                                        <button onClick={(e) => FinishTodo(todo.id, e)} className="btn btn-danger">Terminado</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todos