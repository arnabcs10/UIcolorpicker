import React,{Component} from 'react';
import ColorBox from './ColorBox';

import Navbar from './Navbar';
import './Palette.css';
class Palette extends Component{
    constructor(props){
        super();
        this.state={
            level: 500
        };
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(newLevel){
        this.setState({
            level: newLevel
        });
    }
    render(){
        const {colors} = this.props.palette;
        const colorBoxes = colors[this.state.level].map( color => 
            <ColorBox background={color.hex} name={color.name} />            
            );
        return(
            <div className='Palette'>
            {/* navbar */}
                <Navbar level={this.state.level} changeLevel={this.changeLevel} />
                
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        );
    }
}

export default Palette;