import React from "react"
import Layout from "../components/layout"
import { HomeHeader } from "../utils"
import SEO from "../components/seo"
import img from '../images/bcg/homeBcg.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <h3>The Restaurant Site</h3>
    </HomeHeader>
  </Layout>
)

export default IndexPage
