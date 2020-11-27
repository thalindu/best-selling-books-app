import React, { Component } from 'react';
import Main from './main';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class Single extends Component {
    state = {
        data: []
    }

    componentDidMount () {
        const { dataBook } = this.props.location.state
        this.setState({data: dataBook})
        console.log(this.state.data)
      }

    render() { 
        
        return ( 
            <React.Fragment>
                <Router>
                <Switch>
                    <Route path="/" exact component={Main} />
                <div className="container">
                    <div className="col-lg-16 border p-3 main-section bg-white">
                        <div className="row hedding m-0 pl-3 pt-0 pb-3">
                            <h3>More Details - {this.state.data.title}</h3>
                        </div>
                        <div className="row m-0">
                            <div className="col-lg-4 left-side-product-box pb-3">
                                <img src={this.state.data.book_image} className="border p-3" />
                            </div>
                            <div className="col-lg-8">
                                <div className="right-side-pro-detail border p-3 m-0">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <span style={{fontWeight: "bolder"}}>Book Name</span>
                                            <p className="m-0 p-0">{this.state.data.title}</p>
                                            <hr className="m-0 pt-2 mt-2" />
                                        </div><br></br>
                                        <div className="col-lg-12">
                                            <span style={{fontWeight: "bolder"}}>Author</span>
                                            <p className="m-0 p-0">{this.state.data.author}</p>
                                            <hr className="m-0 pt-2 mt-2" />
                                        </div><br></br>
                                        <div className="col-lg-12">
                                            <span style={{fontWeight: "bolder"}}>Publisher</span>
                                            <p className="m-0 p-0">{this.state.data.publisher}</p>
                                            <hr className="m-0 pt-2 mt-2" />
                                        </div><br></br>
                                        <div className="col-lg-12">
                                            <span style={{fontWeight: "bolder"}}>Contributor</span>
                                            <p className="m-0 p-0">{this.state.data.contributor}</p>
                                            <hr className="m-0 pt-2 mt-2" />
                                        </div><br></br>
                                        <div className="col-lg-12">
                                            <span style={{fontWeight: "bolder"}}>ISBN</span>
                                            <p className="m-0 p-0">{this.state.data.primary_isbn10}</p>
                                            <hr className="m-0 pt-2 mt-2" />
                                        </div><br></br>
                                        <div className="col-lg-12 pt-2">
                                            <h5>Book Description</h5>
                                            <span>{this.state.data.description}</span><hr className="m-0 pt-2 mt-2" />
                                        </div><br></br>
                                        
                                        
                                        <div className="col-lg-12 mt-3">
                                            <div className="row">
                                                <div className="col-lg-6 pb-2">
                                                    <a href={this.state.data.amazon_product_url} className="btn btn-success w-100">Buy from Amazon!</a>
                                                </div>
                                                <div className="col-lg-6">
                                                    <Link to={{ pathname: '/' }} className="btn btn-primary w-100">Continue Browsing!</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Switch>
            </Router>
            </React.Fragment>

        );
    }
}
 
export default Single;