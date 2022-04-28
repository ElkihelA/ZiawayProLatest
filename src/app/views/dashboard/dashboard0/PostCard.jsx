import React, { Component } from "react";
import { Link } from "react-router-dom";

const textCutOff = 196;
class PostCard extends Component {
  state = {
    showMore: false,
  };

  getExcerpt = () => {
    let description = this.props.post.excerpt.rendered;
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
    const { t } = this.props;
    let post = this.props.post;
    console.log("maison", post);
    return (
      <div className="ul-widget5__item ">
        <div className="ul-widget5__content">
          <div className="ul-widget5__post_pic">
            <img className="" src={post.image} alt="" />
          </div>
          <div className="ul-widget5__section">
            <a
              href={post.link}
              target="_blank"
              className="ul-widget_post__title"
            >
              {/* <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} /> */}
              <div>{post.title}</div>
            </a>
            <div className="ul-widget5__desc">
              {/* <div
                dangerouslySetInnerHTML={{
                  __html: "<div>" + this.getExcerpt() + "</div>",
                }}
              /> */}
              <div>{post.detail}</div>
              <span
                className="font-weight-bold text-primary"
                style={{ cursor: "pointer" }}
              >
                <a href={post.link} target="_blank">
                  {t("Dashboard.20")}
                </a>
              </span>
            </div>
            <div className="ul-widget5__info"></div>
          </div>
        </div>
      </div>
      /*  <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6">
              <div>
                <img
                  className="img-thumbnail border-0"
                  src={post.jetpack_featured_media_url}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-2">
                <h6 className="heading"><div dangerouslySetInnerHTML={{__html: post.title.rendered}} /></h6>
              </div>
              <div className="d-flex align-items-baseline">
                <h6 className="text-primary mb-0 mr-2">
                  {post.date_gmt}
                </h6>
              </div>
              <div className="mt-2 text-muted">
              
                
                  <div dangerouslySetInnerHTML={{__html:"<div>"+ this.getExcerpt()+"</div>"}} />
                  <span
                    className="font-weight-bold text-primary"
                    style={{ cursor: "pointer" }}
                    onClick={this.toggleShowMore}
                  >
                    {this.state.showMore ? "Lire moins" : "Lire plus"}
                  </span>
              
              </div>
            </div>
          </div>
        </div>
    </div>*/
    );
  }
}

export default PostCard;
