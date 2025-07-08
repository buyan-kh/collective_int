import { Link, useLocation } from 'react-router-dom'
import { 
  Brain, 
  Moon, 
  User, 
  Heart, 
  Eye, 
  Star, 
  Users, 
  Home 
} from 'lucide-react'

export function Navigation() {
  const location = useLocation()
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/dashboard', icon: Brain, label: 'Dashboard' },
    { path: '/dreams', icon: Moon, label: 'Dreams' },
    { path: '/personality', icon: User, label: 'Personality' },
    { path: '/mood', icon: Heart, label: 'Mood' },
    { path: '/shadow-work', icon: Eye, label: 'Shadow Work' },
    { path: '/archetypes', icon: Star, label: 'Archetypes' },
    { path: '/community', icon: Users, label: 'Community' },
  ]

  return (
    <nav className="glass-effect m-4 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-mystical-400" />
          <span className="text-2xl font-serif font-bold bg-gradient-to-r from-mystical-400 to-primary-400 bg-clip-text text-transparent">
            Mindberg
          </span>
        </div>
        
        <div className="flex items-center space-x-6">
          {navItems.map(({ path, icon: Icon, label }) => {
            const isActive = location.pathname === path
            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-mystical-600/30 text-mystical-300 shadow-lg shadow-mystical-500/25'
                    : 'hover:bg-white/10 text-white/70 hover:text-white'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}