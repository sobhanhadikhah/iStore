import { useEffect } from "react";
const useTitle = (title) =>{


            useEffect(()=>{
                document.title= `${title} | iStore `;
            },[title]);


}
export default useTitle;