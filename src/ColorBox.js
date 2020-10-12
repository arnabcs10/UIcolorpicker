import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import chroma from 'chroma-js';
import './ColorBox.css';
 class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state={
            copied: false,
            // textColor : this.setTextColor(this.props.background)
        };
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    // setTextColor(color)
    // {
    //     let textColor;
    //     if( chroma(color).luminance() > 0.5 )
    //         textColor="black";
    //     else
    //         textColor="white";
    //     console.log(chroma(color).luminance());   
    //     console.log(textColor); 
    //     return    textColor; 
    // }
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
        const {name , background,colorId,paletteId,showMore } = this.props;
        const isDarkColor = chroma(background).luminance() <= 0.08;
        const isLightColor = chroma(background).luminance() >= 0.5;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className='ColorBox' style={{backgroundColor:background}} >
                    <div className={`copy-overlay ${this.state.copied ? 'show':''}`} style={{backgroundColor:background}} />
                    <div className={`copy-msg ${this.state.copied ? 'show':''} ${isLightColor && "dark-text"}`}>
                        <h1>COPIED!</h1>
                        <p>{ this.props.background }</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                        <span className={isDarkColor && ("light-text")}>{name}</span>
                        </div>
                        <button className='copy-button'>copy</button>
                    </div>
                    { showMore && (
                        <Link to={`/palette/${paletteId}/${colorId}`} onClick={ (e)=> e.stopPropagation()}>
                            <span className={`see-more ${isLightColor && "dark-text"}`}>More</span>
                        </Link>
                    )}
                    
                </div>
            </CopyToClipboard>
        );
    }
}


export default ColorBox;
