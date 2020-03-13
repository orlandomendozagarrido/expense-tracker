import React, { Component } from 'react';

import './scss/slider.scss';

export class Slider extends Component {

	render() {
       return (
       
                  <section className="container">
                      <input className="sun-input-style" type="checkbox" id="toggleSunBtn" />
                      <div className="sun-toggle-container">
                         <label for="toggleSunBtn" className="sun-label-style"></label>
                         <div className="moon-craters"></div>
                      </div>
                  </section>
                         
       	)

	}
}

export default Slider;

