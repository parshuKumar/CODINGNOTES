import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {
    constructor(props){
        super(props);

        //console.log("Parent Constructor");
    }

    componentDidMount(){
        // console.log("Parent Component Did Mount");
    }

    render(){
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is Namaste React Web series</h2>
                <UserClass/>
            </div>
        );
    }




}

export default About;