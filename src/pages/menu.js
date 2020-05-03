import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from "../utils"
import menuImg from '../images/bcg/menuBcg.jpg'
const MenuPage = () => (
    <Layout>
        <SEO title="Menu" />
        <PageHeader img={menuImg}>
            <h3>Menu Page</h3>
        </PageHeader>
    </Layout>
)

export default MenuPage
