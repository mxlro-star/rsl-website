"use client";

import { useState } from "react";
import { OnboardingPackFormData } from "@/lib/types";

export default function OnboardingPackForm() {
  const [formData, setFormData] = useState<OnboardingPackFormData>({
    fullName: "",
    email: "",
    phone: "",
    numberOfProperties: "",
    propertyLocations: "",
  });

  const [errors, setErrors] = useState<Partial<OnboardingPackFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof OnboardingPackFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<OnboardingPackFormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.numberOfProperties.trim()) {
      newErrors.numberOfProperties = "Number of properties is required";
    }
    if (!formData.propertyLocations.trim()) {
      newErrors.propertyLocations = "Property location(s) is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // Simulate submission (no backend)
      console.log("Onboarding pack request submitted:", formData);
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
          Thank you. An onboarding pack will be sent to you within one working day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Full name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors"
          aria-invalid={!!errors.fullName}
        />
        {errors.fullName && (
          <p className="mt-2 text-sm text-red-400">{errors.fullName}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors"
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-400">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Phone number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors"
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p className="mt-2 text-sm text-red-400">{errors.phone}</p>
        )}
      </div>

      {/* Number of Properties */}
      <div>
        <label
          htmlFor="numberOfProperties"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Number of properties
        </label>
        <input
          type="text"
          id="numberOfProperties"
          name="numberOfProperties"
          value={formData.numberOfProperties}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors"
          aria-invalid={!!errors.numberOfProperties}
        />
        {errors.numberOfProperties && (
          <p className="mt-2 text-sm text-red-400">{errors.numberOfProperties}</p>
        )}
      </div>

      {/* Property Locations */}
      <div>
        <label
          htmlFor="propertyLocations"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Property location(s)
        </label>
        <textarea
          id="propertyLocations"
          name="propertyLocations"
          value={formData.propertyLocations}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-50 focus:outline-none focus:border-blue-500 transition-colors resize-none"
          aria-invalid={!!errors.propertyLocations}
        />
        {errors.propertyLocations && (
          <p className="mt-2 text-sm text-red-400">{errors.propertyLocations}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-8 py-4 bg-blue-500 text-white border border-blue-500 hover:bg-blue-400 hover:border-blue-400 transition-colors duration-200 font-medium"
      >
        Request Onboarding Pack
      </button>
    </form>
  );
}
