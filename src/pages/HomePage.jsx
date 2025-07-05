import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Play, 
  Star, 
  Users, 
  Clock, 
  Award, 
  Zap, 
  Heart, 
  Code2,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Interactive Learning",
      description: "Learn by doing with hands-on coding exercises and real-time feedback."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Beginner Friendly",
      description: "No prior experience needed. We start from the very basics and build up."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Support",
      description: "Join a vibrant community of learners and get help when you need it."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certificate Ready",
      description: "Earn certificates as you complete modules and showcase your skills."
    }
  ]

  const stats = [
    { number: "10K+", label: "Students" },
    { number: "50+", label: "Lessons" },
    { number: "4.9", label: "Rating" },
    { number: "24/7", label: "Support" }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Complete Beginner",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "Milo's teaching style is incredible! I went from knowing nothing about coding to building my first website in just 2 weeks."
    },
    {
      name: "Marcus Johnson",
      role: "Career Changer",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "The vibe-based approach made learning so much fun. I actually look forward to coding sessions now!"
    },
    {
      name: "Emma Rodriguez",
      role: "Student",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "Best coding course I've ever taken. Milo breaks down complex concepts into digestible, fun lessons."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-900/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Learn to Code with
                <span className="block gradient-text animate-bounce-gentle">
                  Vibe & Style
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join Milo on an epic coding journey designed for complete beginners. 
                Transform your creativity into powerful code with our unique vibe-based approach.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <Link to="/course" className="btn-primary group">
                <Play className="inline-block w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Learning Now
              </Link>
              <button className="btn-secondary group">
                <Users className="inline-block w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Join Community
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-bounce-gentle">
          <Code2 className="h-12 w-12 text-primary-400/30" />
        </div>
        <div className="absolute top-1/3 right-10 animate-bounce-gentle" style={{ animationDelay: '1s' }}>
          <Star className="h-8 w-8 text-accent-400/30" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="gradient-text">Vibe Coding</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've reimagined how coding should be taught. No boring lectures, 
              just pure creative energy and hands-on learning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card group hover:scale-105 transition-all duration-300"
              >
                <div className="text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your <span className="gradient-text">Coding Journey</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get a taste of what's inside our comprehensive course. 
              Interactive lessons, real projects, and Milo's signature teaching style.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-4">
              <div className="aspect-video rounded-xl overflow-hidden bg-slate-900/50 flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-primary-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-2">Course Preview</h3>
                  <p className="text-gray-300 mb-6">See what makes our approach special</p>
                  <Link to="/course" className="btn-primary">
                    Watch Preview <ArrowRight className="inline-block w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="gradient-text">Students Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of students who've transformed their lives through code
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="gradient-text">Vibe Code</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the coding revolution and start building amazing things today. 
              Your creative coding journey starts with a single click.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/course" className="btn-primary group">
                <Play className="inline-block w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Course Now
              </Link>
              <button className="btn-secondary group">
                <Clock className="inline-block w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Free Trial
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
