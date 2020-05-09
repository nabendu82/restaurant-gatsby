import React from 'react'
import { styles, Section } from '../../utils'
import styled from 'styled-components'

const About = () => {
    return (
        <Section>
            <AboutWrapper>
                <p>At Restaurant, we follow a simple mantra - "Strive for continuous improvement and make
                    no compromise on quality!"
                </p>
                <p>Initially we were just a small unit with a handful of employees. Today, 13 years later,
                    we have established 6 successful outlets in the city with a strong workforce of about
                    500 people.
                </p>
                <p>
                Providing quality food in perfect hygienic conditions remains our top most priority.
                </p>
                <p>
                Our aim is to be easy on the pocket, satiate the ever demanding palette and ensure
                that each customer comes back for more.
                </p>
            </AboutWrapper>
        </Section>
    )
}
export const AboutWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    p {
        font-size: 1.2rem;
        letter-spacing: 2px;
        color: ${styles.colors.mainBlack};
        margin-bottom: 2rem;
    }
`;

export default About;
