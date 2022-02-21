import React, { Component } from 'react'

export class NewsItem extends Component {





  render() {
    let { title, description, imageUl, newsUrl, author, time ,source} = this.props;
    return (
      <div className="card" >
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger " style={{zIndex:1,left:"90%"}}>
            {source}
      
          </span>
        <img src={imageUl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {!author ? 'Unknown' : author} Last Updated {time}</small></p>

          <a href={newsUrl} target="_blank" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}

export default NewsItem