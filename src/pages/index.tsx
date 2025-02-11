import { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import FilterSort from '../components/FilterSort';
import properties from '../../data/properties.json';
import "../styles/globals.css";

const Home: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilter = (filters: { minPrice: number; maxPrice: number; bedrooms: number }) => {
    const filtered = properties.filter(
      (property) =>
        property.price >= filters.minPrice &&
        property.price <= filters.maxPrice &&
        property.bedrooms >= filters.bedrooms
    );
    setFilteredProperties(filtered);
  };

  const handleSort = (sortBy: string) => {
    const sorted = [...filteredProperties].sort((a, b) => {
      switch (sortBy) {
        case 'price_asc':
          return a.price - b.price;
        case 'price_desc':
          return b.price - a.price;
        case 'date_asc':
          return new Date(a.added).getTime() - new Date(b.added).getTime();
        case 'date_desc':
          return new Date(b.added).getTime() - new Date(a.added).getTime();
        case 'name_asc':
          return a.address.localeCompare(b.address);
        case 'name_desc':
          return b.address.localeCompare(a.address);
        default:
          return 0;
      }
    });
    setFilteredProperties(sorted);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Property Listings</h1>
      <FilterSort onFilter={handleFilter} onSort={handleSort} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Home;