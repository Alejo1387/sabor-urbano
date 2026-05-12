import { useState, useMemo } from 'react';
import Header from './components/Header';
import MenuFilter from './components/MenuFilter';
import DishCard from './components/DishCard';
import dishes from './data/dishes.json';
import logoSaborUrbano from './assets/logoSaborUrbano.jpeg';

// Definir el tipo de un plato
interface Dish {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  imagen: string;
}

export default function App() {
  // Estado para guardar la categoría activa
  const [activeCategory, setActiveCategory] = useState('Todos');

  // Obtener todas las categorías únicas (sin repetidas)
  const categories = useMemo(() => {
    return Array.from(new Set(dishes.map((dish: Dish) => dish.categoria)));
  }, []);

  // Filtrar platos según la categoría activa
  const filteredDishes = useMemo(() => {
    if (activeCategory === 'Todos') {
      return dishes;
    }
    return dishes.filter((dish: Dish) => dish.categoria === activeCategory);
  }, [activeCategory]);

  return (
    <div className="app">
      {/* Header con nombre y logo del restaurante */}
      <Header
        restaurantName="Sabor Urbano"
        logoUrl={logoSaborUrbano}
      />

      {/* Botones para filtrar por categoría */}
      <MenuFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Rejilla de platos */}
      <div className="dishes-container">
        {filteredDishes.length > 0 ? (
          filteredDishes.map((dish: Dish) => (
            <DishCard
              key={dish.id}
              name={dish.nombre}
              description={dish.descripcion}
              category={dish.categoria}
              image={dish.imagen}
            />
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>
            No hay platos en esta categoría
          </p>
        )}
      </div>
    </div>
  );
}
