"use client";

import { usePathname, useRouter } from "next/navigation";

export default function ClearFilters() {
  const router = useRouter();
  const pathname = usePathname() || "";

  function handleClear() {
    router.replace(pathname, { scroll: false });
  }

  return (
    <div className="px-5 py-4 bg-white rounded-lg shadow-1">
      <div className="flex items-center justify-between">
        <p>Filtros:</p>
        <button className="text-primary" onClick={handleClear}>
          Limpiar Filtros
        </button>
      </div>
    </div>
  );
}
