import React from 'react';
import Herosection from './Herosection';
import Choose from './Choose';
import Card from './Card';
import Rtl from './Rtl';
import FunctionClick from './FunctionClick';


// import Available from './Available';
// import Rate from './Rate';

const First = () => {
  return (
    <div>
      <Herosection />
      <Choose />
      <Card />
      <Rtl />
      
      {/* <Available /> */}
      {/* <Rate /> */}
      
    </div>
  );
}

export default First;
