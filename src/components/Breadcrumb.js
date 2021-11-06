import React from "react"
import { Link } from "gatsby";
import styled from "styled-components"

const Main = styled.button`

width: 100%;
margin-bottom: 50px;
padding: 50px;

h1{
    margin: 0 auto 20px;
}
a{
    text-decoration: none;
}
`

class Breadcrumb extends React.Component {
   render() {
    let title = this.props.title;
    let path = this.props.path;
    let pathName = this.props.pathName;
  return(
      
    <Main>
        <h1>{title}</h1>
        <Link to="/">Start</Link> / <Link to={path}>{pathName}</Link> {pathName =! pathName ? '' : '/'} {title}
    </Main>
      
  )
   }
}

  export default Breadcrumb