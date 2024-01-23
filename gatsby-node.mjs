import React from "react";
import { renderToString } from "react-dom/server";
import Article from "./src/components/article/index.js";

export const createPages = async () => {
  const element = React.createElement(Article, {
    article: { title: "Hello World" },
  });
  console.log(element);

  //   const html = renderToString(<Article title="Hello World" />);
  //   console.log(html);
};
