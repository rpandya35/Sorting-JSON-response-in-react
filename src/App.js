import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }


      componentDidMount() {
        console.log('In didMount')
        fetch('http://dummy.restapiexample.com/api/v1/employees')
          .then(response => response.json())
          .then(json => {
            this.setState({data:json})
            });  
      }

  // Sort by name

        sortByName=()=>{
          let data = this.state.data;
          data.sort((a,b)=>{
            var nameA = a.employee_name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.employee_name.toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              return 0;
          })
          this.setState({
            data
          })
        }

         // Sort By Id
        sortByID=()=>{

          let data = this.state.data;
          this.setState({
            data: data.sort((a,b)=>{
                if (a.id < b.id) {
                  return -1;
                }
                if (a.id > b.id) {
                  return 1;
                }
                return 0;
            })
          })
        }

  
  render() {

    const styleTable ={
      margin: "20px"
    }
    let data = this.state.data;
  return (
    <div>
          <button id="button" onClick={this.sortByName}> Sort By Name </button>
          <button id="button" onClick={this.sortByID}> Sort By ID</button>

        <div style={styleTable}>
          <table id="customers" >
                   <tr>
                      <th>ID</th>
                      <th>Employee Name</th>
                    </tr>
                    
            {
              data.map((el)=>{
                return (  
                    <tr>
                        <td>{el.id}</td>
                        <td>{el.employee_name}</td>
                    </tr>
                    )
              })
            }
          </table>
        </div>
      </div>

     
    
    );

   
  }

}

export default App;