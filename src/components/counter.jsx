import React, { Component } from 'react';


class Counter extends Component {
    state = { 
        count: 0,
        tags: [],
     }

    handleDecrement = product => {
        console.log(product);
        this.setState({ count: this.state.count -1 });
    }

    getBadgeClasses(){
        let classes = "badge badge-";
        classes += this.state.count === 0 ? "secondary" : "primary";
        return classes;

    }

    formatCount(){
        const { count } = this.state
        return count === 0? 0 : count;
    }

    handleIncrement = product => {
        console.log(product);
        this.setState({ count: this.state.count +1 });
    }

    renderTags(){
        if (this.state.tags.length === 0)
            return <p>There are no tags</p>

        return <ul>{ this.state.tags.map(tag => <li key={tag}> { tag } </li>) }</ul>
     }
    
    render() { 
        return (
            <div>
                <button 
                className='btn-decrement'
                onClick={ () => this.handleDecrement() }>
                    Decrement
                </button>
                <span className={ this.getBadgeClasses() }> { this.formatCount() }</span>
                <button className='btn-increment'
                onClick={ () => this.handleIncrement() }>
                    Increment
                </button>
                <div>
                    { this.state.tags.length === 0 && " Please create a new tag" }
                    { this.renderTags() } 
                </div>
                

            </div>
        );
    }
}
 
export default Counter;