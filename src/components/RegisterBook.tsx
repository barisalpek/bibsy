import React from "react";

const RegisterBook = () => {
 return (
    <div className=" bg-purple-100 h-[75vh] w-[75vw] fixed right-[3%] top-[15%] items-center flex rounded-xl overflow-hidden">

    <div className="w-[60%] h-[100%] ">

            <h1 className=" text-3xl p-10 ml-[25%] mt-[5%]" >Registrera din bok</h1>

                <input className="bookInput" type="text" placeholder="First Name" />

                <input className="bookInput" type="text" placeholder="First Name"/>

                <input className="bookInput" type="text" placeholder="First Name"/>

                <input className="bookInput" type="text" placeholder="First Name"/>

            
            <input className="m-5 mt-[3%] mb-[10%] w-[66%] p-[1%] rounded-xl" type="text" placeholder="ISBN-Nummer"/>
            <button type="submit" className="p-[1%] bg-purple-700 w-[20%] text-white rounded-xl">Scan</button>
            <button type="submit" className="p-[1%] bg-purple-700 w-[90%] ml-[3%] text-white rounded-xl">Submit</button>
        </div>

        <div className="w-[40%] h-[100%]  bg-green-700">
            <h1 className="text-white text-3xl ml-[35%] mt-[10%]">Bok Namn</h1>
            <div className="bg-cyan-700 rounded-xl w-[70%] h-[70%] ml-[15%] mt-[5%]">

            </div>
        </div>
    </div>
 )   
}

export default RegisterBook;
