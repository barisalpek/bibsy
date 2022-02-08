import React, { useEffect,  useState } from "react";
import {BsCheckLg} from 'react-icons/bs';
import {TiTimes} from 'react-icons/ti';
import getData from "./getData";

type Props = {
    mainColor: string;
    listColor: string;
    typeOf: string;
    bookType: string;
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
    const [isMemberType, setIsMemberType] = useState<boolean | null>(null);

    const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

    useEffect(() => {
        //fetching data
        getData("http://localhost:3001/" + props.typeOf + "s")
        .then((res) => {
            setData(res);
        });

        //setData(books);
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

        if (props.bookType === 'available') {
            setIsAvailable(true);
        }
        else if (props.bookType === 'borrowed') {
            setIsAvailable(false);
        }
        else {
            setIsAvailable(null);
        }

    }, []);

    return (
        <div className="h-[100%] w-[100%] rounded">
            {/*Conditional rendering, only renders if the passed in prop is 'member'*/}
            {isMemberType && <div className="h-[100%] w-[100%] bg-white rounded-2xl">
                <div className={listStyle.theadStyle}>
                    <div className={listStyle.tdStyle}>Name</div>
                    <div className={listStyle.tdStyle}>Class</div>
                    <div className={listStyle.tdStyle}>Email</div>
                    <div className={listStyle.tdStyle}>Phone</div>
                    <div className={listStyle.tdStyle}>Books</div>
                </div>
                <div className="h-[90%] overflow-y-auto rounded-2xl">
                    {/*Loops through each person that was fetched from the db*/}
                    {data.map((item: Person) => {
                        return (
                        <div className={listStyle.trStyle}>
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
            </div>}
            {/*Conditional rendering, only renders if passed in prop is book*/}
            {!isMemberType && <div className="h-[100%] w-full rounded">
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
                                {isAvailable && <><div className="p-3 w-[60%]">
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
                                </>}

                                
                            </div>
                        )
                    })}
                </div>
            </div>}
        </div>
    );
}

export default List;