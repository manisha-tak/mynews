import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, imageUrl,newsUrl,author,date} = this.props;
    return (
      <div className="container my-3">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">by {!author?"Unkown":author} on {date}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
