import React from 'react';
import {withRouter} from "react-router-dom";
//export class Page1 extends React.Component //withRouter yapısı için kaldırdım.
class Page1 extends React.Component
{
   constructor(props){
       super(props);
     
   }
   navToPage2=()=>{
       //window.location.href="#page2";
       this.props.history.push("page2");
   }
    render(){
        return  <div>page 1 sayfa
            <button onClick={this.navToPage2}>sayfa2</button>
        </div>
    }
}
export default withRouter(Page1);