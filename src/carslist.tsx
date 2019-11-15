import * as React from 'react';

class Carslist extends React.Component {
    render () {
        console.log(this.props.result)
        const {picturePath, brand, model, pricePerDay, pricePerKm, availability} = this.props.result
        return (
            <div>
            <div>
            <img src={picturePath} />
            </div>
            <div className="brand">
            <h1>{brand}</h1>
            <div className="model"></div>
            <h1>{model}</h1>
            </div>
            <div className="pricePerDay">
                <p>{pricePerDay}</p>
            </div>
            <div className="pricePerKm">
                <p>{pricePerKm}</p>
            </div>
            <div className="pricePerKm">
                <p>{availability.maxDuration}</p>
            </div>
            <div className="pricePerKm">
                <p>{availability.maxDistance}</p>
            </div>
            </div>
        )
    }
}

export default Carslist;