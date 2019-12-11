import React, {Component} from 'react';
import './App.css';
import Produtos from './components/produtos';
import AddProduto from './components/addproduto';

class App extends Component {

	state = {produtos: []}

	componentDidMount() {
		fetch("https://puga-produtos.glitch.me/getProdutos")
		.then(resposta => resposta.json())
		.then((dados) => {
			this.setState({produtos: dados});
			console.log(this.state.produtos);
		})
		.catch(console.log);
	}
	
	render() {
	  return (
		<div className="App container">
			<Produtos parametro={this.state.produtos} />
			<AddProduto />
		</div>
	  );
	}
}

export default App;
