import { motion } from 'framer-motion'
import { Brain, Moon, Heart, Star, TrendingUp, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

export function DashboardPage() {
  const stats = [
    { label: 'Dreams Recorded', value: '23', icon: Moon, color: 'text-blue-400' },
    { label: 'Mood Entries', value: '47', icon: Heart, color: 'text-pink-400' },
    { label: 'Shadow Insights', value: '8', icon: Star, color: 'text-purple-400' },
    { label: 'Days Active', value: '15', icon: Calendar, color: 'text-green-400' },
  ]

  const recentDreams = [
    {
      id: 1,
      title: 'The Labyrinth of Mirrors',
      date: '2024-01-15',
      symbols: ['Mirror', 'Labyrinth', 'Light'],
      interpretation: 'A journey of self-reflection and the search for authentic identity...'
    },
    {
      id: 2,
      title: 'Flying Over Ancient Forest',
      date: '2024-01-12',
      symbols: ['Flight', 'Forest', 'Ancient'],
      interpretation: 'Represents transcendence and connection to ancestral wisdom...'
    },
    {
      id: 3,
      title: 'The Wise Old Woman',
      date: '2024-01-10',
      symbols: ['Wise Woman', 'Cave', 'Fire'],
      interpretation: 'Encounter with the archetypal Wise Woman, offering guidance...'
    }
  ]

  const moodTrend = [
    { date: '1/10', mood: 7 },
    { date: '1/11', mood: 6 },
    { date: '1/12', mood: 8 },
    { date: '1/13', mood: 7 },
    { date: '1/14', mood: 9 },
    { date: '1/15', mood: 8 },
  ]

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-mystical-400 to-primary-400 bg-clip-text text-transparent">
          Your Psychological Journey
        </h1>
        <p className="text-white/70 text-lg">
          Welcome back to your path of self-discovery and individuation
        </p>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-effect p-6 rounded-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
              <span className="text-2xl font-bold text-white">{stat.value}</span>
            </div>
            <p className="text-white/70">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Dreams */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect p-6 rounded-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <Moon className="h-6 w-6 mr-2 text-blue-400" />
              Recent Dreams
            </h2>
            <Link
              to="/dreams"
              className="text-mystical-400 hover:text-mystical-300 transition-colors"
            >
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {recentDreams.map((dream) => (
              <div key={dream.id} className="border border-white/10 rounded-lg p-4 hover:border-mystical-500/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-medium">{dream.title}</h3>
                  <span className="text-white/50 text-sm">{dream.date}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {dream.symbols.map((symbol) => (
                    <span key={symbol} className="px-2 py-1 bg-mystical-600/30 rounded-full text-xs text-mystical-300">
                      {symbol}
                    </span>
                  ))}
                </div>
                
                <p className="text-white/70 text-sm">{dream.interpretation}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mood Trends */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-effect p-6 rounded-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-green-400" />
              Mood Trends
            </h2>
            <Link
              to="/mood"
              className="text-mystical-400 hover:text-mystical-300 transition-colors"
            >
              Track Mood
            </Link>
          </div>

          <div className="h-40 flex items-end justify-between space-x-2">
            {moodTrend.map((entry, index) => (
              <div key={entry.date} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-mystical-600 to-mystical-400 rounded-t"
                  style={{ height: `${(entry.mood / 10) * 100}%` }}
                />
                <span className="text-white/50 text-xs mt-2">{entry.date}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 glass-effect p-6 rounded-xl"
      >
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
          <Brain className="h-6 w-6 mr-2 text-mystical-400" />
          Continue Your Journey
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <Link
            to="/dreams"
            className="p-4 border border-blue-500/30 rounded-lg hover:border-blue-500/60 hover:bg-blue-500/10 transition-all group"
          >
            <Moon className="h-8 w-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-medium mb-2">Record New Dream</h3>
            <p className="text-white/70 text-sm">Capture and analyze your latest dream</p>
          </Link>

          <Link
            to="/personality"
            className="p-4 border border-purple-500/30 rounded-lg hover:border-purple-500/60 hover:bg-purple-500/10 transition-all group"
          >
            <Star className="h-8 w-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-medium mb-2">Personality Test</h3>
            <p className="text-white/70 text-sm">Discover your archetypal patterns</p>
          </Link>

          <Link
            to="/shadow-work"
            className="p-4 border border-gray-500/30 rounded-lg hover:border-gray-500/60 hover:bg-gray-500/10 transition-all group"
          >
            <Star className="h-8 w-8 text-gray-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-medium mb-2">Shadow Work</h3>
            <p className="text-white/70 text-sm">Explore your unconscious patterns</p>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}