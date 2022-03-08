import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      card: "",
      cv: "",
      name: "",
  };
  this.cardRef = React.createRef();
  this.cvRef = React.createRef();
  this.nameRef = React.createRef();
  }

  

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value}, () => {
      if(this.state.card.length === 16) {
        this.cvRef.current.focus();
      }

      if(this.state.cv.length === 3) {
        this.nameRef.current.focus();
      }
    })
  }

  componentDidMount() {
    this.cardRef.current.focus();
  }

  render () {
    const { card, cv, name } = this.state;

    return (
      <div className="App">
        <div>
          <input
            id='card'
            name='card' 
            placeholder='VISA Number'
            type='text'
            value={card}
            onChange={this.handleChange}
            ref={this.cardRef}
          />
          <br/>

          <input
            id='card'
            name='cv' 
            placeholder='CV'
            type='text'
            value={cv}
            onChange={this.handleChange}
            ref={this.cvRef}
          />
          <br/>
          <input
            id='name'
            name='name' 
            placeholder='name'
            type='text'
            value={name}
            onChange={this.handleChange}
            ref={this.nameRef}
          />
          <br/>
            
          <br/>
          <button>Send</button>
        </div>
        
      </div>
    );
  }
}

export default App;
