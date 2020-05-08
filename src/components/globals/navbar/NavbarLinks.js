import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../../utils'
import { FaCartArrowDown } from "react-icons/fa";

class NavbarLinks extends Component {
    state = {
        links: [
            {
                id: 0,
                path: '/',
                name: 'home',
            },
            {
                id: 1,
                path: '/about/',
                name: 'about',
            },
            {
                id: 2,
                path: '/contact/',
                name: 'contact',
            },
        ],
    }

    render() {
        return (
            <LinkWrapper open={this.props.navbarOpen}>
                {this.state.links.map(item => {
                    return (
                        <li key={item.id}>
                            <Link to={item.path} className="nav-link">
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
                <FaCartArrowDown className="cart-icon snipcart-checkout" />
            </LinkWrapper>
        )
    }
}

const LinkWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    li {
        list-style-type: none;
    }
    .nav-link {
        display: block;
        text-decoration: none;
        padding: 0.5rem 1rem 0.5rem 1rem;
        color: ${styles.colors.mainGrey};
        font-weight: 700;
        text-transform: capitalize;
        cursor: pointer;
        ${styles.transDefault};
        &:hover {
            background: ${styles.colors.mainGrey};
            color: ${styles.colors.mainYellow};
            padding: 0.5rem 1rem 0.5rem 1.3rem;
        }
    }
    .cart-icon {
        cursor: pointer;
        color: ${styles.colors.mainYellow};
        font-size: 2rem;
    }
    height: ${props => (props.open ? '152px' : '0px')};
    overflow: hidden;
    ${styles.transObject({ time: '1s' })};
    @media (min-width: 768px) {
        height: auto;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
            .nav-link:hover {
                background: ${styles.colors.mainWhite};
                padding: 0.5rem 1rem 0.5rem 1rem;
            }
    }
`;

export default NavbarLinks
