import React from 'react';
import {withRouter} from "react-router-dom";
//export class Page2 extends React.Component
class Page2 extends React.Component
{
   constructor(props){
       super(props);
     
   }
   navToPage1=()=>{
    //window.location.href="#page1";
    this.props.history.push("page1");
}
    render(){
        return  <div>Page 2 sayfa 
             <button onClick={this.navToPage1}>sayfa1</button>

        </div>
    }
}

export default withRouter(Page2);