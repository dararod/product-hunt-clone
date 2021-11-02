// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".product {\n  border-bottom: 2px solid #323232;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  width: 100%;\n  max-width: 700px;\n}\n\n.product:last-child {\n  border-bottom: none;\n}\n\n.product .preview {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  margin-right: 2rem;\n  width: 250px;\n}\n\n.product .preview img {\n  height: 100px;\n}\n\n.product .info {\n  width: 390px;\n}\n\n.product .info footer {\n  align-items: center;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.product .product_controller {\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  padding: .5rem;\n  justify-content: flex-start;\n  width: 170px;\n}\n\n.product .user figure {\n  border-radius: 100px;\n  height: 40px;\n  margin: 0;\n  margin-right: .5rem;\n  overflow: hidden;\n  width: 40px;\n}\n\n.product .upvote button {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  margin-right: .5rem;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}