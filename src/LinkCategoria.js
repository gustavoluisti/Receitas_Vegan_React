import React from 'react'
import { Link } from 'react-router-dom'

const LinkCategoria = ({categoria}) => {
    return(
        <Link to={`/categorias/${categoria.url}`} className="btn btn-secondary h-100 m-2 col-sm">
            <i ></i><br />
           <h5> {categoria.categoria}</h5>
        </Link>
    )
}

export default LinkCategoria