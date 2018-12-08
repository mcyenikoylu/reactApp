import React from 'react';
import ReactDOM from 'react-dom';
//import propTypes from 'prop-types';
//import {Welcome} from './components/welcome';
//import {Byby} from './components/byby';

//devexpress
//import Paper from '@material-ui/core/Paper';
//import {
  //// State or Local Processing Plugins
//} from '@devexpress/dx-react-grid';
//import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

//kendo
// import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
// import products from './products.json';
// import { sampleProducts } from './sample-products.jsx';

import {Router, Route, HashRouter, Switch } from "react-router-dom";
// import {Page1} from './components/page1' component deki export gidince süslü parentezler kalkıyor.
//sayfa değişimi withRouter için aşağıdaki kodlara revize ettim. bunlar eski hali windows.location olarak 
//sayfa değiştiriliyor hali. önerilmiyorz.
// import {Page2} from './components/page2'
import Page1 from './components/page1'
import Page2 from './components/page2'
export class App extends React.Component
{
   constructor(props){
       super(props);
        // this.state={
        //      a:12,
        //      b:1,
        //      gridData: products,
        //      columns: [
        //         { name: 'name', title: 'Name' },
        //         { name: 'sex', title: 'Sex' },
        //         { name: 'city', title: 'City' },
        //         { name: 'car', title: 'Car' }
        //       ],
        //       rows: [
        //         { sex: "Female", name: "Sandra", city: "Las Vegas", car: "Audi A4" },
        //         { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
        //         { sex: "Male", name: "Mark", city: "Paris", car: "Honda Accord" },
        //         { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
        //         { sex: "Female", name: "Linda", city: "Austin", car: "Toyota Corolla" },
        //         { sex: "Male", name: "Robert", city: "Las Vegas", car: "Chevrolet Cruze" },
        //         { sex: "Female", name: "Lisa", city: "London", car: "BMW 750" },
        //         { sex: "Male", name: "Mark", city: "Chicago", car: "Toyota Corolla" },
        //         { sex: "Male", name: "Thomas", city: "Rio de Janeiro", car: "Honda Accord" },
        //         { sex: "Male", name: "Robert", city: "Las Vegas", car: "Honda Civic" },
        //         { sex: "Female", name: "Betty", city: "Paris", car: "Honda Civic" },
        //         { sex: "Male", name: "Robert", city: "Los Angeles", car: "Honda Accord" },
        //         { sex: "Male", name: "William", city: "Los Angeles", car: "Honda Civic" },
        //         { sex: "Male", name: "Mark", city: "Austin", car: "Nissan Altima" }
        //       ],
        //       data: sampleProducts.slice(0),
        //       editID: null
        //  }
   }
   
//    componentDidMount(){
//        console.log("component DOM a yapıştı") //her component için bir defa tetiklenir.
//        this.setState({
//            a:1,
//            b:0,
//             start: false,
//        })
//    }
//    shouldComponentUpdate(nextProps,nextState){
//         if(nextState.a !== this.a || nextState.b !== this.b ){
//             return true;
        
//         } else{
            
//             return false;
//         }
//    }
//    componentDidUpdate(){
//        console.log("component bitti")
//    }
//    buttonClick=()=>{
//        console.log("dış event click")
//        this.setState({
//         start:true
//        })
//    }


// TELERİK KENDO
// rowClick = (e) => {
//     this.setState({
//         editID: e.dataItem.ProductID
//     });
// };

// itemChange = (e) => {
//     const data = this.state.data.slice();
//     const index = data.findIndex(d => d.ProductID === e.dataItem.ProductID);
//     data[index] = { ...data[index], [e.field]: e.value };
//     this.setState({
//         data: data
//     });
// };

// closeEdit = (e) => {
//     if (e.target === e.currentTarget) {
//         this.setState({ editID: null });
//     }

// };

// addRecord = () => {
//     const newRecord = { ProductID: this.state.data.length + 1 };
//     const data = this.state.data.slice();
//     data.unshift(newRecord);
//     this.setState({
//         data: data,
//         editID: newRecord.ProductID
//     });
// };

    render(){
        //console.log("render trigered");
        return  <div>
            {/* <Welcome >
            <div>MCY</div>
            <button onClick={this.buttonClick}>click</button> 
            
        </Welcome>
        <hr />
        {
            (this.state.start? <Byby name="cenker" surname="yenikoylu"  ></Byby>: null )
        } */}
     
 {/* <Grid
    rows={[
      { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
      { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
    ]}
    columns={[
      { name: 'id', title: 'ID' },
      { name: 'product', title: 'Product' },
      { name: 'owner', title: 'Owner' },
    ]}>
    <Table />
    <TableHeaderRow />
  </Grid>  */}


{/* TELERIK KENDI */}
 {/* <Grid
                    style={{ height: '400px' }}
                    data={this.state.gridData}
                >
                    <Column field="ProductID" title="ID" width="40px" />
                    <Column field="ProductName" title="Name" width="250px" />
                    <Column field="Category.CategoryName" title="CategoryName" />
                    <Column field="UnitPrice" title="Price" width="80px" />
                    <Column field="UnitsInStock" title="In stock" width="80px" />
                    <Column field="Discontinued" width="120px"
                        cell={(props) => (
                            <td>
                                <input disabled type="checkbox" checked={props.dataItem[props.field]} />
                            </td>
                        )} />
                </Grid> */}


{/* <Grid
                style={{ height: '420px' }}
                data={this.state.data.map((item) =>
                    Object.assign({
                        inEdit: item.ProductID === this.state.editID
                    }, item)
                )}
                editField="inEdit"

                onRowClick={this.rowClick}
                onItemChange={this.itemChange}
            >
                <GridToolbar>
                    <div onClick={this.closeEdit}>
                        <button title="Add new" className="k-button k-primary" onClick={this.addRecord} >
                            Add new
                    </button>
                    </div>
                </GridToolbar >
                <Column field="ProductID" title="Id" width="50px" editable={false} />
                <Column field="ProductName" title="Name" />
                <Column field="FirstOrderedOn" title="First Ordered" editor="date" format="{0:d}" />
                <Column field="UnitsInStock" title="Units" width="150px" editor="numeric" />
                <Column field="Discontinued" title="Discontinued" editor="boolean" />
            </Grid >
 */}

  <HashRouter>
  <Switch>
      <Route exact path="/" component={Page1} />

      <Route
        path="/page2" component={Page2} />}
      />

      <Route
        path="/page1" component={Page1} />}
      />
     </Switch>
    </HashRouter>

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
