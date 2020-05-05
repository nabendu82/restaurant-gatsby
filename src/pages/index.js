import React from "react"
import Layout from "../components/layout"
import { HomeHeader, Banner, BannerButton } from "../utils"
import SEO from "../components/seo"
import img from '../images/bcg/homeBcg.jpg'
import QuickInfo from '../components/HomeComponents/QuickInfo'
import Gallery from '../components/HomeComponents/Gallery'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner title="Fine Dining" subtitle="65, MG Road- Bangalore, KA">
        <BannerButton style={{ margin: '2rem auto' }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage
