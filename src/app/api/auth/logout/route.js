import { cookies } from "next/headers";

// ═══════════════════════════════════════════════════════════
//  Logout API Route – POST /api/auth/logout
//  • Clears the auth cookie
// ═══════════════════════════════════════════════════════════

export async function POST() {
  try {
    const cookieStore = await cookies();
    
    // Clear the token cookie by setting it to empty with immediate expiry
    cookieStore.set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0, // Expire immediately
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Logout error:", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
