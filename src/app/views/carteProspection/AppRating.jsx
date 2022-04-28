import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import {
  MdStarBorder,
  MdStar,
  MdFavoriteBorder,
  MdFavorite,
} from "react-icons/md";
import Rating from "react-rating";

class AppRating extends Component {
  state = {
    rate: 5,
  };

  handleRatingChange = (rate) => {
    this.setState({ rate });
  };

  render() {
    let { rate } = this.state;

    return (
      <div>
        <Breadcrumb routeSegments={[{ name: "Commentaires" }]}></Breadcrumb>
        <div className="row">
          <div className="col-md-6 mb-3">
            <SimpleCard title="Pascal brisson (client vérifié)">
            <div className="ml-3 mt-3"></div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4"> Accueil général </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4"> Compétences </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4">
                  {" "}
                  Accompagnement jusqu'au suivi final{" "}
                </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4"> Rapport honoraires / services </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4"> Qualité de service </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
       
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-3">
            <SimpleCard title="Mario Guérin (client vérifié)">
            <div className="ml-3 mt-3"></div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4"> Accueil général </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4"> Compétences </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4">
                  {" "}
                  Accompagnement jusqu'au suivi final{" "}
                </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4"> Rapport honoraires / services </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4"> Qualité de service </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
       
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-3">
            <SimpleCard title="Hélène hallé (client vérifié)">
            <div className="ml-3 mt-3"></div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4"> Accueil général </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4"> Compétences </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4">
                  {" "}
                  Accompagnement jusqu'au suivi final{" "}
                </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4"> Rapport honoraires / services </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4"> Qualité de service </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
       
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-3">
            <SimpleCard title="Jean Côté (client vérifié)">
            <div className="ml-3 mt-3"></div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4"> Accueil général </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4"> Compétences </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4">
                  {" "}
                  Accompagnement jusqu'au suivi final{" "}
                </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4"> Rapport honoraires / services </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
              <div className="row ml-3 mb-3">
                <div className="col-md-4"> Qualité de service </div>
                <div className="col-md-8">
                  {" "}
                  <Rating
                    initialRating={rate}
                    emptySymbol={<MdStarBorder size={22}></MdStarBorder>}
                    fullSymbol={
                      <MdStar className="text-warning" size={22}></MdStar>
                    }
                  ></Rating>{" "}
                </div>
              </div>
       
            </SimpleCard>
          </div>
        </div>
      </div>
    );
  }
}

export default AppRating;
