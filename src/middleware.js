import { NextResponse } from "next/server";

// ═══════════════════════════════════════════════════════════
//  Middleware – Route Protection
//  • Intercepts requests to /dashboard/*
//  • Checks for valid auth token in cookies
//  • Redirects to /login if not authenticated
// ═══════════════════════════════════════════════════════════

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Get the token from cookies
  const token = request.cookies.get("token")?.value;

  // Protected routes: anything starting with /dashboard
  const isProtectedRoute = pathname.startsWith("/dashboard");

  // Auth routes: login, register
  const isAuthRoute = pathname === "/login" || pathname === "/register";

  // If accessing protected route without token, redirect to login
  if (isProtectedRoute && !token) {
    const loginUrl = new URL("/login", request.url);
    // Store the original URL to redirect back after login
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If accessing auth routes with valid token, redirect to dashboard
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Configure which routes the middleware runs on
export const config = {
  matcher: [
    // Match dashboard routes
    "/dashboard/:path*",
    // Match auth routes
    "/login",
    "/register",
  ],
};
