import { useEffect, useState } from "react";


const useAuthentication =()=>{

        const [role, setrole] = useState(null);
        useEffect(() => {
        
            const userRole = localStorage.getItem("role")
            //if else...
            setrole(userRole || "guest")
          
        }, [])
    
        const isAdmin = role === "ADMIN" || role === "admin"
        const isUser = role === "USER"  || role ==="user"
        const isManager = role === "MANAGER"  || role ==="manager"

        return {isAdmin,isUser,isManager}

}

export default useAuthentication;