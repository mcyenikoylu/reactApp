import React from 'react';
import {withRouter,Switch,Route } from "react-router-dom";
import SubPage1 from './subPage1';
import SubPage2 from './subPage2';

//redux
import { connect } from 'react-redux';

//export class Page2 extends React.Component
class Page2 extends React.Component
{
   constructor(props){
       super(props);
        this.state = {
            pagename: 'default page'
        }
   }
   navToPage1=()=>{
    //window.location.href="#page1";
    this.props.history.push("/page1");
}
subClick1=()=>{
    this.props.history.push("/page2/subPage1");
    this.setState({
        pagename: 'sub page 1'
    })
}
subClick2=()=>{
    this.props.history.push("/page2/subPage2");
    this.setState({
        pagename: 'sub page 2'
    })
}
    render(){
        return  <div>Page 2 sayfa - {this.props.APPTITLE} - {this.props.USERNAME}
             <button onClick={this.navToPage1}>sayfa1</button>
             <Switch>
      <Route exact path="/page2/subPage1" component={SubPage1} />
      <Route path="/page2/subPage1" component={SubPage1} />
      <Route path="/page2/subPage2" component={SubPage2} /> 

     </Switch>
    <div style={{float:'left',width:'100%',backgroundColor:'blue'}}>
     <div style={{float:'left',padding:'15px',backgroundColor:'red'}}>
        <button onClick={this.subClick1} style={{margin:'5px'}}>sub page 1</button>
        <button onClick={this.subClick2} style={{margin:'5px'}}>sub page 2</button>
     </div>
     <div style={{float:"left", backgroundColor:'gray',width:'60%'}}> {this.state.pagename} </div>
     </div>
        </div>
    }
}

//export default withRouter(Page2);
const mapStateToProps =(state,ownProps) => ({
    APPTITLE: state.reducer2.appTitle,
    USERNAME: state.reducer1.username
})
export default connect (mapStateToProps)(withRouter(Page2)); //redux