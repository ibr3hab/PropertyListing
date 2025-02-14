import { useState } from 'react';

interface FilterSortProps {
  onFilter: (filters: { minPrice: number; maxPrice: number; bedrooms: number }) => void;
  onSort: (sortBy: string) => void;
}

const FilterSort: React.FC<FilterSortProps> = ({ onFilter, onSort }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [bedrooms, setBedrooms] = useState(0);

  const handleFilter = () => {
    onFilter({ minPrice, maxPrice, bedrooms });
  };

  return (
    <div className="mb-8">
      <div className="flex gap-4 mb-4">
        <h3>Minumum Price</h3>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="border p-2 rounded"
        />
        <h3>Max Price</h3>
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="border p-2 rounded"
        />
        <h3>Bedrooms</h3>
        <input
          type="number"
          placeholder="Bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(Number(e.target.value))}
          className="border p-2 rounded"
        />
        <button onClick={handleFilter} className="bg-blue-500 text-white p-2 rounded">
          Apply Filters
        </button>
      </div>
      <div>
        <h3>Price Filters</h3>
        <select
          onChange={(e) => onSort(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="date_asc">Date: Oldest to Newest</option>
          <option value="date_desc">Date: Newest to Oldest</option>
          <option value="name_asc">Name: A to Z</option>
          <option value="name_desc">Name: Z to A</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSort;