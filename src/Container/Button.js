import React from 'react'
import { getNews } from '../actions'
import { connect } from 'react-redux';

const Button = ({getNews}) => {
    return (
        <div>
            <button onClick={getNews}>pressit</button> 
        </div>
    )
}

const mapDispatchToProps = {
    getNews: getNews,
  };
  
//   Button = connect(
//     null,
//     mapDispatchToProps,
//   )(Button);

export default connect(null, mapDispatchToProps)(Button);
