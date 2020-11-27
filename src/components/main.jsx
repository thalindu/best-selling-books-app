import React, { Component } from 'react';
import Single from './single';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class Main extends Component {

  
  state = {
    books: [],
    details: true
  }

  componentDidMount = async() => {
   const res = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=WckKmFjAqaD4GEQqBioHzvp3EFxwa2TR')
    const data = await res.json();
    this.setState({ books: data.results.books })
    
  }

  
    
    render() { 

      console.log(this.state.books[0]);
      return (
         
        <React.Fragment>
          <Router>
          <Switch>
            <Route path="/single" exact component={Single} />
          
           
            <div className="container">
            <div className="row"> {
          this.state.books.map((book) => (
            
            <div key={book.title} className="col-sm " style={{marginTop: 10}}>
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" style={{width: "18rem", height: "22rem"}} src={book.book_image} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">{book.description}</p>
              <a href={book.amazon_product_url} className="btn btn-primary" style={{margin: 10}}>Buy</a>
              <Link to={{ pathname: '/single', state: { dataBook: book} }} className="btn btn-primary">More Details</Link>
            </div>
            </div>
            </div>
            
           
           
          )) }
           </div>
            </div>
            </Switch>
        </Router>
          </React.Fragment>
        
      );
          
    }
}


 
export default Main;