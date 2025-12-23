import { LoginForm } from "../../Components/login-form"

export default function Page() {
    console.log( "server url", process.env.NEXT_PUBLIC_API_BASE_URL)
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  )
}
