import React from 'react'
import Category from './Category/category';
import Price from './Price/price';
import Rating from './Rating/rating';
import './side.css';

export default function side({handleChange}) {
    return (
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1>🛒</h1>
                </div>
                <Category handleChange={handleChange}/>
                <Price handleChange={handleChange}/>
                <Rating handleChange={handleChange}/>
            </section>
        </>
    )
}
