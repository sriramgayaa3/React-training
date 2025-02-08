import React, { Component } from 'react';
import './style.css';

class ClassComponent extends Component {
    render() {
        console.log(this.props); 

        let applyStyle = this.props.apply ? 'heading' : '';
        let inlineStyle = {
            color: 'green',
            backgroundColor: 'red',
            fontSize: '50px' 
        };

        return (
            <div>
                <h1 className={`${applyStyle} font-style`}>
                    Welcome to the React class {this.props.clgName}, {this.props.city}, {this.props.children}
                </h1>
                <h2 style={inlineStyle}>Good afternoon</h2>
            </div>
        );
    }
}

export default ClassComponent;