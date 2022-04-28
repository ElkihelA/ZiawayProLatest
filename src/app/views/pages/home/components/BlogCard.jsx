import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Images from "../assets/icons";

const BlogCard = ({
  data,
  blogFooterOneClass = "d-none",
  blogFooterTwoClass = "d-none",
}) => {
  return (
    <div className="bg-white border shadow-sm row row-cols-1 row-cols-md-2 mb-5">
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        <img className="h-100 w-100" src={data.image} alt=".." />
      </a>
      <div className="px-2 px-md-3 px-lg-4 py-3">
        {/* Header Start */}
        <div className="d-flex mb-2">
          <div className="mr-2">
            <img height={50} src={Images.User} alt="user" />
          </div>
          <div>
            <div className="d-flex align-items-center">
              <div className="text-capitalize">Ziaway</div>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id={`tooltip-one}`}>Administrateur</Tooltip>}
              >
                <img height="18px" src={Images.King} alt=".." />
              </OverlayTrigger>
            </div>
            <div className="text-black-50">
              janv. 4 <span className="font-weight-bold">&#183;</span>4 Min
            </div>
          </div>
        </div>
        {/* Header End */}
        <div>
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-3 d-block h4 text-primary font-weight-bold"
          >
            {data.title}
          </a>
          <p>{data.text}</p>
        </div>
        {/* Footer Start */}
        <div className="border-top pt-3 d-flex">
          <div className={` ${blogFooterOneClass}`}>
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              Rédigez un commentaire
            </a>
          </div>
          {/* <div className={` d-flex ${blogFooterTwoClass}`}>
            <span className="mr-2">52 views</span>
            <Link>0 comment</Link>
          </div> */}
        </div>
        {/* Footer End */}
      </div>
    </div>
  );
};

export default BlogCard;
