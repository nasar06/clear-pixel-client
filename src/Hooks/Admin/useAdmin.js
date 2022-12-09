import { useEffect, useState } from "react"

const useAdmin = (email) => {

    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin)
                    setIsLoading(false)
                })
        }

    }, [email])

    return [isAdmin, isAdminLoading]
    
}
export default useAdmin;