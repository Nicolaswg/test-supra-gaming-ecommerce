import { getPostCategories } from "@/sanity/sanity-blog-utils";
import { Category } from "@/types/category";
import Link from "next/link";

const Categories = async () => {
  const categoryData: Category[] = await getPostCategories();

  return (
    <div className="shadow-1 bg-white rounded-xl mt-7.5">
      <div className="px-4 sm:px-6 py-4.5 border-b border-gray-3">
        <h2 className="font-medium text-lg text-dark">Categorías Populares</h2>
      </div>

      <div className="p-4 sm:p-6">
        {categoryData.length > 0 ? (
          <div className="flex flex-col gap-3">
            {categoryData.map((category, i) => (
              <Link
                key={i}
                href={`/blogs/categories/${category.slug.current}`}
                className="group flex items-center justify-between ease-out duration-200 text-dark hover:text-primary capitalize"
              >
                {category.title}
                <span className="inline-flex rounded-full bg-gray-2 text-custom-xs w-7 h-7 justify-center items-center ease-out duration-200 group-hover:text-white group-hover:bg-primary">
                  {category?.postCount && category?.postCount < 10
                    ? "0" + category?.postCount
                    : category?.postCount}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <p>No se encontraron categorías</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
