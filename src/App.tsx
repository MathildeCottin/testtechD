import * as React from 'react';
import axios from "axios";
import Carslist from "./carslist";

class App extends React.Component {
  state = {
    cars: []
  }

  getCars = async () => {
    const result = await axios.get('../cars.json')
    this.setState({ cars: result.data })
    console.log(this.state)
    const result = await axios.get('data/cars.json')
  }

  componentDidMount() {
    this.getCars()
  }

  render() {
    const { cars } = this.state;
    console.log('hello', cars)
    return (
      <div>
        {cars.map(cars => <Carslist result={cars} />)}
      </div>
    )
  }

}

export default App;

// const App = () => (
//   <div>
//   <h1>Hello!</h1>
//   <p>
//     Edit this file and linked JS/CSS, changes will appear directly in your
//     browser.
//   </p>
// </div>
// );

