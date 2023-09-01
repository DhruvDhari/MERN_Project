import { Icon } from "@iconify/react";

const IconText=({iconName,displayText,active})=>{
    return(
        <div className="flex">

            <div>
                <Icon icon={iconName} color="white"/>
            </div>
            <div className="text-white" >
                {displayText}
            </div>
        
        </div>
    );
}

export default IconText;