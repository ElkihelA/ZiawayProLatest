import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

class UserProfile extends Component {
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Accueil", path: "/" },
            { name: "Carte de prospection", path: "/prospection/carte" },
            { name: "Profil client" }
          ]}
        ></Breadcrumb>

        <div className="card user-profile o-hidden mb-4">
          <div
           /* className="header-cover"
            style={{
              backgroundImage: "url('/assets/images/photo-wide-5.jpeg')"
            }} <img
              className="profile-picture avatar-lg mb-2"
              src="/assets/images/faces/1.jpg"
              alt=""
            />*/
          ></div>
          <div className="user-info" style={{marginTop:80}}>
           
            <p className="m-0 text-24">Aziz El Kihel</p>
            <p className="text-muted m-0">Vendeur - Acheteur </p>
          </div>
          <div className="card-body pt-4">
            <Tabs
              defaultActiveKey="Timeline"
              className="justify-content-center profile-nav mb-4"
            >
              <Tab eventKey="Timeline" title="Parcours">
                <div
                  className="tab-pane fade active show"
                  id="timeline"
                  role="tabpanel"
                  aria-labelledby="timeline-tab"
                >
                  <ul className="timeline clearfix">
                    <li className="timeline-line"></li>
                    <li className="timeline-item">
                      <div className="timeline-badge">
                        <i className="badge-icon bg-primary text-white i-Cloud-Laptop"></i>
                      </div>
                      <div className="timeline-card card">
                        <div className="card-body">
                          <div className="mb-1">
                            <strong className="mr-1">Aziz El kihel</strong>
                            Inéressé par le sujet : "Guide du vendeur"
                            <p className="text-muted">il ya 3h</p>
                          </div>
                         {/*<img
                            className="rounded mb-2"
                            src="/assets/images/photo-wide-1.jpg"
                            alt=""
          />*/}
                        
                        </div>
                      </div>
                    </li>
                    <li className="timeline-item">
                    <div className="timeline-badge">
                        <i className="badge-icon bg-danger text-white i-Love-User"></i>
                      </div>
                      <div className="timeline-card card">
                        <div className="card-body">
                          <div className="mb-1">
                            <strong className="mr-1">Aziz El Kihel</strong>
                           Évaluation d'un bien pour achat
                            <p className="text-muted">16 hours ago</p>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Modi dicta beatae illo illum iusto iste
                            mollitia explicabo quam officia. Quas ullam,
                            quisquam architecto aspernatur enim iure debitis
                            dignissimos suscipit ipsa.
                          </p>
                        
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="timeline clearfix">
                    <li className="timeline-line"></li>
                    <li className="timeline-group text-center">
                      <button className="btn btn-icon-text btn-primary">
                        <i className="i-Calendar-4"></i> Avril 2020
                      </button>
                    </li>
                  </ul>
                  <ul className="timeline clearfix">
                    <li className="timeline-line"></li>
                    <li className="timeline-item">
                      <div className="timeline-badge">
                        <i className="badge-icon bg-danger text-white i-Love-User"></i>
                      </div>
                      <div className="timeline-card card">
                        <div className="card-body">
                          <div className="mb-1">
                            <strong className="mr-1"></strong>
                            <p className="text-muted"> Apprécie le bien proposé </p>
                          </div>
                          <p>
                            <Link to="/">Bien proposé par Zia</Link> 
                          </p>
                         
                        </div>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-badge">
                        <i className="badge-icon bg-primary text-white i-Cloud-Laptop"></i>
                      </div>
                      <div className="timeline-card card">
                        <div className="card-body">
                          <div className="mb-1">
                            <strong className="mr-1">Aziz El kihel</strong>
                            Évaluation de sa maison 
                            <p className="text-muted">Lien vers la fiche du bien</p>
                          </div>
                       
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="timeline clearfix">
                    <li className="timeline-line"></li>
                    <li className="timeline-group text-center">
                      <button className="btn btn-icon-text btn-warning">
                        <i className="i-Calendar-4"></i> Inscription 3 Février in 2020
                      </button>
                    </li>
                  </ul>
                </div>
              </Tab>
              <Tab eventKey="About" title="Profil">
                <h4>Personal Information</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, commodi quam! Provident quis voluptate asperiores
                  ullam, quidem odio pariatur. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Voluptatem, nulla eos? Cum non
                  ex voluptate corporis id asperiores doloribus dignissimos
                  blanditiis iusto qui repellendus deleniti aliquam, vel quae
                  eligendi explicabo.
                </p>
                <hr />
                <div className="row">
                  <div className="col-md-4 col-6">
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-Calendar text-16 mr-1"></i> Birth Date
                      </p>
                      <span>1 Jan, 1994</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-Edit-Map text-16 mr-1"></i> Birth Place
                      </p>
                      <span>Dhaka, DB</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-Globe text-16 mr-1"></i> Lives In
                      </p>
                      <span>Dhaka, DB</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-MaleFemale text-16 mr-1"></i> Gender
                      </p>
                      <span>1 Jan, 1994</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-MaleFemale text-16 mr-1"></i> Email
                      </p>
                      <span>example@ui-lib.com</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-Cloud-Weather text-16 mr-1"></i>
                        Website
                      </p>
                      <span>www.ui-lib.com</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-Business-Man text-16 mr-1"></i>
                        Profession
                      </p>
                      <span>Digital Marketer</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-Conference text-16 mr-1"></i>
                        Experience
                      </p>
                      <span>8 Years</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-Home1 text-16 mr-1"></i> School
                      </p>
                      <span>School of Digital Marketing</span>
                    </div>
                  </div>
                </div>
                <hr />
                <h4>Autres </h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  dolore labore reiciendis ab quo ducimus reprehenderit natus
                  debitis, provident ad iure sed aut animi dolor incidunt
                  voluptatem. Blanditiis, nobis aut.
                </p>
                <div className="row">
           
                </div>
              </Tab>
              <Tab eventKey="Friends" title="Intéressé par :">
                <div className="row">
                  <div className="col-md-3">
                    <div className="card card-profile-1 mb-4">
                      <div className="card-body text-center">
                        <div className="avatar box-shadow-2 mb-3">
                          <img src="/assets/images/faces/16.jpg" alt="" />
                        </div>
                        <h5 className="m-0">Jassica Hike</h5>
                        <p className="mt-0">UI/UX Designer</p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Recusandae cumque.
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
                  </div>

                  <div className="col-md-3">
                    <div className="card card-profile-1 mb-4">
                      <div className="card-body text-center">
                        <div className="avatar box-shadow-2 mb-3">
                          <img src="/assets/images/faces/2.jpg" alt="" />
                        </div>
                        <h5 className="m-0">Frank Powell</h5>
                        <p className="mt-0">UI/UX Designer</p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Recusandae cumque.
                        </p>
                        <button className="btn btn-primary btn-rounded">
                          Contact Frank
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
                  </div>

                  <div className="col-md-3">
                    <div className="card card-profile-1 mb-4">
                      <div className="card-body text-center">
                        <div className="avatar box-shadow-2 mb-3">
                          <img src="/assets/images/faces/3.jpg" alt="" />
                        </div>
                        <h5 className="m-0">Arthur Mendoza</h5>
                        <p className="mt-0">UI/UX Designer</p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Recusandae cumque.
                        </p>
                        <button className="btn btn-primary btn-rounded">
                          Contact Arthur
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
                  </div>

                  <div className="col-md-3">
                    <div className="card card-profile-1 mb-4">
                      <div className="card-body text-center">
                        <div className="avatar box-shadow-2 mb-3">
                          <img src="/assets/images/faces/4.jpg" alt="" />
                        </div>
                        <h5 className="m-0">Jacqueline Day</h5>
                        <p className="mt-0">UI/UX Designer</p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Recusandae cumque.
                        </p>
                        <button className="btn btn-primary btn-rounded">
                          Contact Jacqueline
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
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Photos" title="Évaluations">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card text-white o-hidden mb-3">
                      <img
                        className="card-img"
                        src="/assets/images/products/headphone-1.jpg"
                        alt=""
                      />
                      <div className="card-img-overlay">
                        <div className="p-1 text-left card-footer font-weight-light d-flex">
                          <span className="mr-3 d-flex align-items-center">
                            <i className="i-Speach-Bubble-6 mr-1"></i>
                            12
                          </span>
                          <span className="d-flex align-items-center">
                            <i className="i-Calendar-4 mr-2"></i>03.12.2018
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card text-white o-hidden mb-3">
                      <img
                        className="card-img"
                        src="/assets/images/products/headphone-2.jpg"
                        alt=""
                      />
                      <div className="card-img-overlay">
                        <div className="p-1 text-left card-footer font-weight-light d-flex">
                          <span className="mr-3 d-flex align-items-center">
                            <i className="i-Speach-Bubble-6 mr-1"></i>
                            12
                          </span>
                          <span className="d-flex align-items-center">
                            <i className="i-Calendar-4 mr-2"></i>03.12.2018
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card text-white o-hidden mb-3">
                      <img
                        className="card-img"
                        src="/assets/images/products/headphone-3.jpg"
                        alt=""
                      />
                      <div className="card-img-overlay">
                        <div className="p-1 text-left card-footer font-weight-light d-flex">
                          <span className="mr-3 d-flex align-items-center">
                            <i className="i-Speach-Bubble-6 mr-1"></i>
                            12
                          </span>
                          <span className="d-flex align-items-center">
                            <i className="i-Calendar-4 mr-2"></i>03.12.2018
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card text-white o-hidden mb-3">
                      <img
                        className="card-img"
                        src="/assets/images/products/iphone-1.jpg"
                        alt=""
                      />
                      <div className="card-img-overlay">
                        <div className="p-1 text-left card-footer font-weight-light d-flex">
                          <span className="mr-3 d-flex align-items-center">
                            <i className="i-Speach-Bubble-6 mr-1"></i>
                            12
                          </span>
                          <span className="d-flex align-items-center">
                            <i className="i-Calendar-4 mr-2"></i>03.12.2018
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card text-white o-hidden mb-3">
                      <img
                        className="card-img"
                        src="/assets/images/products/iphone-2.jpg"
                        alt=""
                      />
                      <div className="card-img-overlay">
                        <div className="p-1 text-left card-footer font-weight-light d-flex">
                          <span className="mr-3 d-flex align-items-center">
                            <i className="i-Speach-Bubble-6 mr-1"></i>
                            12
                          </span>
                          <span className="d-flex align-items-center">
                            <i className="i-Calendar-4 mr-2"></i>03.12.2018
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card text-white o-hidden mb-3">
                      <img
                        className="card-img"
                        src="/assets/images/products/watch-1.jpg"
                        alt=""
                      />
                      <div className="card-img-overlay">
                        <div className="p-1 text-left card-footer font-weight-light d-flex">
                          <span className="mr-3 d-flex align-items-center">
                            <i className="i-Speach-Bubble-6 mr-1"></i>
                            12
                          </span>
                          <span className="d-flex align-items-center">
                            <i className="i-Calendar-4 mr-2"></i>03.12.2018
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
