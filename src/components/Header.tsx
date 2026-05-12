import '../styles/components.css';

interface HeaderProps {
  restaurantName: string;
  logoUrl?: string;
}

export default function Header({ restaurantName, logoUrl }: HeaderProps) {
  return (
    <header className="header">
      {/* Parte izquierda: nombre del restaurante */}
      <div className="header-left">
        <h1 className="header-title">{restaurantName}</h1>
      </div>

      {/* Parte derecha: logo */}
      <div className="header-right">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={restaurantName}
            className="header-logo"
          />
        ) : (
          <div className="header-logo" style={{ backgroundColor: '#D4AF37' }}></div>
        )}
      </div>
    </header>
  );
}
