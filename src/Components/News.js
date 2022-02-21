import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category: 'general'
    }

    constructor() {

        super();

        this.state = {
            articles: [],
            loading: false,
            page: 1

        }


    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ff91737aad6943a5acb726c448e2a145&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let finalData = await data.json();
        this.setState({
            articles: finalData.articles,
            totalResult: finalData.totalResult,
        })
    }

    HandlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ff91737aad6943a5acb726c448e2a145&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let finalData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: finalData.articles,
        })

    }
    handleNextClick = async () => {

        if (this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)) {

        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ff91737aad6943a5acb726c448e2a145&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let finalData = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: finalData.articles,
            })

        }


    }

    render() {
        return (
            <>
                <div className='container my-3'>
                    <h2> Khabri-Top Headlines </h2>
                    <div className='row'>
                        {this.state.articles.map((element, key) => {
                            return <div className='col-md-4 my-3' key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 60) : " "} description={element.description ? element.description.slice(0, 50) : " "}
                                    imageUl={element.urlToImage} newsUrl={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
                            </div>


                        })}

                    </div>
                    <div className='container d-flex justify-content-between'>
                        <button type="button" className="btn btn-dark" onClick={this.HandlePrevClick}> &larr; Previous </button>
                        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>

                </div>

            </>

        )
    }
}

export default News