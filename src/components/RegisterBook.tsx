import React, { useState } from "react";
import ReactDOM from "react-dom";
import { GiArchiveRegister } from "react-icons/gi";
import UseAxios from "./UseAxios";

const RegisterBook = (props: any) => {
  //Lagrar dess informationen som state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [eMail, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [bookName, setBookName] = useState("");
  const [publishdate, setPublishdate] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState("");

  const [ISBN, setISBN] = useState("");

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
    };

    UseAxios("192.168.198.144:3001/registerBook", book);
  };

  const submitFormStudent = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    let student = {
      FirstName: firstName,
      LastName: lastName,
      Email: eMail,
      PhoneNumber: phone,
    };

    UseAxios("192.168.198.144:3001/registerStudent", student);
  };

  return (
    <>
      {/* Register member */}
      {props.isMember && (
        <div className=" fixed right-[10%] top-[15%] flex h-[75vh] w-[70vw] items-center overflow-hidden rounded-xl bg-white">
          {/* När formens butten submit tryckes med hjälp av onSubmit körs funktionen submitFormStudent */}
          <form
            className="ml-[6%] h-[100%] w-[100%] "
            onSubmit={submitFormStudent}
            method="post"
          >
            <h1 className=" -z-10 mt-[5%] mr-[5%]  p-10 text-center text-3xl">
              Registrera medlem
            </h1>

            <div className="-z-10 mt-[2%]">
              {/* Ger inputen ett värde och sedan lagrar den till useState */}
              <input
                className="bookInput border-2 border-solid border-indigo-600"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                className="bookInput border-2 border-solid border-indigo-600"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <input
                className="bookInput border-2 border-solid border-indigo-600"
                type="email"
                placeholder="Email"
                value={eMail}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="bookInput border-2 border-solid border-indigo-600"
                type="text"
                placeholder="Klass"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button
              type="submit"
              value="submit"
              className="ml-[25%] mt-[4%] w-[40%] rounded-xl bg-purple-700 p-[1%] text-white"
            >
              Registrera
            </button>
          </form>
        </div>
      )}

      {/* Register Books */}
      {!props.isMember && (
        <div className=" fixed right-[3%] top-[15%] flex h-[75vh] w-[75vw] items-center overflow-hidden rounded-xl bg-purple-100">
          {/* När formens butten submit tryckes med hjälp av onSubmit körs funktionen submitFormBook */}
          <form
            className="h-[100%] w-[60%]"
            onSubmit={submitFormBook}
            method="post"
          >
            <img src="/../assets/frown-regular.svg" alt="" />

            <h1 className=" ml-[25%] mt-[5%] p-10 text-3xl">
              Registrera din bok
            </h1>

            {/* ger inputen ett värde och sedan lagrar den till useState */}
            <input
              className="bookInput"
              type="text"
              placeholder="Book Title"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />

            <input
              className="bookInput"
              type="text"
              placeholder="Published"
              value={publishdate}
              onChange={(e) => setPublishdate(e.target.value)}
            />

            <input
              className="bookInput"
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />

            <input
              className="bookInput"
              type="text"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />

            <input
              className="m-5 mt-[3%] mb-[10%] w-[66%] rounded-xl p-[1%]"
              type="text"
              placeholder="ISBN-Nummer"
              name="ISBN-Nr"
              value={ISBN}
              onChange={(e) => setISBN(e.target.value)}
            />
            <button
              type="submit"
              className="w-[20%] rounded-xl bg-purple-700 p-[1%] text-white"
            >
              Scan
            </button>
            <button
              type="submit"
              className="ml-[3%] w-[90%] rounded-xl bg-purple-700 p-[1%] text-white"
            >
              Submit
            </button>
          </form>

          <div className="h-[100%] w-[40%]  ">
            <h1 className=" ml-[35%] mt-[10%] text-3xl">Bok Namn</h1>
            <div className="ml-[15%] mt-[5%] h-[70%] w-[70%] rounded-xl bg-cyan-700"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterBook;
