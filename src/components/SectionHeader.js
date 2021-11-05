import React from "react"



class SectionHeader extends React.Component {
    render(){
    let txt = this.props.txt
    
    return(
    
    <div className="section-background" style={{backgroundImage: `url(${this.props.img})`}}>
       <div className="layer">
        <div className="section-txt">
            
            <h2>{txt}</h2>
            
        </div>
        </div>
    </div>)
    }
}

export default SectionHeader