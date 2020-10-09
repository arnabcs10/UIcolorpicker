import React ,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import Palette from './Palette';
import PaletteList from './PaletteList'
import seedColors from './seedColors';
import { genaratePalette } from './colorHelpers';
class App extends Component {
  // findPalette(id)
  // {
  //   return seedColors.find( palette => palette.id === id );
  // }
  render(){
    const findPalette = (routeProps) =>{
      const id = routeProps.match.params.id;
      const palette = genaratePalette( seedColors.find( palette => palette.id === id ) );
      return <Palette palette={palette}/>
    }
    return (

        <Switch>
          <Route exact path="/" render={()=> <PaletteList palettes={seedColors}/> } />
          {/* <Route exact path="/palette/:id" render={(routeProps)=> <Palette palette={genaratePalette(this.findPalette(routeProps.match.params.id))}/> }/> */}
          <Route exact path="/palette/:id" render={findPalette}/>
        </Switch>
    
      // <div className="App">
      //   <Palette palette={genaratePalette(seedColors[4])}/>
      // </div>
    );
  }
  
}

export default App;
