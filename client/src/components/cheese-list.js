import React from 'react';

export default class CheeseList extends React.Component{
  constructor(props){
    super(props);
    this.state={
    };
  }
  render(){
    const mapMyCheeses=this.props.cheeses.map((cheese,index)=>
      <li key={index}>{cheese}</li>
        );
    return (
      <div className='listMyCheese'>
        <ul>
          {mapMyCheeses}
        </ul>
      </div>);
  }
}
