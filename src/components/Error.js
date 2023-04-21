import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    const {status, statusText} = err;

    return(
        <div>
            <h5>Found Error!</h5>
            <h4>{(status)+ (": ") +(statusText)}</h4>
        </div>
    )
}
export default Error;