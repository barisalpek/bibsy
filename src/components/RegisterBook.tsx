import React from "react";
import bildd from "./../assets/images/frown-regular.svg";
import {GiArchiveRegister} from "react-icons/gi";

const RegisterBook = (props : any) => {
 return (

    <>
    {props.isActive && 
                <>
        {/* Register member */}
        {props.isMember && 
            <div className=" bg-white h-[75vh] w-[70vw] fixed right-[10%] top-[15%] items-center flex rounded-xl overflow-hidden">

            <div className="w-[100%] h-[100%] ml-[6%]  ">
                    <h1 className=" text-3xl text-center p-10  mt-[5%] mr-[5%] -z-10" >Registrera medlem</h1>

                        <div className="mt-[2%] -z-10">
                            <input className="bookInput border-solid border-2 border-indigo-600" type="text" placeholder="First Name" />

                            <input className="bookInput border-solid border-2 border-indigo-600" type="text" placeholder="Last Name"/>

                            <input className="bookInput border-solid border-2 border-indigo-600" type="email" placeholder="Email"/>

                            <input className="bookInput border-solid border-2 border-indigo-600" type="text" placeholder="Klass"/>
                        </div>



                    
                    
                    
                    <button type="submit" className="p-[1%] bg-purple-700 w-[40%] text-white rounded-xl ml-[25%] mt-[4%]">Registrera</button>
                </div>

            </div>
        }

        {/* Register Books */}
        {!props.isMember && 
            <div className=" bg-purple-100 h-[75vh] w-[75vw] fixed right-[3%] top-[15%] items-center flex rounded-xl overflow-hidden">

            <div className="w-[60%] h-[100%] ">

                <img src="/../assets/frown-regular.svg" alt="" />

                    <h1 className=" text-3xl p-10 ml-[25%] mt-[5%]" >Registrera din bok</h1>

                        <input className="bookInput" type="text" placeholder="First Name" />

                        <input className="bookInput" type="text" placeholder="First Name"/>

                        <input className="bookInput" type="text" placeholder="First Name"/>

                        <input className="bookInput" type="text" placeholder="First Name"/>

                    
                    <input className="m-5 mt-[3%] mb-[10%] w-[66%] p-[1%] rounded-xl" type="text" placeholder="ISBN-Nummer"/>
                    <button type="submit" className="p-[1%] bg-purple-700 w-[20%] text-white rounded-xl">Scan</button>
                    <button type="submit" className="p-[1%] bg-purple-700 w-[90%] ml-[3%] text-white rounded-xl">Submit</button>
                </div>

                <div className="w-[40%] h-[100%]  ">
                    <h1 className="text-white text-3xl ml-[35%] mt-[10%]">Bok Namn</h1>
                    <div className="bg-cyan-700 rounded-xl w-[70%] h-[70%] ml-[15%] mt-[5%]">

                    </div>
                </div>
            </div>
        }
    </>} 
                
                {!props.isActive && 
                <>
                </>
                }
                
                </>);
}

export default RegisterBook;
