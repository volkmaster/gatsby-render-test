const React = require("react");
const styled = require("styled-components");

const Article = ({ article }) => {
  return (
    <div>
      <Title>{article.title}</Title>
    </div>
  );
};

const Title = styled.h1`
  color: red;
`;

module.exports = Article;
