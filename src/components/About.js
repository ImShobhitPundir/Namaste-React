import React from "react";
import Profile from "./Profile";
import ProfileFun from "./ProfileFun";
import UserContext from "../utils/UserContext";


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
        {/* use context in class component */}
        <UserContext.Consumer>
          {({user})=><h4>{user.name} | {user.email}</h4>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
