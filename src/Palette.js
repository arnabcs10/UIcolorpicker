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
        const {colors} = this.props.palette;
        const colorBoxes = colors[this.state.level].map( color => 
            <ColorBox background={color[this.state.format]} name={color.name} />            
            );
        return(
            <div className='Palette'>
            {/* navbar */}
                <Navbar level={this.state.level} 
                        changeLevel={this.changeLevel} 
                        changeFormat={this.changeFormat} 
                        format={this.state.format} 
                />
                
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        );
    }
}

export default Palette;