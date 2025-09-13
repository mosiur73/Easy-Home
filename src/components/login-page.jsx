"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Home, Mail, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export function LoginPage() {
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
         

          {/* Form Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-purple-500 text-2xl text-center font-bold">WiztecBD</h1>
              <h1 className="text-2xl text-center font-bold text-gray-900">Create New Account</h1>
              <p className="text-gray-600 text-center mt-2">Let's login to grab amazing deal</p>
            </div>


            {!showEmailForm ? (
              // Social Login Buttons
              <div className="space-y-4">
                {/* Google Login */}
                <Button
                  variant="outline"
                  className="w-full h-12 flex items-center justify-center space-x-3 border-gray-300 hover:bg-gray-50 bg-transparent"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 2.43-4.53 4.12-4.53z"
                    />
                  </svg>
                  <span className="text-gray-700">Continue with Google</span>
                </Button>

                {/* Apple Login */}
                <Button
                  variant="outline"
                  className="w-full h-12 flex items-center justify-center space-x-3 border-gray-300 hover:bg-gray-50 bg-transparent"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span className="text-gray-700">Continue with Apple</span>
                </Button>

                {/* Email/Phone Login */}
                <Button
                  className="w-full h-12 flex items-center justify-center space-x-3 bg-gray-400 hover:bg-gray-500 text-white"
                  onClick={() => setShowEmailForm(true)}
                >
                  <Mail className="w-5 h-5" />
                  <span>Continue with Email/Phone</span>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Social Login Buttons (smaller) */}
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full h-10 flex items-center justify-center space-x-3 border-gray-300 hover:bg-gray-50 bg-transparent text-sm"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 2.43-4.53 4.12-4.53z"
                      />
                    </svg>
                    <span className="text-gray-700">Continue with Google</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full h-10 flex items-center justify-center space-x-3 border-gray-300 hover:bg-gray-50 bg-transparent text-sm"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <span className="text-gray-700">Continue with Apple</span>
                  </Button>
                </div>

                {/* OR Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">OR</span>
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <Input
                    type="email"
                    placeholder="rownok@gmail.com"
                    className="w-full h-12 bg-gray-50 border-gray-200 focus:bg-white"
                  />
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••••••"
                      className="w-full h-12 bg-gray-50 border-gray-200 focus:bg-white pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember me and Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <button className="font-medium text-purple-600 hover:text-purple-500">Forgot Password?</button>
                  </div>
                </div>

                {/* Login Button */}
                <Button className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-medium">Login</Button>
              </div>
            )}

            {/* Sign Up Link */}
            <div className="text-center">
              <span className="text-gray-600">Don't have an account? </span>
              <button className="text-blue-500 hover:text-blue-600 font-medium">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Hero Image */}
      <div className="flex-1 relative overflow-hidden">
       {/* Right side - Hero Image */}
      <div className="flex-1 flex items-center justify-center p-8 ">
        <img 
          className="max-w-md h-auto object-contain"
          src="/login.png" alt="login image" 
        />
      </div>

        <div className="absolute inset-0 bg-gradient-to-br  to-transparent">
          <div className="absolute top-12 right-28 max-w-sm   rounded-lg p-4">
            <p className="text-white text-lg font-medium leading-relaxed">
              Browse thousands of properties to buy, sell, or rent with trusted agents.
            </p>
          </div>
        </div>

       
      </div>
    </div>
  )
}

export default LoginPage
