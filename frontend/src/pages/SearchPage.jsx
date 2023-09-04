import { Search } from "../components/Search"
import {Songs} from "../components/Songs"
export const SearchPage=()=>{
    return(
        <>
           <div className="container">
            <h1 className="alert alert-info text-center">Music Store</h1>
           
           <Search/>
           <Songs/>
           </div>
        </>
     
    );
    
}