import React from 'react'
import { styles, Section, SectionButton } from '../../utils'
import styled from 'styled-components'

const Contact = () => {
    return (
        <Section>
            <ContactWrapper>
                <form>
                    <div>
                        <label htmlFor="name">name</label>
                        <input type="text" name="name" id="name" placeholder="john smith" />
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" id="email" placeholder="email@email.com" />
                    </div>
                    <div>
                        <label htmlFor="message">message</label>
                        <textarea name="message" id="message" rows="10" placeholder="hello there" />
                    </div>
                    <div>
                        <SectionButton>Submit</SectionButton>
                    </div>
                </form>
            </ContactWrapper>
        </Section>
    )
}

export const ContactWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    label {
        text-transform: capitalize;
        font-size: 1.2rem;
        display: block;
        margin-bottom: 0.5rem;
    }
    input, textarea {
        width: 100%;
        font-size: 1rem;
        margin-bottom: 1rem;
        padding: 0.375rem 0.75rem;
        border: 1px solid ${styles.colors.mainGrey};
        border-radius: 0.25rem;
    }
    @media (min-width: 992px) {
        width: 50vw;
        margin: 0 auto;
    }
`;
export default Contact;
