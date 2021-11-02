// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#application-header {\n  background-color: #323232;\n  box-sizing: border-box;\n  padding: 1rem;\n}\n\n#application-header h1 {\n  color: #DDDDDD;\n  font-size: 1.5rem;\n  margin: 0 auto;\n  padding: 0;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}