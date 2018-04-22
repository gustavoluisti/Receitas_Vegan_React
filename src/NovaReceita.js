import React, { Component } from 'react'
import HeaderInterno from './HeaderInterno'
import base, { storage } from './base'
import { Redirect } from 'react-router-dom'

export default class NovaReceita extends Component {
    constructor(props){
        super(props)
            this.state = {
                sucesss: false
            }
            this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleSubmit(e){
        
        const file = this.foto.files[0]
        const { name, size } = file
        const ref = storage.ref(name)
        ref
            .put(file)
            .then( img => {
                const novaReceita = {
                    nome: this.nome.value,
                    por:  this.por.value,
                    rendimento: this.rendimento.value,
                    preparo: this.preparo.value,
                    descricao: this.descricao.value,
                    ingredientes: this.ingredientes.value,
                    modo: this.modo.value,
                    foto: img.metadata.downloadURLs[0],
                    categoria: this.categoria.value,
                    link: this.link.value
                }
                base.push('receitas', {
                    data: novaReceita
                })
                .then(() => {
                    this.setState({ sucesss: true }) 
                })
            })
        e.preventDefault()
    }
    render() {
        return(
            <div>
                { this.state.sucesss && <Redirect to='/' /> }
                <HeaderInterno />
                <div className='container' style={{paddingTop:'120px'}} >
                    <h1>Cadastre sua receita</h1>

                    <form onSubmit={this.handleSubmit}>

                        <div className='form-group'>
                            <label htmlFor='foto'>Foto</label>
                            <input type='file' className='form-control' id='foto' ref={(ref) => this.foto = ref }  />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='nome'>Nome</label>
                            <input type='text' className='form-control' id='nome' placeholder='Nome da receita' ref={(ref) => this.nome = ref }  />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='nome'>Link Url</label>
                            <input type='text' className='form-control' id='link' placeholder='Nome da receita' ref={(ref) => this.link = ref }  />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='nome'> Categorias </label>
                            <select ref={(ref) => this.categoria = ref } >
                                { 
                                    this.props.categorias.map( cat => <option key={cat.url} value={cat.url}>{cat.categoria}</option> )
                                }
                            </select>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='por'>Autor</label>
                            <input type='text' className='form-control' id='por' placeholder='Autor da receita' ref={(ref) => this.por = ref } />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='rendimento'>Rendimento</label>
                            <input type='text' className='form-control' id='rendimento' placeholder='Rendimento da receita' ref={(ref) => this.rendimento = ref } />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='preparo'>Tempo de preparo</label>
                            <input type='text' className='form-control' id='preparo' placeholder='Tempo para concluir a receita' ref={(ref) => this.preparo = ref } />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='descricao'>Descrição</label>
                            <input type='text' className='form-control' id='descricao' placeholder='Descrição da receita' ref={(ref) => this.descricao = ref } />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='ingredientes'>Ingredientes</label>
                            <textarea type='text' className='form-control' id='ingredientes' placeholder='Ingredientes' ref={(ref) => this.ingredientes = ref } ></textarea>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='modo'>Modo de preparo</label>
                            <textarea type='text' className='form-control' id='modo' placeholder='Modo de preparo' ref={(ref) => this.modo = ref }></textarea>
                        </div>
                        <button type='submit' className='btn btn-primary' >Salvar Receita</button>
                    </form>
                </div>  
            </div>
            
        )
    }
}