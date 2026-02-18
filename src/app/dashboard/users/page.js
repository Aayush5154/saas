"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Search,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  AlertCircle,
} from "lucide-react";
import UserModal from "@/components/dashboard/UserModal";

const API_URL = "https://jsonplaceholder.typicode.com/users";
const USERS_PER_PAGE = 5;

function TableRowSkeleton() {
  return (
    <tr className="animate-pulse">
      <td className="px-6 py-4">
        <div className="h-4 w-32 bg-[#222] rounded" />
      </td>
      <td className="px-6 py-4">
        <div className="h-4 w-40 bg-[#222] rounded" />
      </td>
      <td className="px-6 py-4 hidden md:table-cell">
        <div className="h-4 w-28 bg-[#222] rounded" />
      </td>
      <td className="px-6 py-4 hidden lg:table-cell">
        <div className="h-4 w-24 bg-[#222] rounded" />
      </td>
      <td className="px-6 py-4">
        <div className="h-8 w-16 bg-[#222] rounded" />
      </td>
    </tr>
  );
}

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = useMemo(() => {
    if (!searchQuery.trim()) return users;
    const query = searchQuery.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
  }, [users, searchQuery]);

  const sortedUsers = useMemo(() => {
    return [...filteredUsers].sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortOrder === "asc" ? comparison : -comparison;
    });
  }, [filteredUsers, sortOrder]);

  const totalPages = Math.ceil(sortedUsers.length / USERS_PER_PAGE);
  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * USERS_PER_PAGE;
    return sortedUsers.slice(start, start + USERS_PER_PAGE);
  }, [sortedUsers, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Users</h1>
        <p className="text-[#888]">Manage and view all users in your system.</p>
      </div>

      {error && (
        <div className="mb-6 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <div>
            <p className="font-medium">Error loading users</p>
            <p className="text-red-400/70">{error}</p>
          </div>
          <button
            onClick={fetchUsers}
            className="ml-auto text-xs underline hover:no-underline"
          >
            Retry
          </button>
        </div>
      )}

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#555]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or email..."
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-black border border-[#222]
                       text-white placeholder-[#555] text-sm
                       focus:outline-none focus:border-[#7c3aed]
                       transition-all duration-200"
          />
        </div>
      </div>

      <div className="rounded-lg bg-black border border-[#222] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-black border-b border-[#222]">
                <th className="px-6 py-4 text-left">
                  <button
                    onClick={toggleSort}
                    className="flex items-center gap-2 text-xs font-semibold text-[#888] uppercase tracking-wider hover:text-white transition-colors"
                  >
                    Name
                    {sortOrder === "asc" ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-[#888] uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-[#888] uppercase tracking-wider hidden md:table-cell">
                  Company
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-[#888] uppercase tracking-wider hidden lg:table-cell">
                  City
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-[#888] uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222]">
              {loading ? (
                <>
                  <TableRowSkeleton />
                  <TableRowSkeleton />
                  <TableRowSkeleton />
                  <TableRowSkeleton />
                  <TableRowSkeleton />
                </>
              ) : paginatedUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <p className="text-[#888] text-sm">
                      {searchQuery
                        ? `No users found matching "${searchQuery}"`
                        : "No users available"}
                    </p>
                  </td>
                </tr>
              ) : (
                paginatedUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className="hover:bg-[#111] transition-colors cursor-pointer bg-black"
                    onClick={() => setSelectedUser(user)}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border border-[#222] bg-black flex items-center justify-center text-white text-xs font-bold">
                          {user.name.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-white">
                          {user.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#888]">
                      {user.email.toLowerCase()}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#888] hidden md:table-cell">
                      {user.company?.name || "—"}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#888] hidden lg:table-cell">
                      {user.address?.city || "—"}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedUser(user);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                                   bg-black border border-[#222] text-white hover:border-[#444] transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {!loading && sortedUsers.length > 0 && (
          <div className="px-6 py-4 border-t border-[#222] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#888]">
              Showing{" "}
              <span className="text-white font-medium">
                {(currentPage - 1) * USERS_PER_PAGE + 1}
              </span>{" "}
              to{" "}
              <span className="text-white font-medium">
                {Math.min(currentPage * USERS_PER_PAGE, sortedUsers.length)}
              </span>{" "}
              of{" "}
              <span className="text-white font-medium">{sortedUsers.length}</span>{" "}
              users
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium
                           bg-black border border-[#222] text-[#888] hover:text-white hover:border-[#444]
                           disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <span className="px-4 py-2 text-sm text-[#888]">
                Page <span className="text-white font-medium">{currentPage}</span> of{" "}
                <span className="text-white font-medium">{totalPages || 1}</span>
              </span>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium
                           bg-black border border-[#222] text-[#888] hover:text-white hover:border-[#444]
                           disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      <UserModal
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
        user={selectedUser}
      />
    </div>
  );
}
