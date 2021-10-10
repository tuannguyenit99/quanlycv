import { Component } from "react";
// import pc from "../picture/all2.jpg";
import "../TCss/header.css";
class Header extends Component {
    render() {
        
        
        return (
      

            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <a className="navbar-brand" href="http://localhost:3800/#">Trang Chủ</a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="http://localhost:3800/#">Thông Tin</a>
                    </li>
                    <li>
                        <a href="http://localhost:3800/#">Bạn Bè</a>
                    </li>
                    <li>
                    
                      
                    </li>

                </ul>
            </nav>





        );
    }
}

export default Header