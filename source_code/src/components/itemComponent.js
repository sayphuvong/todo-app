import React, { Component } from 'react';
// import './ListItem.css';

class ListItem extends Component {
    constructor(props){
        super(props);
    }

    isChecked(){
        if(this.props.checked === true){
            return <button className="bg-primary"><i className="fas fa-check"></i></button>;
        }else{
            return <button className="bg-primary"><i className="fas fa-spinner"/></button>;
        }
    }

    isActived(){
        return this.props.active ? "list-group-item position-relative active" : "list-group-item position-relative";
    }

    render() {
        const checked = true;
        return (
            <li className={this.isActived()}>
                <p className="row">{this.props.name}</p>
                <div className="row tool position-absolute">
                    <button className="bg-white"><i className="fas fa-pen" /></button>
                    {this.isChecked()}
                    <button className="bg-danger"><i className="fas fa-times" /></button>
                </div>
            </li>
        );
    }
}

export default ListItem;