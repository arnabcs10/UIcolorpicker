import React,{Component} from 'react';
import ColorBox from './ColorBox';

import Navbar from './Navbar';
import './Palette.css';
class Palette extends Component{
    constructor(props){
        super();
        this.state={
            level: 500,
            format: "hex"
        };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(newLevel){
        this.setState({
            level: newLevel
        });
    }
    changeFormat(val)
    {
        this.setState({ format : val });
    }
    render(){
        const {colors,paletteName,emoji} = this.props.palette;
        const colorBoxes = colors[this.state.level].map( color => 
            <ColorBox key={color.id} background={color[this.state.format]} name={color.name} />            
            );
        return(
            <div className='Palette'>
                <Navbar level={this.state.level} 
                        changeLevel={this.changeLevel} 
                        changeFormat={this.changeFormat} 
                        format={this.state.format} 
                />
                
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
               
               <footer className="Palette-footer">
                   {paletteName}
                   <span className="emoji">{emoji}</span>
               </footer>

            </div>
        );
    }
}

export default Palette;