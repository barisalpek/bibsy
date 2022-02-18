import React, { useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { TiTimes } from "react-icons/ti";
import getData from "./getData";
import { Link } from "react-router-dom";

type Props = {
  mainColor: string;
  listColor: string;
  typeOf: string;
  request: string;
};

type Student = {
  ID: number;
  PID: string;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
};

type Staff = {
  ID: number;
  PID: string;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
};

type Book = {
  title: string;
  author: string;
  published: string;
  isbn: string;
  amount: number;
  loaned: number;
  inStock: boolean;
};

type ListStyle = {
  theadStyle: string;
  trStyle: string;
  tdStyle: string;
  imgStyle: string;
  svgStyle: string;
};
//List component, modular by passing in props
const List = (props: Props) => {
  const listStyle: ListStyle = {
    theadStyle:
      "flex flex-row items-center h-[10%] text-3xl text-left text-white rounded-t-2xl ",
    trStyle:
      "w-full h-auto odd:bg-white even:bg-ljusLila p-5 flex space-x-52 flex-row",
    tdStyle: "p-3 mx-auto w-[10%]",
    imgStyle: "w-[10%] h-auto",
    svgStyle: "h-[100%] ml-5",
  };
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
    getData("http://localhost:3001/" + props.request).then((res) => {
      setData(res);
      console.log(res);
    });

    //setData(books);
    //Determine what is passed in through props
    if (props.typeOf === "Staff") {
      setIsStaff(true);
      setIsStudents(false);
      setIsAllBooks(false);
      setIsAvailableBooks(false);
      setIsBorrowedBooks(false);
      setIsMissingBooks(false);
    } else if (props.typeOf === "Students") {
      setIsStudents(true);
      setIsStaff(false);
      setIsAllBooks(false);
      setIsAvailableBooks(false);
      setIsBorrowedBooks(false);
      setIsMissingBooks(false);
    } else if (props.typeOf === "AllBooks") {
      setIsAllBooks(true);
      setIsStaff(false);
      setIsStudents(false);
      setIsAvailableBooks(false);
      setIsBorrowedBooks(false);
      setIsMissingBooks(false);
    } else if (props.typeOf === "AvailableBooks") {
      setIsAvailableBooks(true);
      setIsStaff(false);
      setIsStudents(false);
      setIsAllBooks(false);
      setIsBorrowedBooks(false);
      setIsMissingBooks(false);
    } else if (props.typeOf === "BorrowedBooks") {
      setIsBorrowedBooks(true);
      setIsAvailableBooks(false);
      setIsStaff(false);
      setIsStudents(false);
      setIsAllBooks(false);
      setIsMissingBooks(false);
    } else if (props.typeOf === "MissingBooks") {
      setIsMissingBooks(true);
      setIsBorrowedBooks(false);
      setIsAvailableBooks(false);
      setIsStaff(false);
      setIsStudents(false);
      setIsAllBooks(false);
    }
  }, []);

  return (
    <div className="-z-[1] h-[100%] w-[100%] rounded">
      {isStaff && (
        <>
          <div className="h-[100%] w-[100%] rounded-2xl bg-white">
            <div className={listStyle.theadStyle}>
              <div className="bg-lila flex h-[100%] w-[100%] flex-row rounded-t-2xl">
                <div className={listStyle.tdStyle}>Name</div>
                <div className={listStyle.tdStyle}>Email</div>
                <div className={listStyle.tdStyle}>Phone</div>
              </div>
            </div>
            <div className="h-[90%] overflow-y-auto rounded-2xl">
              {/*Loops through each person that was fetched from the db*/}
              {data.map((item: Staff, index: Number) => {
                return (
                  <div className={listStyle.trStyle} key={index.toString()}>
                    <Link
                      to={"/detailsStaff/staff/" + item.ID}
                      className={listStyle.tdStyle}
                    >
                      {item.FirstName + " " + item.LastName}
                    </Link>
                    <Link
                      to={"/detailsStaff/staff/" + item.ID}
                      className={listStyle.tdStyle}
                    >
                      {item.Email}
                    </Link>
                    <Link
                      to={"/detailsStaff/staff/" + item.ID}
                      className={listStyle.tdStyle}
                    >
                      {item.PhoneNumber}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
      {isStudents && (
        <>
          <div className="h-[100%] w-[100%] rounded-2xl bg-white">
            <div className={listStyle.theadStyle}>
              <div className="bg-rosa flex h-[100%] w-[100%] flex-row rounded-t-2xl">
                <div className={listStyle.tdStyle}>Name</div>
                <div className={listStyle.tdStyle}>Class</div>
                <div className={listStyle.tdStyle}>Email</div>
                <div className={listStyle.tdStyle}>Phone</div>
                <div className={listStyle.tdStyle}>Books</div>
              </div>
            </div>
            <div className="h-[90%] overflow-y-auto rounded-2xl">
              {/*Loops through each person that was fetched from the db*/}
              {data.map((item: Student, index: Number) => {
                return (
                  <div className={listStyle.trStyle} key={index.toString()}>
                    <Link
                      to={"/detailsStudent/" + item.PID}
                      className={listStyle.tdStyle}
                    >
                      {item.FirstName}
                    </Link>
                    <Link
                      to={"/detailsStudent/" + item.PID}
                      className={listStyle.tdStyle}
                    >
                      {item.Email}
                    </Link>
                    <Link
                      to={"/detailsStudent/" + item.PID}
                      className={listStyle.tdStyle}
                    >
                      {item.PhoneNumber}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {isAllBooks && (
        <>
          <div className="h-[100%] w-full rounded">
            <div className="bg-gul grid h-[10%] items-center rounded-t-2xl pl-5 text-left text-3xl text-white">
              Books
            </div>

            <div className="h-[90%] overflow-y-auto">
              {/*Loops through each book fetched from the db*/}
              {data.map((item: Book, index: Number) => {
                return (
                  <div
                    className={`even:bg-ljusGul flex w-[100%] flex-row justify-between p-5 odd:bg-white`}
                    key={String(index)}
                  >
                    <div className={listStyle.imgStyle}>
                      <img
                        src={"https://image.bokus.com/images/" + item.isbn}
                        alt={"Omslag till boken " + item.title}
                      />
                    </div>

                    {/*All books*/}
                    <div className="w-[60%] p-3">
                      <h4 className="p-2 font-bold">Title: {item.title}</h4>
                      <h4 className="p-2">Author: {item.author}</h4>
                      <h4 className="p-2">Published: {item.published}</h4>
                      <h4 className="p-2">Amount: {item.amount}</h4>
                    </div>
                    <div className="align-center flex w-[30%] flex-col justify-center">
                      {/*If there are items in stock*/}
                      {item.inStock && (
                        <>
                          <div className="align-center flex h-[15%] flex-row justify-center text-3xl">
                            <div className="mr-5 grid items-center">
                              <p className="align-middle">
                                Available: {item.amount - item.loaned}
                              </p>
                            </div>
                            <div className="grid items-center">
                              <BsCheckLg color="green" />
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <p>Loaned: {item.loaned}</p>
                          </div>
                        </>
                      )}
                      {/*If there are no items in stock*/}
                      {!item.inStock && (
                        <div className="align-center flex h-[15%] flex-row justify-center text-3xl">
                          <div className="mr-5 grid items-center">
                            <p>Out of stock</p>
                          </div>
                          <div className="grid items-center">
                            <TiTimes color="red" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
      {isAvailableBooks && (
        <>
          <div className="h-[100%] w-full rounded">
            <div className="bg-grön grid h-[10%] items-center rounded-t-2xl pl-5 text-left text-3xl text-white">
              Books
            </div>

            <div className="h-[90%] overflow-y-auto">
              {/*Loops through each book fetched from the db*/}
              {data.map((item: Book, index: Number) => {
                return (
                  <div
                    className={`even:bg-ljusgrön flex w-[100%] flex-row justify-between p-5 odd:bg-white`}
                    key={String(index)}
                  >
                    <div className={listStyle.imgStyle}>
                      <img
                        src={"https://image.bokus.com/images/" + item.isbn}
                        alt={"Omslag till boken " + item.title}
                      />
                    </div>

                    <div className="w-[60%] p-3">
                      <h4 className="p-2 font-bold">Title: {item.title}</h4>
                      <h4 className="p-2">Author: {item.author}</h4>
                      <h4 className="p-2">Published: {item.published}</h4>
                      <h4 className="p-2">Amount: {item.amount}</h4>
                    </div>
                    <div className="align-center flex w-[30%] flex-col justify-center">
                      {/*If there are items in stock*/}
                      {item.inStock && (
                        <>
                          <div className="align-center flex h-[15%] flex-row justify-center text-3xl">
                            <div className="mr-5 grid items-center">
                              <p className="align-middle">
                                Available: {item.amount - item.loaned}
                              </p>
                            </div>
                            <div className="grid items-center">
                              <BsCheckLg color="green" />
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <p>Loaned: {item.loaned}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
      {isBorrowedBooks && (
        <>
          <div className="h-[100%] w-full rounded">
            <div className="bg-blå grid h-[10%] items-center rounded-t-2xl pl-5 text-left text-3xl text-white">
              Books
            </div>

            <div className="h-[90%] overflow-y-auto">
              {/*Loops through each book fetched from the db*/}
              {data.map((item: Book, index: Number) => {
                return (
                  <div
                    className={`even:bg-ljusblå flex w-[100%] flex-row justify-between p-5 odd:bg-white`}
                    key={String(index)}
                  >
                    <div className={listStyle.imgStyle}>
                      <img
                        src={"https://image.bokus.com/images/" + item.isbn}
                        alt={"Omslag till boken " + item.title}
                      />
                    </div>

                    {/*Borrowed books*/}
                    <div className="w-[60%] p-3">
                      <h4 className="p-2 font-bold">Title: {item.title}</h4>
                      <h4 className="p-2">Author: {item.author}</h4>
                      <h4 className="p-2">Published: {item.published}</h4>
                      <h4 className="p-2">Amount: {item.amount}</h4>
                    </div>
                    <div className="align-center flex w-[30%] flex-col justify-center">
                      {/*If there are items in stock*/}
                      {item.inStock && (
                        <>
                          <div className="align-center flex h-[15%] flex-row justify-center text-3xl">
                            <div className="mr-5 grid items-center">
                              <p className="align-middle">
                                Available: {item.amount - item.loaned}
                              </p>
                            </div>
                            <div className="grid items-center">
                              <BsCheckLg color="green" />
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <p>Loaned: {item.loaned}</p>
                          </div>
                        </>
                      )}
                      {/*If there are not items in stock*/}
                      {!item.inStock && (
                        <div className="align-center flex h-[15%] flex-row justify-center text-3xl">
                          <div className="mr-5 grid items-center">
                            <p>Out of stock</p>
                          </div>
                          <div className="grid items-center">
                            <TiTimes color="red" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {isMissingBooks && (
        <>
          <div className="h-[100%] w-full rounded">
            <div className="bg-blå grid h-[10%] items-center rounded-t-2xl pl-5 text-left text-3xl text-white">
              Books
            </div>

            <div className="h-[90%] overflow-y-auto">
              {/*Loops through each book fetched from the db*/}
              {data.map((item: Book, index: Number) => {
                return (
                  <div
                    className={`even:bg-ljusblå flex w-[100%] flex-row justify-between p-5 odd:bg-white`}
                    key={String(index)}
                  >
                    <div className={listStyle.imgStyle}>
                      <img
                        src={"https://image.bokus.com/images/" + item.isbn}
                        alt={"Omslag till boken " + item.title}
                      />
                    </div>

                    {/*Missing books*/}
                    <div className="w-[60%] p-3">
                      <h4 className="p-2 font-bold">Title: {item.title}</h4>
                      <h4 className="p-2">Author: {item.author}</h4>
                      <h4 className="p-2">Published: {item.published}</h4>
                    </div>
                    <div className="align-center flex w-[30%] flex-col justify-center">
                      {/*If there are items in stock*/}
                      {item.inStock && (
                        <>
                          <div className="align-center flex h-[15%] flex-row justify-center text-3xl">
                            <div className="mr-5 grid items-center">
                              <p className="align-middle">
                                Available: {item.amount - item.loaned}
                              </p>
                            </div>
                            <div className="grid items-center">
                              <BsCheckLg color="green" />
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <p>Loaned: {item.loaned}</p>
                          </div>
                        </>
                      )}
                      {/*If there are not items in stock*/}
                      {!item.inStock && (
                        <div className="align-center flex h-[15%] flex-row justify-center text-3xl">
                          <div className="mr-5 grid items-center">
                            <p>Out of stock</p>
                          </div>
                          <div className="grid items-center">
                            <TiTimes color="red" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default List;
