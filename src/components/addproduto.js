import React, {Component} from 'react';

class AddProduto extends Component {
	
	state = {action: 'https://puga-produtos.glitch.me/addProduto',
			 method: 'POST',
			 nome: '',
			 preco: '',
			 foto_url: ''}
	
	constructor(props, context){
		super(props,context);
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	
	onSubmit(){
		const dados = {
			nome: this.state.nome,
			preco: this.state.preco,
			foto_url: this.state.foto_url
		}
		
		console.log(dados);
		
		return fetch(this.state.action,
				{method: this.state.method,
				body: JSON.stringify(dados),
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
				}).then(response => {
					if(response.status === 200){
						window.location.reload();
					}else {
						console.log("Erro: Response status");
					}
				}).catch(erro => {
					console.log(erro)
				});
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
				<button onClick={this.onSubmit} className="btn btn-primary">Adicionar Produto</button>
			</div>
		</div>
		);					
	}
}

export default AddProduto;
