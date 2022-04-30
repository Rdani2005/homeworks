import axios from 'axios'
import React from 'react'
import { useNavigate, Link } from 'react-router-dom'


const Card = ({ todo }) => {


    let navigate = useNavigate()

    const getUrgency = (urgency) => {
        if (urgency === "HG") {
            return "High"
        } else if (urgency === "MD") {
            return "Medium"
        }

        return "Low"

    }

    const finishTodo = () => {
        axios.delete(`http://127.0.0.1:8000/api/todos/todo/${todo.id}/`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        navigate("/")
    }

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card text-center glass w-50 text-white" >
                <div className="card-header">
                    <h1>{todo.title}</h1>
                </div>
                <div className="card-body">
                    <p>{todo.description}</p>
                    <p className={"badge " + (todo.urgency === "HG" ? "bg-danger" : (todo.urgency === "MD") ? "bg-warning" : "bg-success")}>{getUrgency(todo.urgency)}</p>
                </div>
                <div className="card-footer d-flex justify-content-around">
                    <Link to="/" className="btn btn-success">ir Atras</Link>
                    <button onClick={finishTodo} className="btn btn-danger">Terminado</button>
                </div>
            </div>
        </div>

    )
}

export default Card