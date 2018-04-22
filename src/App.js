import React, { Component } from 'react'
import logo from './logo.svg'

import Home from './Home'
import Footer from './Footer';
import base from './base'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NovaReceita from './NovaReceita';
import Categorias from './Categorias'

const Teste = () => <h1>Receitas Vegans</h1>

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      categorias: []
    }

    base.bindToState('categorias', {
      context: this,
      state: 'categorias'
    })
  }
  
  render() {
    return (
      <Router>
        <div className="App" >
            <Route path='/' exact render={() => <Home categorias={this.state.categorias} />} />
            <Route path='/nova-receita' exact render={ ()=> <NovaReceita categorias={this.state.categorias}/> } />
            <Route path='/categorias' render={() => <Categorias categorias={this.state.categorias} /> }/>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
