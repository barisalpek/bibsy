import React, { useEffect,  useState } from "react";
import {BsCheckLg} from 'react-icons/bs';
import {TiTimes} from 'react-icons/ti';
import getData from "./getData";

type Props = {
    mainColor: string;
    listColor: string;
    typeOf: string;
    request: string;
  }

  type Student = {
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

const listStyle: ListStyle = {
    theadStyle: 'flex flex-row items-center bg-lila h-[10%] text-3xl text-left text-white rounded-t-2xl pl-5',
    trStyle: 'w-full h-auto odd:bg-white even:bg-ljusLila p-5 flex flex-row',
    tdStyle: 'p-3',
    imgStyle: 'w-[10%] h-auto',
    svgStyle: 'h-[100%] ml-5',
}
    //Data from db to useState
    const [data, setData] = useState<any>([]);
    //Modularity from props can be set to member or book
    const [isStaff, setIsStaff] = useState<boolean>(false);
    const [isStudents, setIsStudents] = useState<boolean>(false);
    const [isAllBooks, setIsAllBooks] = useState<boolean>(false);
    const [isAvailableBooks, setIsAvailableBooks] = useState<boolean>(false);
    const [isBorrowedBooks, setIsBorrowedBooks] = useState<boolean>(false);
    const [isMissingBooks, setIsMissingBooks] = useState<boolean>(false);

    //Runs only on first update
    useEffect(() => {
        //fetching data
        getData("http://localhost:3001/" + props.request)
        .then((res) => {
            setData(res);
        });

        //setData(books);
        //Determine what is passed in through props
        if (props.typeOf === 'Staff') {
            setIsStaff(true);
            setIsStudents(false);
            setIsAllBooks(false);
            setIsAvailableBooks(false);
            setIsBorrowedBooks(false);
            setIsMissingBooks(false);
        }
        else if (props.typeOf === 'Students') {
            setIsStudents(true);
            setIsStaff(false);
            setIsAllBooks(false);
            setIsAvailableBooks(false);
            setIsBorrowedBooks(false);
            setIsMissingBooks(false);
        }
        else if (props.typeOf === 'AllBooks'){
            setIsAllBooks(true);
            setIsStaff(false);
            setIsStudents(false);
            setIsAvailableBooks(false);
            setIsBorrowedBooks(false);
            setIsMissingBooks(false);
        }
        else if (props.typeOf === 'AvailableBooks'){
            setIsAvailableBooks(true);
            setIsStaff(false);
            setIsStudents(false);
            setIsAllBooks(false);
            setIsBorrowedBooks(false);
            setIsMissingBooks(false);
        }
        else if (props.typeOf === 'BorrowedBooks'){
            setIsBorrowedBooks(true);
            setIsAvailableBooks(false);
            setIsStaff(false);
            setIsStudents(false);
            setIsAllBooks(false);
            setIsMissingBooks(false);
        }
        else if (props.typeOf === 'MissingBooks'){
            setIsMissingBooks(true);
            setIsBorrowedBooks(false);
            setIsAvailableBooks(false);
            setIsStaff(false);
            setIsStudents(false);
            setIsAllBooks(false);
        }

    }, []);

    return (
        <div className="h-[100%] w-[100%] rounded -z-[1]">
            {isStaff && <><div className="h-[100%] w-[100%] bg-white rounded-2xl">
                <div className={listStyle.theadStyle}>
                    <div className={listStyle.tdStyle}>Name</div>
                    <div className={listStyle.tdStyle}>Email</div>
                    <div className={listStyle.tdStyle}>Phone</div>
                    <div className={listStyle.tdStyle}>Books</div>
                </div>
                <div className="h-[90%] overflow-y-auto rounded-2xl">
                    {/*Loops through each person that was fetched from the db*/}
                    {data.map((item: Student, index: Number) => {
                        return (
                        <div className={listStyle.trStyle} key={index.toString()}>
                            <div className={listStyle.tdStyle}>
                                {item.name}
                            </div>
                            <div className={listStyle.tdStyle}>
                                {item.email}
                            </div>
                            <div className={listStyle.tdStyle}>
                                {item.phone}
                            </div>
                            <div className={listStyle.tdStyle}>
                                {item.loanedBooks.length}
                            </div>
                        </div>)
                    })}
                </div>
            </div></>}
            {isStudents && <><div className="h-[100%] w-[100%] bg-white rounded-2xl">
                <div className={listStyle.theadStyle}>
                    <div className={listStyle.tdStyle}>Name</div>
                    <div className={listStyle.tdStyle}>Class</div>
                    <div className={listStyle.tdStyle}>Email</div>
                    <div className={listStyle.tdStyle}>Phone</div>
                    <div className={listStyle.tdStyle}>Books</div>
                </div>
                <div className="h-[90%] overflow-y-auto rounded-2xl">
                    {/*Loops through each person that was fetched from the db*/}
                    {data.map((item: Student, index: Number) => {
                        return (
                        <div className={listStyle.trStyle} key={index.toString()}>
                            <div className={listStyle.tdStyle}>
                                {item.name}
                            </div>
                            <div className={listStyle.tdStyle}>
                                {item.group}
                            </div>
                            <div className={listStyle.tdStyle}>
                                {item.email}
                            </div>
                            <div className={listStyle.tdStyle}>
                                {item.phone}
                            </div>
                            <div className={listStyle.tdStyle}>
                                {item.loanedBooks.length}
                            </div>
                        </div>)
                    })}
                </div>
            </div></>}
            
            {isAllBooks && <><div className="h-[100%] w-full rounded">
                <div className="grid items-center bg-gul h-[10%] text-3xl text-left text-white rounded-t-2xl pl-5">
                    Books
                </div>
                
                <div className="h-[90%] overflow-y-auto">
                    {/*Loops through each book fetched from the db*/}
                    {data.map((item: Book, index: Number) => {
                        return (
                            <div className={`w-[100%] odd:bg-white even:bg-ljusGul p-5 flex flex-row justify-between`} key={String(index)}>
                                <div className={listStyle.imgStyle}>
                                    <img src={'https://image.bokus.com/images/'+ item.isbn} alt={'Omslag till boken '+item.title} />
                                </div>
                                
                                {/*All books*/}
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
            </div></>}
            {isAvailableBooks && <><div className="h-[100%] w-full rounded">
                <div className="grid items-center bg-grön h-[10%] text-3xl text-left text-white rounded-t-2xl pl-5">
                    Books
                </div>
                
                <div className="h-[90%] overflow-y-auto">
                    {/*Loops through each book fetched from the db*/}
                    {data.map((item: Book, index: Number) => {
                        return (
                            <div className={`w-[100%] odd:bg-white even:bg-ljusgrön p-5 flex flex-row justify-between`} key={String(index)}>
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
            </div></>}
            {isBorrowedBooks && <>
            <div className="h-[100%] w-full rounded">
                <div className="grid items-center bg-blå h-[10%] text-3xl text-left text-white rounded-t-2xl pl-5">
                    Books
                </div>
                
                <div className="h-[90%] overflow-y-auto">
                    {/*Loops through each book fetched from the db*/}
                    {data.map((item: Book, index: Number) => {
                        return (
                            <div className={`w-[100%] odd:bg-white even:bg-ljusblå p-5 flex flex-row justify-between`} key={String(index)}>
                                <div className={listStyle.imgStyle}>
                                    <img src={'https://image.bokus.com/images/'+ item.isbn} alt={'Omslag till boken '+item.title} />
                                </div>
                                
                                {/*Borrowed books*/}
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
                                    {/*If there are not items in stock*/}
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
            </div></>}

            {isMissingBooks && <>
            <div className="h-[100%] w-full rounded">
                <div className="grid items-center bg-blå h-[10%] text-3xl text-left text-white rounded-t-2xl pl-5">
                    Books
                </div>
                
                <div className="h-[90%] overflow-y-auto">
                    {/*Loops through each book fetched from the db*/}
                    {data.map((item: Book, index: Number) => {
                        return (
                            <div className={`w-[100%] odd:bg-white even:bg-ljusblå p-5 flex flex-row justify-between`} key={String(index)}>
                                <div className={listStyle.imgStyle}>
                                    <img src={'https://image.bokus.com/images/'+ item.isbn} alt={'Omslag till boken '+item.title} />
                                </div>
                                
                                {/*Borrowed books*/}
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
                                    {/*If there are not items in stock*/}
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
            </div></>}
        </div>
    );
}

export default List;