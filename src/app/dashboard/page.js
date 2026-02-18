"use client";

import { useState, useEffect } from "react";
import { Users, Building2, Globe, TrendingUp } from "lucide-react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function StatCardSkeleton() {
  return (
    <div className="rounded-lg bg-black border border-[#222] p-6 animate-pulse">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <div className="h-4 w-24 bg-[#222] rounded" />
          <div className="h-8 w-16 bg-[#222] rounded" />
        </div>
        <div className="w-12 h-12 bg-[#222] rounded-lg" />
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, trend }) {
  return (
    <div className="rounded-lg bg-black border border-[#222] p-6 hover:border-[#444] transition-colors duration-200">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-[#888] mb-1">{title}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
          {trend && (
            <p className="text-xs text-[#888] mt-2 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              {trend}
            </p>
          )}
        </div>
        <div
          className="w-12 h-12 rounded-lg border border-[#222] flex items-center justify-center bg-black"
        >
          <Icon className="w-6 h-6 text-[#888]" />
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const stats = {
    totalUsers: users.length,
    activeCompanies: new Set(users.map((u) => u.company?.name)).size,
    totalWebsites: users.filter((u) => u.website).length,
    totalCities: new Set(users.map((u) => u.address?.city)).size,
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-[#888]">
          Welcome back! Here&apos;s an overview of your workspace.
        </p>
      </div>

      {error && (
        <div className="mb-8 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          <p className="font-medium">Error loading data</p>
          <p className="text-red-400/70">{error}</p>
          <button
            onClick={fetchUsers}
            className="mt-2 text-xs underline hover:no-underline"
          >
            Try again
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {loading ? (
          <>
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
          </>
        ) : (
          <>
            <StatCard
              title="Total Users"
              value={stats.totalUsers}
              icon={Users}
              trend="+12% from last month"
            />
            <StatCard
              title="Active Companies"
              value={stats.activeCompanies}
              icon={Building2}
              trend="+3 new this week"
            />
            <StatCard
              title="Total Websites"
              value={stats.totalWebsites}
              icon={Globe}
            />
            <StatCard
              title="Cities Covered"
              value={stats.totalCities}
              icon={TrendingUp}
            />
          </>
        )}
      </div>

      <div className="rounded-lg bg-black border border-[#222] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#222] flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Recent Users</h2>
          <a
            href="/dashboard/users"
            className="text-sm text-[#888] hover:text-white transition-colors"
          >
            View all →
          </a>
        </div>

        {loading ? (
          <div className="p-6 space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 animate-pulse">
                <div className="w-10 h-10 rounded-full bg-[#222]" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-32 bg-[#222] rounded" />
                  <div className="h-3 w-48 bg-[#222] rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="divide-y divide-[#222]">
            {users.slice(0, 5).map((user) => (
              <div
                key={user.id}
                className="px-6 py-4 flex items-center gap-4 hover:bg-[#111] transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-[#222] bg-black flex items-center justify-center text-white text-sm font-bold">
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {user.name}
                  </p>
                  <p className="text-xs text-[#666] truncate">{user.email}</p>
                </div>
                <div className="hidden sm:block text-right">
                  <p className="text-sm text-[#888]">{user.company?.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
