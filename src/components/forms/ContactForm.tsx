import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  AlertCircle,
  Send,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type {
  ContactFormData,
  ContactFormErrors,
} from "@/lib/contact/validation";
import type { ContactPageContent } from "@/content/contact-page";

export type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

interface ContactFormProps {
  content: ContactPageContent["form"];
  services: { slug: string; name: string }[];
  formData: ContactFormData;
  errors: ContactFormErrors;
  submissionState: SubmissionState;
  onFieldChange: (
    field: keyof ContactFormData,
    value: string,
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  onReset: () => void;
  className?: string;
}

export default function ContactForm({
  content,
  services,
  formData,
  errors,
  submissionState,
  onFieldChange,
  onSubmit,
  onReset,
  className,
}: ContactFormProps) {
  const {
    fields,
    submitLabel,
    submittingLabel,
    successHeading,
    successMessage,
  } = content;

  const isSubmitting =
    submissionState.status === "submitting";
  const isSuccess =
    submissionState.status === "success";
  const isError =
    submissionState.status === "error";

  const errorId = (field: string) =>
    `${field}-error`;

  const hasError = (
    field: keyof ContactFormErrors,
  ) =>
    submissionState.status === "idle" &&
    Boolean(errors[field]);

  const serviceOptions = useMemo(
    () =>
      services.map((service) => ({
        value: service.slug,
        label: service.name,
      })),
    [services],
  );

  const nextSteps = [
    "We review each inquiry personally before responding.",
    "Most requests receive a reply within one business day.",
    "For urgent needs, phone and WhatsApp remain available.",
  ];

  if (isSuccess) {
    return (
      <section
        className={cn("relative", className)}
        aria-label="Form submission success"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-[#c9c0b3] bg-[#f3efe6] p-6 text-[#171615] sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#dce9dc] text-[#4e7d58]">
              <CheckCircle
                size={22}
                aria-hidden="true"
              />
            </div>

            <div>
              <h3 className="font-heading text-2xl font-semibold tracking-tight">
                {successHeading}
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-[#6a655e]">
                {successMessage}
              </p>
            </div>
          </div>

          <div className="mt-7 border border-[#d9d1c5] bg-[#ebe5da] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a9590]">
              What happens next
            </p>

            <ul className="mt-4 space-y-3">
              {nextSteps.map((step) => (
                <li
                  key={step}
                  className="flex items-start gap-3 text-sm leading-6 text-[#6a655e]"
                >
                  <ArrowRight
                    size={15}
                    className="mt-1 shrink-0 text-[#ad241c]"
                    aria-hidden="true"
                  />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={onReset}
            className="mt-6 border-[#cfc7bb] bg-transparent text-[#171615] hover:bg-[#ebe5da]"
          >
            {content.resetLabel}
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      className={cn("relative", className)}
      aria-label="Inquiry Form"
    >
      <motion.form
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        onSubmit={onSubmit}
        noValidate
        className="space-y-6"
      >
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          <div className="space-y-1.5">
            <Label
              htmlFor="field-name"
              className="text-sm font-semibold text-[#171615]"
            >
              {fields.name.label}
              <span
                className="ml-1 text-[#ad241c]"
                aria-hidden="true"
              >
                *
              </span>
            </Label>

            <Input
              id="field-name"
              type="text"
              required
              autoComplete="name"
              value={formData.name}
              onChange={(e) =>
                onFieldChange("name", e.target.value)
              }
              placeholder={fields.name.placeholder}
              aria-invalid={
                hasError("name") || undefined
              }
              aria-describedby={
                hasError("name")
                  ? errorId("name")
                  : undefined
              }
              disabled={isSubmitting}
              className={cn(
                "h-12 border-[#cfc7bb] bg-[#f8f5ef] text-[#171615] placeholder:text-[#918a82] shadow-none",
                "focus-visible:border-[#ad241c] focus-visible:ring-[#ad241c]/20",
                hasError("name") &&
                  "border-[#b14a4a]",
              )}
            />

            {hasError("name") && errors.name && (
              <p
                id={errorId("name")}
                role="alert"
                className="text-xs font-medium text-[#a23b3b]"
              >
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="field-company"
              className="text-sm font-semibold text-[#171615]"
            >
              {fields.company.label}
            </Label>

            <Input
              id="field-company"
              type="text"
              autoComplete="organization"
              value={formData.company}
              onChange={(e) =>
                onFieldChange(
                  "company",
                  e.target.value,
                )
              }
              placeholder={fields.company.placeholder}
              disabled={isSubmitting}
              className="h-12 border-[#cfc7bb] bg-[#f8f5ef] text-[#171615] placeholder:text-[#918a82] shadow-none focus-visible:border-[#ad241c] focus-visible:ring-[#ad241c]/20"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          <div className="space-y-1.5">
            <Label
              htmlFor="field-phone"
              className="text-sm font-semibold text-[#171615]"
            >
              {fields.phone.label}
              <span
                className="ml-1 text-[#ad241c]"
                aria-hidden="true"
              >
                *
              </span>
            </Label>

            <Input
              id="field-phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              value={formData.phone}
              onChange={(e) =>
                onFieldChange(
                  "phone",
                  e.target.value,
                )
              }
              placeholder={fields.phone.placeholder}
              aria-invalid={
                hasError("phone") || undefined
              }
              aria-describedby={
                hasError("phone")
                  ? errorId("phone")
                  : undefined
              }
              disabled={isSubmitting}
              className={cn(
                "h-12 border-[#cfc7bb] bg-[#f8f5ef] text-[#171615] placeholder:text-[#918a82] shadow-none",
                "focus-visible:border-[#ad241c] focus-visible:ring-[#ad241c]/20",
                hasError("phone") &&
                  "border-[#b14a4a]",
              )}
            />

            {hasError("phone") && errors.phone && (
              <p
                id={errorId("phone")}
                role="alert"
                className="text-xs font-medium text-[#a23b3b]"
              >
                {errors.phone}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="field-email"
              className="text-sm font-semibold text-[#171615]"
            >
              {fields.email.label}
              <span
                className="ml-1 text-[#ad241c]"
                aria-hidden="true"
              >
                *
              </span>
            </Label>

            <Input
              id="field-email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              value={formData.email}
              onChange={(e) =>
                onFieldChange(
                  "email",
                  e.target.value,
                )
              }
              placeholder={fields.email.placeholder}
              aria-invalid={
                hasError("email") || undefined
              }
              aria-describedby={
                hasError("email")
                  ? errorId("email")
                  : undefined
              }
              disabled={isSubmitting}
              className={cn(
                "h-12 border-[#cfc7bb] bg-[#f8f5ef] text-[#171615] placeholder:text-[#918a82] shadow-none",
                "focus-visible:border-[#ad241c] focus-visible:ring-[#ad241c]/20",
                hasError("email") &&
                  "border-[#b14a4a]",
              )}
            />

            {hasError("email") && errors.email && (
              <p
                id={errorId("email")}
                role="alert"
                className="text-xs font-medium text-[#a23b3b]"
              >
                {errors.email}
              </p>
            )}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="space-y-1.5"
        >
          <Label
            htmlFor="field-service"
            className="text-sm font-semibold text-[#171615]"
          >
            {fields.service.label}
            <span
              className="ml-1 text-[#ad241c]"
              aria-hidden="true"
            >
              *
            </span>
          </Label>

          <select
            id="field-service"
            required
            value={formData.service}
            onChange={(e) =>
              onFieldChange(
                "service",
                e.target.value,
              )
            }
            disabled={isSubmitting}
            aria-invalid={
              hasError("service") || undefined
            }
            aria-describedby={
              hasError("service")
                ? errorId("service")
                : undefined
            }
            className={cn(
              "h-12 w-full rounded-lg border border-[#cfc7bb] bg-[#f8f5ef] px-3 text-sm text-[#171615] shadow-none outline-none",
              "focus:border-[#ad241c] focus:ring-3 focus:ring-[#ad241c]/20",
              hasError("service") &&
                "border-[#b14a4a]",
            )}
          >
            <option value="">
              {fields.service.placeholder}
            </option>

            {serviceOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}

            <option value="not-sure">
              {fields.service.notSureLabel}
            </option>
          </select>

          {hasError("service") && errors.service && (
            <p
              id={errorId("service")}
              role="alert"
              className="text-xs font-medium text-[#a23b3b]"
            >
              {errors.service}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="space-y-1.5"
        >
          <Label
            htmlFor="field-message"
            className="text-sm font-semibold text-[#171615]"
          >
            {fields.message.label}
            <span
              className="ml-1 text-[#ad241c]"
              aria-hidden="true"
            >
              *
            </span>
          </Label>

          <Textarea
            id="field-message"
            required
            value={formData.message}
            onChange={(e) =>
              onFieldChange(
                "message",
                e.target.value,
              )
            }
            placeholder={fields.message.placeholder}
            aria-invalid={
              hasError("message") || undefined
            }
            aria-describedby={
              hasError("message")
                ? errorId("message")
                : undefined
            }
            disabled={isSubmitting}
            rows={6}
            className={cn(
              "min-h-[150px] resize-y border-[#cfc7bb] bg-[#f8f5ef] text-[#171615] placeholder:text-[#918a82] shadow-none",
              "focus-visible:border-[#ad241c] focus-visible:ring-[#ad241c]/20",
              hasError("message") &&
                "border-[#b14a4a]",
            )}
          />

          {hasError("message") && errors.message && (
            <p
              id={errorId("message")}
              role="alert"
              className="text-xs font-medium text-[#a23b3b]"
            >
              {errors.message}
            </p>
          )}
        </motion.div>

        {isError && (
          <motion.div
            variants={fadeUp}
            role="alert"
            className="flex items-start gap-3 border border-[#d6a6a6] bg-[#f8eaea] p-4"
          >
            <AlertCircle
              size={19}
              className="mt-0.5 shrink-0 text-[#a23b3b]"
              aria-hidden="true"
            />

            <div>
              <p className="text-sm leading-6 text-[#8f3030]">
                {submissionState.message}
              </p>

              <p className="mt-1 text-xs leading-5 text-[#7d6b67]">
                Your message is still ready to edit below if you
                want to try again.
              </p>
            </div>
          </motion.div>
        )}

        <motion.div
          variants={fadeUp}
          className="pt-2"
        >
          <Button
            type="submit"
            variant="default"
            size="lg"
            disabled={isSubmitting}
            className="min-h-12 w-full sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2
                  size={18}
                  className="mr-1.5 animate-spin"
                  aria-hidden="true"
                />
                {submittingLabel}
              </>
            ) : (
              <>
                <Send
                  size={17}
                  className="mr-1.5"
                  aria-hidden="true"
                />
                {submitLabel}
              </>
            )}
          </Button>
        </motion.div>

        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {isSubmitting &&
            "Submitting your inquiry, please wait..."}
          {isError && submissionState.message}
        </div>
      </motion.form>
    </section>
  );
}