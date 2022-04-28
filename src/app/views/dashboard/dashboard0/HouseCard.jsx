import React, { Component } from "react";

const textCutOff = 96;
class HouseCard extends Component {
  state = {
    showMore: false,
  };

  getAddress = () => {
    let description = this.props.maison.description;
    let showMore = this.state.showMore;
    return showMore
      ? description + " "
      : description.substring(0, textCutOff) + "...";
  };

  toggleShowMore = () => {
    this.setState((prevState) => ({
      showMore: !prevState.showMore,
    }));
  };

  render() {
    let maison = this.props.maison;
    console.log("maison", maison);
    return (
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6">
              <div>
                <img
                  className="img-thumbnail border-0"
                  src={"/assets/images/Meeting-room-02.jpg"}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-2">
                <h6 className="heading">{maison.adresse}</h6>
              </div>
              <div className="d-flex align-items-baseline">
                <h6 className="text-primary mb-0 mr-2">
                  {maison.evalMunicTot}
                </h6>
              </div>
              <div className="mt-2 text-muted">
                <p>
                  {this.getAddress()}
                  <span
                    className="font-weight-bold text-primary"
                    style={{ cursor: "pointer" }}
                    onClick={this.toggleShowMore}
                  >
                    {this.state.showMore ? "Lire moins" : "Lire plus"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HouseCard;
