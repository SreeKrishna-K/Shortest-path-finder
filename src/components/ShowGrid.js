import React from 'react'
import GridRow from './GridRow'

<<<<<<< HEAD
function ShowGrid(props) {
  
  function handleClick(event){
    props.onClick(event);
  }

  function createGridRow(item,index) {
    return <GridRow key={index} row={index} grid={item} onClick={handleClick} />
=======


function ShowGrid(props) {
  
  function handleClick(event){
    props.onClick(event)
  }

  function createGridRow(item,index) {
    return <GridRow key={index} row={index} grid={item} onClick={handleClick}></GridRow>
>>>>>>> fa9f18753e4e8da1318d16006735599057e30529
  }

  return (
      <>
        {props.grid.map(createGridRow)}
      </>
  )
}

<<<<<<< HEAD
export default ShowGrid;
=======
export default ShowGrid
>>>>>>> fa9f18753e4e8da1318d16006735599057e30529
