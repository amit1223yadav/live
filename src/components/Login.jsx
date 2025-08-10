import React, { useState } from "react";

export default function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
    // Call API here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✖
        </button>

        <h2 className="text-lg font-bold mb-4">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-400 text-white py-2 rounded-full text-sm font-bold uppercase hover:opacity-90"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4">
          Don’t have an account? <a href="#" className="text-red-400">Sign up</a>
        </p>
      </div>
    </div>
  );
}
