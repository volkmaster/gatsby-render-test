const React = require("react");
const { renderToString } = require("react-dom/server");
const Article = require("./src/components/article");

module.exports.createPages = async () => {
  const element = React.createElement(Article, {
    article: { title: "Hello World" },
  });
  console.log(element);

  const html = renderToString(element);
  console.log(html);
};
