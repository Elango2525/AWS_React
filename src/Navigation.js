import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import './Navigation.css';

export default class App extends Component {
    state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }
    render() {
        return (
          <>
              <div className="navBar">
                    <button onClick={this.Toggle}>
                        <FaAlignRight />
                    </button>
                    <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
                        <li href="https://skcet.ac.in">Home</li>
                        <li href="https://skcet.ac.in">About us</li>
                        <li href="https://skcet.ac.in">Contact</li>
                    </ul>
              </div>
          </>
        );
    }
}
