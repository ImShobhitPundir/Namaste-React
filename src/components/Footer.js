import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer =() => {
    const {user} = useContext(UserContext);
    return(
        <div className="bg-gray-200 p-3">
            <h5 className="text-center">Developed & Designed By {user.name}  | {user.email}</h5>
        </div>
    )
}

export default Footer;