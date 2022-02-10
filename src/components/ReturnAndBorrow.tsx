import React, {useState} from "react";

const ReturnAndBorrow = () => {
    const [id, setId] = useState<string>("");
    const [isbn, setIsbn] = useState<any>("");
    const [hasIsbn, setHasIsbn] = useState<boolean | null>(null);


return(<>
                   
                        <div className="flex flex-row"> 
                            <div className='h-[100%] w-[100%] bg-white rounded flex flex-row'>
                    
                            <div className="rounded px-8 pt-1 pb-1 mb-4 mt-20 grid justify-items-center">
                            
                                <div className="text-center">
                                <div className="text-black font-bold flex flex-start mb-10">
                                    <span>
                                       {/* (borrow or return ) */}
                                    </span>
                              </div>
                                    <label className="block text-grey-darker text-sm  text-center font-bold mb-2"> 
                                        ISBN
                                    </label> 
                                    <input className="shadow appearance-none border rounded w-[40vw] py-2 px-3 text-grey-darker" id="idNumber" type="text" value={isbn} onChange={
                                        (e) => {setIsbn(e.target.value); setHasIsbn(true)}
                                    }/>
                                </div>
                                <div className=" text-center">
                                    <label className="block text-grey-darker text-sm font-bold mb-2">  ELEV ID
                                    </label>
                                    <input className="shadow appearance-none border rounded w-[40vw] py-2 px-3 text-grey-darker " id="ISBN" type="text" />
                                 </div>
                                 <div className=" text-center">
                                    <label className="block text-grey-darker text-sm font-bold mb-2">  NTI ID
                                    </label>
                                    <input className="shadow appearance-none border rounded w-[40vw] py-2 px-3 text-grey-darker " id="ISBN" type="text" />
                                 </div>
                                 <div className=" text-center">
                                    <label className="block text-grey-darker text-sm font-bold mb-2"> LÄRAR ID
                                    </label>
                                    <input className="shadow appearance-none border rounded w-[40vw] py-2 px-3 text-grey-darker " id="ISBN" type="text" />
                                 </div>
                                 <div>
                                     <button className="rounded px-[8vw] grid justify-items-center  bg-mörkLila">
                                         <span className="inline-block align-baseline text center text-white py-2">Borrow</span>
                                     </button>
                                </div>
                            </div>
                            <div className="w-[23vw] h-[100%] flex items-center px-[2vw]">
                                {hasIsbn && <img src={"https://image.bokus.com/images/" + isbn} className="w-[100%] h-auto"/>}
                                {!hasIsbn && <div ></div>}
                            </div>
                        </div>     
                    </div>
                </>);
}

export default ReturnAndBorrow;