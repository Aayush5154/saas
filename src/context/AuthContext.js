"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

// ═══════════════════════════════════════════════════════════
//  Auth Context – JWT + Cookie Authentication
//  • login()  → calls API, sets httpOnly cookie on server
//  • logout() → calls API, clears cookie
//  • Auto-validates token on page load via /api/auth/me
// ═══════════════════════════════════════════════════════════

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ── Check authentication status on mount ───────────────────
  useEffect(() => {
    checkAuth();
  }, []);

  /**
   * Validate the current session by calling /api/auth/me
   */
  const checkAuth = async () => {
    try {
      const res = await fetch("/api/auth/me");
      const data = await res.json();

      if (data.success && data.user) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Login – calls the /api/auth/login endpoint
   * Server sets httpOnly cookie, we just update state
   *
   * @param {string} email
   * @param {string} password
   * @returns {{ success: boolean, message?: string, user?: Object }}
   */
  const login = async (email, password) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success && data.user) {
        setUser(data.user);
        return { success: true, user: data.user };
      } else {
        return { success: false, message: data.message || "Login failed" };
      }
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, message: "Network error. Please try again." };
    }
  };

  /**
   * Logout – calls the /api/auth/logout endpoint
   * Server clears httpOnly cookie
   */
  const logout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Also clear any client-side cookie reference (belt & suspenders)
      Cookies.remove("token");
      setUser(null);
    }
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated, loading, checkAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Custom hook – consume auth state from any component.
 * Must be rendered inside <AuthProvider>.
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an <AuthProvider>");
  }
  return context;
}
