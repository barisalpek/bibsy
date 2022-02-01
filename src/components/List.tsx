import React, { useEffect,  useState } from "react";

type Props = {
    mainColor: string,
    listColor: string,
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
        id: string;
        img: string;
    }

    const Metro: Book = {
        title: 'Metro 2033',
        author: 'Dmitry Glukhovsky',
        id: '1234567890',
        img: 'metro2033.png',
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

    //
    //${listColor}
    const [data, setData] = useState<any>([]);
    const [theadStyle, setTheadStyle] = useState('');
    const [trStyle, setTrStyle] = useState('');
    const [tdStyle, setTdStyle] = useState('');

    useEffect(() => {
         //fetching data
        //fakeUseFetch
        setData(list);
        setTheadStyle(`bg-${props.mainColor} h-16 text-3xl text-left text-white`);
        setTrStyle(`w-screen odd:bg-white even:bg-${props.listColor} h-16`);
        setTdStyle('p-3');
    }, [data, theadStyle, trStyle, tdStyle, props]);

    return (
        <div className="h-screen w-screen rounded">
            <table className="h-screen w-screen rounded">
                <thead className={theadStyle}>
                    <th className={tdStyle}>Name</th>
                    <th className={tdStyle}>Class</th>
                    <th className={tdStyle}>Email</th>
                    <th className={tdStyle}>Phone</th>
                    <th className={tdStyle}>Books</th>
                </thead>
                <tbody className="">
                    
                        {data.map((item: Person) => {
                            return (<tr className={trStyle}>
                                <td className={tdStyle}>
                                    {item.name}
                                </td>
                                <td className={tdStyle}>
                                    {item.group}
                                </td>
                                <td className={tdStyle}>
                                    {item.email}
                                </td>
                                <td className={tdStyle}>
                                    {item.phone}
                                </td>
                                <td className={tdStyle}>
                                    {item.loanedBooks.length}
                                </td>
                            </tr>)
                        })}
                </tbody>
            </table>
        </div>
    );
}
export default List;