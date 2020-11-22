import React, { Component } from 'react';
import MovieRow from './MovieRow.js';
import $ from 'jquery';

class MoviesTVPage extends Component {
  constructor(props){
    super(props);
    this.state = {};
    //console.log("This is my initializer");
    this.performSearch("star");
  }
  performSearch(searchTerm){
    console.log("Perform search using fwemoviedb");
    const urlString = "https://api.fwemoviedb.herokuapp.com/3/search/movie?api_key=e800e93ef4806616964242bbd2619ae1b&query=" + searchTerm;

$.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        var movieRows = [];
        const results = searchResults.results;
       results.forEach((movie) => {
         movie.poster_path = "https://fwemoviedb.herokuapp.com/img/w500/" + movie.poster_path;
          const movieRow = <MovieRow key={movie.id} movie = {movie}/>
          movieRows.push(movieRow);
       })
       this.setState({row: movieRows});
      },
      error: (xhr, status, err) => {
        console.log("Fail to fetch data");
      }
    }
    )    
  }
    searchChangeHandler(event){
    console.log(event.target.value);
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm)
  }
  render() {
    return (
        <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td style={{paddingLeft: "10px"}}>
                  <h3>Fireworks Entertainment search</h3>
              </td>
              </tr>
          </tbody>
        </table>
        <header className="px-4 py-3 shadow bg-blue-900">
      <div className="container mx-auto">
        <h1
          className="text-2xl text-gray-100 tracking-wider font-bold leading-none"
        >
        Fireworks
        </h1>
        <h2
          className="text-sm text-gray-300 tracking-widest font-semibold uppercase leading-none"
        >
        Entertainment
        </h2>
      </div>
    </header>
        <form onSubmit={this.state.row}>
        <input type="search" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" name="movieSearch" onChange={this.searchChangeHandler.bind(this)} placeholder="Search for a movie" style={{fontSize: 16, width: "100%", paddingTop: 8, paddingBottom: 8, paddingLeft: 16, display:'block' }}/>
        <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-lg" value="Search" />
        </form>
        <section className="mt-4">
        <h3 className="text-xl">Popular Movies & TV Series</h3>
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://fwemoviedb.herokuapp.com/img/w1066_and_h600_bestv2/8wueWXrIkksKguZpVQL3Boabunq.jpg"
                />
              </a>

              <header
                className="flex items-center justify-between leading-tight p-2 md:p-4"
              >
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    Aarya
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">June 19, 2020</p>
              </header>
            </article>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://fwemoviedb.herokuapp.com/img/w1066_and_h600_bestv2/6dzmu9zn2OgKVQvhRCgcM9GpA92.jpg"
                />
              </a>

              <header
                className="flex items-center justify-between leading-tight p-2 md:p-4"
              >
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    Criminal Justice
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">April 5, 2019</p>
              </header>
            </article>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://fwemoviedb.herokuapp.com/img/w1066_and_h600_bestv2/xXBnM6uSTk6qqCf0SRZKXcga9Ba.jpg"
                />
              </a>
              <header
                className="flex items-center justify-between leading-tight p-2 md:p-4"
              >
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    Greyhound
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">July 10, 2020</p>
              </header>
            </article>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://fwemoviedb.herokuapp.com/img/w1066_and_h600_bestv2/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg"
                />
              </a>
              <header
                className="flex items-center justify-between leading-tight p-2 md:p-4"
              >
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    Avengers: Infinity War
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">April 27, 2018</p>
              </header>
            </article>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://fwemoviedb.herokuapp.com/img/w1066_and_h600_bestv2/3zCcTOfMfDxFujLxBTFFbD60sDV.jpg"
                />
              </a>
              <header
                className="flex items-center justify-between leading-tight p-2 md:p-4"
              >
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    Norsemen
                  </a>
                </h1>
                <p className="text-grey-darker text-sm"></p>
              </header>
            </article>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://fwemoviedb.herokuapp.com/img/w1066_and_h600_bestv2/pFCiUmWcT3FrkTrvLJLbRYVl50X.jpg"
                />
              </a>
              <header
                className="flex items-center justify-between leading-tight p-2 md:p-4"
              >
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    Panchayat
                  </a>
                </h1>
                <p className="text-grey-darker text-sm"></p>
              </header>
            </article>
          </div>
        </div>
      </section>
      </div>
    );
  }
}
export default MoviesTVPage;
