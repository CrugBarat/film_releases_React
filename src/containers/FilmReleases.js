import React, {Component, Fragment} from 'react';
import FilmList from '../components/FilmList';

class FilmReleases extends Component {

  constructor(props) {
    super(props);
    this.state = {
      films: [
          {
            id: 1,
            name: "Bill & Ted Face the Music",
            url: "https://www.imdb.com/title/tt1086064/?ref_=adv_li_i",
            rating: "TBC",
            runtime: "TBC",
            genre: "Comedy, Music, Sci-Fi",
            releaseDate: "14 August 2020",
            image: "billAndTed",
            description: "Once told they'd save the universe during a time-traveling adventure, 2 would-be rockers from San Dimas, California find themselves as middle-aged dads still trying to crank out a hit song and fulfill their destiny."
          },
          {
            id: 2,
            name: "The Hunt",
            url: "https://www.imdb.com/title/tt8244784/?ref_=adv_li_tt",
            rating: "15",
            runtime: "1h 30min",
            genre: "Action, Horror, Thriller",
            releaseDate: "11 March 2020",
            image: "hunt",
            description: "Twelve strangers wake up in a clearing. They don't know where they are, or how they got there. They don't know they've been chosen - for a very specific purpose - The Hunt."
          },
          {
            id: 3,
            name: "The Invisible Man",
            url: "https://www.imdb.com/title/tt1051906/?ref_=adv_li_tt",
            rating: "R",
            runtime: "2h 4min",
            genre: "Horror, Mystery, Sci-Fi",
            releaseDate: "28 February 2020 ",
            image: "invisibleMan",
            description: "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see."
          },
          {
            id: 4,
            name: "Sonic the Hedgehog",
            url: "https://www.imdb.com/title/tt3794354/?ref_=adv_li_tt",
            rating: "PG",
            runtime: "1h 39min",
            genre: "Action, Adventure, Comedy",
            releaseDate: "14 February 2020",
            image: "sonic",
            description: "After discovering a small, blue, fast hedgehog, a small-town police officer must help him defeat an evil genius who wants to do experiments on him."
          },
          {
            id: 5,
            name: "Extraction",
            url: "https://www.imdb.com/title/tt8936646/?ref_=adv_li_tt",
            rating: "18",
            runtime: "1h 56min",
            genre: "Action, Crime, Thriller",
            releaseDate: "24 April 2020",
            image: "extraction",
            description: "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord."
          },
          {
            id: 6,
            name: "Bad Boys for Life",
            url: "https://www.imdb.com/title/tt1502397/?ref_=adv_li_tt",
            rating: "18",
            runtime: "2h 4min",
            genre: "Action, Comedy, Crime",
            releaseDate: "17 January 2020",
            image: "badBoys",
            description: "Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city."
          }
      ]
    }
  }

  render() {
    return (
      <Fragment>
        <div className="menu-bar">
          <div className="menu-bar-contents">
          <div className="logo"><p className="logo-text">FRDb</p></div>
          <h2 className="title">Film Releases 2020</h2>
          </div>
        </div>
        <FilmList films={this.state.films}/>
        <div className="imdb-link">
          <a href="https://www.imdb.com/calendar/?region=gb">View All Latest Releases at IMDb</a>
        </div>
      </Fragment>
    )
  }
}

export default FilmReleases;
