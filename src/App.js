import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  state={
    favorites: [],
  }
  render(){
    let {favorites} = this.state
    const podcasts = [
      {
          id: 1,
          title: "Nasa's Curious Universe",
          genreName: ["Trending"],
          genreIds: [1, 4],
          description: "Our universe is a wild and wonderful place. Join NASA astronauts, scientists, and engineers on a new adventure each week — all you need is your curiosity. Visit the Amazon rainforest, explore faraway galaxies and dive into our astronaut training pool. First-time space explorers welcome.",
          "imageURL": "https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/podcast_thumbnail05.jpg?itok=SD5y8Z8-",
          cast: ["Padi Boyd"],
          rating: 4.3
        },
      {
          id: 2,
          title: "The Midnight Miracle",
          genreName: ["Trending", "Society and Culture"],
          genreIds: [1, 4],
          description: "The Midnight Miracle is a thought-provoking podcast that uniquely blends the salon and variety show traditions while providing a glimpse into the inner lives of hosts Talib Kweli, yasiin bey, Dave Chappelle, and friends. The Midnight Miracle was recorded during Chappelle's legendary 2020 Summer Camp in Ohio",
          imageURL: "https://img2.luminarypodcasts.com/v1/podcast/c88501e3-f783-43cc-b00a-022d2a3ad33b/default/h_200,w_200/image/s--WpH1phRA--/aHR0cHM6Ly9tZWdhcGhvbmUuaW1naXgubmV0L3BvZGNhc3RzL2MxZDE3MzdjLTg1YWEtMTFlYi1iMWVhLTkzMDA3ZDFlZTk3OS9pbWFnZS9NTV9UaWxlX1I1XzEucG5nP2l4bGliPXJhaWxzLTIuMS4yJm1heC13PTMwMDAmbWF4LWg9MzAwMCZmaXQ9Y3JvcCZhdXRvPWZvcm1hdCxjb21wcmVzcw==.png",
          cast: ["Dave Chappelle", "Talib Kweli","yasin bey"],
          rating: 4.4
      },
      {
          id: 3,
          title: "Radio Rental",
          genreName: ["Trending", "Comedy"],
          genreIds: [1, 3],
          description: "Welcome to Radio Rental. Bizarre, true scary stories told by those who lived them",
          imageURL: "https://media.vanityfair.com/photos/5db84dd101b866000810c542/1:1/w_960,h_960,c_limit/radio-rental-lede.jpg",
          cast: ["Rain Wilson", "Payne Lindsay"],
          rating: 4.4
      },
      {
          id: 4,
          title: "U Up?",
          genreName: ["Trending","Comedy" ],
          genreIds: [1, 3],
          description: "U Up? is the definitive modern dating podcast presented by Betches co-founder Jordana Abraham and comedian Jared Freid, where they discuss their take on the ebbs and flows of the crazy dating world we live in. From interpreting dating app interactions and weird sexual encounters, to defining the relationship and everything in between - they’re here to make sure you don’t die alone. For more fun dating commentary, polls, and bonus content, follow @uuppod on Instagram.",
          imageURL: "https://stitcher-classic.imgix.net/feedimagesplain600/158333.jpg?w=200&h=200",
          cast: ["Jared Freid", "Jordan Abraham"],
          rating: 4.8
      },
      {
          id: 5,
          title: "Elixir",
          genreName: ["Trending", "Society and Culture"],
          genreIds: [1, 4],
          description: "In this Prohibition-inspired fantasy, two women from opposing sides of a ban on magic unite to solve a mystery...and end up falling into forbidden love.Elsie’s sister Lou is missing. The only clue she has leads her to a Hush bar: one of the last remaining—and illegal— establishments where people consume magical elixirs. Vera’s family has made elixirs for generations at The Jaded Rose. With her father imprisoned, she is responsible for protecting their traditions...no matter the cost.",
          imageURL: "https://m.media-amazon.com/images/I/51FRiHVPxQS._SL500_.jpg",
          cast: [],
          rating: 4.6
      }
    ];

    const addToFaves = (podcast)=> {
      // make copy of faves
      // push podcast to copy
      // set state of favorites = copy
      let copy = this.state.favorites.slice()
      console.log('p', copy)
      copy.push(podcast)
      console.log('new:', copy)
      let test = [...this.state.favorites, podcast]
      console.log('TEST: ', test)
      this.setState({favorites: copy})
      // this.setState({favorites: this.state.favorites.push(podcast)})

    }

    // console.log(this.state.favorites)

    let cardsRender = () =>  podcasts.map((podcast, index) => {
      // console.log('PODCAST: ', podcast)
      return(
        <div key={index} className="card">
          <h4>{podcast.title}</h4>
          <img src={podcast.imageURL} alt='podcast' className="pod-image"/>
          <h4>Rating: {podcast.rating}</h4>
          <button onClick={()=> {
            addToFaves(podcast)
          }}>Add to List</button>
        </div>
      )
    } )

    let favesRender = () =>  this.state.favorites.map((podcast, index) => {
      console.log('PODCAST: ', podcast)
      return(
        <div key={index} className="card">
          <h4>{podcast.title}</h4>
          <img src={podcast.imageURL} alt='podcast' className="pod-image"/>
          <h4>Rating: {podcast.rating}</h4>
        </div>
      )
    } )

    return (
      <div className="App">
        <h2>Podcasts</h2>
        <div className="podcast-container">
          {cardsRender()}
        </div>
        <h2>Favorites</h2>
        <div className="faves-container">
          {favesRender()}
        </div>
      </div>
    );
  }
}


