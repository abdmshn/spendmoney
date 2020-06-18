import React from 'react';
import './App.css';
import logo from './billgates.png';

function scrollHandler(e) {
  let a = document.querySelector('header > h2');
  let s = document.querySelector('.sidebar > div');

  if(window.scrollY < 83) {
    a.style.position = 'relative';
    s.style.position = 'relative';
    s.style.top = '0';
  }
  else {
    a.style.position = 'fixed';
    a.style.top = 0;
    s.style.position = 'fixed';
    s.style.top = '83px';
  }
}

window.addEventListener('scroll', scrollHandler)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 108300000000
    }

    this.products = {
      'Burger': 2,
      'Coffee': 4,
      'Book': 15,
      'Video Game': 60,
      'Charity': 100,
      'Headphones': 200,
      'Smartphone': 600,
      'Bike': 1000,
      'Drone': 2000,
      '4K TV': 10000,
      'Rolex': 20000,
      'Speed boat': 30000,
      'Tesla': 70000,
      'Helicopter': 175000,
      'Townhouse': 250000,
      'Pizza Shop': 500000,
      'Superbowl Ad': 5000000,
      'Beach House': 7500000,
      'Yacht': 10000000,
      'Skyscraper': 50000000,
      'Mona Lisa': 780000000,
      'Cruise Ship': 1200000000,
      'NBA Team': 1300000000,
      'MLB Team': 1500000000,
      'NFL Team': 2300000000
    }

    this.arr = {
      'Burger': 0,
      'Coffee': 0,
      'Book': 0,
      'Video Game': 0,
      'Charity': 0,
      'Headphones': 0,
      'Smartphone': 0,
      'Bike': 0,
      'Drone': 0,
      '4K TV': 0,
      'Rolex': 0,
      'Speed boat': 0,
      'Tesla': 0,
      'Helicopter': 0,
      'Townhouse': 0,
      'Pizza Shop': 0,
      'Superbowl Ad': 0,
      'Beach House': 0,
      'Yacht': 0,
      'Skyscraper': 0,
      'Mona Lisa': 0,
      'Cruise Ship': 0,
      'NBA Team': 0,
      'MLB Team': 0,
      'NFL Team': 0
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    let val = e.target.value;
    let name = e.target.name;

    if(this.state.total > 0 && this.state.total >= val) {
      this.setState({total: this.state.total - val})
    }
    
    this.arr[name] = this.arr[name] + 1;

    console.log(this.arr)
  }

  render() {
    return (
      <div className='container'>
        <header>
          <h1>Spend Bill Gates' Money <img src={logo} alt='logo' /></h1>
          <h2>${this.state.total} left</h2>
        </header>
        
        <div className='content'>
            {Object.entries(this.products).map(([key, value]) => {
              return (
                <div>
                  <p>{key} ${value}</p>
                  <button name={key} value={value} onClick={this.clickHandler}>Buy</button>
                </div>
              );
            })}
        </div>
        <div className='sidebar'>
          <div>
            <h2>Your shopping list:</h2>
            {Object.entries(this.arr).map(([key, value]) => {
              if(value > 0) {
                return (<li>{key} <strong>x {value}</strong></li>);
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
