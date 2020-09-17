import React from 'react';
import Axios from 'axios';
import Menu from '../components/Menu';

export class Header extends React.PureComponent {
    state = {menuList:[]};
    
    async componentDidMount() {
        try {
            const res = await Axios.get("/menu.json");
            const menuList = res.data;
            this.setState({menuList});
        } catch (error) {
            console.log("error", error);
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
                <a className="navbar-brand" href="#"> MyApp </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" > 
                    <span className="navbar-toggler-icon"></span> 
                </button> 
                <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
                   <Menu menuData={this.state.menuList}/>
                </div> 
                {this.props.children}
            </nav>
        );
    }
}