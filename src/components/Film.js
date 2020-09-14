import React, { Component } from 'react';

class Film extends Component {
    render() {
        return(
            <>
                <h4>{this.props.name}</h4> 
                <p>{this.props.children}</p>
            </>
        );
    }

}

export default Film;