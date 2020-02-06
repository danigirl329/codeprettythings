import React from "react"
import Intro from "../components/articles/intro"
import Skills from "../components/articles/skills"
import Work from "../components/articles/work"
import Contact from "../components/articles/contact"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Danielle Greaves - codeprettythings.com" />
    <section class="container font-sans text-gray-700 min-w-full bg-pink px-4">
      <Intro></Intro>
      <Skills></Skills>
      <Work></Work>
      <Contact></Contact>
    </section>
  </Layout>
)

export default IndexPage
