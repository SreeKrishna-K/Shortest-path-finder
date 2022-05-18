import React , {useState} from 'react'
import ShowGrid from './ShowGrid'

function Grid() {
  const [grid, setGrid] = useState(new Array(32).fill(0).map(() => new Array(32).fill(0)));

  function handleClick(event){
    console.log(event.target);
  }

  return (
    <ShowGrid grid={grid} onClick={handleClick} ></ShowGrid>
  )
}

export default Grid