import CustomSelect from './CustomSelect';

type PropsType = {
  allProductsCount: number;
  showingProductsCount: number;
  sortBy?: string;
};

export default function TopBar({
  allProductsCount,
  showingProductsCount,
  sortBy,
}: PropsType) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <CustomSelect />

      <p>
        Monstrando{' '}
        <span className="text-dark">
          {' '}
          {showingProductsCount} de {allProductsCount}{' '}
        </span>{' '}
        Productos
      </p>
    </div>
  );
}
