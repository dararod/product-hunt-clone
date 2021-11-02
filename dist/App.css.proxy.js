// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@400;700&display=swap');\n\nbody {\n  font-family: 'Zen Kaku Gothic Antique', sans-serif;\n}\n\n.product-list {\n  margin: 0;\n  width: 50%;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}