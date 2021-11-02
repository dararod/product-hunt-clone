// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#application-footer {\n    text-align: center;\n    background-color: black;\n    box-sizing: border-box;\n    padding: 1rem;\n  }\n  \n  #application-footer small {\n    color: #FFFFFF;\n  }";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}