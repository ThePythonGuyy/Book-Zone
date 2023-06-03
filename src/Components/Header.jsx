import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router'
import { fetchDoc } from '../Config/firestore'
import { useState, useEffect } from 'react'
import Home from './Home'

const Header = (props) => {

    const [loading, setLoading] = useState(false)
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')
    const [store, setStore] = useState([])
    // const [count, setCount] = useState(0)

    // const [temp, setTemp] = useState(5)

    const fetchBook = async () => {
        setLoading(true)

        const data = await fetchDoc()

        data.forEach((book) => {
            let k=String(book.id)
            book.id = k.concat('.jpg')
        })
        setBooks([...data])
        // setCount([books.length])
        setStore([...data])
        setLoading(false)
        
    }

    const genre = (q) => {
        console.log('hhh')
        if(q=='home'){
            setBooks([...store])
            return
        }
        const k=[]
        store.forEach(book => {
            if(book.genre == q){
                // console.log(book)
                k.push({...book})
            }
        })
        setBooks([...k])
        // setCount[books.length]
        // console.log(k)
    }

    const filter = () => {
        if(search == ''){
            genre('home')
        }
        const m =[]
        
        store.forEach(book => {
            let title=String(book.title).toLocaleLowerCase()
            let author=String(book.author).toLowerCase()
            if(author.includes(search.toLocaleLowerCase()) || title.includes(search.toLocaleLowerCase())){
                m.push({...book})
            }
        })
        setBooks([...m])
    }

    useEffect(() => {
        fetchBook()
    }, [])

  return (
    <>
    <Head>
        <Top>
        <Logo>
            <a href="/"><img src="/images/lib2.png" alt="" /></a>
            
        </Logo>

        <Search>
            <img src="icons/search.svg" alt="" />
            {/* <Rdiv> */}
            <input type="text" 
                value={search}
                placeholder='Search books'
                onChange={(e) => {
                    setSearch(e.target.value)
                    filter()
                }
                    
                }
            />
            {/* <h4> No. of books {count}</h4> */}
            {/* </Rdiv> */}
        </Search>
        </Top>
        <Ul>
            <li> <a href='/'>Home</a> </li>
            <li onClick={()=>{genre('home')}}><a>All Books</a></li>
            <li onClick={()=>{genre('fantasy')}}><a>Fantasy</a></li>
            <li onClick={()=>{genre('comics')}}><a>Comics</a></li>
            <li onClick={() => {genre('sci-fi')}}><a>Sci-Fi</a></li>
            <li onClick={()=>{genre('novels')}}><a>Novels</a></li>
            {/* <li onClick={()=>{genre('magzine')}}><a>Magazine</a></li> */}
            {/* <li><button onClick={()=>{print()}}>Click</button></li> */}
        </Ul>
    </Head>
    <div>
        <Home books={books}  />
    </div>
    </>
  )
}


const Head = styled.div`
    position: fixed;
    /* width: 100%; */
    height: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: left;
    /* justify-content: center; */


    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {
        position: relative;
    }
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation:landscape) {
        /* position: relative; */
    }
`;

const Top = styled.div`
    display: flex;
    position: absolute;
    /* margin-top: -5vh; */
    gap: 100px;
    align-items: center;
    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {
        position: fixed;
        margin: 0;
        /* margin-top: 120px; */
        flex-direction: column;
        align-items: start;
        gap: 0px;
    }
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation:landscape) {
        margin-top: -20px;
        position: fixed;
        gap: 80px;
    }
`;

const Logo = styled.div`
    

    img{
            width: 9vw;
            background: transparent;
        }

    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {
        img{
            width: 80px;
        }
    }
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation:landscape) {
        img{
            width: 100px;
        }
    }
`;

const Search = styled.div`
    position: relative;
    input{
        z-index: 0;
        width: 30vw;
        height: 45px;
        background-color: #33373D;
        outline: none;
        border: none;
        border-radius: 15px;
        opacity: 0.85;
        font-size: 20px;
        color: white;
        padding-left: 46px;
        outline: 2px solid black;
        &:hover{
            width: 35vw;
            transition: 0.36s ease-in-out;
        }
    }

    img{
        position: absolute;
        z-index: 10;
        top: 13px;
        left: 15px;
        

    }
    

    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {
        margin-left: 10px;
        input{
            width: 360px;
            font-size: 16px;

            /* margin-left: 15px;; */
        }
    }
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation:landscape) {
        input{
            width: 360px;
            height: 50px;
        }
    }
`;

const Rdiv = styled.div`
    h4{
        color: white;
    }
`;
const Ul = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 28vh;
    /* gap: 1vh; */
    li{

        cursor: pointer;
        opacity: 0.4;
        padding: 2.8vh 0;
        a{
        font-size: 1.3vw;
        color: white;
        font-weight: 600;
        text-decoration: none;
        
        }

        &:hover{
            opacity: 1;
            margin-left: 10px;
            transition: 0.36s ease;
        }

    }

    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {
        display: none;
    }
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation:landscape) {
       margin: 0;
       margin-top: 24vh;
       margin-left: 7px;
       gap: 0px;

       li{
            padding: 0;
            padding: 7px 0;

            a{
                font-size: 13px;
            }

            &:hover{
                margin-left: 7px;
            }
       }
    }
`;
export default Header
