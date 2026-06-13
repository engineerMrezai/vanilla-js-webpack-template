import "./styles.css";

const app = document.querySelector("#app");

const heading = document.createElement("h1");
heading.textContent = "vanilla webpack template";

const paragraph = document.createElement("p");
paragraph.textContent = "Webpack, ESLint, Prettier, dev, build, and deploy are ready.";

app.append(heading, paragraph);