import React, { Component } from 'react';

/* We make the booklist a class component because it will likely need state to stores books. */

class Booklist extends Component {
    render() {
        return (
            <ul className="booklist">
                <li>the way of kings</li>
                <li>the name of the wind</li>
                <li>the final empire</li>
            </ul>
        );
    }
}

export default Booklist;