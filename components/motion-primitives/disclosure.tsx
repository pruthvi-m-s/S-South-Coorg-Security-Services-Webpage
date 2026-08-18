'use client';
import * as React from 'react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import type { Transition, Variant, Variants } from 'motion/react';
import { createContext, useContext, useState, useId } from 'react';
import { cn } from '@/lib/utils';

export type DisclosureContextType = {
  open: boolean;
  toggle: () => void;
  variants?: { expanded: Variant; collapsed: Variant };
};

const DisclosureContext = createContext<DisclosureContextType | undefined>(
  undefined
);

export type DisclosureProviderProps = {
  children: React.ReactNode;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  variants?: { expanded: Variant; collapsed: Variant };
};

function DisclosureProvider({
  children,
  open: openProp,
  onOpenChange,
  variants,
}: DisclosureProviderProps) {
  const [internalOpenValue, setInternalOpenValue] = useState<boolean>(openProp);
  const [lastOpenProp, setLastOpenProp] = useState<boolean>(openProp);

  // Derived-state pattern: sync internal state when the controlled prop changes.
  if (lastOpenProp !== openProp) {
    setLastOpenProp(openProp);
    setInternalOpenValue(openProp);
  }

  const toggle = () => {
    const newOpen = !internalOpenValue;
    setInternalOpenValue(newOpen);
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  };

  return (
    <DisclosureContext.Provider
      value={{
        open: internalOpenValue,
        toggle,
        variants,
      }}
    >
      {children}
    </DisclosureContext.Provider>
  );
}

function useDisclosure() {
  const context = useContext(DisclosureContext);
  if (!context) {
    throw new Error('useDisclosure must be used within a DisclosureProvider');
  }
  return context;
}

export type DisclosureProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  variants?: { expanded: Variant; collapsed: Variant };
  transition?: Transition;
};

export function Disclosure({
  open: openProp = false,
  onOpenChange,
  children,
  className,
  transition,
  variants,
}: DisclosureProps) {
  return (
    <MotionConfig transition={transition}>
      <div className={className}>
        <DisclosureProvider
          open={openProp}
          onOpenChange={onOpenChange}
          variants={variants}
        >
          {React.Children.toArray(children)[0]}
          {React.Children.toArray(children)[1]}
        </DisclosureProvider>
      </div>
    </MotionConfig>
  );
}

export function DisclosureTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { toggle, open } = useDisclosure();

  return (
    <>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        const childElement = child as React.ReactElement<Record<string, unknown>>;
        const childProps = childElement.props ?? {};
        const childClassName =
          typeof childProps.className === 'string' ? childProps.className : '';

return React.cloneElement(
          childElement,
          {
            onClick: toggle,
            role: 'button',
            'aria-expanded': open,
            tabIndex: 0,
            onKeyDown: (event: { key: string; preventDefault: () => void }) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggle();
              }
            },
            className: cn(className, childClassName),
            ...childProps,
          },
          childElement.props?.children as React.ReactNode,
        );
      })}
    </>
  );
}

export function DisclosureContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { open, variants } = useDisclosure();
  const uniqueId = useId();

  // Default height/opacity transition. Custom variants are optional and, when
  // provided, are merged over the defaults. The merge is done via a loose
  // object and cast to Variants to satisfy motion's strict typing while
  // keeping the runtime behaviour identical to the source primitive.
  const baseExpanded = { height: 'auto', opacity: 1 };
  const baseCollapsed = { height: 0, opacity: 0 };

  const expandVariant = variants?.expanded;
  const collapseVariant = variants?.collapsed;

  const expandObj =
    expandVariant && typeof expandVariant === 'object' && !Array.isArray(expandVariant)
      ? (expandVariant as Record<string, unknown>)
      : null;
  const collapseObj =
    collapseVariant && typeof collapseVariant === 'object' && !Array.isArray(collapseVariant)
      ? (collapseVariant as Record<string, unknown>)
      : null;

  const combinedVariants: Variants = {
    expanded: {
      ...baseExpanded,
      ...(expandObj ?? {}),
    } as Variant,
    collapsed: {
      ...baseCollapsed,
      ...(collapseObj ?? {}),
    } as Variant,
  };

  return (
    <div className={cn('overflow-hidden', className)}>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={uniqueId}
            initial='collapsed'
            animate='expanded'
            exit='collapsed'
            variants={combinedVariants}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default {
  Disclosure,
  DisclosureProvider,
  DisclosureTrigger,
  DisclosureContent,
};
