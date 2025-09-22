const filtersData = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Products",
    value: "products",
  },
  {
    label: "Blogs",
    value: "blogs",
  },
];

export default function SearchFilter({ filterValue, setFilterValue }: any) {
  return (
    <div className="flex flex-wrap items-center gap-3.5 bg-white px-10 pb-7.5 border-b border-gray-3">
      {filtersData.map((item) => (
        <button
          key={item?.value}
          onClick={() => setFilterValue(item?.value)}
          className={`inline-flex h-10 items-center justify-center rounded-lg border px-3.5 py-2.5 text-base font-medium ${filterValue === item?.value
              ? "border-primary bg-[#E1E8FF] text-primary"
              : "border-gray-5 bg-white text-dark hover:border-primary hover:bg-[#E1E8FF]"
            }`}
        >
          {item?.label}
        </button>
      ))}
    </div>
  );
}
