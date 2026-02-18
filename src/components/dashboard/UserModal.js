"use client";

import { X, MapPin, Phone, Globe, Building2, Mail } from "lucide-react";

// ═══════════════════════════════════════════════════════════
//  User Detail Modal – Reusable Modal Component
//  • Props: isOpen, onClose, user
//  • Shows extended user details with backdrop blur
// ═══════════════════════════════════════════════════════════

export default function UserModal({ isOpen, onClose, user }) {
  if (!isOpen || !user) return null;

  // Close on escape key
  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onKeyDown={handleKeyDown}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg bg-black border border-[#222] rounded-lg
                   shadow-2xl shadow-black/50 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#222]">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full border border-[#222] bg-black flex items-center justify-center text-white text-xl font-bold">
              {user.name.charAt(0)}
            </div>
            <div>
              <h2 id="modal-title" className="text-xl font-bold text-white">
                {user.name}
              </h2>
              <p className="text-sm text-[#888]">@{user.username}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#666] hover:text-white hover:bg-[#111] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-[#888] uppercase tracking-wider">
              Contact Information
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-[#888]" />
                <span className="text-[#ccc]">{user.email.toLowerCase()}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-[#888]" />
                <span className="text-[#ccc]">{user.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Globe className="w-4 h-4 text-[#888]" />
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#ccc] transition-colors"
                >
                  {user.website}
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-[#888] uppercase tracking-wider">
              Address
            </h3>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-[#888] mt-0.5" />
              <div className="text-[#ccc]">
                <p>{user.address?.street}, {user.address?.suite}</p>
                <p>{user.address?.city}, {user.address?.zipcode}</p>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-[#888] uppercase tracking-wider">
              Company
            </h3>
            <div className="rounded-lg bg-black border border-[#222] p-4">
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-5 h-5 text-[#888]" />
                <span className="text-white font-medium">
                  {user.company?.name}
                </span>
              </div>
              <p className="text-sm text-[#888] italic">
                &ldquo;{user.company?.catchPhrase}&rdquo;
              </p>
              <p className="text-xs text-[#666] mt-2">{user.company?.bs}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#222] flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg text-sm font-medium
                       text-[#888] hover:text-white hover:bg-[#111] transition-all"
          >
            Close
          </button>
          <button
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-black
                       bg-white hover:bg-[#eee] transition-all"
          >
            Contact User
          </button>
        </div>
      </div>
    </div>
  );
}
