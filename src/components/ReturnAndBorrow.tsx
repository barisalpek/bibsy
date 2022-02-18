import React, { useState } from "react";

import UseAxios from "./UseAxios";
const ReturnAndBorrow = (props: any) => {
  const [id, setId] = useState<string>("");
  const [isbn, setIsbn] = useState<any>("");
  const [hasIsbn, setHasIsbn] = useState<boolean | null>(null);
  const [elevId, setElevId] = useState("");
  const [ntiId, setNtiId] = useState("");
  const [lararId, setLararId] = useState("");

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    let borrow = {
      ntiId: ntiId,
      studentId: elevId,
      staffId: lararId,
    };

    UseAxios("192.168.198.144:3001/borrow", borrow);

    // Do something
    alert("");
  };

  return (
    <>
      {props.isReturn && (
        <div className="fixed right-[3%] top-[15%] -z-[0] flex h-[75vh] w-[75vw] flex-row bg-purple-100 ">
          <div className="flex h-[100%] w-[100%] flex-row rounded bg-white">
            <form
              className="mb-4 mt-20 grid justify-items-center rounded px-8 pb-2"
              onSubmit={submitForm}
            >
              <h1 className="text-3xl">Lämna tillbaka</h1>

              <div className="text-center">
                <div className="flex-start mb-10 flex font-bold text-black">
                  <span>{/* (borrow or return ) */}</span>
                </div>
                <label className="text-grey-darker mb-2 block  text-center text-sm font-bold">
                  ISBN
                </label>
                <input
                  className="text-grey-darker w-[40vw] appearance-none rounded border py-2 px-3 shadow"
                  id="idNumber"
                  type="text"
                  value={isbn}
                  onChange={(e) => {
                    setIsbn(e.target.value);
                    setHasIsbn(true);
                  }}
                />
              </div>
              <div className=" text-center">
                <label className="text-grey-darker mb-2 block text-sm font-bold">
                  {" "}
                  ELEV ID
                </label>
                <input
                  className="text-grey-darker w-[40vw] appearance-none rounded border py-2 px-3 shadow "
                  id="ISBN"
                  type="text"
                  value={elevId}
                  onChange={(e) => {
                    setElevId(e.target.value);
                  }}
                />
              </div>
              <div className=" text-center">
                <label className="text-grey-darker mb-2 block text-sm font-bold">
                  {" "}
                  NTI ID
                </label>
                <input
                  className="text-grey-darker w-[40vw] appearance-none rounded border py-2 px-3 shadow "
                  id="ISBN"
                  type="text"
                  value={ntiId}
                  onChange={(e) => {
                    setNtiId(e.target.value);
                  }}
                />
              </div>
              <div className=" text-center">
                <label className="text-grey-darker mb-2 block text-sm font-bold">
                  {" "}
                  LÄRAR ID
                </label>
                <input
                  className="text-grey-darker w-[40vw] appearance-none rounded border py-2 px-3 shadow "
                  id="ISBN"
                  type="text"
                  value={lararId}
                  onChange={(e) => {
                    setLararId(e.target.value);
                  }}
                />
              </div>
              <div>
                <button className="bg-mörkLila grid justify-items-center rounded  px-[8vw]">
                  <span className="text center inline-block py-2 align-baseline text-white">
                    Borrow
                  </span>
                </button>
              </div>
            </form>
            <div className="flex h-[100%] w-[23vw] items-center px-[2vw]">
              {hasIsbn && (
                <img
                  src={"https://image.bokus.com/images/" + isbn}
                  className="h-auto w-[100%]"
                />
              )}
              {!hasIsbn && <div></div>}
            </div>
          </div>
        </div>
      )}

      {!props.isReturn && (
        <div className="fixed right-[3%] top-[15%] -z-[0] flex h-[75vh] w-[75vw] flex-row bg-purple-100 ">
          <div className="flex h-[100%] w-[100%] flex-row rounded bg-white">
            <form
              className="mb-4 mt-20 grid justify-items-center rounded px-8 pb-2"
              onSubmit={submitForm}
            >
              <h1 className="text-3xl">Låna bok</h1>
              <div className="text-center">
                <div className="flex-start mb-10 flex font-bold text-black">
                  <span>{/* (borrow or return ) */}</span>
                </div>
                <label className="text-grey-darker mb-2 block  text-center text-sm font-bold">
                  ISBN
                </label>
                <input
                  className="text-grey-darker w-[40vw] appearance-none rounded border py-2 px-3 shadow"
                  id="idNumber"
                  type="text"
                  value={isbn}
                  onChange={(e) => {
                    setIsbn(e.target.value);
                    setHasIsbn(true);
                  }}
                />
              </div>
              <div className=" text-center">
                <label className="text-grey-darker mb-2 block text-sm font-bold">
                  {" "}
                  ELEV ID
                </label>
                <input
                  className="text-grey-darker w-[40vw] appearance-none rounded border py-2 px-3 shadow "
                  id="ISBN"
                  type="text"
                  value={elevId}
                  onChange={(e) => {
                    setElevId(e.target.value);
                  }}
                />
              </div>
              <div className=" text-center">
                <label className="text-grey-darker mb-2 block text-sm font-bold">
                  {" "}
                  NTI ID
                </label>
                <input
                  className="text-grey-darker w-[40vw] appearance-none rounded border py-2 px-3 shadow "
                  id="ISBN"
                  type="text"
                  value={ntiId}
                  onChange={(e) => {
                    setNtiId(e.target.value);
                  }}
                />
              </div>
              <div className=" text-center">
                <label className="text-grey-darker mb-2 block text-sm font-bold">
                  {" "}
                  LÄRAR ID
                </label>
                <input
                  className="text-grey-darker w-[40vw] appearance-none rounded border py-2 px-3 shadow "
                  id="ISBN"
                  type="text"
                  value={lararId}
                  onChange={(e) => {
                    setLararId(e.target.value);
                  }}
                />
              </div>
              <div>
                <button className="bg-mörkLila grid justify-items-center rounded  px-[8vw]">
                  <span className="text center inline-block py-2 align-baseline text-white">
                    Borrow
                  </span>
                </button>
              </div>
            </form>
            <div className="flex h-[100%] w-[23vw] items-center px-[2vw]">
              {hasIsbn && (
                <img
                  src={"https://image.bokus.com/images/" + isbn}
                  className="h-auto w-[100%]"
                />
              )}
              {!hasIsbn && <div></div>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ReturnAndBorrow;
