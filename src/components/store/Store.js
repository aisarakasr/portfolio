import "./Store.css"

import { Card, CardMedia, Typography } from "@material-ui/core"

import React from 'react'
import products from './products'

function Store() {
  return (
    <div className="gradiant">
            {products.map(items => (
              <Card className="card">
                <CardMedia>
                  <img src={items.img} alt="" className="img" />
                </CardMedia>
                <Typography>
                  {items.name}
                </Typography>
                <p>
                  Price { items.price } / { items.unit}
                </p>
              </Card>
                // <li key={items.id} className="list">
                //     <img src={items.img} alt="" className="image"/>
                //     <h1>{items.name}</h1>
                //     <p>Price{items.price}/ {items.unit} </p>
                //     <button>{items.buyButton}</button>
                //     {/* <p>{items.name}</p> */}
                // </li>
                
            ))}
    </div>
  )
}

export default Store