import React from 'react';
import Theme from './Theme';

//import SignInWidget from './SignIn_Widget';
import MainContainer from './MainContainer';


const Main =()=> {
    return (

     <div className='flex justify-center content-center h-screen touch-none'>
        <Theme/>
        <MainContainer page='list'/>
     </div>
    );
}

export default Main;