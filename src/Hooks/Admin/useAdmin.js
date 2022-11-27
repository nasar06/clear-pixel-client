import { useEffect, useState } from "react"

const useAdmin = (email) => {

    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading, setIsLoading] = useState(true)


    useEffect(() => {
        if (email) {
            fetch(`https://camera-alpha.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsAdmin(data.isAdmin)
                    setIsLoading(false)
                })
        }

    }, [email])


    return [isAdmin, isAdminLoading]
}
export default useAdmin;