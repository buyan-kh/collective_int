import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Brain, Moon, Star, Eye, Heart, User } from 'lucide-react'

export function HomePage() {
  const features = [
    {
      icon: Moon,
      title: 'Dream Analysis',
      description: 'AI-powered interpretation of your dreams using Jungian frameworks and symbolic analysis',
      link: '/dreams',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: User,
      title: 'Personality Insights',
      description: 'Deep personality assessments beyond surface traits, exploring your true archetypal nature',
      link: '/personality',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Heart,
      title: 'Mood Tracking',
      description: 'Track emotional patterns and discover the deeper currents of your psyche',
      link: '/mood',
      gradient: 'from-pink-500 to-red-600'
    },
    {
      icon: Eye,
      title: 'Shadow Work',
      description: 'Guided exercises for individuation and integration of the shadow self',
      link: '/shadow-work',
      gradient: 'from-gray-600 to-purple-700'
    },
    {
      icon: Star,
      title: 'Archetypal Exploration',
      description: 'Discover the universal patterns and symbols that shape your inner world',
      link: '/archetypes',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Brain,
      title: 'Personal Dashboard',
      description: 'Your complete psychological profile and journey insights in one place',
      link: '/dashboard',
      gradient: 'from-green-500 to-teal-600'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-6"
      >
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="mb-8 inline-block"
        >
          <Brain className="h-24 w-24 text-mystical-400 mx-auto animate-glow" />
        </motion.div>
        
        <h1 className="text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-mystical-400 via-primary-400 to-earth-400 bg-clip-text text-transparent">
          Mindberg
        </h1>
        
        <p className="text-xl text-white/80 mb-4 max-w-3xl mx-auto">
          Journey into the depths of your psyche with our Jungian psychology platform
        </p>
        
        <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
          Discover your unconscious patterns, interpret your dreams, and embark on the path of individuation 
          through AI-powered psychological insights and archetypal wisdom.
        </p>
        
        <Link
          to="/dashboard"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-mystical-600 to-primary-600 rounded-xl text-white font-semibold hover:from-mystical-700 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-mystical-500/25 hover:scale-105"
        >
          Begin Your Journey
          <Star className="ml-2 h-5 w-5" />
        </Link>
      </motion.section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-serif font-bold text-center mb-16 text-white"
          >
            Explore the Depths of Mind
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="dream-card group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                
                <p className="text-white/70 mb-6">
                  {feature.description}
                </p>
                
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-mystical-400 hover:text-mystical-300 font-medium transition-colors"
                >
                  Explore
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 text-center"
      >
        <div className="max-w-4xl mx-auto glass-effect p-12 rounded-2xl">
          <h2 className="text-3xl font-serif font-bold mb-6 text-white">
            "Until you make the unconscious conscious, it will direct your life and you will call it fate."
          </h2>
          <p className="text-white/60 mb-8">— Carl Gustav Jung</p>
          
          <Link
            to="/dreams"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-earth-600 to-mystical-600 rounded-xl text-white font-semibold hover:from-earth-700 hover:to-mystical-700 transition-all duration-300 shadow-lg hover:shadow-earth-500/25"
          >
            Start with Dream Analysis
            <Moon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </motion.section>
    </div>
  )
}