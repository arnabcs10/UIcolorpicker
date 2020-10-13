import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import './Palette.css';

const styles = {
    Palette:{
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    colors:{
        height: "90%"
    },
    goBack:{
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        opacity: 1,
        backgroundColor: "black",
        "& a":{
            color: "white",
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left:"50%",
            marginLeft: "-50px",
            marginTop: "-15px",
            outline: "none",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.3)",
            fontSize: "1rem",
            lineHeight: "30px",
            textTransform: "uppercase",
            border:"none",
            opacity:"1",
            cursor: "pointer",
            textDecoration: "none"
        }
    }
}

class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this.state={format:"hex"};
        this._shades = this.gatherShades(this.props.colorId);
        this.changeFormat = this.changeFormat.bind(this);
    }
    gatherShades(id){
        const { colors } = this.props.palette;
        const shades =[];
        for( let key in colors){
            shades.push(  colors[key].find( color => color.id === id));
        }
        return shades.slice(1);
    }
    changeFormat(val)
    {
        this.setState({ format : val });
    }
    render() {
        const { paletteName,emoji,id} = this.props.palette;
        const {classes} = this.props;
        const colorBoxes = this._shades.map( color =>(
            <ColorBox
                key={color.name}
                name={color.name}
                background={color[this.state.format]}
                showMore={false}
            />
        ))
        return (
            <div className={classes.Palette}>
                <Navbar changeFormat={this.changeFormat} format={this.state.format} showingAllColors={false}/>
                
                <div className={classes.colors}>
                    {colorBoxes}

                    <div className={classes.goBack} >
                        <Link to={`/palette/${id}`}>Go Back</Link>
                    </div>

                </div>

                
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        );
    }
}
export default withStyles(styles)(SingleColorPalette);
