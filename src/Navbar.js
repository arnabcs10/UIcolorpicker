import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
class Navbar extends Component {
    constructor(props){
        super(props);
        // this.state = { format : "hex"};
        this.state = { open:false};
        this.handleChange = this.handleChange.bind(this);
        this.closeSnackBar = this.closeSnackBar.bind(this);
    }
    handleChange(evt){
        // this.setState({format : evt.target.value});
        this.setState({ open:true});
        this.props.changeFormat(evt.target.value);
        
    }
    closeSnackBar()
    {
        this.setState({
            open:false
        });
    }
    render() {
        return (
            <header className='Navbar'>
                <div className='logo'>
                    <a href="#">reactcolorpicker</a>
                </div>    
                <div className="slider-container">
                    <span>Level:{this.props.level}</span>
                    <div className="slider">
                        <Slider 
                            defaultValue={this.props.level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={this.props.changeLevel}
                        />
                    </div>
                </div>
                <div className="select-container">
                    <Select value={this.props.format} onChange={this.handleChange}>
                        <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                        <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>    
                <Snackbar
                    anchorOrigin={{vertical:"bottom", horizontal:"left"}}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={
                        <span id='message-id'>Format Changed To {this.props.format}</span>
                    }
                    ContentProps={{
                        "aria-describedby":"message-id"
                    }}
                    onClose={this.closeSnackBar}
                    action={[
                        <IconButton 
                            onClick={this.closeSnackBar}
                            color="inherit"
                            key="close"
                            aria-label='close'
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
                

            </header>
        );
    }
}

export default Navbar;