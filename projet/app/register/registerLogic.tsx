import {useState} from "react"
import {useRouter} from "next/navigation";

export function useRegistration() {
    const routeur = useRouter()

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const registerUser = async (e: any)=> {
        e.preventDefault()
        const reponse = await fetch( '/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data})
        })
        const userInfo = await reponse.json();

        routeur.push('/login')
        return userInfo
    }

    return { data, setData,registerUser };
}