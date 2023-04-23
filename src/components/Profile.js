import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      profileData: {},
    };
    console.log("child constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/imshobhitpundir");
    const jsonData = await data.json();
    this.setState({ profileData: jsonData });
    console.log(jsonData);
    console.log("child componentDidMount");
  }
  componentDidUpdate(){
    console.log("child componentDidUpdate");
  }
  render() {
    console.log("child render");
    return (
      <div
        style={{
          borderTop: ".5px dotted black",
          borderBottom: ".5px dotted black",
          padding: "10px",
        }}
      >
        <h2>My Profile</h2>
        {/* <h5>Name: {this.props.name}</h5>
        <p>Count: {this.state.count}</p>
        <button onClick={()=>this.setState({count:this.state.count+1,count1:1})}>Counter</button> */}
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  src={this.state.profileData.avatar_url}
                  alt=""
                  style={{ width: "100px", borderRadius: "10px" }}
                />
              </td>
              <td>
                <h3>{this.state.profileData.name}</h3>
                <p>{this.state.profileData.location}</p>
                <p>{this.state.profileData.bio}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Profile;
