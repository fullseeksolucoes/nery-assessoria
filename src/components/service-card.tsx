"use client";

import { motion } from "framer-motion";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

export default function ServiceCard({
  icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.12,
      }}
      className="group bg-surface-light p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-shadow focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2"
    >
      <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
        {icon}
      </div>

      <h3 className="font-manrope font-bold text-xl text-primary mb-3">
        {title}
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
