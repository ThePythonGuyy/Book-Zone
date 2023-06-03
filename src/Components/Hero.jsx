import React from "react";
import styled from "styled-components";
import "./button.css";

const Hero = () => {
  return (
    <HeroC>
      <Div>
        <Logo>
          <img src="/images/lib2.png" />
        </Logo>
        <Head>
          <h1>BOOK ZONE</h1>
          <p>
            Welcome to our library, a haven for book lovers, knowledge seekers,
            and curious minds! Step into a world where stories unfold,
            information blossoms, and imaginations soar. Our library is more
            than just a collection of books; it's a sanctuary where ideas come
            alive, and learning knows no bounds.
          </p>
          <a href="/books">
            <button className="glowing-btn">
              <span className="glowing-txt">
                B<span className="faulty-letter">O</span>OKS
              </span>
            </button>
          </a>
        </Head>
        <CardCol>
          <Card>
            <Content>
              <img src="/images/comic.jpg" />
              <h2>Comics</h2>
              {/* <p>hello</p> */}
            </Content>
          </Card>

          <Card>
            <Content>
              <img src="/images/sci-fic.jpg" />
              <h2>sci-fic</h2>
              {/* <p>hello</p> */}
            </Content>
          </Card>

          <Card>
            <Content>
              <img src="/images/magazine.jpg" />
              <h2>Magazine</h2>
              {/* <p>hello</p> */}
            </Content>
          </Card>

          <Card>
            <Content>
              <img src="/images/fantasy1.png" />
              <h2>Fantasy</h2>
              {/* <p>hello</p> */}
            </Content>
          </Card>
        </CardCol>
      </Div>
    </HeroC>
  );
};

const HeroC = styled.div`
  position: absolute;
  /* opacity: 0.1;  */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  /* height: 100vw; */
  /* overflow-y: hidden; */
  /* background-image: url("/images/lib4.jpg"); */
  background: url("images/lib4.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  /* background-size: cover; */
  /* background-clip: content-box; */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: poppins;
`;
const Div = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  max-height: 12vh;
  img {
    width: 10vw;
  }
  /* background-color: pink; */
  height: 20%;
  /* overflow-y: scroll; */

  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    margin: 0;
    max-height: 10%;
    margin-left: 10px;
    img {
      width: 100px;
    }
  }
  @media all and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) {
    margin: 0;
    margin-top: 8px;
    img {
      width: 100px;
    }
  }
`;

const Head = styled.div`
  width: 100%;
  max-height: 53vh;
  padding: 0;
  margin: 0;
  /* opacity: 0; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 340px; */
  h1 {
    color: #fafeffe0;
    font-size:5vw;
    margin-top: 4vh;
    font-family: "Cinzel", serif;
    font-family: "Josefin Sans", sans-serif;
    /* margin-bottom: 20px; */
  }

  p {
    width: 40%;
    margin-top: -6vh;
    font-size: 1.2vw;
    color: white;
    /* margin-top: 160px; */
    font-family: "Josefin Sans", sans-serif;
  }

  a {
      /* button{
        width: 215px;
        height: 40px;
        span{
          font-size: 12px;
        }
      } */
  }
  /* background-color: red; */

  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    /* background-color: #ca4605; */
    margin-top: 30px;
    h1 {
      font-size: 55px;
      margin-bottom: 60px;
    }

    p {
      display: none;
    }

    a{
      button{
        width: 32vw;
      }

    }
  }
  @media all and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) {
    h1 {
      font-size: 50px;
    }

    p {
      display: none;
    }

    a {
      margin: 0;
      /* display: none; */
      margin-top: -40px;
      /* button {
        width: 215px;
        height: 40px;
        span {
          font-size: 10px;
        } */
      }
    }
  }
`;

const CardCol = styled.div`
  width: 100%;
  margin-top: 8vh;
  display: grid;
  /* position: fixed; */
  grid-template-columns: 1fr 1fr 1fr 1fr;

  /* flex-direction: column; */
  gap: 10px;
  padding: 0 3vw;

  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    margin-top: 90px;
    grid-template-columns: 1fr 1fr;
    gap: 10;
    row-gap: -10px;
    padding: 0 20px;
  }
  @media all and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) {
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  height: 30vh;
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);
  /* box-shadow: 0 8px 8px -4px lightblue; */
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  font-family: "Roboto", sans-serif;

  img {
    /* width: 240px; */
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.7;
    transition: opacity 0.2s ease-out;
  }

  h2 {
    position: absolute;
    font-size: 2.3vw;
    inset: auto auto 30px 30px;
    margin: 0;
    bottom: -20px;
    transition: inset 0.3s 0.3s ease out;
    font-weight: 700;
    text-transform: uppercase;
    opacity: 0;
    font-family: "mars";
  }

  /* p,a{
    position: absolute;
    opacity: 0;
    max-width: 80%;
    transition: opacity 0.4s ease-out;
  } */

  /* p{
    inset: auto auto 80px 30px;
  }

  a{
    inset: auto auto 220px 30px;
    color: inherit;
    text-decoration: none;
  } */

  &:hover h2 {
    inset: auto auto 10vh 50px;
    transition: inset 0.3s ease-out;
    opacity: 0.9;
    transition: opacity 0.5s 0.1s ease-in;
  }

  /* &:hover p, &:hover a, &:hover h2 {
    opacity: 0.9;
    transition: opacity .5s .1s ease-in;
  } */

  &:hover img {
    transition: opacity 0.3s ease-in;
    opacity: 0.3;
  }

  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    height: 120px;

    img {
      /* width: 240px; */
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0.7;
      transition: opacity 0.2s ease-out;
    }

    h2 {
      position: absolute;
      font-size: 16px;
      inset: auto auto 30px 30px;
      margin: 0;
      bottom: -20px;
      transition: inset 0.3s 0.3s ease out;
      font-weight: 700;
      text-transform: uppercase;
      opacity: 0;
      font-family: "mars";
    }

    &:hover h2 {
      inset: auto auto 50px 30px;
      transition: inset 0.3s ease-out;
      opacity: 0.9;
      transition: opacity 0.5s 0.1s ease-in;
    }

    &:hover img {
      transition: opacity 0.3s ease-in;
      opacity: 0.3;
    }
  }
  @media all and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) {
    height: 120px;
    img {
      /* width: 240px; */
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0.7;
      transition: opacity 0.2s ease-out;
    }

    h2 {
      position: absolute;
      font-size: 16px;
      inset: auto auto 30px 30px;
      margin: 0;
      bottom: -20px;
      transition: inset 0.3s 0.3s ease out;
      font-weight: 700;
      text-transform: uppercase;
      opacity: 0;
      font-family: "mars";
    }

    &:hover h2 {
      inset: auto auto 40px 20px;
      transition: inset 0.3s ease-out;
      opacity: 0.9;
      transition: opacity 0.5s 0.1s ease-in;
    }

    &:hover img {
      transition: opacity 0.3s ease-in;
      opacity: 0.3;
    }
  }
`;

export default Hero;
