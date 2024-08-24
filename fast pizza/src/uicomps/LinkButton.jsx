/*eslint-disable*/
import { Link,useNavigate } from "react-router-dom";

export default function LinkButton({children,to}){
    const navigate = useNavigate();
    const className="text-blue-500 hover:text-blue-700 hover:underline text-sm"

    if(to === '-1'){
        console.log(children,to)

        return( <button className={className} onClick={() => navigate(-1)}>{children}</button>)
    }

    return(
        <Link to={to} className={className}>
            {children}
         </Link>
    )
 
}