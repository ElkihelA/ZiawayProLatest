import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class AppCard extends Component {
  state = {
    cardList1: [
      {
        icon: "i-Add-User",
        title: "205",
        subtitle: "new leads"
      },
      {
        icon: "i-Financial",
        title: "4021",
        subtitle: "sales"
      },
      {
        icon: "i-Checkout-Basket",
        title: "80",
        subtitle: "checkout"
      },
      {
        icon: "i-Money-2",
        title: "120",
        subtitle: "expense"
      }
    ],
    cardList2: [
      {
        icon: "i-Data-Download",
        subtitle: "Today's Upload",
        title: "21"
      },
      {
        icon: "i-Add-User",
        subtitle: "new users",
        title: "53"
      },
      {
        icon: "i-Money-2",
        subtitle: "total sales",
        title: "4031"
      },
      {
        icon: "i-Money-2",
        title: "4031"
      },
      {
        icon: "i-Gear",
        title: "4031"
      },
      {
        icon: "i-Bell",
        title: "4031"
      }
    ],
    bigImageCard: [
      {
        title: "card title",
        subtitle: "Last updated 3 mins ago",
        date: "03.12.2018",
        comment: 12,
        photoUrl: "/assets/images/photo-long-1.jpg"
      },
      {
        title: "card title",
        subtitle: "Last updated 3 mins ago",
        date: "09.11.2019",
        comment: 22,
        photoUrl: "/assets/images/photo-long-2.jpg"
      },
      {
        title: "card title",
        subtitle: "Last updated 3 mins ago",
        date: "09.11.2019",
        comment: 22,
        photoUrl: "/assets/images/photo-long-2.jpg"
      }
    ]
  };

  render() {
    let { cardList1 = [], cardList2 = [], bigImageCard = [] } = this.state;

    return (
      <Fragment>
        <div className="row">
          {cardList1.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                <div className="card-body text-center">
                  <i className={card.icon}></i>
                  <div className="content">
                    <p className="text-muted mt-2 mb-0 text-capitalize">
                      {card.subtitle}
                    </p>
                    <p className="lead text-primary text-24 mb-2 text-capitalize">
                      {card.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="row">
              {cardList2.map((card, index) => (
                <div key={index} className="col-md-4">
                  <div className="card card-icon-big mb-4">
                    <div className="card-body text-center">
                      <i className={card.icon}></i>
                      <p className="text-muted mt-2 mb-0 text-capitalize">
                        {card.subtitle}
                      </p>
                      <p className="lead text-18 mt-2 mb-0 text-capitalize">
                        {card.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-6">
                <div className="card card-profile-1 mb-4">
                  <div className="card-body text-center">
                    <div className="avatar box-shadow-2 mb-3">
                      <img src="/assets/images/faces/16.jpg" alt="" />
                    </div>
                    <h5 className="m-0">Jassica Hike</h5>
                    <p className="mt-0">UI/UX Designer</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae cumque.
                    </p>
                    <button className="btn btn-primary btn-rounded">
                      Contact Jassica
                    </button>
                    <div className="card-socials-simple mt-4">
                      <span className="cursor-pointer px-1">
                        <i className="i-Linkedin-2"></i>
                      </span>
                      <span className="cursor-pointer px-1">
                        <i className="i-Facebook-2"></i>
                      </span>
                      <span className="cursor-pointer px-1">
                        <i className="i-Twitter"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card mb-4">
                  <div className="card-header">Featured</div>
                  <div className="card-body">
                    <h5 className="card-title">Card title text</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <Link to="/" className="btn btn-primary btn-rounded">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card bg-dark text-white o-hidden mb-4">
                  <img
                    className="card-img"
                    src="/assets/images/photo-wide-2.jpg"
                    alt="Card"
                  />
                  <div className="card-img-overlay">
                    <h5 className="card-title text-white">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">Last updated 3 mins ago</p>
                  </div>
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link to="/" className="card-link">
                      Card link
                    </Link>
                    <Link to="/" className="card-link">
                      Another link
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="row">
              {/* BG IMAGE CARDS */}
              {bigImageCard.map((card, index) => (
                <div key={index} className="col-md-6">
                  <div className="card bg-dark text-white o-hidden mb-4">
                    <img className="card-img" src={card.photoUrl} alt="Card" />
                    <div className="card-img-overlay">
                      <div className="text-center pt-4">
                        <h5 className="card-title mb-2 text-white text-capitalize text-capitalize">
                          {card.title}
                        </h5>
                        <div className="separator border-top mb-2"></div>
                        <p className="text-small font-italic">
                          {card.subtitle}
                        </p>
                      </div>
                      <div className="p-1 text-left card-footer font-weight-light d-flex">
                        <span className="mr-3 d-flex align-items-center">
                          <i className="i-Speach-Bubble-6 mr-1"></i>
                          {card.comment}
                        </span>
                        <span className="d-flex align-items-center">
                          <i className="i-Calendar-4 mr-2"></i>
                          {card.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-6">
                <div className="card mb-4 o-hidden">
                  <img
                    className="card-img-top"
                    src="/assets/images/photo-wide-2.jpg"
                    alt=""
                  />
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Illum, cumque!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card mb-4 o-hidden">
                  <img
                    className="card-img-top"
                    src="/assets/images/photo-wide-3.jpg"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                  </ul>
                  <div className="card-body">
                    <Link to="/" className="card-link">
                      Card link
                    </Link>
                    <Link to="/" className="card-link">
                      Another link
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AppCard;
