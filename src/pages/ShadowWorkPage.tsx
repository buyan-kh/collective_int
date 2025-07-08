import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, BookOpen, Lightbulb, ArrowRight } from 'lucide-react'

export function ShadowWorkPage() {
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null)

  const exercises = [
    {
      id: 'projection',
      title: 'Projection Recognition',
      description: 'Identify what you project onto others',
      duration: '10 min',
      difficulty: 'Beginner'
    },
    {
      id: 'dialogue',
      title: 'Shadow Dialogue',
      description: 'Engage in conversation with your shadow self',
      duration: '20 min',
      difficulty: 'Intermediate'
    },
    {
      id: 'integration',
      title: 'Integration Practices',
      description: 'Integrate shadow aspects into conscious awareness',
      duration: '30 min',
      difficulty: 'Advanced'
    }
  ]

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-gray-400 to-purple-400 bg-clip-text text-transparent">
          Shadow Work & Integration
        </h1>
        <p className="text-white/70 text-lg">
          Explore your unconscious patterns and integrate hidden aspects of your psyche
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {exercises.map((exercise, index) => (
          <motion.div
            key={exercise.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300"
          >
            <Eye className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">{exercise.title}</h3>
            <p className="text-white/70 mb-4">{exercise.description}</p>
            <div className="flex justify-between text-sm text-white/60 mb-4">
              <span>{exercise.duration}</span>
              <span>{exercise.difficulty}</span>
            </div>
            <button
              onClick={() => setSelectedExercise(exercise.id)}
              className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-gray-600 to-purple-600 rounded-lg text-white font-medium hover:from-gray-700 hover:to-purple-700 transition-all"
            >
              Begin Exercise
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}