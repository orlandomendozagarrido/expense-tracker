import React, { Component } from 'react';
import Slider from './Slider.js';

import './scss/hamburger.scss';

export class HamburgerItemComponent extends Component {

	render() {
		return (

           
           <div className="item-container">
             <section className="name-container">
                {this.props.name}
             </section>
             <section className="container">
                <div className="hamburger">
                   <span className="line line-1"></span>
                   <span className="line line-2"></span>
                   <span className="line line-3"></span>
                </div>
             </section>
             <Slider />
           </div>
		)
	}
}

export default HamburgerItemComponent;