'use client';

import { useEffect } from 'react';

export default function RedirectClient({ destination }: { destination: string }) {
  useEffect(() => {
    window.location.href = destination;
  }, [destination]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-10 h-10 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500 text-sm">Redirecting to supplier…</p>
      </div>
    </div>
  );
}
