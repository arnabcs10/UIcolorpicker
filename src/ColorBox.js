import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './Styles/ColorBoxStyles';

 class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state={
            copied: false,
        };
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState(){
        this.setState({ copied:true } , ()=>{
            setTimeout(() => 
                this.setState({
                    copied:false
                })
            , 1500);
        });
        
    }
    render() {
        const {name , background,colorId,paletteId,showMore ,classes } = this.props;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className={classes.ColorBox} style={{backgroundColor:background}} >
                    <div className={`${classes.copyOverlay} ${this.state.copied ? classes.showOverlay :''} `} style={{backgroundColor:background}} />
                    <div className={`${classes.copyMssg} ${this.state.copied ? classes.showCopyMssg:''} ${classes.copyStyles}`}>
                        <h1>COPIED!</h1>
                        <p>{ this.props.background }</p>
                    </div>
                    <div >
                        <div className={classes.boxContent}>
                        <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>copy</button>
                    </div>
                    { showMore && (
                        <Link to={`/palette/${paletteId}/${colorId}`} onClick={ (e)=> e.stopPropagation()}>
                            <span className={classes.seeMore }>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}


export default withStyles(styles)(ColorBox);
