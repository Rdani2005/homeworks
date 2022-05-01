import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone"

const AddTodo = () => {

    const today = new Date();

    let navigate = useNavigate()

    const [todo, setTodo] = useState([
        {
            title: "",
            description: "",
            author: "",
            urgency: "",
            date: ""
        }
    ]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(todo);

        axios.post(
            'https://homeworks-rdani.herokuapp.com/api/todos/',
            {
                title: todo.title,
                description: todo.description,
                responsable: todo.author,
                finish_at: todo.date,
                urgency: todo.urgency
            }
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (err) {
                console.log(err);
            })

        navigate("/")
    }

    const handleChange = (event) => {
        setTodo({
            ...todo,
            [event.target.name]: event.target.value
        })
    }

    const particlesInit = async (engine) => {
        await loadSeaAnemonePreset(engine);
    };

    return (
        <main className="container d-flex justify-content-center ">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{ preset: "seaAnemone" }}
            />
            <form action="" className="card w-75 mt-5 glass text-white" onSubmit={handleSubmit}>
                <div className="card-header text-center">
                    <h1>Agregar Tarea</h1>
                </div>
                <div className="my-3 row p-3">
                    <label htmlFor="title" className="col-sm-3 col-form-label">Titulo</label>
                    <div className="col-sm-9">

                        <input type="text" className="form-control input-text" name="title" id="title" onChange={handleChange} required />
                    </div>
                </div>

                <div className="my-3 row p-3">
                    <label htmlFor="description" className="col-sm-3 col-form-label ">Descripción</label>

                    <div className="col-sm-9">
                        <textarea type="text" className="form-control input-text" name="description" id="description" onChange={handleChange} required />
                    </div>
                </div>

                <div className="my-3 row p-3">
                    <label htmlFor="author" className="col-sm-3 col-form-label">autor</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control input-text" name="author" id="author" onChange={handleChange} required />
                    </div>
                </div>

                <div className="my-3 row p-3">
                    <label htmlFor="urgency" className="col-sm-3 col-form-label">Urgencia</label>
                    <div className="col-sm-9">
                        <select name="urgency" id="urgency" className="form-select input-text" onChange={handleChange} required>
                            <option value="LW">bajo</option>
                            <option value="MD">Medio</option>
                            <option value="HG">Alto</option>
                        </select>
                    </div>
                </div>

                <div className="my-3 row p-3">

                    <label htmlFor="date" className="col-sm-3 col-form-label">Finalización</label>


                    <div className="col-sm-9">
                        <input type="date" className="input-text" onChange={handleChange} id="date" name="date" defaultValue={`${today.getFullYear}-${today.getMonth + 1}-${today.getDate}`} />
                    </div>
                </div>

                <div className="d-flex flex-wrap justify-content-around mb-3">
                    <button type="submit" className="btn btn-primary mb-3">Agregar</button>
                    <Link to="/" className="btn btn-danger mb-3">Cancelar</Link>
                </div>
            </form>

        </main>
    )
}

export default AddTodo