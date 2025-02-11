import { useRouter } from 'next/router';
import properties from '../../../data/properties.json';

const PropertyDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">{property.address}</h1>
      <img src={property.image} alt={property.address} className="w-full h-64 object-cover mb-4" />
      <p>Size: {property.size} sqft</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Price: ${property.price.toLocaleString()}</p>
      <p>Added: {new Date(property.added).toLocaleDateString()}</p>
    </div>
  );
};

export default PropertyDetails;