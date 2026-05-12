import '../styles/components.css';

interface MenuFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function MenuFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: MenuFilterProps) {
  return (
    <div className="menu-filter">
      {/* Botón "Todos" para mostrar todos los platos */}
      <button
        className={`filter-button ${activeCategory === 'Todos' ? 'active' : ''}`}
        onClick={() => onCategoryChange('Todos')}
      >
        Todos
      </button>

      {/* Botones por cada categoría */}
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-button ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
