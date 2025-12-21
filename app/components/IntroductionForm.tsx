"use client";

import { useState } from "react";
import { IntroductionFormData } from "@/lib/types";

export default function IntroductionForm() {
  const [formData, setFormData] = useState<IntroductionFormData>({
    name: "",
    company: "",
    city: "",
    referralSource: "",
  });

  const [errors, setErrors] = useState<Partial<IntroductionFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof IntroductionFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<IntroductionFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.referralSource.trim()) {
      newErrors.referralSource = "Please specify how you heard about us";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // Simulate submission (no backend)
      console.log("Form submitted:", formData);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl border border-zinc-800 bg-zinc-900/50 p-12">
        <h3 className="text-2xl font-medium text-zinc-50 mb-4">
          Request received
        </h3>
        <p className="text-lg leading-relaxed text-zinc-400">
          Your request has been noted. If your profile aligns with framework
          requirements, you will be contacted directly. No further action is
          required at this time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors"
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-400">{errors.name}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors"
          aria-invalid={!!errors.company}
        />
        {errors.company && (
          <p className="mt-2 text-sm text-red-400">{errors.company}</p>
        )}
      </div>

      {/* City */}
      <div>
        <label
          htmlFor="city"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors"
          aria-invalid={!!errors.city}
        />
        {errors.city && (
          <p className="mt-2 text-sm text-red-400">{errors.city}</p>
        )}
      </div>

      {/* How you heard about us */}
      <div>
        <label
          htmlFor="referralSource"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          How you heard about us
        </label>
        <textarea
          id="referralSource"
          name="referralSource"
          value={formData.referralSource}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors resize-none"
          aria-invalid={!!errors.referralSource}
        />
        {errors.referralSource && (
          <p className="mt-2 text-sm text-red-400">{errors.referralSource}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="px-8 py-4 bg-blue-500 text-white border border-blue-500 hover:bg-blue-400 hover:border-blue-400 transition-colors duration-200 font-medium"
      >
        Submit request
      </button>
    </form>
  );
}
