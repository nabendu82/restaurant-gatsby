import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import menuImg from '../images/bcg/menuBcg.jpg'
const MenuPage = () => (
    <Layout>
        <SEO title="Menu" />
        <PageHeader img={menuImg}>
            <Banner title="our menu" subtitle="The best in town" />
        </PageHeader>
    </Layout>
)

export default MenuPage
