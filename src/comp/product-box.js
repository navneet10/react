/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";

const ProductBox = ({ productDatas, viewType }) => {
    const { img, tag, price, title, rating } = productDatas; 
    const viewClass = viewType === 'grid' ? ' ' : 'list-view';
    console.log(price);

    return (

        <div className={`th-product ${viewClass}`}>
                <div className="product-img">
                    <img src={img} alt="Product Image" />
                        <span className="product-tag">{tag}</span>
                        <div className="actions">
                            <Link to="#QuickView" className="icon-btn popup-content"><i className="far fa-eye"></i></Link>
                            <Link to="cart.html" className="icon-btn"><i className="far fa-cart-plus"></i></Link>
                            <Link to="wishlist.html" className="icon-btn"><i className="far fa-heart"></i></Link>
                        </div>
                </div>
                <div className="product-content">
                   <span className="price">{price}</span>
                   <h3 className="product-title">
                       <Link to="shop-details.html">{title }</Link>
                   </h3>
                    <div className="woocommerce-product-rating">
                        <div className="star-rating" role="img" >
                            <span className="rating">{rating} </span>  
                        </div>
                    </div>
                </div>
          </div> 
  );
}

export default ProductBox;