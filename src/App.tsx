import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ChevronDown,
  Code2,
  Brain,
  Server,
  Smartphone,
  MapPin,
  GraduationCap,
  Briefcase,
  Sparkles,
  Menu,
  X,
  Youtube,
  Award,
  Users,
} from 'lucide-react';
import './index.css';
import profileImg from './assets/images/DBF9B645-2228-486E-AB08-E38893911C26.png';

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          SY
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-white transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4 mx-6 rounded-xl overflow-hidden"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-3 text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-ring" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-ring" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-300 mb-6"
          >
            <Sparkles size={16} className="text-amber-400" />
            Open to Opportunities
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
            Hi, I'm{' '}
            <span className="gradient-text">Syafino</span>
          </h1>

          <p className="text-xl lg:text-2xl text-slate-300 mb-6">
            CS & Statistics @ <span className="text-indigo-400">UIUC</span>
          </p>

          <p className="text-lg text-slate-400 mb-8 max-w-lg">
            Building intelligent systems that solve real problems. Passionate about AI/ML, distributed systems, and creating impactful software.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
              <ChevronDown size={18} className="rotate-[-90deg]" />
            </motion.a>

            <motion.a
              href="#projects"
              className="px-8 py-3 glass hover:bg-white/10 text-white rounded-full font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </div>

          <div className="flex gap-4">
            {[
              { icon: Github, href: 'https://github.com/syafino', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/syafino-yunalfian', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:syafino2@illinois.edu', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-80 h-80 mx-auto">
            {/* Profile Image Placeholder with Creative Design */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 animate-float glow" />
            <div className="absolute inset-2 rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
              <img src={profileImg} alt="Syafino Yunalfian" className="w-full h-full object-cover" />
            </div>
            
            {/* Floating Tech Icons */}
            <motion.div
              className="absolute -top-4 -right-4 p-3 glass rounded-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Brain className="text-indigo-400" size={24} />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 p-3 glass rounded-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <Code2 className="text-cyan-400" size={24} />
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-8 p-3 glass rounded-xl"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <Server className="text-purple-400" size={24} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-slate-400" size={32} />
      </motion.div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a <span className="text-indigo-400 font-semibold">Computer Science and Statistics</span> student at the University of Illinois at Urbana-Champaign with a passion for building systems that automate repetitive tasks.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I build practical AI systems that actually run, not just papers or demos. Right now I lead <span className="text-cyan-400 font-semibold">AI Systems at Agentic AI</span>, where I ship RAG-based apps, optimize embeddings, and host local LLMs with Ollama to cut API costs and boost privacy. I've built everything from on-device CV models for Framelight, a real-time mobile composition assistant, to a persistent MCP memory server that won <span className="text-amber-400 font-semibold">2nd place at the Claude UIUC hackathon</span>, and <span className="text-amber-400 font-semibold">2nd place at Berkeley AgentX Hackathon</span>.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My toolbox is <span className="text-purple-400 font-semibold">Python, PyTorch, TensorFlow, LangChain, FastAPI, React Native, TypeScript, Docker, and Postgres</span>. I care about performance, reproducibility, and deployment, so I spend as much time profiling and engineering pipelines as I do tuning models. I like solving infra problems, simplifying long-context reasoning, and making small models behave like big ones under real constraints.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm aiming for a <span className="text-indigo-400 font-semibold">PhD in Computer Science at UIUC</span>, and I want to work on systems that make advanced AI usable and trustworthy. If you want to talk about model optimization, on-device ML, or weird dataset problems, send me a message or check the projects below.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={18} className="text-indigo-400" />
                Champaign, IL
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <GraduationCap size={18} className="text-cyan-400" />
                Class of 2027
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Award size={18} className="text-amber-400" />
                Dean's List
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: '2x', label: 'Hackathon Winner', icon: Award },
              { number: '8+', label: 'Projects Built', icon: Code2 },
              { number: '4+', label: 'Research/Work Exp', icon: Briefcase },
              { number: '3', label: 'Leadership Roles', icon: Users },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="mx-auto mb-3 text-indigo-400" size={28} />
                <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code2,
      color: 'from-indigo-500 to-purple-500',
      skills: ['Python', 'TypeScript/JavaScript', 'SQL', 'NoSQL (MongoDB, Neo4j)', 'C/C++'],
    },
    {
      title: 'AI/ML',
      icon: Brain,
      color: 'from-cyan-500 to-blue-500',
      skills: ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'Scikit-learn', 'OpenCV', 'LangGraph'],
    },
    {
      title: 'Backend & Cloud',
      icon: Server,
      color: 'from-purple-500 to-pink-500',
      skills: ['Node.js', 'FastAPI/Flask', 'Docker', 'Git', 'PostgreSQL', 'GCP', 'Linux'],
    },
    {
      title: 'Web & Mobile',
      icon: Smartphone,
      color: 'from-amber-500 to-orange-500',
      skills: ['React.js', 'React Native', 'Flutter', 'HTML/CSS', 'MQTT', 'Raspberry Pi'],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="glass rounded-2xl p-6 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: 'MCP Server: AI Memory & Reasoning',
      description: 'Persistent long-term AI memory system enabling structured user profiling and contextual recall. Awarded 2nd place at Claude Club Hackathon (UIUC).',
      tech: ['TypeScript', 'Node.js', 'JSON-RPC', 'NPM'],
      github: 'https://github.com/Build-for-fun/claude-hackathon',
      featured: true,
      award: '2nd Place - Claude Hackathon',
    },
    {
      title: 'Text-to-SQL Evaluation Agent',
      description: 'Sandboxed SQL-evaluation framework with pre-execution hallucination checks, multi-dimensional scoring, and Dockerized environments.',
      tech: ['Python', 'PostgreSQL', 'sqlglot', 'Docker', 'LLM'],
      github: 'https://github.com/ashcastelinocs124/text-2-sql-agent',
      featured: true,
      award: '2nd Place - Berkeley AgentX (40K+ participants)',
    },
    {
      title: 'Framelight: AI Camera Assistant',
      description: 'On-device ML models for real-time visual guidance in mobile photo composition. Building computer vision pipelines for object detection, depth estimation, and saliency mapping.',
      tech: ['PyTorch', 'TensorFlow', 'OpenCV', 'React Native'],
      demo: 'https://youtu.be/dxQS8v8iZco',
      featured: true,
    },
    {
      title: 'Multi-Agent Healthcare Assistant',
      description: 'Multi-agent ML pipelines using GPT-5 and MedPaLM APIs with RAG for explainable, personalized healthcare guidance with speech support.',
      tech: ['Python', 'LangGraph', 'RAG', 'React Native', 'Flask'],
      featured: true,
    },
    {
      title: 'PokéSight: Smart Pokémon Map',
      description: 'Data-driven web app for strategic Pokémon search based on type, rarity, and stats with community-reported sightings.',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'GCP'],
      github: 'https://github.com/syafino/Pokesight',
    },
    {
      title: 'C++ Web Apps: Checkers',
      description: 'Desktop-focused web game using CGI hosted on Linux servers with AJAX for client-side move control and performance-optimized C++ backend. Awarded scholarship.',
      tech: ['C++', 'HTML', 'JavaScript', 'CSS', 'Linux', 'CGI'],
      award: 'Scholarship Awarded',
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in AI/ML, full-stack development, and system design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`glass rounded-2xl overflow-hidden card-hover ${
                project.featured ? 'ring-1 ring-indigo-500/30' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-6">
                {project.award && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm mb-4">
                    <Award size={14} />
                    {project.award}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-indigo-500/20 text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      <Youtube size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/syafino"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Github size={20} />
            View All Projects on GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = () => {
  const experiences = [
    {
      title: 'Technical Lead, AI Systems',
      company: 'Agentic AI @ UIUC',
      location: 'Champaign, IL',
      period: 'Jan 2026 – Present',
      description: [
        'Architected and deployed a RAG-based AI system using Python and LangChain to ground LLM outputs in verified medical data',
        'Orchestrated local LLM hosting via Ollama, optimizing for high-reasoning performance while eliminating external API costs',
        'Directed a roadmap encompassing web scraping, vector embedding optimization, and full-stack UI integration',
      ],
      tech: ['Python', 'LangChain', 'RAG', 'Ollama', 'LLM'],
    },
    {
      title: 'Software Engineer & Automation Research Assistant',
      company: 'Garg Research Group',
      location: 'University of Illinois at Urbana-Champaign',
      period: 'Sep 2025 – Present',
      description: [
        'Developed GUI and automation software for a device accelerating cement R3 reactivity test from 7 days to 30 minutes',
        'Integrated Raspberry Pi with real-time data acquisition using React.js, Node.js, PostgreSQL, Python, Linux and MQTT',
        'Architected cloud-deployed MQTT relay backend (Express.js + Socket.io on Fly.io) bridging React frontend to Raspberry Pi',
        'Built real-time 5-stage process monitoring dashboard with live stepper UI and emergency stop system',
        'Implemented Google OAuth 2.0 authentication with JWT session management and role-based access',
      ],
      tech: ['React.js', 'Node.js', 'PostgreSQL', 'Python', 'MQTT', 'Docker', 'Fly.io', 'GCP'],
    },
    {
      title: 'Backend Lead',
      company: 'ACM SIG Mobile',
      location: 'UIUC',
      period: 'Aug 2025 – Present',
      description: [
        'Lead backend development for an 8-member team, mentoring on Flutter, Dart, and Android Studio',
        'Designed relational database architecture for student services app (PostgreSQL)',
        'Monitoring git issues/PRs, mentoring UML/ER diagrams and RESTful API design',
        'Built skeleton APIs from web scraping Reddit, RateMyProfessor, etc.',
      ],
      tech: ['Flutter', 'Dart', 'PostgreSQL', 'REST API'],
    },
    {
      title: 'Data Analysis & Finance Intern',
      company: 'CIMB Niaga Bank',
      location: 'Jakarta, Indonesia',
      period: 'Jul 2022 – Aug 2022',
      description: [
        'Analyzed large CSV datasets and identified financial trends',
        'Created data visualizations and monitored market news for investment insights',
      ],
      tech: ['Excel', 'Data Analysis'],
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              className="glass rounded-2xl p-6 lg:p-8 card-hover"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-indigo-400 mt-1">
                    <Briefcase size={16} />
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col items-start lg:items-end gap-1 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                  <div>{exp.period}</div>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-md bg-indigo-500/20 text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Education Section
const Education = () => {
  const coursework = [
    'Applied Machine Learning',
    'Text-Information Systems',
    'Database Systems',
    'Computer Systems',
    'Data Structures & Algorithms',
    'Discrete Math',
    'Linear Algebra',
    'Calculus Series',
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                University of Illinois at Urbana-Champaign
              </h3>
              <p className="text-lg text-indigo-400">
                Bachelor of Science in Computer Science & Statistics
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3 text-slate-300">
              <GraduationCap className="text-indigo-400" size={24} />
              <span>Expected Graduation: May 2027</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Award className="text-amber-400" size={24} />
              <span>Dean's List (Spring 2023, Fall 2025)</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Sparkles className="text-purple-400" size={24} />
              <span>Honors Program</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1.5 text-sm rounded-lg bg-indigo-500/20 text-indigo-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, or just chatting about tech and AI.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:syafino2@illinois.edu"
              className="glass rounded-2xl p-6 card-hover flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <div className="text-slate-400 text-sm">Email</div>
                <div className="text-white group-hover:text-indigo-400 transition-colors">
                  syafino2@illinois.edu
                </div>
              </div>
            </a>

            <a
              href="tel:+13123839339"
              className="glass rounded-2xl p-6 card-hover flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <div className="text-slate-400 text-sm">Phone</div>
                <div className="text-white group-hover:text-cyan-400 transition-colors">
                  +1 (312) 383 9339
                </div>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/syafino', label: 'GitHub', color: 'hover:text-white' },
              { icon: Linkedin, href: 'https://linkedin.com/in/syafino-yunalfian', label: 'LinkedIn', color: 'hover:text-blue-400' },
              { icon: Mail, href: 'mailto:syafino2@illinois.edu', label: 'Email', color: 'hover:text-indigo-400' },
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 glass rounded-xl text-slate-400 ${color} transition-colors card-hover`}
                whileHover={{ scale: 1.05 }}
                aria-label={label}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-slate-400">
          © {new Date().getFullYear()} Syafino Yunalfian. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

// Main App
function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
