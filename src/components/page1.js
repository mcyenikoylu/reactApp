import React from 'react';
import {withRouter} from "react-router-dom";

//redux
import { connect } from 'react-redux';
//import {UpdateUsername} from '../redux/actions'

import {UpdatePassword,UpdateUsername,UpdateUserAndPassword,ClearLoginInfo} from '../redux/actions'

//export class Page1 extends React.Component //withRouter yapısı için kaldırdım.
class Page1 extends React.Component
{
   constructor(props){
       super(props);
        this.state={
                username: this.props.USERNAME,
                password: this.props.PASSWORD
        }
   }
   navToPage2=()=>{
       //window.location.href="#page2";
       this.props.history.push("/page2");
   }
   newUserNameClick=()=>
   {
        UpdateUsername("yeni username");
   }
   ChangeUsername=(e)=>{
        //this.setState({username: e.target.value});
        //UpdateUsername(e.target.value);
        //this.setState({username: this.props.USERNAME});
        this.setState({username: e.target.value});

   }
   ChangePassword=(e)=>{
       //this.setState({password: e.target.value});
       //UpdatePassword(e.target.value);
       this.setState({password: e.target.value});

    }
   login=()=>{
    UpdateUserAndPassword(this.state.username,this.state.password);
   }
   clear=()=>{
ClearLoginInfo();
   }
    render(){
        return  <div>page 1 sayfa - {this.props.USERNAME} - {this.props.APPTITLE}
            <button onClick={this.navToPage2}>sayfa2 </button>
            <button onClick={this.newUserNameClick}>new username </button>
            <hr />
            <div>
                <label>Username</label> <input type="text" value={this.state.username} onChange={this.ChangeUsername}></input> <br />
                <label>Password</label> <input type="password" value={this.state.password} onChange={this.ChangePassword}></input> <br />
                <button onClick={this.login}>Login</button> <br/>
                <button onClick={this.clear}>Clear</button> 
            </div>
        </div>
    }
}
//export default withRouter(Page1); //redux dan sonra kaldırdım.

const mapStateToProps =(state,ownProps) => ({
    USERNAME: state.reducer1.username,
    APPTITLE: state.reducer2.appTitle,
    PASSWORD: state.reducer1.password
})
export default connect (mapStateToProps)(withRouter(Page1)); //redux
