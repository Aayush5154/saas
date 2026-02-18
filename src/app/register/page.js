"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    // For registration, use the demo credentials since we have no real signup
    // In production, you would call a /api/auth/register endpoint
    const result = await login(formData.email, formData.password);

    if (result.success) {
      router.push("/dashboard");
    } else {
      // For demo: show hint about valid credentials
      setError("Registration demo: Use admin@saas.com / admin123 to login");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black flex">
      {/* ── Left Side: Form ─────────────────────────────── */}
      <div className="w-full lg:w-[45%] flex items-center justify-center px-8 py-12 lg:px-16">
        <div className="w-full max-w-md">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Register
          </h1>
          <p className="text-[#888] text-base mb-10 leading-relaxed">
            A good design is not only aesthetically
            <br />
            pleasing, but also functional.
          </p>

          {/* Error message */}
          {error && (
            <div className="mb-6 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-5 py-4 rounded-xl bg-[#111318] border border-[#222]
                         text-white placeholder-[#666] text-sm
                         focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]/50
                         transition-all duration-200"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-5 py-4 rounded-xl bg-[#111318] border border-[#222]
                         text-white placeholder-[#666] text-sm
                         focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]/50
                         transition-all duration-200"
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-5 py-4 rounded-xl bg-[#111318] border border-[#222]
                         text-white placeholder-[#666] text-sm
                         focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]/50
                         transition-all duration-200"
            />

            {/* Repeat Password */}
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Repeat Password"
              className="w-full px-5 py-4 rounded-xl bg-[#111318] border border-[#222]
                         text-white placeholder-[#666] text-sm
                         focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]/50
                         transition-all duration-200"
            />

            {/* Signup button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 px-8 py-3 rounded-lg text-sm font-semibold text-white
                         bg-gradient-to-r from-[#7c3aed] to-[#EC4899]
                         hover:opacity-90 transition-opacity duration-200
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating..." : "Signup Now"}
            </button>
          </form>

          {/* Social buttons */}
          <div className="flex gap-4 mt-8">
            <button
              type="button"
              className="flex items-center gap-3 px-5 py-3 rounded-xl
                         bg-[#111318] border border-[#222] text-white
                         hover:border-[#333] transition-colors duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
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
                  fill="#4285F4"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-[#666] leading-none">Register with</p>
                <p className="text-sm font-medium">Google</p>
              </div>
            </button>

            <button
              type="button"
              className="flex items-center gap-3 px-5 py-3 rounded-xl
                         bg-[#111318] border border-[#222] text-white
                         hover:border-[#333] transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-[#666] leading-none">Register with</p>
                <p className="text-sm font-medium">Twitter</p>
              </div>
            </button>
          </div>

          {/* Sign in link */}
          <p className="mt-8 text-sm text-[#666]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#a855f7] hover:text-[#c084fc] transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* ── Right Side: Image Grid ──────────────────────── */}
      <div className="hidden lg:block lg:w-[55%] p-6 overflow-hidden">
        <div className="grid grid-cols-4 grid-rows-5 gap-3 h-full">
          {/* Row 1 */}
          <div className="rounded-2xl bg-[#111318]" />
          <div className="rounded-2xl bg-[#111318]" />
          <div className="rounded-2xl bg-[#111318]" />
          <div className="rounded-2xl bg-[#111318]" />

          {/* Row 2 */}
          <div className="rounded-2xl bg-[#111318]" />
          <div className="rounded-2xl bg-[#9F7AEA] row-span-2 overflow-hidden">
            {/* Purple background person */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face"
              alt="Happy person"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl bg-[#111318]" />
          <div className="rounded-2xl bg-[#F5F5DC] row-span-2 overflow-hidden">
            {/* Beige background person */}
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face"
              alt="Smiling person"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 3 */}
          <div className="rounded-2xl bg-[#111318]" />
          <div className="rounded-2xl bg-[#F59E0B] row-span-2 overflow-hidden">
            {/* Yellow background person */}
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face"
              alt="Excited person"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 4 */}
          <div className="rounded-2xl bg-[#111318]" />
          <div className="rounded-2xl bg-[#111318]" />
          <div className="rounded-2xl bg-[#111318]" />

          {/* Row 5 */}
          <div className="rounded-2xl bg-[#111318]" />
          <div className="rounded-2xl bg-[#111318]" />
          <div className="rounded-2xl bg-[#111318]" />
          <div className="rounded-2xl bg-[#111318]" />
        </div>
      </div>
    </main>
  );
}
