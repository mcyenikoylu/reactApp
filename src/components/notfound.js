import React from 'react';
import {withRouter} from "react-router-dom";
//export class Page1 extends React.Component //withRouter yapısı için kaldırdım.
class NotFound extends React.Component
{
   constructor(props){
       super(props);
     
   }
   navToPage2=()=>{
       //window.location.href="#page2";
       this.props.history.push("page1");
   }
    render(){
        return  <div>NOT FOUND
            <button onClick={this.navToPage2}>sayfa1</button>
        </div>
    }
}
export default withRouter(NotFound);