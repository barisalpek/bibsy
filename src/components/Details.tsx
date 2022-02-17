import { Method } from 'axios';
import React, { useState, useEffect, RefCallback } from 'react';
import {useParams} from 'react-router';
import getData from './getData';
import {BsFillPencilFill} from 'react-icons/bs';
import {IoIosSave} from 'react-icons/io';
import UseAxios from './UseAxios';


type Param = {
    category: string;
    PID: string,
};

type Member = {
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
}

type Book = {
    Title: string;
    Author: string;
    Language: string;
    Publisher: string;
}

type Permission = {
    PID: string;
    AccessToLibrary: boolean;
    AccessToResturant: boolean;
    AccessToUser: boolean;
    AccessToServer: boolean;
}

const Details = () => {

    let placeHolderPermission: Permission = {
        PID: "",
        AccessToLibrary: false,
        AccessToResturant: false,
        AccessToUser: false,
        AccessToServer: false,
    }

    //State for storing parameters
    const { category, PID } = useParams<Param>();

    //State for determening if user is admin
    const [isAdmin, setIsAdmin] = useState<boolean>(true);

   //State for determening the type of page to display
   const [isStaff, setIsStaff] = useState<boolean>(false);
   const [isStudent, setIsStudent] = useState<boolean>(false);
   const [isBook, setIsBook] = useState<boolean>(false);

   //State for data
   const [member, setMember] = useState<Member | null>(null);
   const [staffPermissions, setStaffPermissions] = useState<Permission>(placeHolderPermission);
   const [book, setBook] = useState<Book | null>(null);

   //States for member information
   const [firstName, setFirstName] = useState<string>("");
   const [lastName, setLastName] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [phoneNumber, setPhoneNumber] = useState<string>("");

   //States for book information
   const [title, setTitle] = useState<string>("");
   const [author, setAuthor] = useState<string>("");
   const [language, setLanguage] = useState<string>("");
   const [publisher, setPublisher] = useState<string>("");

   //States for permission checkboxes
   const [accessToLibrary, setAccessToLibrary] = useState<boolean>(false);
   const [accessToRestaurant, setAccessToRestaurant] = useState<boolean>(false);
   const [accessToUser, setAccessToUser] = useState<boolean>(false);
   const [accessToServer, setAccessToServer] = useState<boolean>(false);

    //State for determening if admin is editing or not
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const setMemberChanges = () => {
        
        let updatedMember: Member = {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            PhoneNumber: phoneNumber,
        }

        setMember(updatedMember);
    }

    const setPermissionChanges = () => {

        let updatedPermissions: Permission = {
            PID: staffPermissions.PID,
            AccessToLibrary: accessToLibrary,
            AccessToResturant: accessToRestaurant,
            AccessToUser: accessToUser,
            AccessToServer: accessToServer,
        }

        setStaffPermissions(updatedPermissions);
    }

    const setBookChanges = () => {
        
        let updatedBook: Book = {
            Title: title,
            Author: author,
            Language: language,
            Publisher: publisher,
        }

        setBook(updatedBook);
    }

    const submitChange = () => {

        setIsEditing(false);
        console.log("hej");

        if (isStaff) {
            console.log("staff sub");
            UseAxios("http://localhost:3001/updateStaff/", member)
            .then(() => {
                console.log("Updated staff");
                UseAxios("http://localhost:3001/updatePermissions/", staffPermissions)
                .then(() => {
                    console.log("Updated permissions");
                });
            })
            .catch();
        }

        else if (isStudent) {
            UseAxios("http://localhost:3001/updateStudent/", member);
        }

        else if (isBook) {
            UseAxios("http://localhost:3001/staffPermissions/", book);
        }
    }

    useEffect(() => {

        //if url = /staff/ loads data
        if (category === "staff") {
            console.log("Staff :)");

            setIsStaff(true);
            setIsStudent(false);
            setIsBook(false);
            //First get permissions for specified user
            getData("http://localhost:3001/staffPermissions/" + PID)
            .then((res) => {
               console.log(res);
               setStaffPermissions(res);

                setAccessToLibrary(res.AccessToLibrary);
                setAccessToRestaurant(res.AccessToResturant);
                setAccessToUser(res.AccessToUser);
                setAccessToServer(res.AccessToServer);

               //Get data from db where category tells api what to do with the specified ID that can either be a book isbn or member ID
                getData("http://localhost:3001/staff/" + PID)
                .then((respon) => {

                    //Setdata and update jsx
                    setMember(respon);

                    setFirstName(respon.FirstName);
                    setLastName(respon.LastName);
                    setEmail(respon.Email);
                    setPhoneNumber(respon.PhoneNumber);
                    
                    console.log(respon);
                    
                })
                .catch(() => {

                });
            })
            .catch(() => {

            });

        }

        //if url = /student/
        else if (category === "student") {
            setIsStaff(false);
            setIsStudent(true);
            setIsBook(false);

            //Get data from db where category tells api what to do with the specified ID that can either be a book isbn or member ID
            getData("http://localhost:3001/" + category + "/" + PID)
            .then((res) => {

                //Setdata and update jsx
                setMember(res);
                
                setFirstName(res.FirstName);
                setLastName(res.LastName);
                setEmail(res.Email);
                setPhoneNumber(res.PhoneNumber);
                
            })
            .catch();
        }
        
        //if url = /book/
        else if (category === "book") {
            setIsStaff(false);
            setIsStudent(false);
            setIsBook(true);

            getData("http://localhost:3001/" + category + "/" + PID)
            .then((res) => {

                //Setdata and update jsx
                setBook(res);
                
                setTitle(res.FirstName);
                setAuthor(res.LastName);
                setLanguage(res.Email);
                setPublisher(res.PhoneNumber);
                
            })
            .catch();
        }

        
    }, []);
   

    return(
        <> 
            <div className="w-[100%] h-[100%] bg-white rounded-r-2xl z-10">
                <div className="w-[80%] h-[100%] py-5  flex flex-col mx-auto">
                    {/* Displaying a staff memeber */}
                    {isStaff && <>
                        {/* Displays when data is set => when data is returned from db */}
                        {member && <>
                            {staffPermissions && <>
                                {!isEditing && <>
                                    {/* Staff details when not editing */}
                                    <div className="text-4xl font-bold">{firstName + " " + lastName}</div>
                                    <div className="flex my-10 space-y-5 text-xl flex-col">
                                        <div>Email: {email}</div>
                                        <div>Phone Number: {phoneNumber}</div>
                                        <div></div>
                                    </div>

                                    <div className="flex flex-col space-y-2">
                                        <div className="flex flex-row">
                                            <div className="flex my-auto mr-[5%]">Access To Library</div>
                                            <input type="checkbox" defaultChecked={accessToLibrary} className="h-8 w-8 accent-lila" disabled />
                                        </div>
                                        <div className="flex flex-row">
                                            <div className="flex my-auto">Access To Restaurant</div>
                                            <input type="checkbox" defaultChecked={accessToRestaurant} className="h-8 w-8 accent-lila" disabled />
                                        </div>
                                        <div className="flex flex-row">
                                            <div className="flex my-auto">Access To Users</div>
                                            <input type="checkbox" defaultChecked={accessToUser} className="h-8 w-8 accent-lila" disabled />
                                        </div>
                                        <div className="flex flex-row">
                                            <div className="flex my-auto">Access To Server</div>
                                            <input type="checkbox" defaultChecked={accessToServer} className="h-8 w-8 accent-lila" disabled />
                                        </div>
                                    </div>
                                    {/* Button to start editing user, only Admin can see it */}
                                    {isAdmin && <div className="mt-auto">
                                        <button className="bg-lila h-[10vh] mb-[5vh] float-right w-[10vh] rounded-full" onClick={() => {setIsEditing(true)}}>
                                            <BsFillPencilFill className="flex m-auto" color='white'size={'2rem'} />
                                        </button>
                                    </div>}
                                </>}
                                
                                {isEditing && <>
                                    {/* Staff details when editing */}
                                    <div className="flex flex-col">
                                        <div className="flex my-10 w-[100%] flex-row">
                                            <input type="text" className="w-[48%] text-4xl flex mr-auto font-bold border rounded-xl" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                            <input type="text" className="w-[48%] text-4xl font-bold border rounded-xl" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                                        </div>
                                        <div className="flex text-xl flex-col">
                                            <div className="flex flex-row">
                                                Email: <input type="text" className="ml-5 flex mr-auto border rounded-xl" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                            </div>
                                            <div className="flex flex-row">
                                                Phone Number: <input type="text" className="ml-5 flex mr-auto border rounded-xl" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                                            </div>
                                        </div>
                                        
                                    </div>

                                   
                                    
                                    <div className="flex flex-col space-y-2">
                                        <div className="flex flex-row">
                                            <div className="flex my-auto mr-[5%]">Access To Library</div>
                                            <input type="checkbox" defaultChecked={accessToLibrary} onChange={(e) => {setAccessToLibrary(!accessToLibrary)}}/>
                                        </div>
                                        <div className="flex flex-row">
                                            <div className="flex my-auto">Access To Restaurant</div>
                                            <input type="checkbox" defaultChecked={accessToRestaurant} onChange={(e) => {setAccessToRestaurant(!accessToRestaurant)}}/>
                                        </div>
                                        <div className="flex flex-row">
                                            <div className="flex my-auto">Access To Users</div>
                                            <input type="checkbox" defaultChecked={accessToUser} onChange={(e) => {setAccessToUser(!accessToUser)}}/>
                                        </div>
                                        <div className="flex flex-row">
                                            <div className="flex my-auto">Access To Server</div>
                                            <input type="checkbox" defaultChecked={accessToServer} onChange={(e) => {setAccessToServer(!accessToServer)}}/>
                                        </div>
                                    </div>

                                    {/* Button to finish editing user and save to database, only Admin can see it */}
                                    {isAdmin && <div className="bg-blue-500 b-[0%]">
                                        <button className="bg-lila h-[10vh] w-[10vh] rounded-full" onClick={() => {
                                            setMemberChanges();
                                            setPermissionChanges();
                                            submitChange();
                                        }}>
                                            <IoIosSave className="flex m-auto" color='white'size={'2rem'} />
                                        </button>
                                    </div>}

                                </>}
                                    
                            </>}
                        </>}
                    </>}
                    
                    {/* Displaying a student member */}
                    {isStudent && <>

                        {/* Displays when member is set => when member is returned from db */}
                        {member && <>
                            
                            {!isEditing && <>
                                {/* Staff details when not editing */}
                                <div className="flex space-y-5 text-xl flex-col">
                                    <div className="text-4xl font-bold">{firstName + " " + lastName}</div>
                                    <div>Email: {email}</div>
                                    <div>Phone Number: {phoneNumber}</div>
                                    <div></div>
                                </div>

                                {/* Button to start editing user, only Admin can see it */}
                                {isAdmin && <div className="mt-auto">
                                    <button className="bg-lila h-[10vh] mb-[5vh] float-right w-[10vh] rounded-full" onClick={() => {setIsEditing(true)}}>
                                        <BsFillPencilFill className="flex m-auto" color='white'size={'2rem'} />
                                    </button>
                                </div>}
                            </>}
                            
                            {isEditing && <>
                                {/* Staff details when editing */}
                                <div className="flex flex-col">
                                    <div>
                                        <input type="text" className="text-3xl font-bold" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                        <input type="text" className="text-3xl font-bold" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                                    </div>
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                                </div>

                                {/* Button to finish editing user and save to database, only Admin can see it */}
                                {isAdmin && <div className="bg-blue-500 b-[0%]">
                                    <button className="bg-lila h-[10vh] w-[10vh] rounded-full" onClick={() => {
                                        setMemberChanges();
                                        submitChange();
                                    }}>
                                        <IoIosSave className="flex m-auto" color='white'size={'2rem'} />
                                    </button>
                                </div>}

                            </>}
                        </>}
                    </>}
                    
                    {/* Displaying a book */}
                    {isBook && <>

                        <div className="flex flex-row space-x-16">
                            <div>Titel</div>
                            <div>Author</div>
                            <div>Publisher</div>
                            <div>Language</div>
                        </div>

                        {/* Displays when data is set => when data is returned from db */}
                        {book && 

                        <div className="flex flex-row space-x-16">
                            <div>{book.Title + " " + book.Author}</div>
                            <div>{book.Author}</div>
                            <div>{book.Publisher}</div>
                            <div>{book.Language}</div>
                        </div>}
                    </>}
                </div>
            </div>
        </>
    );
}

export default Details;