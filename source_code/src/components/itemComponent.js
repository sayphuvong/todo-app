import React, { Component } from 'react';
// import './ListItem.css';

class ListItem extends Component {

    isChecked(){
        if(this.props.checked === true){
            return <button className="bg-success" onClick={this.isChecked_handleClick.bind(this)}><i className="fas fa-check"></i></button>;
        }else{
            return <button className="bg-primary" onClick={this.isChecked_handleClick.bind(this)}><i className="fas fa-spinner"/></button>;
        }
    }

    isActived(){
        return this.props.active ? "list-group-item position-relative active" : "list-group-item position-relative";
    }

    edit_handleClick(){
        this.props.edit_handleClick(this.props.index);
    }

    listItem_handleClick(){
        this.props.listItem_handleClick(this.props.index);
    }

    isChecked_handleClick(){
        this.props.isChecked_handleClick(this.props.index);
    }

    isSelectedClass(){
        if(this.props.editing >= 0 && this.props.editing === this.props.index){
            console.log('white');
            return "bg-secondary text-white";
        }else{
            console.log('grey');
            return "bg-white";
        }
    }

    // delete_handleClick(){

    // }
    render() {
        console.log(this.props.editing)
        return (
            <li className={this.isActived()} onClick={this.listItem_handleClick.bind(this)}>
                <p className="row">{this.props.name}</p>
                <div className="row tool position-absolute">
                    <button className={this.isSelectedClass.bind(this)()} onClick={this.edit_handleClick.bind(this)}><i className="fas fa-pen" /></button>
                    {this.isChecked.bind(this)()}
                    <button className="bg-danger"><i className="fas fa-times"/></button>
                </div>
            </li>
        );
    }
}

export default ListItem;