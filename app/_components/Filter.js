"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ButtonFilter from "./ButtonFilter";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const activeFilter = searchParams.get("capacity") ?? "all";

  return (
    <div className="border border-primary-800 flex">
      <ButtonFilter
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </ButtonFilter>
      <ButtonFilter
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        2&mdash;3 guest
      </ButtonFilter>
      <ButtonFilter
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guest
      </ButtonFilter>
      <ButtonFilter
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guest
      </ButtonFilter>
    </div>
  );
}
