import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';
import './css/reset.css';
import './css/index.css';
import './css/App.css';
import { allProducts, allFilterGroups } from './data';

import ListItem from './ListItem';
import CartItem from './CartItem';
import FilterOpts from './FilterOpts';
import SortOpts from './SortOpts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sort: 'rating',
      products: allProducts,
      cart: [],
      filters: [],
      cartTotal: 0,
      resetKey: 13,
    }
  }

  updateCart = (id) => {
    let productPressed = this.state.products.find((product) => product.id === id);
    if (this.state.cart.includes(productPressed)) {
      this.setState({
        cart: this.state.cart.filter((product) => product.id !== id),
        cartTotal: this.state.cartTotal - productPressed.price
      })
    } else {
      this.setState({
        cart: [...this.state.cart, productPressed],
        cartTotal: this.state.cartTotal + productPressed.price
      })
    }
  }

  updateFilters = (type, value) => {
    let newFilters = []
    if (this.state.filters.some((filter) => filter.filterValue === value )) {
      newFilters = this.state.filters.filter((filter) => filter.filterValue !== value);
    } else {  
      newFilters = [...this.state.filters, {filterType: type, filterValue: value}];
    }
    this.setState({
      filters: newFilters,
      products: this.filterProducts(newFilters)
    })
  }

  filterProducts = (filters) => {
    if (filters.length === 0) {
      return allProducts;
    } else {
      let filteredProducts = allProducts;
      filters.forEach((filter) => {
        filteredProducts = filteredProducts.filter((product) => product[filter.filterType].includes(filter.filterValue));
      })
      return filteredProducts;
    }
  }

  updateSort = (newSort) => {
    let sortedProducts = this.sortProducts(this.state.products, newSort);

    this.setState({
      sort: newSort,
      products: sortedProducts
    })
  }

  sortProducts = (products, sort) => {
    let sortedProducts = products.sort((a, b) => {
      if (sort === 'rating') {
        return b.rating - a.rating;
      } else {
        return a.price - b.price;
      }
    });
    return sortedProducts;
  }

  resetCriteria = () => {
    this.setState({
        sort: 'rating',
        products: this.sortProducts(allProducts, 'rating'),
        filters: [],
        resetKey: this.state.resetKey + 1
    })
  }

  generateGridControls = () => {
    const sorts = <SortOpts key={this.state.resetKey} sort={this.state.sort} updateSort={this.updateSort} />;
    const filters = allFilterGroups.map((filterGroup) => { return <FilterOpts filterTitle={filterGroup.filterTitle}
                                                                              selectFrom={filterGroup.selectFrom}
                                                                              updateFilters={this.updateFilters}
                                                                              key={filterGroup.filterTitle + this.state.resetKey}/> });

    return (
      <div className="Grid-controls">
        <div className="Sidebar">
          <div className="Sort-options">
          {sorts}
          </div>
          <div className="Filter-options">
          {filters}
          </div>
          <Button variant="contained"
                  color="secondary"
                  className="Default-Button"
                  onClick={() => this.resetCriteria()}>Reset to Defaults</Button>
        </div>
      </div>);
  }

  generateGrid = () => {
    return (
      <div className="Grid">
        <div className="Grid-header">
          <p> Available Products </p>
        </div>
        <div className="Grid-body">
          {this.state.products.map((product) => {
            return <ListItem className="List-items"
                             product={product}
                             inCart={this.state.cart.includes(product)}
                             updateCart={this.updateCart}
                             key={product.id} 
            />;
          })}
        </div>
      </div>
    );
  }

  generateCart = () => {
    return (
      <div className="Cart">
        <div className="Cart-header">
            <h3>Cart Total: ${Math.round(100*this.state.cartTotal)/100}</h3>
        </div>
        <div className="Cart-body">
          <h3>Your Cart</h3>
          <br />
          <br />
          {this.state.cart.map((product) => {
            return <CartItem className="Cart-item"
                             product={product}
                             updateCart={this.updateCart}
                             inCart={true}
                             key={product.id}/>
          })}
        </div>
      </div>
    );
  }

  render() {
    const grid = this.generateGrid();
    const gridControls = this.generateGridControls();
    const cart = this.generateCart();

    return (
      <div className="App">
        <header className="App-header">
          <h1>COSRX: Your Skincare Superhero</h1>
        </header>
        <div className="Separator">
          {gridControls}           
          {grid}
          {cart}
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
