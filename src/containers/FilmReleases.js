import React, {Component} from 'react';

class FilmReleases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmReleases: [
          {
            id: 1,
            name: "Bill & Ted Face the Music",
            url: "https://www.imdb.com/title/tt1086064/?ref_=adv_li_i",
            rating: "TBC",
            runtime: "TBC",
            genre: "Comedy, Music, Sci-Fi",
            releaseDate: "14 August 2020",
            image: "../assets/images/billAndTed.jpg"
          },
          {
            id: 2,
            name: "The Hunt",
            url: "https://www.imdb.com/title/tt8244784/?ref_=adv_li_tt",
            rating: "15",
            runtime: "1h 30min",
            genre: "Action, Horror, Thriller",
            releaseDate: "11 March 2020",
            image: "../assets/images/hunt.jpg"
          },
          {
            id: 3,
            name: "The Invisible Man",
            url: "https://www.imdb.com/title/tt1051906/?ref_=adv_li_tt",
            rating: "R",
            runtime: "2h 4min",
            genre: "Horror, Mystery, Sci-Fi",
            releaseDate: "28 February 2020 ",
            image: "../assets/images/invisibleMan.jpg"
          },
          {
            id: 4,
            name: "Sonic the Hedgehog",
            url: "https://www.imdb.com/title/tt3794354/?ref_=adv_li_tt",
            rating: "PG",
            runtime: "1h 39min",
            genre: "Action, Adventure, Comedy",
            releaseDate: "14 February 2020",
            image: "../assets/images/sonic.jpg"
          },
          {
            id: 5,
            name: "Extraction",
            url: "https://www.imdb.com/title/tt8936646/?ref_=adv_li_tt",
            runtime: "1h 56min",
            genre: "Action, Crime, Thriller",
            releaseDate: "24 April 2020",
            image: "../assets/images/extraction.jpg"
          },
          {
            id: 6,
            name: "Bad Boys for Life",
            url: "https://www.imdb.com/title/tt1502397/?ref_=adv_li_tt",
            runtime: "2h 4min",
            genre: "Action, Comedy, Crime",
            releaseDate: "17 January 2020",
            image: "../assets/images/badBoys.jpg"
          }
      ]
    }
  }

  render() {
    return (
      <p>Hello</p>
    )
  }
}

export default FilmReleases;
