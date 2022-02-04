import React, { useEffect,  useState } from "react";
import Check from '../assets/images/check-solid.svg';
import Cross from '../assets/images/times-solid.svg';

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
    ];

    type ListStyle = {
        theadStyle: string;
        trStyle: string;
        tdStyle: string;
        imgStyle: string;
        svgStyle: string;
    }

const listStyle: ListStyle = {
    theadStyle: 'bg-lila h-16 text-3xl text-left text-white',
    trStyle: 'w-screen odd:bg-white even:bg-ljusLila h-16',
    tdStyle: 'p-3',
    imgStyle: 'w-[20%] h-auto',
    svgStyle: 'h-[100%] w-[20%] ml-5',
}

    const [data, setData] = useState<any>([]);
    const [isMemberType, setIsMemberType] = useState<boolean | null>(null);

    useEffect(() => {
         //fetching data
        //fakeUseFetch
        //${props.mainColor}
        //${props.listColor}

        

        setData(books);

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
            {isMemberType && <table className="h-[100%] w-[100%] rounded overflow-y-scroll">
                <thead className={listStyle.theadStyle}>
                    <th className={listStyle.tdStyle}>Name</th>
                    <th className={listStyle.tdStyle}>Class</th>
                    <th className={listStyle.tdStyle}>Email</th>
                    <th className={listStyle.tdStyle}>Phone</th>
                    <th className={listStyle.tdStyle}>Books</th>
                </thead>
                <tbody className="">
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
            {!isMemberType && <div className="h-[100%] w-[100%] rounded">
                <div className="grid items-center bg-gul h-[10%] text-3xl text-left text-white rounded-t-2xl pl-5">
                    Books
                </div>
                
                <div className="h-[90%] overflow-y-auto">
                    
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
                                <div className="flex flex-col justify-center w-auto align-center w-[20%]">
                                    
                                    {/*If there are items in stock*/}
                                    {(item.inStock) && <>
                                        <div className='bg-red-500 flex flex-row justify-center text-3xl'>
                                            <p className="align-middle">Available: {item.amount-item.loaned}</p>
                                            <img src={Check} alt='Available' className={listStyle.svgStyle}/>
                                            
                                        </div>
                                        <div className="flex justify-center">
                                            <p>Loaned: {item.loaned}</p> 
                                        </div>
                                    </>}
                                    {/*If there are items in stock*/}
                                    {!(item.inStock) && 
                                    <div className='flex flex-row bg-red-500 flex flex-row justify-center text-3xl'>
                                        <p>Out of stock</p>
                                        <img src={Cross} alt='Not available' className={listStyle.svgStyle}/>
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