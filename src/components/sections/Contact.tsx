"use client";

import React, { useState, useCallback } from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import {
  TbMail,
  TbMapPin,
  TbSend,
  TbCircleCheck,
  TbAlertCircle,
} from "react-icons/tb";

export const ContactSection = React.memo(function ContactSection() {
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setFormState("loading");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key:
              process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "ACCESS_KEY_HERE",
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `New Contact Form Submission from ${formData.name}`,
          }),
        });

        const data = await response.json();

        if (data.success) {
          setFormState("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setFormState("idle"), 5000);
        } else {
          setFormState("error");
          setTimeout(() => setFormState("idle"), 5000);
        }
      } catch (error) {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 5000);
      }
    },
    [formData]
  );

  return (
    <section id="contact" className="pt-10 pb-20 bg-slate-950/50">
      <div className="container mx-auto px-4 xl:px-24">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's work together"
          center={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-13"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-100">
                Let&apos;s talk about your next project
              </h3>
              <p className="text-slate-400">
                Feel free to reach out for collaborations, freelance projects,
                or full-time opportunities. I&apos;d be happy to hear from you.
                Fill out the form or contact me directly via email to connect.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${portfolioData.social
                  .find((s) => s.platform === "Email")
                  ?.url.replace("mailto:", "")}`}
                className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors p-4 bg-slate-800/30 rounded-xl border border-slate-800"
              >
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <TbMail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email me at</p>
                  <p className="font-medium">
                    {portfolioData.social
                      .find((s) => s.platform === "Email")
                      ?.url.replace("mailto:", "")}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-300 p-4 bg-slate-800/30 rounded-xl border border-slate-800">
                <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                  <TbMapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Based in</p>
                  <p className="font-medium">Delhi, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Simple Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/30 p-4 rounded-2xl border border-slate-800"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full h-14 bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full h-14 bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Success/Error Messages */}
              {formState === "success" && (
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3">
                  <TbCircleCheck size={20} />
                  <span>
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </div>
              )}

              {formState === "error" && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                  <TbAlertCircle size={20} />
                  <span>Failed to send message. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === "loading" ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message <TbSend size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
});
