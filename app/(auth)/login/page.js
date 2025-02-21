"use client"

import { useActionState } from "react" // ✅ Corrected import
import { login } from "@/lib/actions";
import { useFormStatus } from 'react-dom'
import { Loader } from "lucide-react"

const initialState = {
  message: '',
  error: ''
}

export default function LoginPage() {

  const [state, formAction] = useActionState(login, initialState) // ✅ Updated usage
  const { pending } = useFormStatus()

  return (
    <form action={formAction}>
      <div className="mx-auto max-w-sm md:max-w-6xl flex w-full flex-col justify-center space-y-6 sm:w-[350px] py-40 bg-[#1a1a1a]">
        <div className="flex flex-col space-x-8 text-center">
          <h1 className="text-2xl font-semibold text-white">Welcome Back</h1>
          <p className="text-sm text-gray-400">
            Enter your e-mail to sign in or create your account. No password is required.
          </p>
        </div>
        <div className="space-y-2">
          <input
            className="w-full rounded-md shadow-sm border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-75 py-3 px-4"


            type="email" placeholder="name@example.com" name="email" required
          />
          <button className="bg-black text-white dark:bg-white dark:text-black rounded-md hover:bg-gray-300 dark:hover:bg-gray-200 disabled:opacity-25 text-base px-4 py-2 w-full" disabled={pending}>
          {pending && <Loader className="animate-spin w-4 h-4" />}
            Sign in with email
          </button>
        </div>
      </div>
    </form>
  );
}
