import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Section, Title } from '../../utils'
import styled from 'styled-components'
import Product from './Product'

const Menu = () => {
    const data = useStaticQuery(graphql`
        {
            items: allContentfulMenu {
                edges {
                    node {
                        name
                        price
                        id
                        ingredients
                        img {
                            fixed(width: 150, height: 150) {
                                src
                                ...GatsbyContentfulFixed_tracedSVG
                            }
                        }
                    }
                }
            }
        }
    `)
    const { edges } = data.items;
    console.log(edges);
    return (
        <Section>
            <Title title="featured items" message="little taste" />
            <ProductList>
                {edges.map(item => {
                    return <Product key={item.node.id} product={item.node} />
                })}
            </ProductList>
        </Section>
    )
}

export const ProductList = styled.div`
    margin: 3rem 0;
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 3rem;
    @media (min-width: 576px) {
        display: grid;
        grid-template-columns: 95%;
    }
    @media (min-width: 776px) {
        grid-template-columns: 80%;
        justify-content: center;
    }
    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
    }
`

export default Menu;
