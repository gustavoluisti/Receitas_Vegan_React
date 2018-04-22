import React, { Component } from 'react'
import axios from 'axios'

//https://mercadodev-e4369.firebaseio.com/receitas.json?orderBy=%22categoria%22&equalTo=%22doces%22

class Categoria extends Component {
    constructor(props){
        super(props)
        this.state = {
            receitas: {}
        }
        this.loadReceitas = this.loadReceitas.bind(this)

        this.loadReceitas()
    }
    loadReceitas() {
        const url = `https://mercadodev-e4369.firebaseio.com/receitas.json?orderBy=%22categoria%22&equalTo=%22${this.props.match.params.urlCategoria}%22`
        axios
            .get(url)
            .then( data => {
                this.setState({ receitas: data.data })
                this.categorias = this.props.match.params.urlCategoria
            })
    }
    componentWillReceiveProps(newProps){
        console.log(newProps)
    }
    render(){
        return(
            <div>
                <h1>
                Categoria: 
                {JSON.stringify(this.props.match.params.urlCategoria)}
                </h1>
                <p>
                    {JSON.stringify(this.state.receitas)}
                </p>
            </div>
        )
    }
    
}
export default Categoria