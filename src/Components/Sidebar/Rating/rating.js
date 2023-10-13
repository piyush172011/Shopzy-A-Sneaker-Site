import React from 'react'
import './rating.css';
import Input from '../../Extra/input';

export default function rating({handleChange}) {
  return (
    <>
      <div>
        <h2 className="sidebar-title rating-title">Rating</h2>
        {/* <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label> */}

        <Input
          handleChange={handleChange}
          value="5"
          title="5⭐⭐⭐⭐⭐"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="4"
          title="4⭐⭐⭐⭐"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="3"
          title="3⭐⭐⭐"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="2"
          title="2⭐⭐"
          name="test1"
          color="green"
        />
        <Input
          handleChange={handleChange}
          value="1"
          title="1⭐"
          name="test1"
        />

        
      </div>
    </>

  )
}
