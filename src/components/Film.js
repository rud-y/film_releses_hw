import React, { Component } from 'react';

class Film extends Component {
    render() {
        return(
            <>
            <ul>
                <li><a href={this.props.url}>{this.props.name}</a></li>
            </ul>
            </>
        );
    }

}

export default Film;