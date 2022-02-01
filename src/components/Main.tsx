import React from 'react';
import Theme from './Theme';
import SignInWidget from './SignIn_Widget';

const Main =()=> {
    return (

     <div className='flex justify-center items-center h-screen'>
        <Theme/>
        <SignInWidget/>
     </div>
    );
}

export default Main;