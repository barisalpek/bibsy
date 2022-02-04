import React, { useEffect,  useState } from "react";
import Check from '../assets/images/check-solid.svg';
import Cross from '../assets/images/times-solid.svg';
import {BsCheckLg} from 'react-icons/bs';
import {TiTimes} from 'react-icons/ti';

type Props = {
    mainColor: string;
    listColor: string;
    typeOf: string;
  }

  type Person = {
    name: string;
    group: string;
    email: string;
    img: string;
    phone: string;
    loanedBooks: [Book, Book, Book];
}

type Book  = {
    title: string;
    author: string;
    published: string;
    isbn: string;
    amount: number;
    loaned: number;
    inStock: boolean
}

type ListStyle = {
    theadStyle: string;
    trStyle: string;
    tdStyle: string;
    imgStyle: string;
    svgStyle: string;
}
//List component, modular by passing in props
const List = (props: Props) => {

    const Metro: Book = {
        title: 'Metro 2033',
        author: 'Dmitry Glukhovsky',
        published: '2020',
        isbn: '9789187219696',
        amount: 12,
        loaned: 7,
        inStock: true,
    };

    const Metro2: Book = {
        title: 'Metro 2034',
        author: 'Dmitry Glukhovsky',
        published: '2012',
        isbn: '9789186437664',
        amount: 12,
        loaned: 4,
        inStock: true,
    };

    const Metro3: Book = {
        title: 'Metro 2035',
        author: 'Dmitry Glukhovsky',
        published: '2018',
        isbn: '9789187891830',
        amount: 3,
        loaned: 3,
        inStock: false,
    };

    const HelloAndroid: Book = {
        title: 'Hello, Android',
        author: 'Ed Burnette',
        published: '2015',
        isbn: '9781680500370',
        amount: 3,
        loaned: 3,
        inStock: false,
    };

    const JsJq: Book = {
        title: 'JAVASCRIPT&JQUERY',
        author: 'Jon Ducket',
        published: '2014',
        isbn: '9781118531648',
        amount: 3,
        loaned: 3,
        inStock: false,
    };

    const Python: Book = {
        title: 'Programmering 1 Python',
        author: 'Jan Sundström',
        published: '2016',
        isbn: '9789173793452',
        amount: 3,
        loaned: 3,
        inStock: false,
    };

    const Clean: Book = {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        published: '2009',
        isbn: '9780132350882',
        amount: 3,
        loaned: 3,
        inStock: false,
    };

    const DB: Book = {
        title: 'Databas-Teknik',
        author: 'Thomas Padron',
        published: '2018',
        isbn: '9789144069197',
        amount: 3,
        loaned: 3,
        inStock: false,
    };

    const WDNE: Book = {
        title: 'Web development with Node and Express',
        author: 'Ethan Brown',
        published: '2019',
        isbn: '9781492053514',
        amount: 3,
        loaned: 3,
        inStock: false,
    };

    const Dejan: Person = {
        name: 'Dejan Dacic',
        group: '2021 TE4',
        email: 'dejan.dacic@elev.ga.ntig.se',
        img: 'dejan.png',
        phone: '1234567890',
        loanedBooks: [
            Metro,
            Metro2,
            Metro3,
        ],
    };

    const list = [
        Dejan,
        Dejan,
        Dejan,
        Dejan,
        Dejan,
        Dejan,
        
    ];

    const books = [
        Metro,
        Metro2,
        Metro3,
        HelloAndroid,
        JsJq,
        Python,
        Clean,
        DB,
        WDNE,
    ];

    

const listStyle: ListStyle = {
    theadStyle: 'bg-lila h-16 text-3xl text-left text-white',
    trStyle: 'w-screen odd:bg-white even:bg-ljusLila h-16',
    tdStyle: 'p-3',
    imgStyle: 'w-[20%] h-auto',
    svgStyle: 'h-[100%] ml-5',
}
    //Data from db to useState
    const [data, setData] = useState<any>([]);
    //Modularity from props can be set to member or book
    const [isMemberType, setIsMemberType] = useState<boolean | null>(null);

    useEffect(() => {
        //fetching data
        //fakeUseFetch
        //${props.mainColor}
        //${props.listColor}

        setData(books);
        //Determen what is passed in through props
        if (props.typeOf === 'member') {
            setIsMemberType(true);
        }
        else if (props.typeOf === 'book') {
            setIsMemberType(false);
        }
        else {
            setIsMemberType(null);
        }

    }, []);

    return (
        <div className="h-[100%] w-[100%] rounded">
            {/*Conditional rendering, only renders if the passed in prop is 'member'*/}
            {isMemberType && <table className="h-[100%] w-[100%] rounded overflow-y-scroll">
                <thead className={listStyle.theadStyle}>
                    <th className={listStyle.tdStyle}>Name</th>
                    <th className={listStyle.tdStyle}>Class</th>
                    <th className={listStyle.tdStyle}>Email</th>
                    <th className={listStyle.tdStyle}>Phone</th>
                    <th className={listStyle.tdStyle}>Books</th>
                </thead>
                <tbody className="">
                    {/*Loops through each person that was fetched from the db*/}
                    {data.map((item: Person) => {
                        return (
                        <tr className={listStyle.trStyle}>
                            <td className={listStyle.tdStyle}>
                                {item.name}
                            </td>
                            <td className={listStyle.tdStyle}>
                                {item.group}
                            </td>
                            <td className={listStyle.tdStyle}>
                                {item.email}
                            </td>
                            <td className={listStyle.tdStyle}>
                                {item.phone}
                            </td>
                            <td className={listStyle.tdStyle}>
                                {item.loanedBooks.length}
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>}
            {/*Conditional rendering, only renders if passed in prop is book*/}
            {!isMemberType && <div className="h-[100%] w-[100%] rounded">
                <div className="grid items-center bg-gul h-[10%] text-3xl text-left text-white rounded-t-2xl pl-5">
                    Books
                </div>
                
                <div className="h-[90%] overflow-y-auto">
                    {/*Loops through each book fetched from the db*/}
                    {data.map((item: Book, index: Number) => {
                        return (
                            <div className="w-[100%] h-auto odd:bg-white even:bg-ljusGul p-5 flex flex-row" key={String(index)}>
                                <div className={listStyle.imgStyle}>
                                    <img src={'https://image.bokus.com/images/'+ item.isbn} alt={'Omslag till boken '+item.title} />
                                </div>
                                <div className="p-3 w-[60%]">
                                    <h4 className="p-2 font-bold">Title: {item.title}</h4>
                                    <h4 className="p-2">Author: {item.author}</h4>
                                    <h4 className="p-2">Published: {item.published}</h4>
                                    <h4 className="p-2">Amount: {item.amount}</h4>
                                </div>
                                <div className="flex flex-col justify-center align-center w-[30%]">
                                    
                                    {/*If there are items in stock*/}
                                    {(item.inStock) && <>
                                        <div className='flex flex-row justify-center align-center h-[15%] text-3xl'>
                                            <div className="items-center grid mr-5">
                                                <p className="align-middle">Available: {item.amount-item.loaned}</p>
                                            </div>
                                            <div className="items-center grid">
                                                <BsCheckLg color='green' />
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <p>Loaned: {item.loaned}</p> 
                                        </div>
                                    </>}
                                    {/*If there are items in stock*/}
                                    {!(item.inStock) && 
                                    <div className='flex flex-row justify-center align-center h-[15%] text-3xl'>
                                        <div className="items-center grid mr-5">
                                            <p>Out of stock</p>
                                        </div>
                                        <div className="items-center grid">
                                            <TiTimes color='red'/>
                                        </div>
                                    </div>}
                                    
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>}
        </div>
    );
}

export default List;