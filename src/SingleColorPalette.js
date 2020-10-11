import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette';
class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.colorId);
        console.log(this._shades);
    }
    gatherShades(id){
        const { colors } = this.props.palette;
        const shades =[];
        for( let key in colors){
            shades.push(  colors[key].find( color => color.id === id));
        }
        return shades.slice(1);
    }
    render() {
        const colorBoxes = this._shades.map( color =>(
            <ColorBox
                key={color.id}
                name={color.name}
                background={color.hex}
                showMore={false}
            />
        ))
        return (
            <div className="Palette">
                <h1>Single Color SingleColorPalette</h1>
                <div className="Palette-colors">{colorBoxes}</div>
                
            </div>
        );
    }
}
export default SingleColorPalette;
