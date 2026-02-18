"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GitBranch, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);

    // Call the login API
    const result = await login(formData.email, formData.password);

    if (result.success) {
      router.push("/dashboard");
    } else {
      setError(result.message || "Invalid credentials");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black flex">
      {/* ── Left Side: Image / Branding ─────────────────── */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/20 via-black to-[#EC4899]/10" />

        {/* Floating ellipses */}
        <div className="absolute top-20 left-10 w-32 h-32 opacity-60">
          <Image src="/assets/Ellipse1.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-32 right-16 w-28 h-28 opacity-50">
          <Image src="/assets/Ellipse2.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-1/3 right-10 w-20 h-20 opacity-40">
          <Image src="/assets/Ellipse3.png" alt="" fill className="object-contain" />
        </div>

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-12">
          {/* Featured image */}
          <div className="relative w-full max-w-md aspect-square mb-10">
            <Image
              src="/assets/earth.png"
              alt="Globe illustration"
              fill
              className="object-contain"
            />
          </div>

          {/* Branding text */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Welcome Back
            </h2>
            <p className="text-[#888] text-base leading-relaxed max-w-sm">
              Sign in to access your dashboard and continue building amazing
              projects.
            </p>
          </div>
        </div>
      </div>

      {/* ── Right Side: Login Form ──────────────────────── */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 lg:px-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-10">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-accent-pink flex items-center justify-center">
              <GitBranch className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Squid
            </span>
          </Link>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-white mb-2">
            Sign In
          </h1>
          <p className="text-[#888] mb-8">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-[#a855f7] hover:text-[#c084fc] transition-colors"
            >
              Create one
            </Link>
          </p>

          {/* Error message */}
          {error && (
            <div className="mb-6 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#aaa] mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3.5 rounded-xl bg-[#111318] border border-[#222]
                           text-white placeholder-[#555] text-sm
                           focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]/50
                           transition-all duration-200"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#aaa]"
                >
                  Password
                </label>
                <Link
                  href="#"
                  className="text-xs text-[#a855f7] hover:text-[#c084fc] transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#111318] border border-[#222]
                             text-white placeholder-[#555] text-sm pr-12
                             focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]/50
                             transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555] hover:text-[#888] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-[#333] bg-[#111318]
                           text-[#7c3aed] focus:ring-[#7c3aed]/50 focus:ring-offset-0"
              />
              <label htmlFor="remember" className="text-sm text-[#888]">
                Remember me for 30 days
              </label>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full text-sm font-semibold text-white
                         bg-gradient-to-r from-[#7c3aed] to-[#EC4899]
                         hover:opacity-90 transition-opacity duration-200
                         shadow-lg shadow-[#7c3aed]/25
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            {/* Sign Up button */}
            <Link
              href="/register"
              className="block w-full py-3.5 rounded-full text-sm font-semibold text-white text-center
                         bg-transparent border border-[#333] hover:border-[#555]
                         transition-colors duration-200"
            >
              Sign Up
            </Link>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-[#222]" />
            <span className="text-xs text-[#555] uppercase tracking-wider">
              or continue with
            </span>
            <div className="flex-1 h-px bg-[#222]" />
          </div>

          {/* Social buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl
                         bg-[#111318] border border-[#222] text-white text-sm font-medium
                         hover:border-[#333] transition-colors duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl
                         bg-[#111318] border border-[#222] text-white text-sm font-medium
                         hover:border-[#333] transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
