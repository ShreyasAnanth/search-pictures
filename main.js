import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "reveal.js/dist/theme/beige.css";



import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

let deck = new Reveal({
    plugins: [Markdown],
    width: 960,
    height: 1000,
});
deck.initialize();