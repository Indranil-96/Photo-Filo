import React from "react";
import {Component} from "react";
import './moviecard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStarOfDavid} from '@fortawesome/free-solid-svg-icons';
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";
class Card extends Component{
    

    // addStar=()=>{
    //     console.log('Increase the Star ');
    //     this.setState({Star:this.state.Star+0.5});
    //     console.log(this);
    //     console.log(this.state.Star);
        
    // }
    // rmvStar=()=>{
    //     console.log('Star removed');
    //     this.setState({Star:this.state.Star-0.5});
    // }
    // changetxt=(value)=>{
    //     if(value==="Favourite"){
    //         this.setState({text:"Unfavourite"});
    //     }
    //     else if(value === "Unfavourite"){
    //         this.setState({text:"Favourite"});
    //     }
    // }

    // AddCart=()=>{
    //     this.setState({cart: !this.state.cart});
    // }

    render(){
        const {Title,Plot,Price,rating,Star,text,cart,poster}=this.props.movies;
        return(
            <>
            <div className="main">
                <div className="movie-card">

                <div className="Left">
                    <img alt="Poster" src={poster} />
                </div>

                <div className="Right">
                    <div className="title">{Title}</div>
                    <div className="plot">{Plot}</div>
                    <div className="price">{Price}</div>
                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">
                        <FontAwesomeIcon icon={faStarOfDavid} className="star" /><span>{Star}</span>
                        <button className="str-btn" onClick={()=>{this.props.rmvStar(this.props.movies)}}><FontAwesomeIcon icon={faCircleMinus} /></button>
                        <button className="str-btn" onClick={()=>{this.props.addStar(this.props.movies)}}><FontAwesomeIcon icon={faCirclePlus} /></button>
                        </div>
                        <div className="favourite-btn" onClick={()=>{this.props.changetxt(this.props.movies)}}>{text}</div>
                        {cart?<div className="cart-btn" onClick={()=>{this.props.AddCart(this.props.movies)}}>Remove From Cart </div> : <div className="unfavourite-btn" onClick={()=>{this.props.AddCart(this.props.movies)}}>Add to Cart</div> }  
                    </div>

                </div>

                </div>
            </div>
            </>
        )
    }
}

export default Card;