import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MessageSquare,
  User,
  MapPin,
  Shield,
  AlertTriangle,
} from "lucide-react";
import { SecurityUtils } from "../../security.config.js";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [attempts, setAttempts] = useState(0);
  const [lastAttempt, setLastAttempt] = useState(0);

  // Rate limiting: max 5 attempts per 15 minutes
  const MAX_ATTEMPTS = 5;
  const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!SecurityUtils.validateLength(formData.name, 100)) {
      newErrors.name = "Name must be less than 100 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!SecurityUtils.validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (!SecurityUtils.validateLength(formData.subject, 200)) {
      newErrors.subject = "Subject must be less than 200 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (!SecurityUtils.validateLength(formData.message, 1000)) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    // Check for potentially malicious content
    const sanitizedMessage = SecurityUtils.sanitizeHTML(formData.message);
    if (sanitizedMessage !== formData.message) {
      newErrors.message = "Message contains potentially unsafe content";
      SecurityUtils.logSecurityEvent("XSS_ATTEMPT", {
        message: formData.message,
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const checkRateLimit = () => {
    const now = Date.now();

    // Reset attempts if rate limit window has passed
    if (now - lastAttempt > RATE_LIMIT_WINDOW) {
      setAttempts(0);
      setLastAttempt(now);
      return true;
    }

    // Check if user has exceeded rate limit
    if (attempts >= MAX_ATTEMPTS) {
      const timeLeft = Math.ceil(
        (RATE_LIMIT_WINDOW - (now - lastAttempt)) / 1000 / 60
      );
      setErrors({
        general: `Too many attempts. Please wait ${timeLeft} minutes before trying again.`,
      });
      SecurityUtils.logSecurityEvent("RATE_LIMIT_EXCEEDED", {
        attempts,
        ip: "client-side",
      });
      return false;
    }

    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Sanitize input to prevent XSS
    const sanitizedValue = SecurityUtils.sanitizeHTML(value);

    setFormData({
      ...formData,
      [name]: sanitizedValue,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({});

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Check rate limiting
    if (!checkRateLimit()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission with security logging
      SecurityUtils.logSecurityEvent("FORM_SUBMISSION", {
        email: formData.email,
        timestamp: new Date().toISOString(),
      });

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Increment attempts for rate limiting
      setAttempts((prev) => prev + 1);
      setLastAttempt(Date.now());

      setTimeout(() => setSubmitStatus(""), 3000);
    } catch (error) {
      SecurityUtils.logSecurityEvent("FORM_SUBMISSION_ERROR", {
        error: error.message,
      });
      setErrors({ general: "An error occurred. Please try again later." });
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "Mohammed@azab.io",
      href: "mailto:Mohammed@azab.io",
      description: "Drop me a line anytime",
      color: "from-electric-blue to-cyan-500",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@Mohammed-Azab",
      href: "https://github.com/Mohammed-Azab",
      description: "Check out my projects",
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Mohammed Azab",
      href: "https://www.linkedin.com/in/mohammed-azab/",
      description: "Let's connect professionally",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Berlin,Germany",
      href: null,
      description: "Currently based in",
      color: "from-neon-green to-emerald-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface via-dark-bg to-dark-surface opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-futuristic font-bold mb-6"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto mb-8"
          ></motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Ready to collaborate on innovative projects or discuss exciting
            opportunities? I'm always open to connecting with fellow engineers,
            researchers, and innovators.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-8"
            >
              Let's Connect
            </motion.h3>

            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                variants={itemVariants}
                className="group"
              >
                {method.href ? (
                  <motion.a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : ""
                    }
                    className="flex items-center gap-4 p-4 bg-dark-surface border border-dark-border rounded-lg card-hover"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div
                      className={`p-3 bg-gradient-to-r ${method.color} rounded-lg`}
                    >
                      <method.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold group-hover:text-electric-blue transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-1">
                        {method.description}
                      </p>
                      <p className="text-gray-300 font-mono text-sm">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ) : (
                  <div className="flex items-center gap-4 p-4 bg-dark-surface border border-dark-border rounded-lg">
                    <div
                      className={`p-3 bg-gradient-to-r ${method.color} rounded-lg`}
                    >
                      <method.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">
                        {method.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-1">
                        {method.description}
                      </p>
                      <p className="text-gray-300 font-mono text-sm">
                        {method.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-neon-green/20 to-electric-blue/20 border border-neon-green/30 rounded-lg p-6 mt-8"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-neon-green font-semibold">
                  Available for Projects
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Currently open to exciting opportunities in robotics, embedded
                systems, and control engineering. Let's build something amazing
                together!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <motion.div
              variants={itemVariants}
              className="bg-dark-surface border border-dark-border rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <MessageSquare className="text-electric-blue" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      <User size={16} className="inline mr-2" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all"
                      placeholder="Janis Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      <Mail size={16} className="inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all"
                      placeholder="Janis@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all"
                    placeholder="Project Collaboration Opportunity"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.subject}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </motion.div>

                {errors.general && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-center"
                  >
                    <p className="text-red-500 font-semibold">
                      <Shield size={20} className="inline mr-2" />{" "}
                      {errors.general}
                    </p>
                  </motion.div>
                )}

                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
                      isSubmitting
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-electric-blue to-neon-green text-dark-bg hover:scale-105 hover:shadow-lg hover:shadow-electric-blue/30"
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>

                {/* Submit Status */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-neon-green/20 border border-neon-green/30 rounded-lg p-4 text-center"
                  >
                    <p className="text-neon-green font-semibold">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-electric-blue/10 to-neon-green/10 border border-electric-blue/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build the Future Together?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you have a challenging robotics project, need embedded
              systems expertise, or want to collaborate on innovative solutions,
              I'm excited to hear from you.
            </p>
            <motion.a
              href="mailto:Mohammed@azab.io"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric-blue to-neon-green text-dark-bg rounded-lg font-semibold hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Start a Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
