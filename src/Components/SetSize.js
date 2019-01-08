import React, { Component } from 'react';

class SetSize extends Component {

    changeSize(value){
        //console.log(this.props.sizeFront);
        this.props.onChangeFont(value);
    }
    

    render() {
        return (
            
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size: {this.props.sizeFont} px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-danger" 
                                        onClick = {() => this.changeSize(+2)}
                    >
                    Tăng
                    </button>&nbsp;
                    <button type="button" className="btn btn-default"
                                        onClick = {() => this.changeSize(-2)}
                    >Giảm</button>
                </div>
            </div>
            
        );
      }
}

export default SetSize;
