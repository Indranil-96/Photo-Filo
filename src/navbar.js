import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
class Bar extends Component{
    render(){
        return(
            <>
            <nav class="navbar navbar-dark bg-dark ">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Movie-Flix</span>
                    <span style={{color:'white'}}>0 <FontAwesomeIcon icon={faCartShopping} style={{color:'blue', fontSize:'25px'}} /> </span>
                </div>
            </nav>
            </>
        )
    }
}

export default Bar;