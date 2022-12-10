import { useEffect, useState } from "react"

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false)
    const [isSellerLoader, setIsSellerLoader] = useState(true)
    
    useEffect(() => {
        if (email) {
            fetch(`https://camera-alpha.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {

                    setIsSeller(data.isSeller)
                    if (data?.isSeller) {
                        setIsSellerLoader(false)
                    }
                })
        }
    }, [email])

    return [isSeller, isSellerLoader]
}

export default useSeller