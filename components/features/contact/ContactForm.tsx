"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MessageSquareMore,
  Linkedin,
  Github,
  Facebook,
  Instagram,
} from "lucide-react";

import { Section } from "@/components/common/Section";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message must be at most 500 characters."),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data); 
    toast.success("Message sent successfully!");
    form.reset();
  };

  const inputClass =
    "w-full px-3 py-2 rounded-md border text-sm transition-colors duration-200 " +
    "bg-white text-gray-900 border-gray-300 placeholder-gray-400 " +
    "dark:bg-zinc-800 dark:text-gray-100 dark:border-zinc-600 dark:placeholder-zinc-500 " +
    "focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <Section className="min-h-screen py-10 px-4 sm:px-6 mt-20">
      <div className="max-w-6xl mx-auto">

        {/* ── GRID: stacks on mobile, side-by-side on lg ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* ══════════ LEFT ══════════ */}
          <div className="flex flex-col gap-8">

            {/* Heading */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold
                bg-gradient-to-r from-gray-900 to-gray-500
                dark:from-white dark:to-gray-400
                bg-clip-text text-transparent leading-tight">
                Let&#39;s Work Together
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-md">
                Have a project in mind? Let&#39;s talk and build something amazing.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="flex flex-col gap-3">

              {/* Email */}
              <a href="mailto:angoringedwin12@gmail.com">
                <div className="flex items-center gap-4 p-4 rounded-xl
                  bg-gray-50 dark:bg-zinc-800 hover:shadow-md transition">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="font-medium text-gray-900 dark:text-white text-sm truncate">
                      angoringedwin12@gmail.com
                    </p>
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+639518311650">
                <div className="flex items-center gap-4 p-4 rounded-xl
                  bg-gray-50 dark:bg-zinc-800 hover:shadow-md transition">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 flex-shrink-0">
                    <Phone className="h-5 w-5 text-green-600 dark:text-green-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">
                      +63 9518311650
                    </p>
                  </div>
                </div>
              </a>

              {/* Facebook */}
              <a href="https://web.facebook.com/edwingangoringjr/" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-4 p-4 rounded-xl
                  bg-gray-50 dark:bg-zinc-800 hover:shadow-md transition">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 flex-shrink-0">
                    <Facebook className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">Facebook</p>
                    <p className="font-medium text-gray-900 dark:text-white text-sm truncate">
                      facebook.com/edwingangoringjr
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Social Icons */}
            <div>
              <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-3 text-sm">
                <MessageSquareMore className="h-4 w-4" />
                Connect with me
              </div>
              <div className="flex gap-3">
                
                 <a href="https://www.instagram.com/edwinangoring/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-gray-100 dark:bg-zinc-800
                    hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-500
                    transition transform hover:scale-110"
                >
                  <Instagram className="h-5 w-5 group-hover:text-white" />
                </a>
                
                 <a href="https://www.linkedin.com/in/angoring-jr-edwin-g-22043a3b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-gray-100 dark:bg-zinc-800
                    hover:bg-blue-600 transition transform hover:scale-110"
                >
                  <Linkedin className="h-5 w-5 group-hover:text-white" />
                </a>
                
                 <a href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-gray-100 dark:bg-zinc-800
                    hover:bg-black transition transform hover:scale-110"
                >
                  <Github className="h-5 w-5 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* ══════════ RIGHT — FORM ══════════ */}
          <div className="w-full">
            <div className="space-y-3 mb-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold
                bg-gradient-to-r from-gray-900 to-gray-500
                dark:from-white dark:to-gray-400
                bg-clip-text text-transparent">
                Contact Me
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                Fill out the form below to send me a message.
              </p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

              {/* Name + Email — stack on mobile, side by side on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Name
                      </label>
                      <input {...field} placeholder="John Doe" className={inputClass} />
                      {fieldState.error && (
                        <p className="text-xs text-red-500">{fieldState.error.message}</p>
                      )}
                    </div>
                  )}
                />
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
                      </label>
                      <input {...field} type="email" placeholder="john@example.com" className={inputClass} />
                      {fieldState.error && (
                        <p className="text-xs text-red-500">{fieldState.error.message}</p>
                      )}
                    </div>
                  )}
                />
              </div>

              {/* Subject */}
              <Controller
                name="subject"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <input {...field} placeholder="Project Inquiry" className={inputClass} />
                    {fieldState.error && (
                      <p className="text-xs text-red-500">{fieldState.error.message}</p>
                    )}
                  </div>
                )}
              />

              {/* Message */}
              <Controller
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        {...field}
                        rows={6}
                        placeholder="Tell me about your project..."
                        className={inputClass + " resize-none"}
                      />
                      <span className="absolute bottom-2 right-3 text-xs text-gray-400 dark:text-zinc-500">
                        {field.value.length}/500
                      </span>
                    </div>
                    {fieldState.error && (
                      <p className="text-xs text-red-500">{fieldState.error.message}</p>
                    )}
                  </div>
                )}
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md
                  text-sm font-medium transition-colors duration-200
                  bg-gray-900 text-white hover:bg-gray-700
                  dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200
                  disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </Section>
  );
}