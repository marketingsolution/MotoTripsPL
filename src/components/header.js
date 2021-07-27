import React from "react"
import PropTypes from "prop-types"


class Header extends React.Component {
    render(){
    let txt = this.props.txt
    return <h2>{txt}</h2>  
    }
}

export default Header