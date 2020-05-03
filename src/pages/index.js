import React from "react"
import Layout from "../components/layout"
import { HomeHeader, Banner } from "../utils"
import SEO from "../components/seo"
import img from '../images/bcg/homeBcg.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner title="Fine Dining" subtitle="65, MG Road- Bangalore, KA">
      </Banner>
    </HomeHeader>
  </Layout>
)

export default IndexPage
