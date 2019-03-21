import React, { Component } from 'react';

class Henkilolomake extends Component {
  constructor(props) {
    super(props);
    this.state = {nimi: '', email: ''};
    this.state = {henkilot: []};
  }

  muutaNimi = (e) => {
   this.setState( { nimi: e.target.value } );
  }

  muutaEmail = (e) => {
   this.setState( { email: e.target.value } );
  }

  muuta = (e) => {
   this.setState({ [e.target.name]: e.target.value } );
  }

  lisaaHenkilo = (e) => {
    e.preventDefault();

    this.setState( { nimi: '', email: '' } );
  }

  render() {
    return (
      <div>
        {/* <div>Terve vaan sinulle { this.state.nimi }</div> */}
        <form>
            <label htmlFor='nimi'>Nimi </label>
            <input type='text' name='nimi' value={this.state.nimi} onChange={this.muuta} /><br />
            <label htmlFor='email'>Email </label>
            <input type='text' name='email' value={this.state.email} onChange={this.muuta} /><br />
            <input type='submit' value='Lisää' onClick={this.lisaaHenkilo} />
        </form>
      </div>
    );
  }
}

export default Henkilolomake;
