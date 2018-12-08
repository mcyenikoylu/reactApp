import React from 'react';

import propTypes from 'prop-types';
export class Welcome extends React.Component
{
   constructor(props){
       super(props);
     
   }
    render(){
        return  <div>Hello from welcome {this.props.name} {this.props.surname}</div>
    }
}