"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import type {
  RequestIntroductionFormData,
  RequestIntroductionValidationErrors,
  ApiResponse,
} from "@/lib/types";

type FormState = "idle" | "submitting" | "success" | "error";

export default function IntroductionForm() {
  const [formData, setFormData] = useState<RequestIntroductionFormData>({
    fullName: "",
    email: "",
    phone: "",
    organisation: "",
    requestType: "Landlord",
    message: "",
    consent: false,
    honeypot: "", // Anti-spam
  });

  const [errors, setErrors] = useState<RequestIntroductionValidationErrors>({});
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    // Handle checkbox separately
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    // Clear field-specific error when user starts typing
    if (errors[name as keyof RequestIntroductionValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Client-side validation (mirrors Zod schema)
  const validateForm = (): boolean => {
    const newErrors: RequestIntroductionValidationErrors = {};

    // Full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone (optional but validated if provided)
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    if (formData.phone.trim() && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Request type
    if (!formData.requestType) {
      newErrors.requestType = "Please select a request type";
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    // Consent
    if (!formData.consent) {
      newErrors.consent = "You must consent to continue";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({});
    setErrorMessage("");

    // Client-side validation
    if (!validateForm()) {
      return;
    }

    setFormState("submitting");

    try {
      const response = await fetch("/api/request-introduction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok || !data.success) {
        // Handle validation errors from server
        if (data.details) {
          setErrors(data.details as RequestIntroductionValidationErrors);
        }

        setErrorMessage(
          data.error || "Failed to submit request. Please try again."
        );
        setFormState("error");
        return;
      }

      // Success!
      setFormState("success");

    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
      setFormState("error");
    }
  };

  // Success state UI
  if (formState === "success") {
    return (
      <div className="max-w-2xl border border-zinc-800 bg-zinc-900/50 p-12">
        <div className="flex items-start space-x-4">
          <svg
            className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <h3 className="text-2xl font-medium text-zinc-50 mb-4">
              Request received
            </h3>
            <p className="text-lg leading-relaxed text-zinc-400 mb-4">
              Your request has been submitted successfully. If your profile
              aligns with framework requirements, you will be contacted directly.
            </p>
            <p className="text-base leading-relaxed text-zinc-500">
              No further action is required at this time.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Form UI
  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      {/* General error message */}
      {formState === "error" && errorMessage && (
        <div className="p-4 bg-red-950/50 border border-red-800 text-red-200 rounded">
          <p className="text-sm">{errorMessage}</p>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          disabled={formState === "submitting"}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-2 text-sm text-red-400">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email Address */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={formState === "submitting"}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-2 text-sm text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Phone Number <span className="text-zinc-500 text-xs">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          disabled={formState === "submitting"}
          placeholder="+44 20 1234 5678"
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-600 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-2 text-sm text-red-400">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Organisation / Company Name */}
      <div>
        <label
          htmlFor="organisation"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Organisation / Company Name{" "}
          <span className="text-zinc-500 text-xs">(optional)</span>
        </label>
        <input
          type="text"
          id="organisation"
          name="organisation"
          value={formData.organisation}
          onChange={handleChange}
          disabled={formState === "submitting"}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-invalid={!!errors.organisation}
        />
        {errors.organisation && (
          <p className="mt-2 text-sm text-red-400">{errors.organisation}</p>
        )}
      </div>

      {/* Request Type */}
      <div>
        <label
          htmlFor="requestType"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Request Type <span className="text-red-400">*</span>
        </label>
        <select
          id="requestType"
          name="requestType"
          value={formData.requestType}
          onChange={handleChange}
          disabled={formState === "submitting"}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-invalid={!!errors.requestType}
          aria-describedby={errors.requestType ? "requestType-error" : undefined}
        >
          <option value="Landlord">Landlord</option>
          <option value="Local Authority">Local Authority</option>
          <option value="Partner">Partner</option>
          <option value="Other">Other</option>
        </select>
        {errors.requestType && (
          <p id="requestType-error" className="mt-2 text-sm text-red-400">
            {errors.requestType}
          </p>
        )}
      </div>

      {/* Message / Details */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Message / Details <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={formState === "submitting"}
          rows={6}
          placeholder="Please provide details about your request..."
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder:text-zinc-600 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        <p className="mt-2 text-xs text-zinc-500">
          {formData.message.length} / 2000 characters
        </p>
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div>
        <label className="flex items-start space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            disabled={formState === "submitting"}
            className="mt-1 w-5 h-5 bg-zinc-900 border border-zinc-800 text-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <span className="text-sm text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors">
            I consent to Future Social Housing contacting me about my request
            and storing my information for this purpose.{" "}
            <span className="text-red-400">*</span>
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-2 ml-8 text-sm text-red-400">
            {errors.consent}
          </p>
        )}
      </div>

      {/* Honeypot field (hidden from users, visible to bots) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="honeypot">Leave this field empty</label>
        <input
          type="text"
          id="honeypot"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="px-8 py-4 bg-blue-500 text-white border border-blue-500 hover:bg-blue-400 hover:border-blue-400 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500 disabled:hover:border-blue-500"
      >
        {formState === "submitting" ? "Submitting..." : "Submit request"}
      </button>

      <p className="text-xs text-zinc-500">
        <span className="text-red-400">*</span> Required fields
      </p>
    </form>
  );
}
