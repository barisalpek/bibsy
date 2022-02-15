import React, { useState } from 'react';
import Theme from './Theme';

import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";

import SignInWidget from './SignIn_Widget';
import MainContainer from './MainContainer';
import MainNavbar from './MainNavbar';
import Navbar from './Navbar';
import RegisterBook from './RegisterBook';
import ReturnAndBorrow from './ReturnAndBorrow';
import List from './List';

const Main = () => {

    const [isAdmin, setIsAdmin] = useState<boolean>(true);

    return (
        <Router>
            
        <div className='flex justify-center content-center h-screen touch-none'>
            <Theme/>
            { isAdmin && <Navbar/>  }

            <Routes>

                {/* Sign in page */}
                <Route path="/" element={(
                    //Displays signin component
                    <SignInWidget/>
                )}/>

                {/* Signed in dashboard page */}
                <Route path="/dashboard" element={(
                    //Main navbar isBig=true displays dashboard buttons, isBig=false displays small nav buttons
                    <MainNavbar isBig={true} />
                )}/>

                {/* Displays page for registering books */}
                <Route path="/registerBook" element={(
                    //isMember=true registers member, isMember=false registers book
                    <RegisterBook isMember={false} />
                )}/>

                {/* Displays page for registering members */}
                <Route path="/registerMember" element={(
                    //isMember=true registers member, isMember=false registers book
                    <RegisterBook isMember={true} />
                )}/>

                {/* Displays page for borrowing books */}
                <Route path="/borrow" element={(
                    //isReturn=true is return page and isReturn=false is borrow
                    <ReturnAndBorrow isReturn={false}/>
                )}/>

                {/* Displays page for returning books */}
                <Route path="/return" element={(
                    //isReturn=true is return page and isReturn=false is borrow
                    <ReturnAndBorrow isReturn={true}/>
                )}/>

                {/* Displays all members */}
                <Route path="/memberList" element={(
                    <>
                        <div className='h-[100%] w-[100%] flex flex-row z-10'>
                            <div className='w-full h-[100%] flex flex-col content-between'>
                                <div className='h-[10%] mb-[3%]'>
                                    <MainNavbar/>
                                </div>
                        
                                <div className='h-[85%] w-full'>
                                    {/* List component, takes mainColor and listColor as params to dynamicly change color between pages, typeOf determines if the component displays the memberstyle list or bookstyle, there is also two types of bookdisplays named bookType, "available" and "borrowed", this can be greatly improved for simplicity by changing typeof to three different types like member, available and borrowed */}
                                    <List mainColor='lila' listColor='ljusLila' typeOf='member' bookType="available"/>
                                </div>
                            </div> 
                        </div>
                    </>
                )}/>

                {/* Displays available books */}
                <Route path="/bookList" element={(
                <>
                    <div className='h-[100%] w-[100%] flex  flex-row z-10'>
                        <div className='w-full h-[100%] flex flex-col content-between'>
                            <div className='h-[10%] mb-[3%]'>
                                <MainNavbar/>
                            </div>
                        
                            <div className='h-[85%] w-full'>
                                <></>
                                {/* List component, takes mainColor and listColor as params to dynamicly change color between pages, typeOf determines if the component displays the memberstyle list or bookstyle, there is also two types of bookdisplays named bookType, "available" and "borrowed", this can be greatly improved for simplicity by changing typeof to three different types like member, available and borrowed */}
                                <List mainColor='grön' listColor='ljusGrön' typeOf='book' bookType="available"/>
                            </div>
                        </div> 
                    </div>
                </>
            )}/>

            {/* Displays loaned books */}
            <Route path="/loanedList" element={(
                <>
                    <div className='h-[100%] w-[100%] flex  flex-row'>
                        <div className='w-full h-[100%] flex flex-col content-between'>
                            <div className='h-[10%] mb-[3%]'>
                                <MainNavbar/>
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
export default Main;