import React, {useEffect, useState} from 'react';
import List from './List';
import Navbar from './Navbar';
import getData from './getData';
import ReturnAndBorrow from './ReturnAndBorrow';
//import Buttons from './Buttons';
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";

type Prop = {
    isAdmin: boolean;
}

const MainContainer = (props: Prop) => {
    
    const [navStyle, setNavStyle] = useState<string>('');
    const [bodyStyle, setBodyStyle] = useState<string>('');
    const [isMain, setIsMain] = useState<boolean | null>(null);
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

    

    useEffect(() => {
        setIsAdmin(props.isAdmin);
    }, [])

 return(
    <Router>
        <div className="h-[90%] w-5/6 my-auto -z-[0] flex flex-row">
        
        {isAdmin && <Navbar/>}

            <Routes>

                <Route path="/" element={(
                    <>
                    <div className='h-[100%] w-[100%] bg-white rounded-2xl'>
                            {/*  */}
                                <div>
                            {!isAdmin && <div></div>}
                        </div>
                        <div>
                        {/* <MainNavbar */} 
                        </div>     
                    </div>
                    </>
                )}/> 

                <Route path="/loanOutBaby" element={(

                    <ReturnAndBorrow/>

                )}/>

                <Route path="/memberList" element={(
                    <>
                        <div className='h-[100%] w-[100%] flex  flex-row -z-[1]'>
                            <div className='w-full h-[100%] flex border-red-500 border-2 flex-col content-between'>
                                <div className='h-[10%] mb-[3%] bg-blue-600 '>
                                    {/*<Buttons />*/}
                                </div>
                            
                                <div className='h-[85%] w-full'>
                                    <List mainColor='lila' listColor='ljusLila' typeOf='member' bookType="available"/>
                                </div>
                            </div> 
                        </div>
                    </>
                )}/> 

                <Route path="/bookList" element={(
                    <>
                    <div className='h-[100%] w-[100%] flex  flex-row'>
                            <div className='w-full h-[100%] flex border-red-500 border-2 flex-col content-between'>
                                <div className='h-[10%] mb-[3%] bg-blue-600 '>
                                    {/*<Buttons />*/}
                                </div>
                            
                                <div className='h-[85%] w-full'>
                                    <></>
                                    
                                    <List mainColor='grön' listColor='ljusGrön' typeOf='book' bookType="available"/>
                                </div>
                            </div> 
                        </div>
                    </>
                )}/>

                <Route path="/loanedList" element={(
                    <>
                    <div className='h-[100%] w-[100%] flex  flex-row'>
                            <div className='w-full h-[100%] flex border-red-500 border-2 flex-col content-between'>
                                <div className='h-[10%] mb-[3%] bg-blue-600 '>
                                    {/*<Buttons />*/}
                                </div>
                            
                                <div className='h-[85%] w-full'>
                                    <></>
                                    <List mainColor='röd' listColor='ljusRöd' typeOf='missing' bookType="borrowed"/>
                                </div>
                            </div> 
                        </div>
                    </>
                )}/>
                
            </Routes>
        
        </div>
    </Router>
 );
}

export default MainContainer;
