import React from "react";
import { connect } from "react-redux";

const imgStyle = {
  hight: "auto",
  width: "80%",
  border: "4px solid RebeccaPurple",
  borderRadius: "5%",
};
const articleStyle = {
  width: "50%",
  margin: "0 auto",
  color: "olive",
};

const SagaNewsItem = ({ article }) => {
    
    if(article){
      return (
        <div>
          
          <article style={articleStyle}>
            <div>
              <h1>{article.name}</h1>
              <img style={imgStyle} src={article.urlToImage} alt="" />
              <h4>{article.author}</h4>
              <a href={article.url} target="_blank">
                READ MORE
              </a>
            </div>
          </article>
        </div>
        
      );

    
    }
    return <h1>loading</h1>
    
};

const mapStateToProps = (state) => ({
    article: state.news,
})

export default connect(mapStateToProps, null)(SagaNewsItem);
