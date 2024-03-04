"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
import toast, { Toaster } from 'react-hot-toast';
import {signIn} from "../../utils/auth"
const LoginForm = () => {
  const router = useRouter();
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [apiLoading, setApiLoading] = useState(false);
  const handleSignIn = async (e) => {
    setApiLoading(true);
    e.preventDefault();
    const{data,message}=await signIn(email,password)
    setApiLoading(false);
    if (data) {
      toast.success('Login successful!');
      setTimeout(() => {
        router.push('/');
        setEmail("");
        setPassword("");
      }, 1500);
    } else {
      toast.error(message);
    }
  }
  return (
    <>
      <Toaster />
      <form className="row y-gap-20">
        <div className="col-12">
          <h1 className="text-22 fw-500">Welcome back</h1>
          <p className="mt-10">
            Don&apos;t have an account yet?{" "}
            <Link href="/signup" className="text-blue-1">
              Sign up for free
            </Link>
          </p>
        </div>
        {/* End .col */}

        <div className="col-12">
          <div className="form-input ">
            <input type="text" required pattern={emailRegex} value={email} onChange={e => setEmail(e.target.value)} />
            <label className="lh-1 text-14 text-light-1" >Email</label>
          </div>
        </div>
        {/* End .col */}

        <div className="col-12">
          <div className="form-input ">
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
            <label className="lh-1 text-14 text-light-1">Password</label>
          </div>
        </div>
        {/* End .col */}

        <div className="col-12">
          <a href="#" className="text-14 fw-500 text-blue-1 underline">
            Forgot your password?
          </a>
        </div>
        {/* End .col */}

        <div className="col-12">
          <button
            onClick={handleSignIn}
            className="button py-20 -dark-1 bg-blue-1 text-white w-100"
          >
            Sign In <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
        {/* End .col */}
      </form>
    </>
  );
};

export default LoginForm;
