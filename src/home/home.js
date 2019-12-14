import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {
    cityName: ""
  };
}

onTypeCityName(e){
  this.setState({cityName: e.target.value});
  console.log(this.state.cityName);
}

onSubmitCity(){
  console.log(this.state.cityName);
 //  try{
 //  const response = await fetch('api.openweathermap.org/data/2.5/weather?q={this.state.cityName}', {
 //     method: 'POST',
 //     headers: {
 //       'Content-Type': 'application/json'
 //     }
 //   });
 //   const json = await response.json();
 //   console.log('Success:', JSON.stringify(json));
 // } catch (error) {
 //   console.error('Error:', error);
 // }
}
    render() {
        return (
          <div className="input-group mb-3">
            <input onChange={this.onTypeCityName.bind(this)} type="text" className="form-control" placeholder="Search your City" aria-label="Search your City" aria-describedby="button-addon2"/>
              <div className="input-group-append">
                <button onClick={this.onSubmitCity.bind(this)} className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
              </div>
            </div>

        );
    }
}
