// ============================================================
// SSCSS — App Root Component
// Minimal wrapper. Routing is handled by routes.tsx via
// createBrowserRouter in main.tsx.
// ============================================================

import { Outlet } from "react-router-dom";

export default function App() {
  return <Outlet />;
}
