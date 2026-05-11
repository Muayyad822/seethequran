import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User } from 'lucide-react';
import { useUser } from '../../context/UserContext';

const NavBar = () => {
  const location = useLocation();
  const { user, login, logout } = useUser();
  const isExperience = location.pathname.startsWith('/surah/');

  if (isExperience) return null; // Hide navbar in experience mode for immersion

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-dark py-4 px-6 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <img src="/see_the_quran_logo.svg" alt="See the Quran" className="h-10 w-auto" />
      </Link>

      <div className="flex items-center gap-8">
        <Link to="/" className={`text-sm uppercase tracking-widest hover:text-gold transition-colors ${location.pathname === '/' ? 'text-gold' : 'text-muted'}`}>
          Journey
        </Link>
        <Link to="/bookmarks" className={`text-sm uppercase tracking-widest hover:text-gold transition-colors ${location.pathname === '/bookmarks' ? 'text-gold' : 'text-muted'}`}>
          Saved
        </Link>
        <Link to="/collections" className={`text-sm uppercase tracking-widest hover:text-gold transition-colors ${location.pathname === '/collections' ? 'text-gold' : 'text-muted'}`}>
          Collections
        </Link>
        
        {user ? (
          <button onClick={logout} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gold-dim overflow-hidden border border-gold/20 group-hover:border-gold transition-all">
              {user.photoURL ? <img src={user.photoURL} alt={user.displayName} /> : <User className="w-full h-full p-1 text-ivory" />}
            </div>
          </button>
        ) : (
          <button onClick={login} className="btn-secondary py-1.5 px-4 text-xs tracking-widest uppercase">
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
