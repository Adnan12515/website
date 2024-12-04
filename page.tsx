
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Label } from "@radix-ui/react-label";
import { Input } from "postcss";

export default function Home() {
  return (
  <main className="bg-black h-screen flex items-center justify-center p-10">
    <div className="grid box-animate w-full h-full grid-cols-1 md:grid-cols-2 bg-white">
      <div className="bg-[#16202a] text-white flex items-center justify-center flex-col">
        <div className="my-4">
          <h1 className="text-3xl font-bold"> Login</h1>
          <p className=" mt-2 font-serif text-slate-300">Please login with your authentic Id</p>
          {''}
        </div>
      <form>
        <Button className=" mb-4 flex items-center w-full gape-4 px-12 bg-transparent rounded-full" variant="outline">
        <FcGoogle className="mx-3" />
        Sign in with Google
        </Button>
        <Label htmlFor="email">Email *</Label>
        <input className="mt-6 mb-3 ml-11 text-center bg-blue-300 rounded-full mx-3 gap-3" 
        type= "email" id = "email" placeholder="Email"/>
        
        <br/>

        <Label htmlFor="Password">Password *</Label>
        <input className="mt-3 mb-3 text-center bg-blue-300 rounded-full mx-3" 
        type= "password" id = "passoword" placeholder="password"/>
      
      </form>

        <Button type="submit" className="mt-6 gap-4 px-16 bg-indigo-700 rounded-full hover: hover:bg-purple-500">
          Login</Button>
        
      

      <p className=" mt-20 text-slate-200 text-xs">
        @2024 All Right Reserved (Adnan)
      </p>

  
    </div>
      
      <div className="hidden lg:block mx-8">
        <Image src = {"/NewA.jpg"} alt="code image" width={557} height={170}/>  
    </div>
    </div>
  
  </main>
  )}