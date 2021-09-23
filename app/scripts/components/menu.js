/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React from "react";
import ResultContainer from "./resultContainer";
import Loader from "react-loader-spinner";

class Menu extends React.Component {
  /**
   * Main constructor for the Menu Class
   * @memberof Menu
   */
  constructor() {
    super();
    this.state = {
      showingSearch: false,
      keyword: "",
      resultData: null,
      isLoading: false,
    };
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.keyword !== this.state.keyword) {
      if (!!this.state.keyword) {
        this.setState({ isLoading: true });
        fetch(
          `http://localhost:3035/api/products/search?keyWord=${this.state.keyword.toLowerCase()}`
        )
          .then((response) => response.json())
          .then((data) => {
            this.setState({ resultData: data.data || [] });
            this.setState({ isLoading: false });
          });
      }
    }
  }
  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */
  showSearchContainer(e) {
    e.preventDefault();
    this.setState({
      showingSearch: !this.state.showingSearch,
    });
  }

  /**
   * Calls upon search change
   * @memberof Menu
   * @param e [Object] - the event from a text change handler
   */
  onSearch(e) {
    // Start Here
    // ...
    e.preventDefault();
    this.setState({
      keyword: e.target.value,
    });
  }

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  render() {
    return (
      <header className="menu">
        <div className="menu-container">
          <div className="menu-holder">
            <h1>ELC</h1>
            <nav>
              <a href="#" className="nav-item">
                HOLIDAY
              </a>
              <a href="#" className="nav-item">
                WHAT'S NEW
              </a>
              <a href="#" className="nav-item">
                PRODUCTS
              </a>
              <a href="#" className="nav-item">
                BESTSELLERS
              </a>
              <a href="#" className="nav-item">
                GOODBYES
              </a>
              <a href="#" className="nav-item">
                STORES
              </a>
              <a href="#" className="nav-item">
                INSPIRATION
              </a>

              <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                <i className="material-icons search">search</i>
              </a>
            </nav>
          </div>
        </div>
        <div
          className={
            (this.state.showingSearch ? "showing " : "") + "search-container"
          }
        >
          <input type="text" onChange={(e) => this.onSearch(e)} />
          <a href="#" onClick={(e) => this.showSearchContainer(e)}>
            <i className="material-icons close">close</i>
          </a>
          {this.state.isLoading ? (
            <div className={"busy-holder"}>
              <Loader
                className={"busy"}
                type="ThreeDots"
                color="#000000"
                height={100}
                width={100}
                timeout={3000}
              />
            </div>
          ) : (
            this.state.resultData && (
              <ResultContainer resultData={this.state.resultData} />
            )
          )}
        </div>
      </header>
    );
  }
}

// Export out the React Component
module.exports = Menu;
