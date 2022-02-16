import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router';
import getData from './getData';

type Param = {
    category: string;
    ID: string,
};

type Member = {
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
}

type Book = {
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
}

const Details = () => {

   const { category, ID } = useParams<Param>();

   const [isStaff, setIsStaff] = useState<boolean>(false);
   const [isStudent, setIsStudent] = useState<boolean>(false);
   const [isBook, setIsBook] = useState<boolean>(false);

   const [member, setMember] = useState<Member | null>(null);
   const [book, setBook] = useState<Book | null>(null);

    useEffect(() => {

        if (category === "staff") {
            setIsStaff(true);
            setIsStudent(false);
            setIsBook(false);

           getData("http://localhost:3001/")
           .then(() => {
               
           });
        }
        else if (category === "student") {
            setIsStaff(false);
            setIsStudent(true);
            setIsBook(false);
        }
        else if (category === "book") {
            setIsStaff(false);
            setIsStudent(false);
            setIsBook(true);
        }

        //Get data from db where category tells api what to do with the specified ID that can either be a book isbn or member ID
        getData("http://localhost:3001/" + category + "/" + ID)
        .then((res) => {

            if(category === "staff" || category === "student") {
                //Setdata and update jsx
                setMember(res);
            }
            
        })
        .catch();
    });
   

    return(
        <> 
            <div className="w-[100%] h-[100%] bg-white z-10">

                {/* Displaying a staff memeber */}
                {isStaff && <>
                    {/* Displays when data is set => when data is returned from db */}
                    {member && 

                    <div>
                        <div>{member.FirstName + " " + member.LastName}</div>
                        <div>{member.Email}</div>
                        <div>{member.PhoneNumber}</div>
                        <div></div>
                    </div>}
                </>}
                
                {/* Displaying a student memeber */}
                {isStudent && <>
                    {/* Displays when member is set => when member is returned from db */}
                    {member && <div/>}
                </>}
                
                {/* Displaying a book */}
                {isBook && <>
                    {/* Displays when data is set => when data is returned from db */}
                    {book && <div/>}
                </>}
            </div>
        </>
    );
}

export default Details;