import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state= {
    sushi: [],
    eaten: [],
    page: 0,
    moneyLeft: 100
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(json => {
      this.setState({sushi: json})
    })
  }

  handlePageClick = () => {
    this.setState( (prevState) => { 
      return {page: prevState.page + 1 }} )
  }

  handleSushiClick = (id) => {

    const singleSushi = this.state.sushi.find(singleSushi => singleSushi.id === id)
    this.setState( (prevState) => {
      if (this.state.moneyLeft <= 0) {return}
      // this.handleCharge(singleSushi.price)
      return {eaten: [...prevState.eaten, singleSushi ], moneyLeft: prevState.moneyLeft - singleSushi.price}} )
  }

  // handleCharge = (price) => {
  //   this.setState(prevState => {
  //     return {moneyLeft: prevState.moneyLeft - price}
  //   })
  // }

  // would do handle charge logic inside singleSushi
  

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} eaten={this.state.eaten} page={this.state.page} handlePageClick={this.handlePageClick} handleSushiClick={this.handleSushiClick}/>
        <Table eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;