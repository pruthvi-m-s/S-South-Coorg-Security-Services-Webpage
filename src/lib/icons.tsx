// ============================================================
// SSCSS — Lucide Icon Mapper
// Maps string icon names from the content layer to Lucide
// components. Keeps the content layer framework-agnostic.
// ============================================================

import {
  Calendar,
  ShieldCheck,
  Building2,
  FileCheck,
  Users,
  HeartHandshake,
  Shield,
  Home,
  Sparkles,
  UserCheck,
  Wrench,
  UserPlus,
  SearchCheck,
  Eye,
  Scale,
  Briefcase,
  Factory,
  Ham,
  Medal,
  CalendarCheck,
  Search,
  ClipboardCheck,
  Layers,
  Warehouse,
  Monitor,
  Hospital,
  GraduationCap,
  Hotel,
  Store,
  Trees,
  HardHat,
  Landmark,
  Globe,
  MapPin,
  Clock,
  Zap,
  Award,
  Phone,
  Image,
  Video,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Maximize2,
  Target,
  Mail,
  HelpCircle,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

/**
 * Registry mapping content-layer icon names to Lucide components.
 * Extend this as new icons are needed across the project.
 */
const iconRegistry: Record<string, LucideIcon> = {
  Calendar,
  ShieldCheck,
  Building2,
  FileCheck,
  Users,
  HeartHandshake,
  Shield,
  Home,
  Sparkles,
  UserCheck,
  Wrench,
  UserPlus,
  SearchCheck,
  Eye,
  Scale,
  Briefcase,
  Factory,
  Ham,
  Medal,
  CalendarCheck,
  Search,
  ClipboardCheck,
  Layers,
  Warehouse,
  Monitor,
  Hospital,
  GraduationCap,
  Hotel,
  Store,
  Trees,
  HardHat,
  Landmark,
  Globe,
  MapPin,
  Clock,
  Zap,
  Award,
  Phone,
  Image,
  Video,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Maximize2,
  Target,
  Mail,
  HelpCircle,
  MessageCircle,
};

/**
 * Resolve a Lucide icon component from a string name.
 * Falls back to ShieldCheck if the icon is not found.
 */
export function getIcon(name?: string): LucideIcon {
  if (!name) return ShieldCheck;
  return iconRegistry[name] ?? ShieldCheck;
}
