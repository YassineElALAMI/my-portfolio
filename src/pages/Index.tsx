import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Download, Linkedin, Github, Sun, Moon, ExternalLink, Search, Code,
  Brain, Cloud, Cpu, MapPin, Database, BarChart3, Wrench, Globe, Newspaper,
  MessageSquare, Users, Target, Award, Globe2, Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Index() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

  // Placeholder profile photo - replace with your actual image import
  const profilePhoto = "me.png";

  return (
    <div className={`min-h-screen ${dark ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* HEADER */}
        <header className={`flex flex-wrap items-center justify-between mb-16 pb-6 ${dark ? 'border-slate-700' : 'border-gray-200'} border-b gap-4`}>
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg">
              <img src={profilePhoto} alt="Yassine El Alami" className="object-cover h-full w-full" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Yassine El Alami</h1>
              <p className={`text-sm ${dark ? 'text-slate-400' : 'text-gray-600'}`}>AI/ML Engineer & Data Scientist</p>
            </div>
          </div>

          <nav className="flex items-center gap-8">
            <a href="#about" className={`text-sm font-medium hover:text-blue-500 transition-colors hidden sm:block`}>About</a>
            <a href="#education" className={`text-sm font-medium hover:text-blue-500 transition-colors hidden sm:block`}>Education</a>
            <a href="#projects" className={`text-sm font-medium hover:text-blue-500 transition-colors hidden sm:block`}>Projects</a>
            <a href="#skills" className={`text-sm font-medium hover:text-blue-500 transition-colors hidden sm:block`}>Skills</a>
            <a href="#contact" className={`text-sm font-medium hover:text-blue-500 transition-colors hidden sm:block`}>Contact</a>
            <Button onClick={toggleDark} variant="outline" size="icon" className={dark ? 'border-slate-700' : 'border-gray-300'}>
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </nav>
        </header>

        {/* HERO - Improved Layout */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left: Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 flex justify-center"
            >
              <div className={`${dark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-2xl p-6 shadow-xl border max-w-sm w-full`}>
                <div className="aspect-square rounded-xl overflow-hidden mb-6 shadow-lg">
                  <img src={profilePhoto} alt="Yassine El Alami" className="object-cover w-full h-full" />
                </div>
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="font-bold text-xl mb-1">Yassine El Alami</h3>
                    <p className={dark ? 'text-slate-400' : 'text-gray-600'}>Fès, Morocco</p>
                    <p className={`text-sm ${dark ? 'text-slate-400' : 'text-gray-600'}`}>(+212) 655-742509</p>
                  </div>
                  <div className={`flex items-center justify-center gap-4 pt-4 ${dark ? 'border-slate-700' : 'border-gray-200'} border-t`}>
                    <Button variant="outline" size="icon" asChild className={dark ? 'border-slate-700' : 'border-gray-300'}>
                      <a href="https://www.linkedin.com/in/yassine-el-alami-170375251/" 
                         aria-label="LinkedIn"
                         target="_blank"
                         rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild className={dark ? 'border-slate-700' : 'border-gray-300'}>
                      <a href="https://github.com/YassineElALAMI" 
                         aria-label="GitHub"
                         target="_blank"
                         rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Hero Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-block mb-4">
                  <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                    Available for Opportunities
                  </Badge>
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  AI/ML Engineer &<br />
                  <span className="text-blue-600 dark:text-blue-400">Data Scientist</span>
                </h2>
                <p className={`text-xl ${dark ? 'text-slate-300' : 'text-gray-700'} mb-8 leading-relaxed`}>
                  Master's student in Big Data & Intelligent Systems with expertise in building AI-driven 
                  solutions for predictive modeling, performance optimization, and automated decision-making.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a href="/yassineCV_ATS_english.pdf" download>
                    <Button size="lg" className="gap-2 shadow-lg bg-blue-600 hover:bg-blue-700 text-white">
                      <Download className="h-5 w-5" />
                      Download CV
                    </Button>
                  </a>
                  <Button variant="outline" size="lg" className={`gap-2 ${dark ? 'border-slate-700' : 'border-gray-300'}`} asChild>
                    <a href="mailto:yassine.elalami5@usmba.ac.ma">
                      <Mail className="h-5 w-5" />
                      Get in Touch
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="h-1 w-12 bg-blue-600 rounded"></span>
              About Me
            </h3>
            <div className={`${dark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-2xl p-8 shadow-sm border`}>
              <p className={`${dark ? 'text-slate-300' : 'text-gray-700'} leading-relaxed text-lg`}>
                I am a Master's student in Big Data & Intelligent Systems (2024–Present) at the Faculty of Science 
                Dhar El Mahraz, USMBA. With hands-on experience in AI, machine learning, and data engineering, I build 
                AI-driven solutions for practical applications such as predictive maintenance, performance optimization, 
                and automated decision-making. I am known for problem-solving, autonomy, and effective communication in 
                collaborative, data-driven projects.
              </p>
            </div>
          </motion.div>
        </section>

        

        {/* PROJECTS */}
        <section id="projects" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <span className="h-1 w-12 bg-blue-600 rounded"></span>
              Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
              <span className="h-1 w-12 bg-blue-600 rounded"></span>
            </h3>
            <p className={`text-lg ${dark ? 'text-slate-300' : 'text-gray-700'} max-w-2xl mx-auto`}>
              Showcasing innovative solutions in AI, ML, and data engineering
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="GeoAI Water Body Detection"
              category="Deep Learning · Remote Sensing"
              desc="U-Net-based semantic segmentation system for detecting water bodies from Sentinel-2 satellite imagery. Includes a TensorFlow-trained model, Tkinter desktop app, Streamlit web app, RGB overlay visualizations, and heatmap confidence mapping."
              icon={Globe}
              gradient="from-indigo-600 to-sky-600"
              tech={[
                "TensorFlow",
                "Keras",
                "U-Net",
                "Streamlit",
                "Tkinter",
                "Python",
                "Remote Sensing",
                "GIS",
              ]}
              githubUrl="https://github.com/YassineElALAMI/Water-Segmentation-from-Sentinel-2-images-Using-TensorFlow-U-Net"
              demoUrl="#"
              dark={dark}
            />
            <ProjectCard
              title="Arabic Search Engine"
              category="NLP · Information Retrieval"
              desc="A full-text search engine for Arabic documents using TF-IDF and Cosine Similarity. Features advanced preprocessing with the SAFAR_v2 library for Arabic stemming, normalization, and stopword removal. Built with Java, Maven, and integrated with Jython for morphological analysis."
              icon={Search}
              gradient="from-amber-600 to-rose-600"
              tech={[
                "Java",
                "Maven",
                "SAFAR_v2",
                "Jython",
                "TF-IDF",
                "Cosine Similarity",
                "NLP",
                "Information Retrieval",
              ]}
              githubUrl="https://github.com/YassineElALAMI/Arabic-Search-Engine"
              demoUrl="#"
              dark={dark}
            />
            <ProjectCard
              title="Voice of Morocco Web Scraper"
              category="Web Scraping · Data Engineering"
              desc="A full-scale automated Scrapy crawler that extracts news articles from TheVoice.ma, including titles, publication dates (Arabic format), images, videos, links, and full article text. Supports deep pagination (1–372), article-level parsing, item pipelines, structured data export, and date-range filtering."
              icon={Newspaper}
              gradient="from-emerald-600 to-teal-600"
              tech={[
                "Python",
                "Scrapy",
                "XPath / CSS Selectors",
                "Web Automation",
                "Data Extraction",
                "JSON / CSV Pipelines",
              ]}
              githubUrl="https://github.com/YassineElALAMI/Voice-of-Morocco-Web-Scraper-Scrapy-Project-"
              demoUrl="#"
              dark={dark}
            />


            <ProjectCard
              title="Speech Gender and Digit Recognition"
              category="Deep Learning"
              desc="CNN model for real-time digit classification and gender detection with a Tkinter interface. Implements convolutional neural networks for audio processing and pattern recognition."
              icon={Brain}
              gradient="from-blue-600 to-cyan-600"
              tech={["TensorFlow", "Keras", "CNN", "Python", "Tkinter"]}
              githubUrl="https://github.com/YassineElALAMI/Speech-Recognition-Model-for-Gender-Classification"
              demoUrl="#"
              dark={dark}
            />
            <ProjectCard
              title="Air Quality Prediction"
              category="Machine Learning"
              desc="Predictive models for PM2.5 and AQI using Scikit-learn and Pandas. Features comprehensive data analysis, feature engineering, and model evaluation for environmental forecasting."
              icon={Cloud}
              gradient="from-green-600 to-emerald-600"
              tech={["Scikit-learn", "Pandas", "ML", "Data Analysis"]}
              githubUrl="https://github.com/YassineElALAMI/Air-Quality-Prediction-in-Moroccan-Cities"
              demoUrl="#"
              dark={dark}
            />
            <ProjectCard
              title="Job Shop Scheduling Optimization"
              category="Genetic Algorithm"
              desc="Enhanced genetic algorithm minimizing completion times with validation and logging. Implements evolutionary computation for complex optimization problems in manufacturing."
              icon={Cpu}
              gradient="from-purple-600 to-pink-600"
              tech={["Optimization", "Python", "Algorithms", "GA"]}
              githubUrl="https://github.com/YassineElALAMI/Genetic-Algorithm-for-Job-Shop-Scheduling"
              demoUrl="#"
              dark={dark}
            />
            <ProjectCard
              title="Pharmacy Location Finder"
              category="GIS & Graph Database"
              desc="Application locating nearest pharmacies using Neo4j, OpenStreetMap, and Folium. Combines graph database queries with geographic visualization for location-based services."
              icon={MapPin}
              gradient="from-orange-600 to-red-600"
              tech={["Neo4j", "Python", "GIS", "Folium", "OpenStreetMap"]}
              githubUrl="https://github.com/YassineElALAMI/GeoSpatial-Pharmacy-Finder"
              demoUrl="#"
              dark={dark}
            />
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <span className="h-1 w-12 bg-blue-600 rounded"></span>
              Skills & <span className="text-blue-600 dark:text-blue-400">Expertise</span>
              <span className="h-1 w-12 bg-blue-600 rounded"></span>
            </h3>
            <p className={`text-lg ${dark ? 'text-slate-300' : 'text-gray-700'} max-w-2xl mx-auto`}>
              A comprehensive toolkit for building intelligent data-driven solutions
            </p>
          </motion.div>

          {/* Technical Skills */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <SkillCard 
              title="Programming Languages" 
              icon={Code}
              gradient="from-blue-600 to-cyan-600"
              items={["Python", "Java", "C", "C++", "R"]} 
              dark={dark}
            />
            <SkillCard 
              title="AI & Data Science" 
              icon={Brain}
              gradient="from-purple-600 to-pink-600"
              items={["Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Neural Networks"]} 
              dark={dark}
            />
            <SkillCard 
              title="Big Data" 
              icon={Cloud}
              gradient="from-green-600 to-emerald-600"
              items={["Hadoop", "Spark"]} 
              dark={dark}
            />
            <SkillCard 
              title="Databases" 
              icon={Database}
              gradient="from-orange-600 to-red-600"
              items={["MySQL", "Oracle", "MongoDB", "Neo4j", "Cassandra"]} 
              dark={dark}
            />
            <SkillCard 
              title="Visualization & BI" 
              icon={BarChart3}
              gradient="from-indigo-600 to-purple-600"
              items={["Power BI", "Matplotlib", "Seaborn"]} 
              dark={dark}
            />
            <SkillCard 
              title="Tools & DevOps" 
              icon={Wrench}
              gradient="from-yellow-600 to-orange-600"
              items={["Docker", "Git", "Agile", "UML", "Merise"]} 
              dark={dark}
            />
            <SkillCard 
              title="Web Development" 
              icon={Globe}
              gradient="from-pink-600 to-rose-600"
              items={["Spring Boot", "ReactJS", "HTML", "CSS"]} 
              dark={dark}
            />
          </div>

          {/* Soft Skills & Languages */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`p-8 rounded-2xl ${dark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} shadow-lg border`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold">Soft Skills</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Problem Solving", icon: Target },
                  { name: "Communication", icon: MessageSquare },
                  { name: "Teamwork", icon: Users },
                  { name: "Organization", icon: BarChart3 },
                  { name: "Autonomy", icon: Award },
                  { name: "Rigor", icon: Target }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-center gap-3 p-3 rounded-lg ${dark ? 'bg-slate-700' : 'bg-gray-100'}`}
                  >
                    <skill.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`p-8 rounded-2xl ${dark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} shadow-lg border`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
                  <Globe2 className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold">Languages</h4>
              </div>
              <div className="space-y-6">
                {[
                  { language: "Arabic", level: "Native", proficiency: 100 },
                  { language: "English", level: "B2 - Upper Intermediate", proficiency: 75 },
                  { language: "French", level: "B1 - Intermediate", proficiency: 65 }
                ].map((lang, index) => (
                  <motion.div
                    key={lang.language}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{lang.language}</span>
                      <span className={`text-sm ${dark ? 'text-slate-400' : 'text-gray-600'}`}>{lang.level}</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${dark ? 'bg-slate-700' : 'bg-gray-200'}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="mb-20">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="h-1 w-12 bg-blue-600 rounded"></span>
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -4 }}
              className={`p-8 rounded-2xl ${dark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} shadow-lg border transition-all hover:shadow-xl hover:border-blue-500`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">M</span>
                </div>
                <Badge variant="secondary" className={dark ? 'bg-slate-700' : 'bg-gray-100'}>2024 – Present</Badge>
              </div>
              <h4 className="font-bold text-xl mb-2">Master's Degree</h4>
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Big Data & Intelligent Systems</p>
              <p className={`text-sm ${dark ? 'text-slate-400' : 'text-gray-600'}`}>Faculty of Science Dhar El Mahraz, USMBA</p>
              <p className={`text-sm ${dark ? 'text-slate-400' : 'text-gray-600'}`}>Fès, Morocco</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -4 }}
              className={`p-8 rounded-2xl ${dark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} shadow-lg border transition-all hover:shadow-xl hover:border-blue-500`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">B</span>
                </div>
                <Badge variant="secondary" className={dark ? 'bg-slate-700' : 'bg-gray-100'}>2020 – 2024</Badge>
              </div>
              <h4 className="font-bold text-xl mb-2">Bachelor's Degree</h4>
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Computer Science</p>
              <p className={`text-sm ${dark ? 'text-slate-400' : 'text-gray-600'}`}>Multidisciplinary Faculty of Taza, USMBA</p>
              <p className={`text-sm ${dark ? 'text-slate-400' : 'text-gray-600'}`}>Morocco</p>
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
<section id="contact" className="py-28 bg-background">
  <div className="container mx-auto max-w-6xl px-6">
    <div className="text-center mb-20">
      <h2 className="text-5xl font-bold mb-5 tracking-tight">Get In Touch</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Have a question or want to work together? I'd love to hear from you.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
      {[
        {
          icon: Mail,
          label: 'Email',
          value: 'yassine.elalami5@usmba.ac.ma',
          href: 'mailto:yassine.elalami5@usmba.ac.ma',
        },
        {
          icon: Phone,
          label: 'Phone',
          value: '+ (212) 655742509',
          href: 'tel:+212655742509',
        },
        {
          icon: MapPin,
          label: 'Location',
          value: 'Fès, Morocco',
        },
      ].map((info, index) => (
        <div
          key={info.label}
          className="p-12 rounded-3xl bg-card shadow-2xl border border-border 
                     hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 
                     transform text-center animate-fade-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex flex-col items-center gap-5">
            <div className="p-5 rounded-2xl bg-primary/10 text-primary shadow-md">
              <info.icon size={40} />
            </div>
            <div>
              <p className="font-semibold mb-2 text-2xl">{info.label}</p>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-base text-muted-foreground">{info.value}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



        <footer className={`text-center ${dark ? 'text-slate-400 border-slate-700' : 'text-gray-600 border-gray-200'} py-10 border-t`}>
          <p className="mb-2">© {new Date().getFullYear()} Yassine El Alami. All rights reserved.</p>
          <p className="text-sm">Built with React, TypeScript, and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

function ProjectCard({ 
  title, 
  category,
  desc, 
  icon: Icon,
  gradient,
  tech, 
  githubUrl, 
  demoUrl,
  dark
}: { 
  title: string;
  category: string;
  desc: string;
  icon: React.ElementType;
  gradient: string;
  tech: string[];
  githubUrl: string;
  demoUrl: string;
  dark: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`relative group rounded-2xl overflow-hidden ${dark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border shadow-lg hover:shadow-2xl transition-all duration-300`}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="relative p-8">
        {/* Icon */}
        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${gradient} mb-6 shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Category */}
        <Badge variant="secondary" className={`mb-4 ${dark ? 'bg-slate-700' : 'bg-gray-100'}`}>
          {category}
        </Badge>

        {/* Title */}
        <h4 className="text-2xl font-bold mb-4">{title}</h4>

        {/* Description */}
        <p className={`${dark ? 'text-slate-300' : 'text-gray-700'} mb-6 leading-relaxed`}>{desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span 
              key={t} 
              className={`px-3 py-1 rounded-full text-xs font-medium ${dark ? 'bg-slate-700 border-slate-600' : 'bg-gray-100 border-gray-200'} border`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className={`gap-2 flex-1 ${dark ? 'border-slate-700' : 'border-gray-300'}`} asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          {/* <Button size="sm" className="gap-2 flex-1 bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          </Button> */}
        </div>

        {/* View Details (appears on hover) */}
        {/* <motion.div
          className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4"
        >
          <span>View Details</span>
          <ExternalLink className="w-4 h-4" />
        </motion.div> */}
      </div>

      {/* Decorative corner element */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${gradient} opacity-5 rounded-bl-full`} />
    </motion.div>
  );
}

function SkillCard({ 
  title, 
  icon: Icon,
  gradient,
  items,
  dark
}: { 
  title: string;
  icon: React.ElementType;
  gradient: string;
  items: string[];
  dark: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`p-6 rounded-2xl ${dark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} shadow-lg border hover:shadow-xl transition-all duration-300`}
    >
      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${gradient} mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h5 className="font-bold text-lg mb-4">{title}</h5>
      <div className="flex flex-wrap gap-2">
        {items.map((i) => (
          <span 
            key={i} 
            className={`px-3 py-1.5 rounded-lg text-sm font-medium ${dark ? 'bg-slate-700 border-slate-600' : 'bg-gray-100 border-gray-200'} border hover:scale-105 transition-transform duration-200`}
          >
            {i}
          </span>
        ))}
      </div>
    </motion.div>
  );
}