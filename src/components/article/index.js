import React from "react";
import styled from "styled-components";

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

export default Article;