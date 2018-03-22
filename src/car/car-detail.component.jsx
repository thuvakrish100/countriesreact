import React, { Component } from 'react';

class CarDetail extends Component {
    render(){
        // Car array
        const cars = this.props.data;
        // Car Id from param
        const id = this.props.match.params.id;
        // Filter car with ID
        const car = cars.filter(car => {
            if(car.id == id) {
                return car;
            }
        });

        return (
            <div>
                <h1 className="whitee">{car[0].name}</h1>
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <div className="thumbnail">
                            <img src={car[0].media} alt={car[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><h3 className="white"><strong>Capital</strong>: {car[0].Capital}</h3></li>
                           <li><h3 className="white"><strong>Prime_Minister</strong>: {car[0].Prime_Minister}</h3></li>
                           <li><h3 className="white"><strong>Population</strong>: {car[0].Population}</h3></li>
                           <li><h3 className="white"><strong>Currencies</strong>: {car[0].Currencies}</h3></li>
                       </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarDetail
