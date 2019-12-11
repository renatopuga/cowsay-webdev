import React, {Component} from 'react';
import NumberFormat from 'react-number-format';

class AddProduto extends Component {
	
	state = {nome: '',
			 preco: '',
			 foto_url: ''}
	
	constructor(props, context){
		super(props,context);
		this.onChange = this.onChange.bind(this);
	}
	
	onSubmit(){
		const dados = {
			nome: this.state.nome,
			preco: this.state.preco,
			foto_url: this.state.foto_url
		}
		
		console.log(dados);
	}
	
	onChange(e){
		if(e.target.id === 'nome'){
			this.setState({nome: e.target.value});
		} else if(e.target.id === 'preco') {
			this.setState({preco: e.target.value});
		} else if(e.target.id === 'foto_url') {
			this.setState({foto_url: e.target.value});
		}
	}
	
	render() {
		return (
		<div>
			<h2>Adicionar Produto</h2>
			<div className="form-group">
				<label>Nome do Produto: </label>
				<input type="text" id="nome" className="form-control" onChange={this.onChange}/>				
			</div>
			<div className="form-group">
				<label>Preço do Produto: </label>
				<input type="number" id="preco" className="form-control" onChange={this.onChange}/>				
			</div>
			<div className="form-group">
				<label>Foto do Produto (URL) </label>
				<input type="text" id="foto_url" className="form-control" onChange={this.onChange}/>				
			</div>
			<div className="align-right">
				<button onClick={this.onSubmit}>Adicionar Produto</button>
			</div>
		</div>
		);					
	}
}

export default AddProduto;
