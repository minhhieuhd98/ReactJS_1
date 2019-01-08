import React, { Component } from 'react';

class Reset extends Component {

    setReset = () => {
        this.props.onSettingDefault(true);
    }

    render() {
        return (        
            <button type="button" className="btn btn-default" onClick = {this.setReset}>Reset</button>                    
    );
  }
}

export default Reset;
