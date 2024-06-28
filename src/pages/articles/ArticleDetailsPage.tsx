import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetailsPage = () => {
  const params = useParams();
  return <div>Article {params.articleId}</div>;
};

export default ArticleDetailsPage;
