import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Star, Brain, ArrowRight, CheckCircle2 } from 'lucide-react'

export function PersonalityPage() {
  const [currentTest, setCurrentTest] = useState<string | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])

  const personalityTests = [
    {
      id: 'jungian-types',
      title: 'Jungian Psychological Types',
      description: 'Discover your dominant psychological functions and attitude type',
      duration: '15 min',
      questions: 40,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'archetypal-patterns',
      title: 'Archetypal Personality Patterns',
      description: 'Identify your primary and secondary archetypal influences',
      duration: '20 min',
      questions: 50,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'shadow-integration',
      title: 'Shadow Integration Assessment',
      description: 'Explore your shadow aspects and integration level',
      duration: '12 min',
      questions: 30,
      color: 'from-gray-600 to-purple-700'
    }
  ]

  const jungianQuestions = [
    {
      question: "When facing a difficult decision, you tend to:",
      options: [
        "Analyze all logical possibilities systematically",
        "Trust your gut feeling and intuitive insights",
        "Consider how it affects people and relationships",
        "Focus on practical, real-world implications"
      ]
    },
    {
      question: "In social situations, you typically:",
      options: [
        "Feel energized by interaction with many people",
        "Prefer deep conversations with a few individuals", 
        "Observe and listen more than you speak",
        "Take charge and guide the group dynamics"
      ]
    },
    {
      question: "When processing new information, you:",
      options: [
        "Look for patterns and future possibilities",
        "Focus on concrete facts and details",
        "Consider the logical structure and consistency",
        "Evaluate personal values and meaning"
      ]
    }
  ]

  const archetypeResults = [
    {
      archetype: 'The Explorer',
      percentage: 78,
      description: 'You are driven by a need for freedom and authentic experience. You seek to find yourself through exploration of the world.',
      traits: ['Independent', 'Authentic', 'Restless', 'Pioneering'],
      shadow: 'Chronic dissatisfaction, inability to commit'
    },
    {
      archetype: 'The Sage',
      percentage: 65,
      description: 'You are motivated by the desire to understand the world and share that knowledge with others.',
      traits: ['Wise', 'Analytical', 'Thoughtful', 'Truth-seeking'],
      shadow: 'Analysis paralysis, intellectual arrogance'
    },
    {
      archetype: 'The Creator',
      percentage: 52,
      description: 'You are driven to create something of enduring value and express your unique vision.',
      traits: ['Imaginative', 'Artistic', 'Innovative', 'Expressive'],
      shadow: 'Perfectionism, melodrama'
    }
  ]

  const handleStartTest = (testId: string) => {
    setCurrentTest(testId)
    setCurrentQuestion(0)
    setAnswers([])
  }

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)
    
    if (currentQuestion < jungianQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Test completed - show results
      setCurrentTest('results')
    }
  }

  const resetTest = () => {
    setCurrentTest(null)
    setCurrentQuestion(0)
    setAnswers([])
  }

  if (currentTest === 'results') {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <CheckCircle2 className="h-16 w-16 text-green-400 mx-auto mb-4" />
          <h1 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-mystical-400 to-primary-400 bg-clip-text text-transparent">
            Your Archetypal Profile
          </h1>
          <p className="text-white/70 text-lg">
            Based on your responses, here are your dominant archetypal patterns
          </p>
        </motion.div>

        <div className="space-y-6">
          {archetypeResults.map((result, index) => (
            <motion.div
              key={result.archetype}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect p-6 rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">{result.archetype}</h3>
                <div className="text-right">
                  <span className="text-3xl font-bold text-mystical-400">{result.percentage}%</span>
                  <p className="text-white/60 text-sm">Match</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="w-full bg-white/10 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${result.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                    className="bg-gradient-to-r from-mystical-500 to-primary-500 h-3 rounded-full"
                  />
                </div>
              </div>

              <p className="text-white/80 mb-4">{result.description}</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-medium mb-2">Core Traits</h4>
                  <div className="flex flex-wrap gap-2">
                    {result.traits.map((trait) => (
                      <span key={trait} className="px-3 py-1 bg-mystical-600/30 rounded-full text-mystical-300 text-sm">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Shadow Aspects</h4>
                  <p className="text-white/70 text-sm">{result.shadow}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={resetTest}
            className="px-8 py-3 bg-gradient-to-r from-mystical-600 to-primary-600 rounded-xl text-white font-semibold hover:from-mystical-700 hover:to-primary-700 transition-all duration-300"
          >
            Take Another Test
          </button>
        </div>
      </div>
    )
  }

  if (currentTest) {
    const question = jungianQuestions[currentQuestion]
    const progress = ((currentQuestion + 1) / jungianQuestions.length) * 100

    return (
      <div className="p-6 max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-white">Jungian Psychological Types</h2>
            <span className="text-white/60">
              {currentQuestion + 1} of {jungianQuestions.length}
            </span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="bg-gradient-to-r from-mystical-500 to-primary-500 h-2 rounded-full"
            />
          </div>
        </div>

        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-effect p-8 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-white mb-8">
            {question.question}
          </h3>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-4 text-left border border-white/20 rounded-lg hover:border-mystical-500/50 hover:bg-white/5 transition-all duration-200 text-white"
              >
                {option}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Personality Assessment
        </h1>
        <p className="text-white/70 text-lg max-w-3xl mx-auto">
          Explore the depths of your personality through scientifically-grounded Jungian psychology assessments
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {personalityTests.map((test, index) => (
          <motion.div
            key={test.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-effect p-6 rounded-xl group hover:scale-105 transition-transform duration-300"
          >
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${test.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              {test.id === 'jungian-types' && <User className="h-8 w-8 text-white" />}
              {test.id === 'archetypal-patterns' && <Star className="h-8 w-8 text-white" />}
              {test.id === 'shadow-integration' && <Brain className="h-8 w-8 text-white" />}
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">
              {test.title}
            </h3>

            <p className="text-white/70 mb-6">
              {test.description}
            </p>

            <div className="flex items-center justify-between text-sm text-white/60 mb-6">
              <span>{test.duration}</span>
              <span>{test.questions} questions</span>
            </div>

            <button
              onClick={() => handleStartTest(test.id)}
              className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-mystical-600/50 to-primary-600/50 border border-mystical-500/50 rounded-lg text-white font-medium hover:from-mystical-600 hover:to-primary-600 hover:border-mystical-500 transition-all duration-300"
            >
              Begin Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Previous Results Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-semibold text-white mb-8 text-center">
          Your Personality Insights
        </h2>

        <div className="glass-effect p-8 rounded-xl">
          <div className="text-center">
            <Brain className="h-16 w-16 text-mystical-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">
              Complete an Assessment to See Your Results
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              Take one of the assessments above to discover your psychological type, 
              archetypal patterns, and gain deep insights into your personality structure.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}