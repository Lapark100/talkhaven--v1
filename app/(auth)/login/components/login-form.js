'use client'
import SubmitButton from "@/components/submit-button"
import { login } from "@/lib/actions"
import { useActionState } from "react"

const initialState = {
    message: '',
    error: false
}

export default function LoginForm () {
const [state, formAction] = useActionState(login, initialState )
return <form action={formAction} className="space-y-2">
<input className ="w-full py-3   rounded-lg shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950 disabled:opacity-75 px-2 " type="email" placeholder="name@example.com" name="email" required/>
<SubmitButton type="submit" className="w-full  text-base px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md hover:bg-gray-300 dark:Hover:bg-gray-200 disabled:opacity-25">Sign in with email</SubmitButton>
<p className={`${state?.error? 'text-red-500': 'text-green-500'} text-sm text-center` }>
{state.message}
</p>
</form>
}

