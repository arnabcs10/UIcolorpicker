import React,{Component} from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import styles from './Styles/PaletteStyles';

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
        const {colors,paletteName,emoji,id} = this.props.palette;
        const {classes} = this.props;
        const colorBoxes = colors[this.state.level].map( color => 
            <ColorBox 
                key={color.id} 
                background={color[this.state.format]} 
                name={color.name} 
                colorId={color.id}
                paletteId={id}
                showMore={true}
            />            
            );
        return(
            <div className={classes.Palette}>
                <Navbar level={this.state.level} 
                        changeLevel={this.changeLevel} 
                        changeFormat={this.changeFormat} 
                        format={this.state.format} 
                        showingAllColors={true}
                />
                
                <div className={classes.colors}>
                    {colorBoxes}
                </div>
               
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>

            </div>
        );
    }
}

export default withStyles(styles)(Palette);