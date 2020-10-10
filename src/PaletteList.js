import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';
import MiniPalette from './MiniPalette';

const styles = {
    root:{
        backgroundColor:"blue",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"flex-start"
    },
    container:{
        width:"50%",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        flexWrap:"wrap",

    },
    nav:{
        width:"100%",
        display:"flex",
        justifyContent:"space-between",
        color:"white"
    },
    palettes:{
       boxSizing:"border-box",
       width:"100%",
       display:"grid",
       gridTemplateColumns:"repeat(3,30%)",
       gridGap:"5%"
    }
}

class PaletteList extends Component {
    render() {
        const { palettes , classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.nav}>
                        <h1>React colors</h1>
                    </div>
                    <div className={classes.palettes}>
                        {palettes.map( palette => (
                            <MiniPalette {...palette}/>
                        ) )}
                    </div>
                </div>   
            </div>
        );
    }
}

export default  withStyles(styles)(PaletteList);
