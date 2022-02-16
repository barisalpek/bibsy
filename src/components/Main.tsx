import React, { useState } from 'react';
import Theme from './Theme';

import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";

import SignInWidget from './SignIn_Widget';
import MainNavbar from './MainNavbar';
import Navbar from './Navbar';
import RegisterBook from './RegisterBook';
import ReturnAndBorrow from './ReturnAndBorrow';
import DocumentMeta from "react-document-meta";
import List from './List';
import Details from './Details'

const Main = () => {
    const meta = {
        title: "Bibsy",
        description: "NTI Gymnasiet",
            meta:{
                charset: "utf-8",
                name: {
                    "viewport": "width=device-width, initial-scale=1",
                    "apple-mobile-web-app-capable": "yes",
                    "apple-touch-fullscreen": "yes",
                    "apple-mobile-web-app-status-bar-style": "black-translucent",
                },               
            }
    }

    const [isAdmin, setIsAdmin] = useState<boolean>(true);

    return (
        <div className='h-screen flex w-screen'>
        <Router>
             <DocumentMeta {...meta} />
            <Theme/>
        <div className='flex justify-center content-center w-[90%] m-auto h-[90%] touch-none flex-row'>
            
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
                <Route path="/studentList" element={(
                    <>
                        <div className='h-[100%] w-[100%] flex flex-row z-10'>
                            <div className='w-full h-[100%] flex flex-col content-between'>
                                <div className='h-[10%] mb-[3%]'>
                                    <MainNavbar/>
                                </div>
                                    <></>
                                <div className='h-[85%] w-full bg-white rounded-2xl'>
                                    {/* List component, takes mainColor and listColor as params to dynamicly change color between pages, typeOf determines if the component displays the memberstyle list or bookstyle, there is also two types of bookdisplays named bookType, "available" and "borrowed", this can be greatly improved for simplicity by changing typeof to three different types like member, available and borrowed */}
                                    <List mainColor='lila' listColor='ljusLila' typeOf='Students' request="students"/>
                                </div>
                            </div> 
                        </div>
                    </>
                )}/>

                {/* Displays all members */}
                <Route path="/staffList" element={(
                    <>
                        <div className='h-[100%] w-[100%] flex flex-row z-10'>
                            <div className='w-full h-[100%] flex flex-col content-between'>
                                <div className='h-[10%] mb-[3%]'>
                                    <MainNavbar/>
                                </div>
                        
                                <div className='h-[85%] w-full  bg-white rounded-2xl'>
                                    {/* List component, takes mainColor and listColor as params to dynamicly change color between pages, typeOf determines if the component displays the memberstyle list or bookstyle, there is also two types of bookdisplays named bookType, "available" and "borrowed", this can be greatly improved for simplicity by changing typeof to three different types like member, available and borrowed */}
                                    <List mainColor='lila' listColor='ljusLila' typeOf='Staff' request="staff"/>
                                </div>
                            </div> 
                        </div>
                    </>
                )}/>

                {/* Displays all books */}
                <Route path="/bookList" element={(
                <>
                    <div className='h-[100%] w-[100%] flex  flex-row z-10'>
                        <div className='w-full h-[100%] flex flex-col content-between'>
                            <div className='h-[10%] mb-[3%]'>
                                <MainNavbar isBig={false}/>
                            </div>
                        
                            <div className='h-[85%] w-full  bg-white rounded-2xl'>
                                <></>
                                {/* List component, takes mainColor and listColor as params to dynamicly change color between pages, typeOf determines if the component displays the memberstyle list or bookstyle, there is also two types of bookdisplays named bookType, "available" and "borrowed", this can be greatly improved for simplicity by changing typeof to three different types like member, available and borrowed */}
                                <List mainColor='gul' listColor='ljusGul' typeOf='AllBooks' request="books"/>
                            </div>
                        </div> 
                    </div>
                </>
            )}/>

            {/* Displays available books */}
            <Route path="/availableBookList" element={(
                <>
                    <div className='h-[100%] w-[100%] flex  flex-row z-10'>
                        <div className='w-full h-[100%] flex flex-col content-between'>
                            <div className='h-[10%] mb-[3%]'>
                                <MainNavbar/>
                            </div>
                                <></>
                            <div className='h-[85%] w-full  bg-white rounded-2xl'>
                                <></>
                                {/* List component, takes mainColor and listColor as params to dynamicly change color between pages, typeOf determines if the component displays the memberstyle list or bookstyle, there is also two types of bookdisplays named bookType, "available" and "borrowed", this can be greatly improved for simplicity by changing typeof to three different types like member, available and borrowed */}
                                <List mainColor='grön' listColor='ljusGrön' typeOf='AvailableBooks' request="availableBooks"/>
                            </div>
                        </div> 
                    </div>
                </>
            )}/>

            {/* Displays loaned books */}
            <Route path="/borrowedList" element={(
                <>
                    <div className='h-[100%] w-[100%] flex  flex-row'>
                        <div className='w-full h-[100%] flex flex-col content-between'>
                            <div className='h-[10%] mb-[3%]'>
                                <MainNavbar/>
                            </div>
                        
                            <div className='h-[85%] w-full  bg-white rounded-2xl'>
                                <></>
                                <List mainColor='blå' listColor='ljusBlå' typeOf='BorrowedBooks' request="borrowed"/>
                            </div>
                        </div> 
                    </div>
                </>
            )}/>

            {/* Displays loaned books */}
            <Route path="/notReturnedList" element={(
                <>
                    <div className='h-[100%] w-[100%] flex  flex-row'>
                        <div className='w-full h-[100%] flex flex-col content-between'>
                            <div className='h-[10%] mb-[3%]'>
                                <MainNavbar/>
                            </div>
                        
                            <div className='h-[85%] w-full  bg-white rounded-2xl'>
                                <></>
                                <List mainColor='blå' listColor='ljusBlå' typeOf='BorrowedBooks' request="borrowed"/>
                            </div>
                        </div> 
                    </div>
                </>
            )}/>

            {/* Displays loaned books */}
            <Route path="/detailsStaff/:cate/:ID" element={(
                <Details/>
            )}/>

            </Routes>

        </div>

     </Router>
     </div>         
    );
}
export default Main;