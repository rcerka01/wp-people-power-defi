import React from 'react';
import Header from './Header';

export default props => {

    return (
        <div className="wrapper">
          <Header />
          { props.children }
        </ div>);
}
