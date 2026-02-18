import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

// ═══════════════════════════════════════════════════════════
//  Login API Route – POST /api/auth/login
//  • Validates credentials
//  • Signs JWT token
//  • Sets httpOnly cookie
// ═══════════════════════════════════════════════════════════

// Hardcoded secret (in production, use env variable)
const JWT_SECRET = "saas-jwt-secret-key-change-in-production";

// Valid credentials (in production, this would be a database lookup)
const VALID_USER = {
  email: "admin@saas.com",
  password: "admin123",
  name: "Admin",
  id: 1,
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate required fields
    if (!email || !password) {
      return Response.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Check credentials
    if (email !== VALID_USER.email || password !== VALID_USER.password) {
      return Response.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Create user payload (exclude password)
    const userPayload = {
      id: VALID_USER.id,
      email: VALID_USER.email,
      name: VALID_USER.name,
    };

    // Sign JWT token (expires in 7 days)
    const token = jwt.sign(userPayload, JWT_SECRET, { expiresIn: "7d" });

    // Set httpOnly cookie using Next.js cookies()
    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
    });

    // Return success response with user data
    return Response.json({
      success: true,
      user: userPayload,
    });
  } catch (error) {
    console.error("Login error:", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
