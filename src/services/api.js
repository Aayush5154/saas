import axios from "axios";

// ═══════════════════════════════════════════════════════════
//  API Service – JSONPlaceholder + Mock Stats
//  Centralised Axios instance with error handling.
// ═══════════════════════════════════════════════════════════

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Fetch all users.
 * @returns {Promise<Array>} Array of user objects
 */
export async function getUsers() {
  try {
    const response = await API.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw error;
  }
}

/**
 * Fetch a single user by ID.
 * @param {number|string} id – User ID
 * @returns {Promise<Object>} User object
 */
export async function getUser(id) {
  try {
    const response = await API.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error.message);
    throw error;
  }
}

/**
 * Return mock dashboard stats.
 * JSONPlaceholder has no stats endpoint, so we simulate one.
 * @returns {Promise<Object>} Mock stats object
 */
export async function getStats() {
  try {
    // Simulate a small network delay to feel realistic
    await new Promise((resolve) => setTimeout(resolve, 300));

    return {
      totalUsers: 120,
      active: 80,
      inactive: 40,
      revenue: "$45k",
      growth: "+12.5%",
      newSignups: 28,
    };
  } catch (error) {
    console.error("Error fetching stats:", error.message);
    throw error;
  }
}

export default API;
