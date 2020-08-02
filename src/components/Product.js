import React from 'react'
import './Product.css'

const Product = ({ id, title, price, rating, image }) => {
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>£ <strong>{price}</strong></small>
                </p>

                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐️</p>
                            ))
                    }
                </div>
            </div>

            <img
                src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Consumer_Electronics/XCM_CUTTLE_1229668_1209423_CA_3144566_379x304_1X_en_CA._SY304_CB427943803_.jpg"
                alt="product image"
            />
            <button>Add to basket</button>
        </div>
    )
}

export default Product
