import React from "react"

class YouTube extends component{
    constructor(propos) {
        super(propos);
        this.state = {};
    }
    const apiKey='AIzaSyCCjwwAfDPpwDgv3IJIyx8qMDEzKp2BRlk'

    componentDidMount() {
        fetch(
            `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${apiKey}`
        )
        .then((res) => res.json())
        .then((data) => {
            this.setState({ videos: data});
        })
        .catch(console.log);
    }
    render(){
        if (this.state.videos) {
            return { videos: data}
        } else {
            return null
        }
    }
}



export default YouTube
