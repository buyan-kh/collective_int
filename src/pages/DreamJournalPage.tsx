import { useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Plus, Search, Star, Eye, BookOpen } from 'lucide-react'

export function DreamJournalPage() {
  const [showNewDream, setShowNewDream] = useState(false)
  const [dreamText, setDreamText] = useState('')
  const [dreamTitle, setDreamTitle] = useState('')

  const dreamEntries = [
    {
      id: 1,
      title: 'The Labyrinth of Mirrors',
      date: '2024-01-15',
      content: 'I found myself in an endless labyrinth made of mirrors. Each reflection showed a different version of myself...',
      symbols: ['Mirror', 'Labyrinth', 'Self', 'Reflection'],
      archetypes: ['The Explorer', 'The Seeker'],
      jungianAnalysis: {
        egoAspects: 'The labyrinth represents the complexity of the psyche and the journey of self-discovery.',
        shadowElements: 'The multiple reflections suggest different aspects of the personality, including hidden or rejected parts.',
        anima: 'The search through the labyrinth may represent the quest to understand the inner feminine aspect.',
        collectiveSymbols: 'The labyrinth is a universal symbol of spiritual journey and transformation.'
      },
      moodBefore: 6,
      moodAfter: 8
    },
    {
      id: 2,
      title: 'Flying Over Ancient Forest',
      date: '2024-01-12',
      content: 'I was soaring above a vast, ancient forest. The trees seemed to whisper secrets of old wisdom...',
      symbols: ['Flight', 'Forest', 'Ancient', 'Wisdom', 'Trees'],
      archetypes: ['The Sage', 'The Innocent'],
      jungianAnalysis: {
        egoAspects: 'Flying represents transcendence and rising above mundane concerns.',
        shadowElements: 'The ancient forest may contain primitive or instinctual aspects that need integration.',
        anima: 'The whispering trees could represent the voice of intuitive wisdom.',
        collectiveSymbols: 'Forests symbolize the unconscious, while flight represents spiritual liberation.'
      },
      moodBefore: 4,
      moodAfter: 9
    }
  ]

  const handleSubmitDream = () => {
    // Here you would integrate with AI analysis
    console.log('Analyzing dream:', { title: dreamTitle, content: dreamText })
    setShowNewDream(false)
    setDreamText('')
    setDreamTitle('')
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Dream Journal & Analysis
        </h1>
        <p className="text-white/70 text-lg">
          Record your dreams and discover their deeper meanings through AI-powered Jungian analysis
        </p>
      </motion.div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button
          onClick={() => setShowNewDream(true)}
          className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
        >
          <Plus className="h-5 w-5 mr-2" />
          Record New Dream
        </button>
        
        <div className="flex-1 relative">
          <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
          <input
            type="text"
            placeholder="Search your dreams..."
            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-mystical-500"
          />
        </div>
      </div>

      {/* New Dream Modal */}
      {showNewDream && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <Moon className="h-6 w-6 mr-2 text-blue-400" />
              Record Your Dream
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-white/80 mb-2">Dream Title</label>
                <input
                  type="text"
                  value={dreamTitle}
                  onChange={(e) => setDreamTitle(e.target.value)}
                  placeholder="Give your dream a meaningful title..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-mystical-500"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2">Dream Description</label>
                <textarea
                  value={dreamText}
                  onChange={(e) => setDreamText(e.target.value)}
                  placeholder="Describe your dream in as much detail as possible. Include emotions, colors, people, objects, and any symbols you remember..."
                  rows={10}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-mystical-500 resize-none"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleSubmitDream}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-mystical-600 to-purple-600 rounded-xl text-white font-semibold hover:from-mystical-700 hover:to-purple-700 transition-all duration-300"
                >
                  Analyze Dream
                </button>
                <button
                  onClick={() => setShowNewDream(false)}
                  className="px-6 py-3 border border-white/20 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Dream Entries */}
      <div className="space-y-8">
        {dreamEntries.map((dream, index) => (
          <motion.div
            key={dream.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">{dream.title}</h3>
                <p className="text-white/60">{dream.date}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-white/60 text-sm">Mood Impact</p>
                  <p className="text-white">
                    {dream.moodBefore} → {dream.moodAfter}
                    <span className="text-green-400 ml-2">+{dream.moodAfter - dream.moodBefore}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Dream Content */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-400" />
                  Dream Content
                </h4>
                <p className="text-white/80 mb-6 leading-relaxed">{dream.content}</p>

                {/* Symbols */}
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-400" />
                  Key Symbols
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {dream.symbols.map((symbol) => (
                    <span key={symbol} className="px-3 py-1 bg-blue-600/30 rounded-full text-blue-300 text-sm">
                      {symbol}
                    </span>
                  ))}
                </div>

                {/* Archetypes */}
                <h4 className="text-lg font-semibold text-white mb-4">Active Archetypes</h4>
                <div className="flex flex-wrap gap-2">
                  {dream.archetypes.map((archetype) => (
                    <span key={archetype} className="px-3 py-1 bg-purple-600/30 rounded-full text-purple-300 text-sm">
                      {archetype}
                    </span>
                  ))}
                </div>
              </div>

              {/* Jungian Analysis */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-mystical-400" />
                  Jungian Analysis
                </h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-medium text-blue-300 mb-2">Ego Aspects</h5>
                    <p className="text-white/70 text-sm">{dream.jungianAnalysis.egoAspects}</p>
                  </div>
                  
                  <div className="border-l-4 border-gray-500 pl-4">
                    <h5 className="font-medium text-gray-300 mb-2">Shadow Elements</h5>
                    <p className="text-white/70 text-sm">{dream.jungianAnalysis.shadowElements}</p>
                  </div>
                  
                  <div className="border-l-4 border-pink-500 pl-4">
                    <h5 className="font-medium text-pink-300 mb-2">Anima/Animus</h5>
                    <p className="text-white/70 text-sm">{dream.jungianAnalysis.anima}</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h5 className="font-medium text-yellow-300 mb-2">Collective Symbols</h5>
                    <p className="text-white/70 text-sm">{dream.jungianAnalysis.collectiveSymbols}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}