import React, {useState} from "react";
import ReactDOM from "react-dom";
import {GiArchiveRegister} from "react-icons/gi";
import UseAxios from './UseAxios'


 const Register = (props : any) => {

    //Lagrar dess informationen som state
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [eMail, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [bookName, setBookName] = useState('');
    const [publishdate, setPublishdate] = useState('');
    const [author, setAuthor] = useState('');
    const [quantity, setQuantity] = useState('');

    const [ISBN, setISBN] = useState('');

    
    //Skickar koden till backend med hjälp av Axios, den skickar allt genom en objekt namn
    const submitFormBook = (event: React.FormEvent<HTMLFormElement>) => {
      // Preventing the page from reloading
      event.preventDefault();

      let book = {
        isbn: ISBN,
        title: bookName,
        author: author,
        amount: quantity,
        publishDate: publishdate,
      }

      UseAxios("192.168.198.144:3001/registerBook", book);
    }

    const submitFormStudent = (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();
  
        let student = {
          FirstName: firstName,
          LastName: lastName,
          Email: eMail,
          PhoneNumber: phone,
        }
  
        UseAxios("192.168.198.144:3001/registerStudent", student);
    }

    return (
    
                <>
        {/* Register member */}
        {props.isMember && 
            <div className=" bg-white h-[75vh] w-[70vw] fixed right-[10%] top-[15%] items-center flex rounded-xl overflow-hidden">
                    {/* När formens butten submit tryckes med hjälp av onSubmit körs funktionen submitFormStudent */}
                <form className="w-[100%] h-[100%] ml-[6%] " onSubmit={submitFormStudent} method="post">

                    <h1 className=" text-3xl text-center p-10  mt-[5%] mr-[5%] -z-10" >Registrera medlem</h1>

                    <div className="mt-[2%] -z-10">
                            {/* Ger inputen ett värde och sedan lagrar den till useState */}
                        <input className="bookInput border-solid border-2 border-indigo-600" type="text"    placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                        <input className="bookInput border-solid border-2 border-indigo-600" type="text"    placeholder="Last Name"  value={lastName} onChange={(e) => setLastName(e.target.value)}/>

                        <input className="bookInput border-solid border-2 border-indigo-600" type="email"   placeholder="Email"      value={eMail} onChange={(e) => setEmail(e.target.value)}/>

                        <input className="bookInput border-solid border-2 border-indigo-600" type="text"    placeholder="Klass"      value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <button type="submit" value="submit" className="p-[1%] bg-purple-700 w-[40%] text-white rounded-xl ml-[25%] mt-[4%]">Registrera</button>
                </form>
            </div>
        }

        {/* Register Books */}
        {!props.isMember && 
            <div className=" bg-purple-100 h-[75vh] w-[75vw] fixed right-[3%] top-[15%] items-center flex rounded-xl overflow-hidden">

                {/* När formens butten submit tryckes med hjälp av onSubmit körs funktionen submitFormBook */}
            <form className="w-[60%] h-[100%]" onSubmit={submitFormBook} method="post">

                <img src="/../assets/frown-regular.svg" alt="" />

                    <h1 className=" text-3xl p-10 ml-[25%] mt-[5%]" >Registrera din bok</h1>
                        
                            {/* ger inputen ett värde och sedan lagrar den till useState */}
                        <input className="bookInput" type="text" placeholder="Book Title"   value={bookName} onChange={(e) => setBookName(e.target.value)}/>
                        
                        <input className="bookInput" type="text" placeholder="Published"    value={publishdate} onChange={(e) => setPublishdate(e.target.value)}/>

                        <input className="bookInput" type="text" placeholder="Author"       value={author} onChange={(e) => setAuthor(e.target.value)}/>

                        <input className="bookInput" type="text" placeholder="Quantity"     value={quantity} onChange={(e) => setQuantity(e.target.value)}/>

                    
                    <input className="m-5 mt-[3%] mb-[10%] w-[66%] p-[1%] rounded-xl" type="text" placeholder="ISBN-Nummer" name="ISBN-Nr" value={ISBN} onChange={(e) => setISBN(e.target.value)}/>
                    <button type="submit" className="p-[1%] bg-purple-700 w-[20%] text-white rounded-xl">Scan</button>
                    <button type="submit" className="p-[1%] bg-purple-700 w-[90%] ml-[3%] text-white rounded-xl">Submit</button>
                </form>

                <div className="w-[40%] h-[100%]  ">
                    <h1 className=" text-3xl ml-[35%] mt-[10%]">Bok Namn</h1>
                    <div className="bg-cyan-700 rounded-xl w-[70%] h-[70%] ml-[15%] mt-[5%]">
                    </div>
                </div>
            </div>
        }
                </>) };

 

export default Register;