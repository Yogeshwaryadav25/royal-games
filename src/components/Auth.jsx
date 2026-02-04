import { useState } from "react";


export default function Auth({ onclose }) {
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({
        email:"",
        passsword:"",
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isLogin
        ? "http://localhost:5000/login"
        :"http://localhost:5000/sign in";

        const res = await fetch(url,{
            method:"post",
            headers: {"content-type": "application/json"},
            body:JSON.stringify(form)
        })
        const data = await res.json()
        alert(data.message)
    }
    return(
        <div className="auth-backdrop">
            <div className="auth-box">
                <h2>{isLogin ? "sign in":"Create Account"}</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email"
                     placeholder="Emial"
                     required
                     onChange={(e)=> setForm({...form, email:e.target.value})}
                    />

                    <input type="password"
                     placeholder="Password"
                     required
                     onChange={(e)=>setForm({...form,passsword:e.target.value})}
                    />
                     <button type="submit">
                        {isLogin ? "Login": "sign in"}
                     </button>
                </form>
                <p onClick={()=> setIsLogin(!isLogin)}>
                    {isLogin?"New user? Create Account":"Alredy have account?Login"}
                </p>
                <span className="close-btn" onClick={onclose}>x</span>
            </div>
        </div>
    )
}