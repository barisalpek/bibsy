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
type ListStyle = {
    theadStyle: string;
    trStyle: string;
    tdStyle: string;
    imgStyle: string;
    svgStyle: string;
}
type student = {
    FirstName: string;
    LastName: string;
    Email: string;
}
//List component, modular by passing in props
const ListStudent = () => {

    // //Data from db to useState
    // const [data, setData] = useState<any>([]);
    // //Runs only on first update
    // useEffect(() => {
    //     //fetching data
    //     let fakeData: student ={
    //         FirstName:"Dejans Tjej",
    //         LastName:"Dejansson",
    //         Email: "defghj@gmailk.com"

    //     }
    //     setData(fakeData);
    //     // getData("http://localhost:3001/" + props.request)
    //     // .then((res) => {
            
           
            
    //     //     console.log(data);

    //     // });
    // }, []);
    let data: student[] = [
        {
            FirstName:"Dejans Tjej",
            LastName:"Dejansson",
            Email: "cfvgbhjk@gmail.com"
        },
        {
            FirstName:"Dejans Tjej number 2",
            LastName:"Dejansson",
            Email: "rtyui5678@gmaiuo.com"
        },
    ]


    return (
        <div className="h-[100%] w-[100%] bg-white rounded-2xl">
            <div className={listStyle.theadStyle}>
                <div className={listStyle.tdStyle}>Name</div>
                <div className={listStyle.tdStyle}>Class</div>
                <div className={listStyle.tdStyle}>Email</div>
                <div className={listStyle.tdStyle}>Phone</div>
                <div className={listStyle.tdStyle}>Books</div>
            </div>
            <div className="h-[90%] overflow-y-auto rounded-2xl">
                {/*Loops through each person that was fetched from the db*/}
                {console.log(data)}
                {data.map((student: student, index: Number) => {
                    console.log(student);

                    return (
                    <div className={listStyle.trStyle} key={index.toString()}>
                        <div className={listStyle.tdStyle}>
                            {student.FirstName}
                        </div>
                        <div className={listStyle.tdStyle}>
                            {student.LastName}
                        </div>
                        <div className={listStyle.tdStyle}>
                            {student.Email}
                        </div>
                    </div>)
                })}
            </div>
        </div>
    );
}

const listStyle: ListStyle = {
    theadStyle: 'flex flex-row items-center bg-lila h-[10%] text-3xl text-left text-white rounded-t-2xl pl-5',
    trStyle: 'w-full h-auto odd:bg-white even:bg-ljusLila p-5 flex flex-row',
    tdStyle: 'p-3 mr-[3%]',
    imgStyle: 'w-[10%] h-auto',
    svgStyle: 'h-[100%] ml-5',
}
export default ListStudent;