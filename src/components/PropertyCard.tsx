import Link from 'next/link';
import { Property } from '../types';


interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link href={`/properties/${property.id}`}>
  <div className="block border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img src={property.image} alt={property.address} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{property.address}</h3>
      <p>Size: {property.size} sqft</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Price: ${property.price}</p>
      <p>Added: {property.added}</p>
    </div>
  </div>
</Link>

  
  

    
  );
};

export default PropertyCard;