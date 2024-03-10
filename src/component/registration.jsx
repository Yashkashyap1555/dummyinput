import './registration.css'
import { useState } from "react"

const Registration = () =>{
    const [name, setName] = useState("")
    // console.log(name ,"45")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const [phone, setPhone] = useState("")

    const handlename = (e) =>{
        setName(e.target.value)
    }
    const handleemail = (e) =>{
        setEmail(e.target.value)
    }
    const handlepassword = (e) =>{
        setPassword(e.target.value)
    }
    const handlephone = (e) =>{
        setPhone(e.target.value)
    }

    const handlesubmit = () =>{
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        localStorage.setItem("phone", phone)
    }
    return(
        <form>
            <div>
            <h2>Registration form</h2>
            </div>
            <div>
                <div>
                Username
                </div>
                <input type="text" placeholder="Enter your name" onChange={handlename} />
            </div>
            <div>
                <div>
                Email
                </div>
                <input type="email" placeholder="Enter your Email" onChange={handleemail} />
            </div>
            <div>
                <div>
                Password
                </div>
                <input type="password" placeholder="Enter your password" onChange={handlepassword}/>
            </div>
            <div>
                <div>
                Phone
                </div>
                <input type="number" placeholder="Enter your phone number" onChange={handlephone}/>
            </div>
            <div className='btn'>
                <button onClick={handlesubmit}>submit</button>
            </div>    
        </form>
        
        
    )
}
export default Registration