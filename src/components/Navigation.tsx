import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 50, 
      background: 'rgba(255,255,255,0.9)', 
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e0e0e0'
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', height: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: 17, fontWeight: 600, color: '#1a1a1a', textDecoration: 'none' }}>
          Syafino Yunalfian
        </Link>

        <div style={{ display: 'flex', gap: 32 }} className="hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="nav-link"
              style={{
                color: location.pathname === item.path ? '#1a1a1a' : '#555',
                fontWeight: location.pathname === item.path ? 600 : 400,
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#555' }}
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div style={{ background: '#fff', borderBottom: '1px solid #e0e0e0', padding: '16px 24px' }} className="md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{ display: 'block', padding: '8px 0', color: '#555', fontSize: 15, textDecoration: 'none' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
