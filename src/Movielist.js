import React from "react";
import Card from "./moviecard";

class MovieList extends React.Component{
    constructor(){
        super();
        this.state={
            Movie: [
                {
            Title:"The Avengers",
            poster:"https://th.bing.com/th/id/OIP.1jdklJKgjAe81COtBdjG9AHaLH?rs=1&pid=ImgDetMain",
            Plot:"Super Natural Power Shown In This Movie",
            Price: 199,
            rating: 8.8,
            Star: 0,
            text: "Favourite",
            cart: false
                },
                {
            Title:"The Avengers Infinity War",
            poster: "https://image.tmdb.org/t/p/original/rQpd7eMhzQxCF90c8ITNqZDFCQu.jpg",
            Plot:"Super Natural Power Shown In This Movie",
            Price: 199,
            rating: 8.8,
            Star: 0,
            text: "Favourite",
            cart: false
                },
                {
            Title:"Teen Titans",
            poster:"https://th.bing.com/th/id/OIP.N7qA1PORPpjygnGCjDsykAHaJ4?rs=1&pid=ImgDetMain",
            Plot:"Super Natural Power Shown In This Movie",
            Price: 199,
            rating: 8.8,
            Star: 0,
            text: "Favourite",
            cart: false
                },
                {
            Title:"The Gurdians of the Galaxy",
            poster:"https://th.bing.com/th/id/R.c5037d80ab19a74538d722e2f510cdef?rik=MWJY3H%2f1yuYoAA&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2fguardians-of-the-galaxy-poster-rocket.jpg&ehk=rdIotHMtY2GH4a79DW7UlxQe8MQPwJ%2ftGjuU9ew6X00%3d&risl=&pid=ImgRaw&r=0",
            Plot:"Super Natural Power Shown In This Movie",
            Price: 199,
            rating: 8.8,
            Star: 0,
            text: "Favourite",
            cart: false
                }
            ]
        }
    }

    handelAddStar=(mv)=>{
        const {Movie}=this.state;
        const mid=this.state.Movie.indexOf(mv);

        if(Movie[mid].Star>=5){
            return;
        }

        Movie[mid].Star +=0.5;
        this.setState({
            Movie:Movie  // First movie is the state and 2nd one is which we have change
        })
    }

    handelDecStar=(mv)=>{
        const {Movie}=this.state;
        const mid=this.state.Movie.indexOf(mv);

        if(Movie[mid].Star<=0){
            return;
        }

        Movie[mid].Star -=0.5;
        this.setState({
            Movie:Movie  // First movie is the state and 2nd one is which we have change
        })
    }

    toggleText=(mv)=>{
        const {Movie}=this.state;
        const mid=this.state.Movie.indexOf(mv);

        if(Movie[mid].text=="Favourite"){

            Movie[mid].text="Unfavourite";

            this.setState({
                Movie:Movie
            })
        } else if(Movie[mid].text=="Unfavourite"){
            Movie[mid].text="Favourite";

            this.setState({
                Movie:Movie
            })
        }
    }

    toggleCart=(mv)=>{
        const {Movie}=this.state;
        const mid=this.state.Movie.indexOf(mv);
        
        this.setState({
            cart: !Movie[mid].cart
        })
    }

    render(){
        // const {Title,Plot,Price,rating,Star,text,cart}=this.state;
        const movies=this.state.Movie; {/* Destructring state object*/}
        return(
            <>
            {/* <Card Title={Title} Plot={Plot} Price={Price} rating={rating} Star={Star} text={text} cart={cart}/> */}
            {/* passing props as object movies*/}
            {movies.map((movie)=> <Card movies={movie} 
            addStar={this.handelAddStar}
            rmvStar={this.handelDecStar} 
            changetxt={this.toggleText} 
            AddCart={this.toggleCart} /> )}
            </>
        )
    }
}

export default MovieList;