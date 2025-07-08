import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Plus, Calendar, TrendingUp, Moon, Sun } from 'lucide-react'

export function MoodTrackingPage() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null)
  const [moodNote, setMoodNote] = useState('')
  const [showMoodEntry, setShowMoodEntry] = useState(false)

  const moods = [
    { value: 1, label: 'Deeply Troubled', color: 'bg-red-700', emoji: '😞' },
    { value: 2, label: 'Sad', color: 'bg-red-500', emoji: '😢' },
    { value: 3, label: 'Down', color: 'bg-orange-500', emoji: '😔' },
    { value: 4, label: 'Anxious', color: 'bg-yellow-600', emoji: '😰' },
    { value: 5, label: 'Neutral', color: 'bg-gray-500', emoji: '😐' },
    { value: 6, label: 'Content', color: 'bg-blue-500', emoji: '🙂' },
    { value: 7, label: 'Good', color: 'bg-green-500', emoji: '😊' },
    { value: 8, label: 'Happy', color: 'bg-green-400', emoji: '😄' },
    { value: 9, label: 'Joyful', color: 'bg-emerald-400', emoji: '😁' },
    { value: 10, label: 'Euphoric', color: 'bg-purple-500', emoji: '🤩' }
  ]

  const moodEntries = [
    {
      date: '2024-01-15',
      mood: 8,
      note: 'Had a vivid dream about flying. Felt very connected to my creative side today.',
      insights: ['Creative energy peak', 'Strong anima connection', 'Transcendent experience']
    },
    {
      date: '2024-01-14',
      mood: 6,
      note: 'Quiet contemplative day. Spent time journaling and reflecting.',
      insights: ['Introspective phase', 'Shadow work processing', 'Self-reflection']
    },
    {
      date: '2024-01-13',
      mood: 7,
      note: 'Great conversation with a friend about life philosophy.',
      insights: ['Social connection', 'Wisdom sharing', 'Mentor archetype active']
    },
    {
      date: '2024-01-12',
      mood: 5,
      note: 'Feeling stuck in routine. Need more adventure in my life.',
      insights: ['Explorer archetype calling', 'Routine fatigue', 'Need for change']
    }
  ]

  const weeklyPattern = [
    { day: 'Mon', mood: 6, energy: 'Low' },
    { day: 'Tue', mood: 7, energy: 'Medium' },
    { day: 'Wed', mood: 8, energy: 'High' },
    { day: 'Thu', mood: 7, energy: 'Medium' },
    { day: 'Fri', mood: 9, energy: 'High' },
    { day: 'Sat', mood: 8, energy: 'High' },
    { day: 'Sun', mood: 6, energy: 'Medium' }
  ]

  const handleSubmitMood = () => {
    if (selectedMood && moodNote) {
      console.log('Mood entry:', { mood: selectedMood, note: moodNote })
      setShowMoodEntry(false)
      setSelectedMood(null)
      setMoodNote('')
    }
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
          Mood Tracking & Emotional Patterns
        </h1>
        <p className="text-white/70 text-lg">
          Track your emotional journey and discover the deeper patterns in your psyche
        </p>
      </motion.div>

      {/* Quick Mood Entry */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-effect p-6 rounded-xl"
        >
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Heart className="h-6 w-6 mr-2 text-pink-400" />
            How are you feeling right now?
          </h2>

          <div className="grid grid-cols-5 gap-3 mb-6">
            {moods.map((mood) => (
              <button
                key={mood.value}
                onClick={() => setSelectedMood(mood.value)}
                className={`aspect-square rounded-lg flex flex-col items-center justify-center p-2 transition-all duration-200 ${
                  selectedMood === mood.value
                    ? `${mood.color} scale-110 shadow-lg`
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mb-1">{mood.emoji}</span>
                <span className="text-xs text-white text-center">{mood.value}</span>
              </button>
            ))}
          </div>

          {selectedMood && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <p className="text-white/80 text-center">
                {moods.find(m => m.value === selectedMood)?.label}
              </p>
              
              <textarea
                value={moodNote}
                onChange={(e) => setMoodNote(e.target.value)}
                placeholder="What's contributing to this feeling? Any dreams, thoughts, or events worth noting?"
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-mystical-500 resize-none"
              />
              
              <button
                onClick={handleSubmitMood}
                className="w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-red-600 rounded-xl text-white font-semibold hover:from-pink-700 hover:to-red-700 transition-all duration-300"
              >
                Record Mood
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Weekly Pattern */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect p-6 rounded-xl"
        >
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 mr-2 text-green-400" />
            This Week's Pattern
          </h2>

          <div className="space-y-4">
            {weeklyPattern.map((day, index) => (
              <div key={day.day} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-white/80 font-medium w-8">{day.day}</span>
                  <div className="flex-1 bg-white/10 rounded-full h-3 w-32">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(day.mood / 10) * 100}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className={`h-3 rounded-full ${moods.find(m => m.value === day.mood)?.color}`}
                    />
                  </div>
                  <span className="text-white/60 text-sm">{day.mood}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  day.energy === 'High' ? 'bg-green-600/30 text-green-300' :
                  day.energy === 'Medium' ? 'bg-yellow-600/30 text-yellow-300' :
                  'bg-gray-600/30 text-gray-300'
                }`}>
                  {day.energy}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-mystical-600/20 rounded-lg">
            <h3 className="text-white font-medium mb-2">Weekly Insight</h3>
            <p className="text-white/70 text-sm">
              Your energy peaks mid-week and weekends. Consider scheduling creative activities during these high-energy periods.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Mood History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="glass-effect p-6 rounded-xl"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <Calendar className="h-6 w-6 mr-2 text-blue-400" />
            Recent Mood Entries
          </h2>
        </div>

        <div className="space-y-4">
          {moodEntries.map((entry, index) => (
            <motion.div
              key={entry.date}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-white/10 rounded-lg p-4 hover:border-mystical-500/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{moods.find(m => m.value === entry.mood)?.emoji}</span>
                  <div>
                    <span className="text-white font-medium">{entry.date}</span>
                    <span className="text-white/60 ml-3">{moods.find(m => m.value === entry.mood)?.label}</span>
                  </div>
                </div>
                <span className="text-2xl font-bold text-mystical-400">{entry.mood}</span>
              </div>

              <p className="text-white/80 mb-4">{entry.note}</p>

              <div className="flex flex-wrap gap-2">
                {entry.insights.map((insight) => (
                  <span key={insight} className="px-3 py-1 bg-mystical-600/30 rounded-full text-mystical-300 text-sm">
                    {insight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Emotional Patterns Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 grid md:grid-cols-2 gap-8"
      >
        <div className="glass-effect p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Moon className="h-5 w-5 mr-2 text-blue-400" />
            Emotional Cycles
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-white/70">Morning Energy</span>
              <span className="text-blue-400">Peak Creative Time</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Afternoon Dip</span>
              <span className="text-yellow-400">Reflection Period</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Evening Rise</span>
              <span className="text-green-400">Social Connection</span>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Sun className="h-5 w-5 mr-2 text-yellow-400" />
            Archetypal Influences
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-white/70">Creator Energy</span>
              <span className="text-purple-400">Strongest Weekdays</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Explorer Impulse</span>
              <span className="text-green-400">Weekend Peaks</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Sage Wisdom</span>
              <span className="text-blue-400">Evening Reflection</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}