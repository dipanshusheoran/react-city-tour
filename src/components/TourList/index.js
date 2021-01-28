import React, { Component } from "react";
import Tour from "../Tour";
import './tourlist.scss';
import {tourData} from '../../tourData';

class TourList extends Component {
  constructor(props){
    super(props)
    this.state = {
      tours:tourData
    }
  }
  removeTour = id =>{
    const newData = this.state.tours.filter( item=>item.id !== id)
    console.log(newData)
    this.setState({
      tours: newData
    })
  }
  render() {
    const { tours } = this.state;
    return (
      <section className='tourlist'>
        {tours.map(tour=> (
        <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
        ))}
      </section>
    );
  }
}

export default TourList;
