import React, {Component} from 'react';
import NumberFormat from 'react-number-format';

class Produtos extends Component {
	render() {
		return (<div>
					<div className="jumbotron">
						<h1>Lista de Produtos</h1>
					</div>
					<div className="row">		
		{this.props.parametro.map((produto) => (<div key={produto.id} className="card mr-auto" style={{width: '18rem'}}>
			  <img src={produto.foto_url} style={{padding: "10px"}} className="card-img-top" alt={produto.nome} />
			  <div className="card-body">
				<h5 className="card-title">{produto.nome}</h5>
				<p className="card-text"><NumberFormat 	value={produto.preco}
														displayType='text'
														prefix='R$ '
														thousandSeparator={'.'}
														decimalSeparator={','}
														fixedDecimalScale={true}
														decimalScale={2}
														
										 /></p>
			  </div>
		</div>))}
			</div>
			</div>
		)
	}
}

export default Produtos;
