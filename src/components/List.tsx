import React, { useEffect,  useState } from "react";

type Props = {
    mainColor: string;
    listColor: string;
    typeOf: string;
  }

const List = (props: Props) => {

    type Person = {
        name: string;
        group: string;
        email: string;
        img: string;
        phone: string;
        loanedBooks: [Book, Book];
    }

    type Book  = {
        title: string;
        author: string;
        published: string;
        id: string;
        img: string;
    }

    const Metro: Book = {
        title: 'Metro 2033',
        author: 'Dmitry Glukhovsky',
        published: '2020',
        id: '1234567890',
        img: 'https://images-na.ssl-images-amazon.com/images/I/A1Jp9VdxsQL.jpg',
    };

    const Dejan: Person = {
        name: 'Dejan Dacic',
        group: '2021 TE4',
        email: 'dejan.dacic@elev.ga.ntig.se',
        img: 'dejan.png',
        phone: '1234567890',
        loanedBooks: [
            Metro,
            Metro
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
        Metro,
        Metro,
        Metro,
        Metro,
        Metro,
    ];

    type ListStyle = {
        theadStyle: string;
        trStyle: string;
        tdStyle: string;
        imgStyle: string;
    }

const listStyle: ListStyle = {
    theadStyle: 'bg-lila h-16 text-3xl text-left text-white',
    trStyle: 'w-screen odd:bg-white even:bg-ljusLila h-16',
    tdStyle: 'p-3',
    imgStyle: 'w-[150px] h-auto',
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

    }, [data, props]);

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
                            return (<tr className={listStyle.trStyle}>
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
                <div className="grid items-center bg-grön h-[10%] text-3xl text-left text-white rounded-t-2xl pl-5">
                    Books
                </div>
                
                <div className="h-[90%] overflow-y-auto">
                    
                        {data.map((item: Book) => {
                            return (
                                <div className="w-[100%] h-auto odd:bg-white even:bg-ljusGrön p-5 flex flex-row">
                                    <div className={listStyle.imgStyle}>
                                        <img src={item.img} alt={'Omslag till boken '+item.title} />
                                    </div>
                                    <div className="p-3">
                                        <h4 className="p-2">Titel: {item.title}</h4>
                                        <h4 className="p-2">Författare: {item.author}</h4>
                                        <h4 className="p-2">Utgivningsår: {item.published}</h4>
                                        <h4 className="p-2">Id: {item.id}</h4>
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                      </div>
            }
        </div>
    );
}
export default List;