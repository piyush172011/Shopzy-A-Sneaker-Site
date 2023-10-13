import React from 'react'

export default function Card({img, title, star, prevPrice, newPrice, onAddToCart}) {
  return (
    <>
        <div className="card">
          <img src={img} className="card-img-top" alt="tshirt" />
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-between align-items-baseline">{title}</h5>
            <div className='rating'>{star}</div>
            <section className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {newPrice}
              </div>
              </section>
              <button type="button" className="btn btn-outline-success">Add to Bag</button>
            
          </div>
        </div>
    </>
  )
}
