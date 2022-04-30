import React from 'react'

import { Link } from 'react-router-dom'
import AddBoxIcon from '@mui/icons-material/AddBox';
const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <h1 className="navbar-brand"><Link to="/" className="text-white">Tareas Pendientes</Link></h1>
                    <Link to="/add" className="btn btn-success circle"><AddBoxIcon/></Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar