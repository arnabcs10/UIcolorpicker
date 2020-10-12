import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import './Palette.css';
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
        const colorBoxes = this._shades.map( color =>(
            <ColorBox
                key={color.name}
                name={color.name}
                background={color[this.state.format]}
                showMore={false}
            />
        ))
        return (
            <div className="SingleColorPalette Palette">
                <Navbar changeFormat={this.changeFormat} format={this.state.format} showingAllColors={false}/>
                
                <div className="Palette-colors">
                    {colorBoxes}

                    <div className="go-back ColorBox" >
                        <Link to={`/palette/${id}`} className="back-button">Go Back</Link>
                    </div>

                </div>

                
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        );
    }
}
export default SingleColorPalette;
