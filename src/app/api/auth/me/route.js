import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

// ═══════════════════════════════════════════════════════════
//  Me API Route – GET /api/auth/me
//  • Verifies the JWT token from cookie
//  • Returns current user data
// ═══════════════════════════════════════════════════════════

const JWT_SECRET = "saas-jwt-secret-key-change-in-production";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json(
        { success: false, message: "Not authenticated" },
        { status: 401 }
      );
    }

    // Verify and decode the token
    const decoded = jwt.verify(token, JWT_SECRET);

    return Response.json({
      success: true,
      user: {
        id: decoded.id,
        email: decoded.email,
        name: decoded.name,
      },
    });
  } catch (error) {
    // Token is invalid or expired
    console.error("Auth check error:", error.message);
    return Response.json(
      { success: false, message: "Invalid or expired token" },
      { status: 401 }
    );
  }
}
