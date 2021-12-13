import React from "react"
import Layout from "../../components/layout"
import Tag from "../../components/tags"
import Breadcrumb from "../../components/Breadcrumb"


const Tags = () => {

return(
    <Layout>
     
      <h1>Tagi</h1>

      <Breadcrumb title="Tagi"   />
      <main>
        <Tag/>
      </main>
    </Layout>
)

}

export default Tags
