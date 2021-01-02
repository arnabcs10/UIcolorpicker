import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import styles from './Styles/NavbarStyles';
import 'rc-slider/assets/index.css';

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
        const { classes } = this.props;
        return (
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to="/">UIcolorpicker</Link>
                </div>   
                {
                    this.props.showingAllColors && (
                        <div >
                        <span>Level:{this.props.level}</span>
                        <div className={classes.slider}>
                            <Slider 
                                defaultValue={this.props.level}
                                min={100}
                                max={900}
                                step={100}
                                onAfterChange={this.props.changeLevel}
                            />
                        </div>
                    </div>

                    )
                } 
                
                <div className={classes.selectContainer}>
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

export default  withStyles(styles)(Navbar);