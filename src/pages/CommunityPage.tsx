import { motion } from 'framer-motion'
import { Users, MessageCircle, Share, Heart } from 'lucide-react'

export function CommunityPage() {
  const posts = [
    {
      id: 1,
      author: 'ShadowSeeker',
      title: 'My Journey with the Hero Archetype',
      content: 'Discovered how my Hero archetype manifests in my daily challenges...',
      likes: 12,
      comments: 4,
      archetype: 'Hero'
    },
    {
      id: 2,
      author: 'DreamWeaver',
      title: 'Recurring Water Dreams and Unconscious Processing',
      content: 'Anyone else experience recurring water themes in dreams?',
      likes: 8,
      comments: 7,
      archetype: 'Explorer'
    }
  ]

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
          Community Insights
        </h1>
        <p className="text-white/70 text-lg">
          Share your psychological journey and connect with fellow explorers
        </p>
      </motion.div>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect p-6 rounded-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-mystical-500 to-primary-500 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">{post.author}</p>
                  <span className="text-mystical-400 text-sm">{post.archetype} Type</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
            <p className="text-white/80 mb-4">{post.content}</p>
            
            <div className="flex items-center space-x-6 text-white/60">
              <button className="flex items-center space-x-2 hover:text-pink-400 transition-colors">
                <Heart className="h-4 w-4" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-green-400 transition-colors">
                <Share className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}