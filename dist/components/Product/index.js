import React from "../../../_snowpack/pkg/react.js";
import "./Product.css.proxy.js";
function Product({
  id,
  title,
  description,
  imageUrl,
  username,
  avatar,
  upvotes,
  downvotes,
  upvoteProduct,
  downvoteProduct
}) {
  const handleUpvote = () => upvoteProduct(id);
  const handleDownvote = () => downvoteProduct(id);
  return /* @__PURE__ */ React.createElement("li", {
    className: "product"
  }, /* @__PURE__ */ React.createElement("figure", {
    className: "preview"
  }, /* @__PURE__ */ React.createElement("img", {
    src: imageUrl,
    alt: `${title} sample image`
  })), /* @__PURE__ */ React.createElement("div", {
    className: "info"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, title), /* @__PURE__ */ React.createElement("p", null, description)), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("div", {
    className: "user product_controller"
  }, /* @__PURE__ */ React.createElement("figure", {
    className: "avatar"
  }, /* @__PURE__ */ React.createElement("img", {
    src: avatar,
    alt: "",
    height: "40",
    width: "40"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "username"
  }, username)), /* @__PURE__ */ React.createElement("div", {
    className: "upvote product_controller"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: handleUpvote
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
  }))), /* @__PURE__ */ React.createElement("span", null, upvotes)), /* @__PURE__ */ React.createElement("div", {
    className: "upvote product_controller"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: handleDownvote
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
  }))), /* @__PURE__ */ React.createElement("span", null, downvotes)))));
}
export default Product;
