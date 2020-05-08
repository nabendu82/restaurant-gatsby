import React from 'react'
import styled from 'styled-components'
import { styles, SectionButton } from '../../utils'
import Img from 'gatsby-image'
const Product = ({ product }) => {
    const { id, name, price, ingredients } = product
    const { fixed } = product.img

    return (
        <ProductWrapper>
            <Img fixed={fixed} className="img" />
            <div className="text">
                <div className="product-content">
                    <h3 className="name">{name}</h3>
                    <h3 className="price">${price}</h3>
                </div>
                <p className="info">{ingredients}</p>
                <SectionButton
                    className="snipcart-add-item"
                    data-item-id={id}
                    data-item-name={name}
                    data-item-price={price}
                    data-item-image={fixed.src}
                    data-item-url="https://restaurant-bangalore.netlify.app/"
                >Order</SectionButton>
            </div>
        </ProductWrapper>
    )
}

export const ProductWrapper = styled.div`
    @media (min-width: 576px) {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-column-gap: 1rem;
    }
    .img {
        border-radius: 0.5rem;
    }
    .product-content {
        display: flex;
        justify-content: space-between;
        font-size: 1.4rem;
        text-transform: uppercase;
    }
    .name {
        color: ${styles.colors.mainGrey};
        margin-top: 0.5rem;
    }
    .price {
        color: ${styles.colors.mainYellow};
        margin-top: 0.5rem;
    }
    .info {
        margin-top: 0.5rem;
        word-spacing: 0.2rem;
        text-transform: lowercase;
    }
`;

export default Product;
