import { Icon } from '@iconify/react';
import TextInput from '../components/shared/Textinput';

const LoginComponent=()=>{
    return(
      
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
            <Icon icon="logos:spotify" width="150" />
            </div>
            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col" >
                {/* isme email and password aaega and login button */}
             <div className='font-bold mb-12'>To continue, log in to Spotify.</div>   
             <TextInput/>   

            </div>
       
        
        
        </div>
       
    );
};

export default LoginComponent;