import React from 'react';
import Header from './Header';

export default props => {

    return (
        <div class="wrapper">
          <Header />
          { props.children }
        </ div>);
}
