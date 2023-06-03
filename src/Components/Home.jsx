import React from "react";
import styled from "styled-components";
import Book from "./Book";
const Home = (props) => {
  // console.log(props.bookSt)
  // props.books.forEach(book => {
  //   console.log(book.author)
  //   console.log(book.title)
  //   console.log(book.id)
  // })
  return (
    <HomeC>
      <DispBook>
        {props.books.map((book) => (
          <Book title={book.title} author={book.author} imgS={book.id} />
        ))}
      </DispBook>
    </HomeC>
  );
};

const HomeC = styled.div`
  /* width: 100%; */
  /* top: 30px; */
  /* height: 55%; */
  z-index: -1;
  position: absolute;
  /* bottom: 2px; */
  margin-top: 170px;
  margin-left: 230px;
  margin-bottom: 130px;
  padding-bottom: 20px;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    /* position: relative; */
    width: 100%;
    margin: 0;
    margin-top: 180px;
    padding: 0 15px;
    padding-left: 0px;
  }
  @media all and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) {
    /* position: relative; */
    margin: 0;
    padding: 0;
    margin-top: 100px;
    margin-left: 140px;
    /* margin-bottom: 45px; */
  }
  /* background: pink; */
`;

const DispBook = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3vw;

  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    grid-template-columns: 1fr 1fr;
    /* gap: 60px; */
    column-gap: 40px;
    row-gap: 30px;
  }
  @media all and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 40px;
  }
`;

export default Home;
