import React from "react";

export class Checkout extends React.Component {
   submitData(e) {
       e.preventDefault();
       console.log("submit", this.state, this.emailRef.value);
   }

   state = {name: ""};
   emailRef = "";
    render() {
        return (
            <div>
            <form onSubmit={(e) => this.submitData(e)}>
                <label>Name</label>
                <input 
                    type="text" 
                    onChange={
                        (e)=> this.setState({name:e.target.value})
                     }
                />

                <label>Email</label>
                <input type="email" ref={(r) => (this.emailRef = r)}></input>

                <button type="submit">Submit</button>
            </form>
            </div>
        );
    }
}