import React from "react";
import Profile from "./Profile";
import ProfileFun from "./ProfileFun";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount(){
    this.timer = setInterval(()=>{
        console.log("set interval in about use")
    },1000);
    console.log("parent componentDidMount")
  }
  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("parent componentWillUnmount");
  }

  render() {
    console.log("parent render");
    return (
      <div className="body">
        <h1>About Me</h1>

        <Profile name="Shobhit Rana"/>
        {/* <Profile name="Shobhit"/> */}
        {/* <ProfileFun/> */}
      </div>
    );
  }
}

export default About;
