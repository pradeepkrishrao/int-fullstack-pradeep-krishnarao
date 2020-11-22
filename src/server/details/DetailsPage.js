import React, { Component } from 'react';
import DetailsRow from './DetailsRow.js';
import $ from 'jquery';

class DetailsPage extends Component {
//DetailsPage component is first initialized
  constructor(props){
    super(props);
//initialize App component state
    this.state = {};
// initializer
    this.performSearch("star");
  }
  performSearch(searchTerm){
    console.log("Perform search using Fireworks Entertainment");
    const urlString1 = "https://api.fwemoviedb.herokuapp.com/3/search/tv?api_key=e800e93ef4806616964242bbd2619ae1=" + searchTerm;
    $.ajax({
      url: urlString1,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        var detailsRows = [];
        const results = searchResults.results;
       results.forEach((tv) => {
         tv.poster_path = "https://fwemoviedb.herokuapp.com/img/w500" + tv.poster_path;
          const detailsRow = <DetailsRow key={tv.id} tv = {tv}/>
          detailsRows.push(detailsRow);
       })
       this.setState({row: tvRows});
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
        <input type="search" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" name="detailsSearch" onChange={this.searchChangeHandler.bind(this)} placeholder="Search for a Movie/TV show details" style={{fontSize: 16, width: "100%", paddingTop: 8, paddingBottom: 8, paddingLeft: 16, display:'block' }}/>
        <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-lg" value="Search" />
        </form>
       <div className="container mx-auto p-4 flex">
      <img
        src="https://fwemoviedb.herokuapp.com/img/w440_and_h660_face/r4jFaeVIPGl2zXEDtmwrx9orIY4.jpg"
        alt="Aarya"
        className="rounded h-64 mr-4"
      />
      <div className="w-full">
        <h1 className="text-3xl">Aarya</h1>
        <p className="text-grey-darker text-sm">June 19, 2020</p>
        <p>
          When her world suddenly turns upside down, will Aarya become the very
          thing she hated?How far will she go to survive and protect her family?
        </p>
      </div>
    </div>
      </div>
    );
  }
}

export default DetailsPage;
