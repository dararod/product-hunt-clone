import React, {useState} from "../_snowpack/pkg/react.js";
import Header from "./components/Header/index.js";
import Product from "./components/Product/index.js";
import Footer from "./components/Footer/index.js";
import database from "./database.json.proxy.js";
import "./App.css.proxy.js";
function App() {
  const [productsList, setProductsList] = useState(database);
  const upvoteProduct = (id) => {
    const productListClone = [...productsList];
    const elementIndex = productListClone.findIndex((el) => el.id === id);
    productListClone[elementIndex] = {
      ...productListClone[elementIndex],
      upvotes: productListClone[elementIndex].upvotes + 1
    };
    setProductsList(productListClone);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("ul", {
    className: "product-list"
  }, productsList.map((product) => /* @__PURE__ */ React.createElement(Product, {
    id: product.id,
    title: product.title,
    description: product.description,
    imageUrl: product.image_url,
    username: product.user.username,
    avatar: product.user.avatar,
    upvotes: product.upvotes,
    downvotes: product.downvotes,
    upvoteProduct
  })))), /* @__PURE__ */ React.createElement(Footer, null));
}
export default App;
