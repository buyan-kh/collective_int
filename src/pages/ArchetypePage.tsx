import { motion } from 'framer-motion'
import { Star, Crown, Heart, Sword, Shield, Compass } from 'lucide-react'

export function ArchetypePage() {
  const archetypes = [
    { name: 'The Innocent', icon: Heart, color: 'from-blue-400 to-cyan-400', description: 'Desires happiness and seeks harmony' },
    { name: 'The Explorer', icon: Compass, color: 'from-green-400 to-teal-400', description: 'Seeks freedom and authentic experience' },
    { name: 'The Sage', icon: Star, color: 'from-purple-400 to-indigo-400', description: 'Understands the world and shares wisdom' },
    { name: 'The Hero', icon: Sword, color: 'from-red-400 to-orange-400', description: 'Proves worth through courageous action' },
    { name: 'The Outlaw', icon: Shield, color: 'from-gray-400 to-slate-400', description: 'Disrupts what isn\'t working' },
    { name: 'The Magician', icon: Crown, color: 'from-violet-400 to-purple-400', description: 'Transforms reality through vision' }
  ]

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Universal Archetypes
        </h1>
        <p className="text-white/70 text-lg max-w-3xl mx-auto">
          Explore the fundamental patterns that shape human behavior and consciousness
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {archetypes.map((archetype, index) => (
          <motion.div
            key={archetype.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect p-6 rounded-xl archetype-glow hover:scale-105 transition-all duration-300"
          >
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${archetype.color} flex items-center justify-center mb-6`}>
              <archetype.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{archetype.name}</h3>
            <p className="text-white/70">{archetype.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}