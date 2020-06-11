import React, { Component } from 'react';
import api from './api';
//import { render } from 'react-dom';

class App extends Component{
  state = {
    produtos: [],
  }

  async componentDidMount(){
const response = await api.get(''); 



this.setState({produtos: response.data});
}

render(){
  const { produtos }= this.state;
return(
  <div>
<h1>Listar Produtos</h1>
{console.log(produtos)}
{produtos.map(produtos => (
<li key={produtos}>
<h4>Nome:</h4>
{produtos.name}
<h4>Preço:</h4>
{produtos.price}
<h4>Descrição:</h4>
{produtos.description}
<h4>Imagem:</h4>
{produtos.path}
</li>
))}
    </div>
)
}


  //coisa do rocketseat, no rocket, é function App
  //return (
    //<div className="App">
    // <h1>Lerigou lerigou</h1>
    //</div>
  //);
}

export default App;
