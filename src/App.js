import './App.css';
<<<<<<< HEAD
import Grid from './components/Grid'
import MainHeader from './components/Header/MainHeader'

function App() {
  return (
    <>
      <MainHeader />
      <Grid />
    </>
=======
import { useState } from 'react';
import Grid from './components/Grid'
import ShowGrid from './components/SingleGridComponent';


function App() {

  const [grid, setGrid] = useState(new Array(32).fill(0).map(() => new Array(32).fill(0)));

  return (
      <ShowGrid grid={grid}></ShowGrid>
      //<Grid grid={grid}></Grid>
>>>>>>> fa9f18753e4e8da1318d16006735599057e30529
  );
}

export default App;
