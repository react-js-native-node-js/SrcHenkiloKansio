import React from 'react';

function Henkilo (props) {
  return (
    <p style={styles.henkiloStyle}>
      Nimi: { props.henkilo.nimi }<br/>
      Email: { props.henkilo.email }
    </p>
  );
}

const styles = {
  henkiloStyle: {
   backgroundColor: 'blue',
   color: 'white',
   marginTop:'0.5cm'
  },
  otsikkoStyle: {
    color: 'blue'
  }
};

export default Henkilo;
