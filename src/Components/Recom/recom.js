import React from 'react'
import './recom.css';
import Button from '../Extra/button';
export default function recom({handleClick}) {
  return (
    <div>
      <h2 className='rectitle'>Recommended</h2>
      <div className='recbtn'>
          
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  )
}
