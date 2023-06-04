import React from "react";
import styled from "styled-components";
import "./button.css";
import { useState } from "react";

const Book = ({ title, author, imgS }) => {
  const [borrow, setBorrow] = useState("BORROW");

  const bor = () => {
    if (borrow == "BORROW") {
      setBorrow("RETURN");
    } else {
      setBorrow("BORROW");
    }
  };
  return (
    <Card>
      <BookC>
        <img src={`/images/Books/${imgS}`} alt="" />
        <h2>{title}</h2>
        <p>{author}</p>
        <a>
          <button onClick={() => bor()} className="rainbow" type="button">
            {borrow}
          </button>
        </a>
      </BookC>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;
const BookC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  width: 15vw;
  height: 50vh;
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);
  /* box-shadow: 0 8px 8px -4px lightblue; */
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  font-family: "Josefin Sans", sans-serif;

  img {
    /* width: 240px; */
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.9;
    transition: opacity 0.2s ease-out;
  }

  h2 {
    position: absolute;
    inset: auto auto 30px 30px;
    margin: 0;
    transition: inset 0.3s 0.3s ease out;
    font-weight: 700;
    text-transform: uppercase;
    opacity: 0;
    font-size: 1.4vw;
    /* margin-right: 0.3vw; */
  }

  p,
  a {
    position: absolute;
    opacity: 0;
    max-width: 80%;
    transition: opacity 0.4s ease-out;
    button{
      width: 11vw;
      height: 7.1vh;
      margin-left: 0.8vw;
      font-size: 1.0vw;
      /* font-family: "Josefin Sans", sans-serif; */
    }
    
  }

  p {
    inset: auto auto 15vh 30px;
    font-size: 1.1vw;
    margin-left: 0.6vw;
  }

  a {
    inset: auto auto 40px 17px;
    color: inherit;
    text-decoration: none;
  }

  &:hover h2 {
    inset: auto auto 33vh 30px;
    transition: inset 0.3s ease-out;
    margin-top: 4vh;
  }

  &:hover p,
  &:hover a,
  &:hover h2 {
    opacity: 0.9;
    transition: opacity 0.5s 0.1s ease-in;
  }

  &:hover img {
    transition: opacity 0.3s ease-in;
    opacity: 0.09;
  }

  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    width: 150px;
    height: 230px;

    h2{
      padding-top: 2vh;
    }

    a {
      inset: auto auto 25px 17px;
      padding-right: 2vw;
      button {
        width: 120px;
        height: 38px;
        font-size: 2vw;
      
      }
    }

    p {
      inset: auto auto 70px 30px;
      font-size: 11px;
    }

    &:hover h2 {
      inset: auto auto 140px 30px;
      font-size: 14px;
      margin-top: 1.5vh;
      transition: inset 0.3s ease-out;
      /* margin-right: 1.5vw; */
    }
  }
  @media all and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) {
    width: 170px;
    height: 260px;

    a {
      inset: auto auto 25px 17px;
      /* margin-right: 3vw; */
      /* right: 2vw; */
      button {
        width: 140px;
        height: 38px;
        /* font-size: 1.5vw; */
      }
    }

    p {
      inset: auto auto 90px 30px;
      font-size: 14px;
    }

    &:hover h2 {
      inset: auto auto 170px 30px;
      font-size: 18px;
      transition: inset 0.3s ease-out;
    }
  }
`;

export default Book;
