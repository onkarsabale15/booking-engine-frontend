"use client"
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const SignUpForm = () => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [apiLoading, setApiLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    setApiLoading(true);
    e.preventDefault();
    const body = JSON.stringify({
      userName: {
        firstName,
        lastName
      },
      email,
      phone: {
        primaryNumber: phoneNumber
      },
      password
    });
    const response = await fetch(`${BACKEND_URL}/api/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })

    const data = await response.json();
    setApiLoading(false);
    if (response.status == 200) {
      toast.success('Signup successful!');
      setTimeout(() => {
        router.push('/login');
        setConfirmPassword("");
        setEmail("");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setPassword("");
      }, 3000);
    }
    if (response.status == 400) {
      toast.error(data.message);
    }
    if (response.status == 409) {
      toast.error(data.message);
    }
  }
  return (
    <>
      <Toaster />
      <form className="row y-gap-20">
        <div className="col-12">
          <h1 className="text-22 fw-500">Welcome back</h1>
          <p className="mt-10">
            Already have an account yet?{" "}
            <Link href="/login" className="text-blue-1">
              Log in
            </Link>
          </p>
        </div>

        <div className="col-12">
          <div className="form-input ">
            <input type="text" required value={firstName} onChange={e => setFirstName(e.target.value)} />
            <label className="lh-1 text-14 text-light-1">First Name</label>
          </div>
        </div>

        <div className="col-12">
          <div className="form-input ">
            <input type="text" required valvue={lastName} onChange={e => setLastName(e.target.value)} />
            <label className="lh-1 text-14 text-light-1">Last Name</label>
          </div>
        </div>

        <div className="col-12">
          <div className="form-input ">
            <input type="text" required pattern={emailRegex} value={email} onChange={e => setEmail(e.target.value)} />
            <label className="lh-1 text-14 text-light-1">Email</label>
          </div>
        </div>

        <div className="col-12">
          <div className="form-input">
            <input type="text" required value={phoneNumber} pattern={phoneRegex} onChange={e => setPhoneNumber(e.target.value)} />
            <label className="lh-1 text-14 text-light-1">Phone Number</label>
          </div>
        </div>

        <div className="col-12">
          <div className="form-input ">
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
            <label className="lh-1 text-14 text-light-1">Password</label>
          </div>
        </div>

        <div className="col-12">
          <div className="form-input ">
            <input type="password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            <label className="lh-1 text-14 text-light-1">Confirm Password</label>
          </div>
        </div>

        <div className="col-12">
          <button
            onClick={handleSignup}
            className="button py-20 -dark-1 bg-blue-1 text-white w-100"
          >
            Sign Up <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
