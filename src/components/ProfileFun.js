import { useEffect } from "react"
const ProfileFun = () => {
    useEffect(()=>{
        timer = setInterval(()=>{
            console.log("setIntervel from useEffect")
        },1000)

        return(()=>{
            clearInterval(timer);
            console.log("this is useEffect return statement")
        })
    },[])
    return(        
        <div>
            <h5>This is profile from Funtional Component</h5>
        </div>
    )
}

export default ProfileFun;