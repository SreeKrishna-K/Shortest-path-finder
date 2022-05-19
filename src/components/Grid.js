import React , {useState} from 'react'
import ShowGrid from './ShowGrid'

<<<<<<< HEAD
function Grid() {
  const [grid, setGrid] = useState(new Array(32).fill(0).map(() => new Array(32).fill(0)));

=======
function Grid(props) {
>>>>>>> fa9f18753e4e8da1318d16006735599057e30529
  function handleClick(event){
    console.log(event.target);
  }

  return (
<<<<<<< HEAD
    <ShowGrid grid={grid} onClick={handleClick} />
  )
}

export default Grid;
=======
    <ShowGrid grid={props.grid} onClick={handleClick} ></ShowGrid>
  )
}

export default Grid
>>>>>>> fa9f18753e4e8da1318d16006735599057e30529
