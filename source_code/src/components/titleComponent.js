import React, { Component } from 'react';
// import './Title.css';

class Title extends Component {

    isEditing(){
        if(this.props.isEditing >= 0)
            return <span><i className="fas fa-pen"></i> Editing ...</span>;
    }

    render() {

        console.log('title component: ' + this.props.isEditing);
        return (
            <header>
                <h1 className="font-weight-normal">ToDo App {this.isEditing.bind(this)()}</h1>
            </header>
        );
    }
}

export default Title;
