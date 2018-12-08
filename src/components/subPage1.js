import React from 'react';
import {withRouter} from "react-router-dom";

class SubPage1 extends React.Component
{
   constructor(props){
       super(props);
     
   }
  
    render(){
        return  <div>sub page 1 sayfa
           
        </div>
    }
}
export default withRouter(SubPage1);