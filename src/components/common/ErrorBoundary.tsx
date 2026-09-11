// ============================================================
// SSCSS — Reusable Error Boundary Component
// Catches JavaScript errors anywhere in child component tree,
// logs technical details in development, and renders fallback UI.
// ============================================================

import { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
  /** When this key changes, the error state resets — useful for route changes */
  resetKey?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo });
    // Development-friendly error logging
    if (import.meta.env.DEV) {
      console.error("[SSCSS ErrorBoundary caught error]:", error, errorInfo);
    }
  }

  /** Reset error state when resetKey changes (navigating away from a broken route) */
  public override componentDidUpdate(prevProps: Readonly<Props>): void {
    if (this.props.resetKey && this.props.resetKey !== prevProps.resetKey) {
      if (this.state.hasError) {
        this.handleReset();
      }
    }
  }

  private handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  private handleReload = (): void => {
    window.location.reload();
  };

  public override render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <section
          className="flex min-h-[60vh] w-full items-center justify-center p-6 text-center"
          role="alert"
          aria-live="assertive"
        >
          <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
            {/* Warning Icon */}
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
              <AlertTriangle size={28} aria-hidden="true" />
            </div>

            {/* Title */}
            <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
              Something went wrong
            </h2>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              An unexpected display error occurred. You can try refreshing the action or return home.
            </p>

            {/* Action buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                variant="default"
                onClick={this.handleReset}
                className="w-full sm:w-auto"
              >
                <RefreshCw size={16} className="mr-2" aria-hidden="true" />
                Try Again
              </Button>
              <Button
                variant="outline"
                onClick={this.handleReload}
                className="w-full sm:w-auto"
              >
                <Home size={16} className="mr-2" aria-hidden="true" />
                Reload Page
              </Button>
            </div>

            {/* Dev mode stack trace */}
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-xs font-semibold text-muted-foreground hover:text-ink">
                  Technical Details (Development Mode)
                </summary>
                <pre className="mt-2 max-h-40 overflow-auto rounded bg-muted p-3 text-[11px] font-mono text-muted-foreground">
                  {this.state.error.toString()}
                  {"\n"}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
