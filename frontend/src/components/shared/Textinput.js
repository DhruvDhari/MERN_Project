const TextInput=()=>{
    return(
        <div className="textInputDiv flex flex-col space-y-2 w-full">
            <label for="124" className="font-semibold" >Sample Label</label>
               <input type="text" placeholder="Placeholder" className="p-2 border-1 border-solid border-gray-300 rounded placeholder-gray-500 "
               id="124"
                />

        </div>
     
    );
}

export default TextInput;