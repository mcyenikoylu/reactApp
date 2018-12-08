import React from 'react';
import propTypes from 'prop-types';

export class Welcome extends React.Component
{
   constructor(props){
       super(props);
     
   }
   
    render(){
        //debugger;
        return  <div>Hello from welcome {this.props.children} 
        
    

        </div>
    }
}