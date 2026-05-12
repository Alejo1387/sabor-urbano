import '../styles/components.css';

interface DishCardProps {
  name: string;
  description: string;
  category: string;
  image: string;
}

export default function DishCard({
  name,
  description,
  category,
  image,
}: DishCardProps) {
  return (
    <div className="dish-card">
      {/* Imagen del plato */}
      <img
        src={image}
        alt={name}
        className="dish-image"
        onError={(e) => {
          // Si la imagen no carga, mostrar un fondo dorado
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />

      {/* Información del plato */}
      <div className="dish-content">
        <h3 className="dish-name">{name}</h3>
        <p className="dish-category">{category}</p>
        <p className="dish-description">{description}</p>
      </div>
    </div>
  );
}
