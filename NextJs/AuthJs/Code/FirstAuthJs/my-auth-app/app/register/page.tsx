import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

import React from 'react'

const page = () => {
  return (
    <div>
      <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-black">
        <h2>Welcome</h2>
        <p>Please provide all the necessary information</p>
        <form action="">
            <div>
                <Label>First Name</Label>
                <Input id="firstname" placeholder="Tyler" type="text" name="firstname" />
                <Label>Last Name</Label>
                <Input id="lastname" placeholder="Tyler" type="text" name="lastname" />
            </div>
            <Label>Email Address</Label>
            <Input id="email" placeholder="project@dsf.com" type="email" name="email" />
            <Label>Password</Label>
            <Input id="password" placeholder="*********" type="password" name="password" />
            <button>signup &rarr; </button>
        </form>
      </div>
    </div>
  )
}

export default page
