import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { styles } from '../../utils'
import { Link } from 'gatsby'

export default class QuickInfo extends Component {
    render() {
        return (
            <Section>
                <Title message="let us tell you" title="our misson" />
                <QuickInfoWrapper>
                    <p className="text">
                    Our mission is to provide happiness and joy through food to every customer who chooses to
                    dine at Restaurant, while not exceeding, making the size of a pin hole on their pockets.
                    </p>
                    <Link to="/about/" style={{ textDecoration: 'none' }}>
                        <SectionButton style={{ margin: '2rem auto' }}>about</SectionButton>
                    </Link>
                </QuickInfoWrapper>
            </Section>
        )
    }
}

const QuickInfoWrapper = styled.div`
    width: 90%;
    margin: 2rem auto;
    .text {
        font-size: 1.2rem;
        letter-spacing: 2px;
        line-height: 2em;
        color: ${styles.colors.mainGrey};
        word-spacing: 0.2rem;
    }

    @media (min-width: 768px) {
        width: 70%;
    }
    @media (min-width: 992px) {
        width: 60%;
    }
`