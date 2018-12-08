import React from 'react';

import propTypes from 'prop-types';
export class Byby extends React.Component
{
   constructor(props){
       super(props);
     
   }
    render(){
        return  <div>Byby from welcome {this.props.name} {this.props.surname}</div>
    }
}