import React, { Component } from 'react'
import base from './base'

import HeaderHome from './HeaderHome'
import LinkCategoria from './LinkCategoria';
import ReceitaHome from './ReceitaHome';

export default class Home extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          receitas: []
        }
        
        base.bindToState('receitas', {
          context: this,
          state: 'receitas',
          queries:{
            limitToLast: 3
          }
        })
      }

    render() {
        let index = 0
        return(
            
            <div>
            <HeaderHome />
            <div className="container">
            <h3>Últimas Receitas</h3>
                <div className="row">

                { Object.keys(this.state.receitas).map( key => {
                    const receita = this.state.receitas[key]
                return <ReceitaHome key={key} receita={receita} />
                } )}

                </div>
                <h3>Categorias</h3>
                
                <div className="row">
                    {this.props.categorias.map( (cat, indice) => {
                    return [
                        <LinkCategoria categoria={cat} key={indice}/>,
                        ++index%4 === 0 && <div key={'c'+indice} className="w-100"></div>
                    ]
                    })}
                </div>
            </div>
            </div>
        )
    }
}