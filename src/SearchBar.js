import React from "react";
import reactDom from "react-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "", printType: "ALL" };
  }

  handleUpdateSearchTerm(searchTerm) {
    this.setState({ searchTerm });
  }

  handlePrintType(printType) {
    this.setState({ printType });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting");
    //This is where variables for search terms will live.
    //This is where the API call will live.

    const APIkey = "AIzaSyBuhdra_lyEQ6WcSfaJqbuEp6JEHVie2wA";
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${this.state.printType}&key=${APIkey}`;

    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((responseJSON) => {
        console.log(responseJSON);
        this.props.handleUpdateBooks(responseJSON.items);
      })
      .catch((err) => {
        console.log(err.message);
      }); 
  }

  render() {
    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
        <label for="title" style={{padding:'10px'}} >Enter a title here:</label>
        <input
          type="text"
          placeholder="Title"
          value={this.state.searchTerm}
          onChange={(event) => this.handleUpdateSearchTerm(event.target.value)}
        ></input>
        <label for="printType" style={{padding:'10px'}}>Select a print type:   </label>
        <select
          name="printType"
          value={this.state.printType}
          onChange={(event) => this.handlePrintType(event.target.value)}
        >
          <option value="BOOKS">Book</option>
          <option value="MAGAZINES">Magazine</option>
          <option value="ALL">All</option>
        </select>
        <button onClick={(event) => this.handleSubmit(event)}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
