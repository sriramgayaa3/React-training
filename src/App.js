//import React, {Component} from 'react'
//import CBCPropEx from './CBCPropEx'
//import FBCPropEx from './FBCPropEx'
//export default class App extends Component {
  //render(){
    //return (
     // <div>
        //<CBCPropEx
        //username="gayathri"
        //age={19}
        //hobbies={["playing", "stock"]}
        //address={{city:"hitech", area:"madhapur"}}
        //sendFun={function(){alert("iofhi")}}

        //<FBCPropEx
       // username="Abhinay"
        //isMarried={true}
        //hobbies={["chatting" , "dancing"]}
       // />
     // </div>
   // )
 // }
//}
//import React, { Component } from 'react';
import CBCStateEx from './stateexample/CBCStateEx'
//const App = () => {
  //return (
    //<div>
      //<CBCStateEx/>
      
    //</div>
  //)
//}

//export default App

//import React from 'react'
//import FBCStateEx from './stateexample/FBCStateEx'
//const App = () => {
  //return (
    //<div>
      //<//FBCStateEx/>
      
    //</div>
 //)
//}
//export default App

import React, { Component } from 'react';
import ClassComponent from './components/ClassComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ClassComponent clgName="XYZ College" city="New York" apply={true}>
                    Extra Text
                </ClassComponent>
            </div>
        );
    }
}

export default App;
