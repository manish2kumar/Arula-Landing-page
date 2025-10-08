import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ConfirmationCard from "./ConfirmationCard";
import { submitContactForm } from "../utils/api";

// Zod validation schema
const contactSchema = z.object({
  parentName: z.string().min(2, "Please enter your full name"),
  childAge: z
    .number({ invalid_type_error: "Please enter your child's age" })
    .min(0, "Age cannot be negative")
    .max(25, "Please enter a valid age"),
  devDelays: z.enum(["Yes", "No"], "Select Yes or No"),
  countryCode: z.string().min(1, "Country code required"),
  phone: z.string().min(5, "Enter a valid number"),
  email: z.string().email("Enter a valid email"),
  message: z.string().optional(),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await submitContactForm(data);

      if (response?.status === "success") {
        setShowConfirmation(true);
        reset();
      } else {
        setSubmitError(
          response?.message || "Failed to submit. Please try again."
        );
      }
    } catch (err) {
      setSubmitError("Error submitting form. Please try again later.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-12 lg:px-16 bg-gray-50 flex justify-center"
    >
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-10 md:p-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3E2F84] mb-10 text-center">
          Contact Our Team
        </h2>

        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {/* Parent Name */}
          <div>
            <label className="block font-semibold mb-1">
              Parent/Guardian Name *
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              {...register("parentName")}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.parentName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.parentName.message}
              </p>
            )}
          </div>

          {/* Child Age */}
          <div>
            <label className="block font-semibold mb-1">Child's Age *</label>
            <input
              type="number"
              placeholder="Age in years"
              {...register("childAge", { valueAsNumber: true })}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.childAge && (
              <p className="text-red-500 text-sm mt-1">
                {errors.childAge.message}
              </p>
            )}
          </div>

          {/* Developmental Delays */}
          <div>
            <label className="block font-semibold mb-1">
              Does your child have developmental delays? *
            </label>
            <div className="flex gap-6 mt-1 flex-col sm:flex-row">
              <label className="flex items-center gap-2">
                <input type="radio" value="Yes" {...register("devDelays")} />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="No" {...register("devDelays")} />
                No
              </label>
            </div>
            {errors.devDelays && (
              <p className="text-red-500 text-sm mt-1">
                {errors.devDelays.message}
              </p>
            )}
          </div>

          {/* Country Code */}
          <div>
            <label className="block font-semibold mb-1">Country Code *</label>
            <select
              {...register("countryCode")}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              defaultValue="+91"
            >
              <option value="+91">India (+91)</option>
              <option value="+1">USA (+1)</option>
              <option value="+44">UK (+44)</option>
            </select>
            {errors.countryCode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.countryCode.message}
              </p>
            )}
          </div>

          {/* Contact Number */}
          <div>
            <label className="block font-semibold mb-1">Contact Number *</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              {...register("phone")}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email Address *</label>
            <input
              type="email"
              placeholder="Your email"
              {...register("email")}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              placeholder="Your message"
              {...register("message")}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows={4}
            />
          </div>

          {/* Submission Error */}
          {submitError && (
            <p className="text-red-500 text-center text-sm mt-2">{submitError}</p>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 px-8 py-3 font-bold text-[#3E2F84] rounded border-2 border-[#3E2F84] hover:bg-[#3E2F84] hover:text-white transition"
            >
              {isSubmitting && (
                <svg
                  className="animate-spin h-5 w-5 text-[#3E2F84]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
              {isSubmitting ? "Submitting..." : "Get in Touch"}
            </button>
          </div>
        </form>

        {showConfirmation && (
          <ConfirmationCard
            message="Thank you! Your request has been submitted."
            onClose={() => setShowConfirmation(false)}
          />
        )}
      </div>
    </section>
  );
}
