import React, { Component } from "react";
import './header.css'


class Athelets extends Component {
  constructor(){
    super();
    this.state={
      data:[],
      index:1
    }
  }

  componentDidMount(){
    axios.get('https://localhost:3000/posts').then(resp=> resp.json()).then(res=>{
      console.log('res',res)
      this.setState({data:res});
    })
  }

  render() {
    return <div>
      
      <form>
          <label> Name</label><br/>
          <input type="text" placeholder="name"></input><br/>
          <label> Age</label><br/>
          <input type="text" placeholder="age"></input><br/>
          <label> Country</label><br/>
          <input type="text" placeholder="place"></input><br/>
          <label> Gold</label><br/>
          <input type="number" placeholder="Gold"></input><br/>
          <label> Silver</label><br/>
          <input type="number" placeholder="silver"></input><br/>
          <label> Bronze</label><br/>
          <input type="number" placeholder="bronze"></input><br/>
          <label> Sport</label><br/>
          <input type="text" placeholder="Sports"></input><br/>
          <label> Year</label><br/>
          <input type="number" placeholder="Year"></input><br/><br/>
          <button type="submit">Add</button>
      </form> 
      <table border='1px' cellPadding='15px' align="center">
        <tr>
          <th>SI No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Country</th>
          <th>Sport</th>
          <th>Gold</th>
          <th>Silver</th>
          <th>Bronze</th>
          <th>Total</th>
          <th>Year</th>
          <th>Edit/Delete</th>
        </tr>
        {
          this.state.data.map((data,index)=>{
          return(
            <tr>
              <td>{index+1}</td>
              <td>{data.athlete}</td>
              <td>{data.age}</td>
              <td>{data.country}</td>
              <td>{data.sport}</td>
              <td>{data.gold}</td>
              <td>{data.silver}</td>
              <td>{data.bronze}</td>
              <td>{data.total}</td>
              <td>{data.year}</td>
              <td>
                <button>Edit</button><button>Delete</button>
              </td>
            </tr>
          )
          })  
        }
        
      </table>
    </div>;
  }
}

export default Athelets;
