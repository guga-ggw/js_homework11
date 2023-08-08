import React, { Component } from 'react';

class Book extends Component {
  render() {
    const { title, author, year, genre, img, full, click } = this.props;
    
    return (
      <div className='card'>
        <img src={img} alt="" />
        <div className='info'>
          <h1>{title}</h1>
          <div className="age">
            <h2>{author}</h2>
            <h2>{year}</h2>
          </div>
        </div>
        <button onClick={() => click(full)}>Console</button>
      </div>
    );
  }
}

export default Book;