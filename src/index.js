import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import {Welcome} from './components/welcome';
import {Byby} from './components/byby';
export class App extends React.Component
{
   constructor(props){
       super(props);
        // this.state={
        //     a:12,
        //     b:1
        // }
   }
    render(){
        return  <div><Welcome name="cenk" surname="yenikoylu" />
        <hr />
        <Byby name="cenker" surname="yenikoylu"  ></Byby>
         </div>
    }
}
// FirstComponent.propTypes = {
//     name: propTypes.string.isRequired,
//     surname: propTypes.string.isRequired,
// };
if(module.hot) {
    module.hot.accept();
}
ReactDOM.render(<App /> , document.getElementById("conteiner"));
