"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  User,
  Moon,
  Sun,
  Bell,
  Shield,
  CreditCard,
  Save,
  Check,
} from "lucide-react";

// ═══════════════════════════════════════════════════════════
//  Settings Page – Profile form + Theme toggle
//  • Profile section with Name / Email (read-only)
//  • Theme switch (Light / Dark) saved to localStorage
//  • Applies "dark" class to HTML root element
// ═══════════════════════════════════════════════════════════

export default function SettingsPage() {
  const { user } = useAuth();
  const [theme, setTheme] = useState("dark");
  const [notifications, setNotifications] = useState(true);
  const [saved, setSaved] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Save settings (simulated)
  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-[#888] mt-1">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Sidebar Nav */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {[
              { icon: User, label: "Profile", active: true },
              { icon: Bell, label: "Notifications", active: false },
              { icon: Shield, label: "Security", active: false },
              { icon: CreditCard, label: "Billing", active: false },
            ].map(({ icon: Icon, label, active }) => (
              <button
                key={label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                  ${
                    active
                      ? "bg-black text-white border border-[#444]"
                      : "text-[#888] hover:text-white hover:bg-[#111]"
                  }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Section */}
          <div className="bg-black border border-[#222] rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-white" />
              Profile Information
            </h2>

            <div className="space-y-5">
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-[#222] bg-black flex items-center justify-center text-white text-2xl font-bold">
                  {user?.name?.charAt(0) || "A"}
                </div>
                <div>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-black border border-[#222] rounded-lg hover:border-[#444] transition-colors">
                    Change Avatar
                  </button>
                  <p className="text-xs text-[#666] mt-1">
                    JPG, PNG or GIF. Max 2MB.
                  </p>
                </div>
              </div>

              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-[#888] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={user?.name || "Admin User"}
                  disabled
                  className="w-full px-4 py-3 rounded-lg bg-black border border-[#222]
                             text-white text-sm cursor-not-allowed opacity-70"
                />
                <p className="text-xs text-[#666] mt-1">
                  Contact support to change your name
                </p>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-[#888] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={user?.email || "admin@saas.com"}
                  disabled
                  className="w-full px-4 py-3 rounded-lg bg-black border border-[#222]
                             text-white text-sm cursor-not-allowed opacity-70"
                />
              </div>

              {/* Role Badge */}
              <div>
                <label className="block text-sm font-medium text-[#888] mb-2">
                  Account Role
                </label>
                <span className="inline-flex items-center px-3 py-1 rounded text-xs font-medium border border-[#222] text-white">
                  {user?.role || "Administrator"}
                </span>
              </div>
            </div>
          </div>

          {/* Appearance Section */}
          <div className="bg-black border border-[#222] rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              {theme === "dark" ? (
                <Moon className="w-5 h-5 text-white" />
              ) : (
                <Sun className="w-5 h-5 text-white" />
              )}
              Appearance
            </h2>

            <div className="space-y-5">
              {/* Theme Toggle */}
              <div className="flex items-center justify-between p-4 rounded-lg bg-black border border-[#222]">
                <div className="flex items-center gap-3">
                  {theme === "dark" ? (
                    <Moon className="w-5 h-5 text-[#888]" />
                  ) : (
                    <Sun className="w-5 h-5 text-white" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-white">
                      {theme === "dark" ? "Dark Mode" : "Light Mode"}
                    </p>
                    <p className="text-xs text-[#666]">
                      {theme === "dark"
                        ? "Easy on the eyes"
                        : "Classic light appearance"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={toggleTheme}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-300 border ${
                    theme === "dark" ? "bg-white border-[#222]" : "bg-[#333] border-[#444]"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-6 h-6 rounded-full transition-transform duration-300 ${
                      theme === "dark" ? "left-7 bg-black" : "left-0.5 bg-white"
                    }`}
                  />
                </button>
              </div>

              {/* Notification Toggle */}
              <div className="flex items-center justify-between p-4 rounded-lg bg-black border border-[#222]">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-[#888]" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      Email Notifications
                    </p>
                    <p className="text-xs text-[#666]">
                      Receive updates about your account
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-300 border ${
                    notifications ? "bg-white border-[#222]" : "bg-[#333] border-[#444]"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-6 h-6 rounded-full transition-transform duration-300 ${
                      notifications ? "left-7 bg-black" : "left-0.5 bg-white"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium
                         transition-all duration-300 ${
                           saved
                             ? "bg-white text-black"
                             : "bg-white text-black hover:bg-[#eee]"
                         }`}
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4" />
                  Saved!
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
