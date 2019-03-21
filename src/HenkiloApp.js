import React, { Component } from 'react';
import Otsikko from './components/Otsikko';
import Henkilo from './components/Henkilo';
import Henkilolomake from './components/Henkilolomake';
import Henkilolista from './components/Henkilolista';

const henkilo = {nimi: 'Matti', email: 'matti@joku.com'};

const henkiloTaulukko = [
  { nimi: 'Matti', email: 'matti@joku.fi' },
  { nimi: 'Maija', email: 'maija@joku.fi' }
]

class HenkiloApp extends Component {
  render() {
    return (
      <div>

          <Otsikko teksti='React' />
		      <Henkilo henkilo={ henkilo } />
          <Henkilolomake />
          <Henkilolista henkilot={ henkiloTaulukko } />

	    </div>
    );
  }
}

export default HenkiloApp;
