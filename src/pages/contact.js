import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from "../utils"
import contactImg from '../images/bcg/contactBcg.jpg'

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <PageHeader img={contactImg}>
            <h3>Contact Page</h3>
        </PageHeader>
    </Layout>
)

export default ContactPage
