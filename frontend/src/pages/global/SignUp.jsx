import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="min-h-[100vh] w-[100%] flex justify-center items-center">
        <div className="w-3/4 md:w-1/2">
            <h1 className="text-primary font-semibold text-xl text-center">CREATE YOUR MECHAGO ACCOUNT</h1>
            <form action="" className="flex flex-col gap-5 my-8">
                <Input type="text" placeholder="Full Name" required/>
                <Input type="email" placeholder="Email" required/>
                <Input type="password" placeholder="Password" required/>
                <Button className="w-1/4 mx-auto">Register</Button>
            </form>
            <p className="text-center">Already have an account? <Link to={'/login'} className="text-primary">Login</Link> </p>
        </div>
    </div>
  )
}

export default SignUp