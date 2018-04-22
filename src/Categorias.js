import React from 'react'
import HeaderInterno from './HeaderInterno'
import { Link, Route } from 'react-router-dom'
import Categoria from './Categoria'

const Categorias = (props) => {
    return(
        <div>
            <HeaderInterno />
                <div className='container' styles={{paddingTop: '120px'}}>
                <h2 >Categorias</h2><br /><br /><br /><br />
                <div className='row'>
                    <div className="col-lg-4">
                        <ul  >
                        {
                            props.categorias.map(
                                cat => {
                                    return (
                                       <li key={cat.url} >
                                         <Link to={`/categoria/${cat.url}`} >{cat.categoria}</Link>
                                       </li>
                                    )
                                }
                            )
                        }
                        </ul>
                    </div>
                    <div className="col-lg-8">
                        <Route path='/categorias/:urlCategoria' component={Categoria} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Categorias 