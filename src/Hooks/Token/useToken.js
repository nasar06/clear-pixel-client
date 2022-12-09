const { useEffect, useState } = require("react")

const useToken = (email) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('access-token', data.accessToken)
                    setToken(data.accessToken)
                })
        }
    }, [email])

    return [token]
}

export default useToken