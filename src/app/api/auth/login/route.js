import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = "saas-jwt-secret-key-change-in-production";

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

    if (!email || !password) {
      return Response.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      );
    }

    if (email !== VALID_USER.email || password !== VALID_USER.password) {
      return Response.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const userPayload = {
      id: VALID_USER.id,
      email: VALID_USER.email,
      name: VALID_USER.name,
    };

    const token = jwt.sign(userPayload, JWT_SECRET, { expiresIn: "7d" });

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
    });

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
