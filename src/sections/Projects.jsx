import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/portfolio";
import { SectionHeading } from "./About";

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [showPreview, setShowPreview] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [4, -4]);
  const rotateY = useTransform(x, [-100, 100], [-4, 4]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative glass-card rounded-2xl overflow-hidden"
    >
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
        <motion.div
          className="h-full w-1/3"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
          }}
          animate={{ x: ["-100%", "400%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.5,
          }}
        />
      </div>

      {/* Mouse tracking glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at center, ${project.color}10, transparent 70%)`,
        }}
      />

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span
              className="inline-block text-xs font-mono px-2.5 py-1 rounded-full mb-3 border"
              style={{
                color: project.color,
                borderColor: `${project.color}30`,
                backgroundColor: `${project.color}08`,
              }}
            >
              {project.type}
            </span>
            <h3 className="text-2xl font-bold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400">{project.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features */}
        <div className="grid sm:grid-cols-2 gap-2 mb-6">
          {project.features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.3 + i * 0.05 }}
              className="flex items-start gap-2"
            >
              <CheckCircle2
                size={14}
                style={{ color: project.color }}
                className="mt-0.5 flex-shrink-0"
              />
              <span className="text-xs text-slate-500">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap">
          {/* Code */}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, borderColor: `${project.color}60` }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-lg text-sm text-slate-300 hover:text-white transition-all duration-300"
          >
            <FaGithub size={15} />
            Code
          </motion.a>

          {/* Preview */}
          <motion.button
            onClick={() => setShowPreview(true)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-cyan-400 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
          >
            <ExternalLink size={15} />
            Preview
          </motion.button>

          {/* Live Demo */}
          {project.demo ? (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -2,
                boxShadow: `0 0 20px ${project.color}30`,
              }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
              style={{
                backgroundColor: `${project.color}15`,
                color: project.color,
                border: `1px solid ${project.color}30`,
              }}
            >
              <ExternalLink size={15} />
              Live Demo
            </motion.a>
          ) : (
            <span className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-600 border border-white/5">
              <ExternalLink size={15} />
              Demo Soon
            </span>
          )}
        </div>

        {/* Preview Modal */}
        {showPreview && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-[#020817] relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Projects"
            title="Featured Projects"
            subtitle="Enterprise-grade applications showcasing backend architecture, security, microservices, and full-stack development."
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
