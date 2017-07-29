import React from "react";

class Layout extends React.Component {
    constructor(){
        super();
        this.state = {name: "Mike"}
    }

    render() {
        //Simulate an user action
        return(
            <div>
                <h1>It's is cool</h1>
                <span>{this.state.name}</span>
            </div>
        );
    }
}

export default Layout;