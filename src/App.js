import React, { Component } from 'react';
import './App.css';
import ColorPicker from './Components/ColorPicker';
import SetSize from './Components/SetSize';
import Reset from './Components/Reset';
import Result from './Components/Result';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            color: 'red',
            sizeFont : 10
        };
        this.showSetColor = this.showSetColor.bind(this);
        this.onChangeFont = this.onChangeFont.bind(this);
    }

    showSetColor(params){
        // console.log(params);
        this.setState({
            color : params
        })
    }

    onChangeFont(value){
        //console.log(value);

        if(this.state.sizeFont+value > 8){
            this.setState({
                sizeFont : this.state.sizeFont+value
            })
        }
        //console.log(this.state.sizeFont);
    }

    onSettingDefault = (value)=>{
        console.log(value);
        if(value){
            this.setState({
                color: 'red',
                sizeFont : 10
            })
        }
    }


    render() {
        return (
            <div className="container mt-50">
                
                <div className="row">

                   <ColorPicker color={this.state.color} onReceiveColor={this.showSetColor}/>

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SetSize sizeFont = {this.state.sizeFont} onChangeFont = {this.onChangeFont}/>
                        <Reset onSettingDefault={this.onSettingDefault}/>
                    </div>

                    <Result color={this.state.color} size = {this.state.sizeFont}/>
                </div>
            </div>
            
        );
  }
}

export default App;
