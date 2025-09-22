"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CacheRefreshButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      // Force refresh the page to get latest data
      router.refresh();

      // Optional: Call manual revalidation if secret is available
      if (process.env.NEXT_PUBLIC_REVALIDATE_SECRET) {
        const encodedSecret = encodeURIComponent(
          process.env.NEXT_PUBLIC_REVALIDATE_SECRET
        );
        await fetch(
          `/api/revalidate-manual?secret=${encodedSecret}`
        );
      }
    } catch (error) {
      console.error("Error refreshing cache:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Only show in development
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <button
      onClick={handleRefresh}
      disabled={isLoading}
      className="fixed bottom-15 right-4 z-50 bg-primary text-white px-4 py-2 rounded-lg shadow-lg hover:bg-primary-dark disabled:opacity-50"
      title="Refresh cache and reload data from Sanity"
    >
      {isLoading ? "Refreshing..." : "🔄 Refresh"}
    </button>
  );
}
