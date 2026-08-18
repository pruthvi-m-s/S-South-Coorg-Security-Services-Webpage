// ============================================================
// SSCSS — Reusable Contact Form Component
//
// Presentational form component. Receives:
// - form data & errors (controlled by parent)
// - callbacks for change & submit
// - loading / success / failure states
// - content from the content layer
//
// The parent page orchestrates validation and submission.
// UI layer only — no validation or submission logic here.
// ============================================================

import { useMemo } from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, Send, Loader2, ArrowRight } from "lucide-react";
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
import type { ContactFormData, ContactFormErrors } from "@/lib/contact/validation";
import type { ContactPageContent } from "@/content/contact-page";

// ─── Submission State ───────────────────────────────────────

export type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

// ─── Props ──────────────────────────────────────────────────

interface ContactFormProps {
  content: ContactPageContent["form"];
  services: { slug: string; name: string }[];
  formData: ContactFormData;
  errors: ContactFormErrors;
  submissionState: SubmissionState;
  onFieldChange: (field: keyof ContactFormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onReset: () => void;
  className?: string;
}

// ─── Helpers ─────────────────────────────────────────────────

function isSubmittingState(state: SubmissionState): boolean {
  return state.status === "submitting";
}

function isIdle(state: SubmissionState): boolean {
  return state.status === "idle";
}

// ─── ContactForm ────────────────────────────────────────────

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
  const { fields, submitLabel, submittingLabel, successHeading, successMessage } = content;
  const isSubmitting = submissionState.status === "submitting";
  const isSuccess = submissionState.status === "success";
  const isError = submissionState.status === "error";

  // ─── Helper: generate field error ID for aria-describedby ──
  const errorId = (field: string) => `${field}-error`;
  const hasError = (field: keyof ContactFormErrors): boolean =>
    isIdle(submissionState) && Boolean(errors[field]);

// ─── Service options ─────────────────────────────────────
  // Memoized — the services list is static module data, so the
  // mapped options array is stable across renders.
  const serviceOptions = useMemo(
    () =>
      services.map((s) => ({
        value: s.slug,
        label: s.name,
      })),
    [services],
  );

  const disabled = isSubmittingState(submissionState);
  const nextSteps = [
    "We review each inquiry personally before responding.",
    "Most requests receive a reply within one business day.",
    "For urgent needs, phone and WhatsApp remain the fastest options.",
  ];

  // ─── Success State ───────────────────────────────────────
  if (isSuccess) {
    return (
      <section className={cn("relative", className)} aria-label="Form submission success">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-success/20 bg-success/5 p-8 text-left shadow-sm sm:p-10"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex size-12 shrink-0 items-center justify-center rounded-full bg-success/10">
              <CheckCircle size={24} className="text-success" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-semibold text-ink">
                {successHeading}
              </h3>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
                {successMessage}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-border/60 bg-background/80 p-4 sm:p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              What happens next
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {nextSteps.map((step) => (
                <li key={step} className="flex items-start gap-2">
                  <ArrowRight size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={onReset}
            className="mt-6"
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
        className="space-y-7"
      >
        {/* Name + Company (row on desktop) */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {/* Name field */}
          <div className="space-y-1.5">
            <Label htmlFor="field-name" className="text-sm font-medium text-ink">
              {fields.name.label} <span className="text-destructive font-semibold" aria-hidden="true">*</span>
            </Label>
            <Input
              id="field-name"
              type="text"
              required
              aria-required="true"
              autoComplete="name"
              value={formData.name}
              onChange={(e) => onFieldChange("name", e.target.value)}
              placeholder={fields.name.placeholder}
              aria-invalid={hasError("name") || undefined}
              aria-describedby={hasError("name") ? errorId("name") : undefined}
              disabled={disabled}
              className={cn(
                "h-11 min-h-[44px] bg-background shadow-sm transition-all duration-200",
                hasError("name") && "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",
              )}
            />
            {hasError("name") && errors.name && (
              <p id={errorId("name")} role="alert" className="text-xs font-medium text-destructive">
                {errors.name}
              </p>
            )}
          </div>

          {/* Company field */}
          <div className="space-y-1.5">
            <Label htmlFor="field-company" className="text-sm font-medium text-ink">
              {fields.company.label}
            </Label>
            <Input
              id="field-company"
              type="text"
              autoComplete="organization"
              value={formData.company}
              onChange={(e) => onFieldChange("company", e.target.value)}
              placeholder={fields.company.placeholder}
              disabled={disabled}
              className="h-11 min-h-[44px] bg-background shadow-sm transition-all duration-200"
            />
          </div>
        </motion.div>

        {/* Phone + Email (row on desktop) */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {/* Phone field */}
          <div className="space-y-1.5">
            <Label htmlFor="field-phone" className="text-sm font-medium text-ink">
              {fields.phone.label} <span className="text-destructive font-semibold" aria-hidden="true">*</span>
            </Label>
            <Input
              id="field-phone"
              type="tel"
              required
              aria-required="true"
              autoComplete="tel"
              inputMode="tel"
              value={formData.phone}
              onChange={(e) => onFieldChange("phone", e.target.value)}
              placeholder={fields.phone.placeholder}
              aria-invalid={hasError("phone") || undefined}
              aria-describedby={hasError("phone") ? errorId("phone") : undefined}
              disabled={disabled}
              className={cn(
                "transition-all duration-200",
                hasError("phone") && "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",
              )}
            />
            {hasError("phone") && errors.phone && (
              <p id={errorId("phone")} role="alert" className="text-xs font-medium text-destructive">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Email field */}
          <div className="space-y-1.5">
            <Label htmlFor="field-email" className="text-sm font-medium text-ink">
              {fields.email.label} <span className="text-destructive font-semibold" aria-hidden="true">*</span>
            </Label>
            <Input
              id="field-email"
              type="email"
              required
              aria-required="true"
              autoComplete="email"
              inputMode="email"
              value={formData.email}
              onChange={(e) => onFieldChange("email", e.target.value)}
              placeholder={fields.email.placeholder}
              aria-invalid={hasError("email") || undefined}
              aria-describedby={hasError("email") ? errorId("email") : undefined}
              disabled={disabled}
              className={cn(
                "h-11 min-h-[44px] bg-background shadow-sm transition-all duration-200",
                hasError("email") && "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",
              )}
            />
            {hasError("email") && errors.email && (
              <p id={errorId("email")} role="alert" className="text-xs font-medium text-destructive">
                {errors.email}
              </p>
            )}
          </div>
        </motion.div>

        {/* Service Required */}
        <motion.div variants={fadeUp}>
          <div className="space-y-1.5">
            <Label htmlFor="field-service" className="text-sm font-medium text-ink">
              {fields.service.label} <span className="text-destructive font-semibold" aria-hidden="true">*</span>
            </Label>
            <div className="relative">
              <select
                id="field-service"
                required
                aria-required="true"
                value={formData.service}
                onChange={(e) => onFieldChange("service", e.target.value)}
                disabled={disabled}
                aria-invalid={hasError("service") || undefined}
                aria-describedby={hasError("service") ? errorId("service") : undefined}
                className={cn(
                  "h-11 min-h-[44px] w-full min-w-0 rounded-lg border border-input bg-background px-3 py-2 text-base shadow-sm transition-all duration-200 outline-none",
                  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:shadow-[0_0_0_4px_rgba(139,30,30,0.12)]",
                  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50",
                  "md:text-sm dark:bg-input/30 dark:disabled:bg-input/80",
                  hasError("service") && "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",
                )}
              >
                <option value="">{fields.service.placeholder}</option>
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
                <option value="not-sure">{fields.service.notSureLabel}</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div variants={fadeUp}>
          <div className="space-y-1.5">
            <Label htmlFor="field-message" className="text-sm font-medium text-ink">
              {fields.message.label} <span className="text-destructive font-semibold" aria-hidden="true">*</span>
            </Label>
            <Textarea
              id="field-message"
              required
              aria-required="true"
              value={formData.message}
              onChange={(e) => onFieldChange("message", e.target.value)}
              placeholder={fields.message.placeholder}
              aria-invalid={hasError("message") || undefined}
              aria-describedby={hasError("message") ? errorId("message") : undefined}
              disabled={disabled}
              rows={5}
              className={cn(
                "resize-y min-h-[120px] transition-all duration-200",
                hasError("message") && "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",
              )}
            />
            {hasError("message") && errors.message && (
              <p id={errorId("message")} role="alert" className="text-xs font-medium text-destructive">
                {errors.message}
              </p>
            )}
            {hasError("service") && errors.service && (
              <p id={errorId("service")} role="alert" className="text-xs font-medium text-destructive">
                {errors.service}
              </p>
            )}
          </div>
        </motion.div>

        {/* Error banner */}
        {isError && (
          <motion.div
            variants={fadeUp}
            role="alert"
            className="flex items-start gap-3 rounded-xl border border-destructive/20 bg-destructive/5 p-4 shadow-sm sm:p-5"
          >
            <AlertCircle
              size={20}
              className="mt-0.5 shrink-0 text-destructive"
              aria-hidden="true"
            />
            <div className="space-y-1">
              <p className="text-sm leading-relaxed text-destructive">
                {submissionState.message}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Your message is still ready to edit below if you want to try again.
              </p>
            </div>
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.div variants={fadeUp} className="pt-2">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              type="submit"
              variant="default"
              size="lg"
              disabled={disabled}
              className="w-full sm:w-auto transition-all duration-200"
            >
              {disabled ? (
                <>
                  <Loader2 size={18} className="mr-1.5 animate-spin" aria-hidden="true" />
                  {submittingLabel}
                </>
              ) : (
                <>
                  <Send size={18} className="mr-1.5" aria-hidden="true" />
                  {submitLabel}
                </>
              )}
            </Button>

            {isSubmitting && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-24 overflow-hidden rounded-full bg-border">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: "20%" }}
                    animate={{ width: ["20%", "65%", "100%"] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <span>Preparing your message…</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Live region for screen readers during submission */}
        <div aria-live="polite" aria-atomic="true" className="sr-only">
          {submissionState.status === "submitting" && "Submitting your inquiry, please wait..."}
          {submissionState.status === "error" && submissionState.message}
        </div>
      </motion.form>
    </section>
  );
}

