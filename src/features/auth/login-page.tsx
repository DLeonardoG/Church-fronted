import { LoginForm } from "@/features/auth/login-form"

export default function LoginPage() {
  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden">
      {/* Background decorativo con blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  )
}
