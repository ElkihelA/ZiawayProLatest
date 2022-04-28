import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import ReactCrop from "react-image-crop";
import { Button } from "react-bootstrap";

class AppImageCropper extends Component {
  state = {
    src: "/assets/images/photo-wide-3.jpg",
    crop: { aspect: 1 / 1 },
    img: null
  };

  handleFileSelect = event => {
    let file = event.target.files[0];
    let src = URL.createObjectURL(file);
    this.setState({
      src
    });
  };

  handleCrop = async () => {
    let { crop, img } = this.state;
    if (!img) return;

    let croppedImage = await this.getCroppedImg(img, crop, "test");
    this.setState({ src: URL.createObjectURL(croppedImage) });
  };

  getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    // As Base64 string
    // const base64Image = canvas.toDataURL('image/jpeg');

    // As a blob
    return new Promise((resolve, reject) => {
      canvas.toBlob(
        blob => {
          blob.name = fileName;
          resolve(blob);
        },
        "image/jpeg",
        1
      );
    });
  };

  render() {
    let { src, crop } = this.state;

    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Extra Kits", path: "/extra-kits" },
            { name: "Image Cropper" }
          ]}
        ></Breadcrumb>
        <label htmlFor="upload-single-file">
          <Button className="btn-rounded mr-3 mb-3" as="span">
            <div className="flex flex-middle">
              <i className="i-Share-on-Cloud"> </i>
              <span>Single File</span>
            </div>
          </Button>
        </label>
        <input
          className="d-none"
          onChange={this.handleFileSelect}
          id="upload-single-file"
          type="file"
          accept="image/*"
        />

        <Button onClick={this.handleCrop} className="btn-rounded mb-3">
          Crop Image
        </Button>

        <div className="d-block">
          <ReactCrop
            src={src}
            crop={crop}
            circularCrop={true}
            onImageLoaded={image => this.setState({ img: image })}
            onChange={newCrop => {
              this.setState({ crop: newCrop });
            }}
          />
        </div>
      </div>
    );
  }
}

export default AppImageCropper;
