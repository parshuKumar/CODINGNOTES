import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name : "Dummy",
                location : "Default",
            },
        };
        console.log(this.props.name + "Child Constructor");
    }
    
    async componentDidMount(){
        //console.log(this.props.name + "Child Component Did Mount");

        //API call
        const data = await fetch("https://api.github.com/users/ParshuShah");
        const json = await data.json();

        this.setState({
            userInfo:json,
        });

        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }
    render(){
        const {login, type, avatar_url} = this.state.userInfo;

        return (
            <div className = "user-card">
                <img src = {avatar_url} />
                <h2>Name: {login}</h2>
                <h3>Type: {type}</h3>
                <h4>Contact: @ParshuShah</h4>
            </div>
        );
    }
}
export default UserClass;
