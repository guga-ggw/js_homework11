import React, { Component } from 'react';
import './App.css';
import Book from './Book';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choosen: {}
    };
  }

  click = (card) => {
    this.setState({ choosen: card });
  }

  render() {
    const books = [
      {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Fiction",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/220px-The_Great_Gatsby_Cover_1925_Retouched.jpg"
      },
      {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Fiction",
        img:"https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"
      },
      {
        id: 3,
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "Science Fiction",
        img:"https://m.media-amazon.com/images/I/41gH8Q32oFL.jpg"
      },
      {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genre: "Classic",
        img:"https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg"
      },
      {
        id: 5,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        year: 1997,
        genre: "Fantasy",
        img:"https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg"
      },
      {
        id: 6,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        genre: "Fantasy",
        img:"https://m.media-amazon.com/images/I/61-v4nRBw+L._AC_UF1000,1000_QL80_.jpg"
      },
      {
        id: 7,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        genre: "Fiction",
        img:"https://bookshop.ge/content/uploads/products/9780241950425.jpg"
      },
      {
        id: 8,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        year: 2008,
        genre: "Science Fiction",
        img:"https://m.media-amazon.com/images/I/614SwlZNtJL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        id: 9,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        year: 1954,
        genre: "Fantasy",
        img:"https://flxt.tmsimg.com/assets/p28828_p_v10_am.jpg"
      },
      {
        id: 10,
        title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        author: "C.S. Lewis",
        year: 1950,
        genre: "Fantasy",
        img:"https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTU5OV5BMl5BanBnXkFtZTcwNjAwNzQzMw@@._V1_FMjpg_UX1000_.jpg"
      },
    ];

    console.log(`book : ${this.state.choosen.title}, author: ${this.state.choosen.author}, year: ${this.state.choosen.year}, genre : ${this.state.choosen.genre}`);

    return (
      <div className="main">
        <h1 id='header'>Books:</h1>
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} year={book.year} genre={book.genre} img={book.img} full={book} click={this.click} />
        ))}
      </div>
    );
  }
}

export default App;