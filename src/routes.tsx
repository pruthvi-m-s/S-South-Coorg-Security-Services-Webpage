// ============================================================
// SSCSS — Route Configuration
// All routes defined here using createBrowserRouter.
// Layout wrapper wraps all page-level routes.
// ============================================================

import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "@/lib/routes";
import Layout from "@/components/layout/Layout";
import ErrorBoundary from "@/components/common/ErrorBoundary";

// Eagerly loaded route (critical path)
import HomePage from "@/pages/Home";

// Lazy-loaded routes for code splitting
const AboutPage = lazy(() => import("@/pages/About"));
const CompliancePage = lazy(() => import("@/pages/Compliance"));
const ServicesHubPage = lazy(() => import("@/pages/Services/ServicesHub"));
const ServicePage = lazy(() => import("@/pages/Services/ServicePage"));
const IndustriesPage = lazy(() => import("@/pages/Industries"));
const ClientsPage = lazy(() => import("@/pages/Clients"));
const GalleryPage = lazy(() => import("@/pages/Gallery"));
const FaqsPage = lazy(() => import("@/pages/Faqs"));
const ContactPage = lazy(() => import("@/pages/Contact"));
const ThankYouPage = lazy(() => import("@/pages/ThankYou"));
const NotFoundPage = lazy(() => import("@/pages/NotFound"));

export const router = createBrowserRouter([
  {
    element: (
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    ),
    children: [
      {
        path: ROUTES.home,
        element: <HomePage />,
      },
      {
        path: ROUTES.about,
        element: <AboutPage />,
      },
      {
        path: ROUTES.compliance,
        element: <CompliancePage />,
      },
      {
        path: ROUTES.services,
        element: <ServicesHubPage />,
      },
      {
        path: ROUTES.serviceDetail,
        element: <ServicePage />,
      },
      {
        path: ROUTES.industries,
        element: <IndustriesPage />,
      },
      {
        path: ROUTES.clients,
        element: <ClientsPage />,
      },
      {
        path: ROUTES.gallery,
        element: <GalleryPage />,
      },
      {
        path: ROUTES.faqs,
        element: <FaqsPage />,
      },
      {
        path: ROUTES.contact,
        element: <ContactPage />,
      },
      {
        path: ROUTES.thankYou,
        element: <ThankYouPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
