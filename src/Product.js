/*eslint-disable no-unused-vars*/

import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating}) {
   const [{basket}, dispatch]= useStateValue();

 

  const AddToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
        type: "ADD_TO_BASKET",
        item:{
            id: id,
            image: image,
            price: price,
            rating: rating,
            title: title
        }
    })
  };
  return (
    <div className="product">
        <div className="product_info ">
            <p>{title}</p>
            <p className='product_price'>

                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {Array(rating)
                .fill()
                .map((_index) => (
                <p> 🌟</p>
                ))}
            </div>
        </div>
        <img src={image} alt="Add to Basket" />
           <button  onClick={AddToBasket} >Add to Basket</button>
    </div>
    
  );
}

export default Product;