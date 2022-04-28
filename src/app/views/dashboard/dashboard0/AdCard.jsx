import React, { Component } from "react";

class AdCard extends Component {
  render() {
    let ad = this.props.ad;
    console.log("ad", ad);
    return (
      <div className="card bg-dark text-white o-hidden rounded-0 mb-4">
        <img className="card-img" src={ad.photo} alt="Card" />
      </div>
    );
  }
}

export default AdCard;
