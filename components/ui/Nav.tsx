"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { clsx } from "@/lib/clsx";
import { NAV_ITEMS, type NavItem } from "@/lib/nav-data";
import { Container } from "./Container";
import { SierraLogo } from "./SierraLogo";

// ── Mega-menu content (rendered inside header, not inside each button) ────────

function MegaMenuContent({ item }: { item: NavItem }) {
  if (!item.sections) return null;
  const cols = item.sections.length;
  return (
    <div
      className={clsx(
        "grid gap-x-10 gap-y-6 py-7",
        cols === 1 && "grid-cols-1 max-w-[14rem]",
        cols === 2 && "grid-cols-2 max-w-sm",
        cols === 3 && "grid-cols-3",
        cols >= 4 && "grid-cols-4",
      )}
    >
      {item.sections.map((section) => (
        <div key={section.title} className="flex flex-col gap-0.5">
          {section.title && (
            <p className="text-muted mb-2 text-[10px] font-semibold uppercase tracking-[0.14em]">
              {section.title}
            </p>
          )}
          {section.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink-2 hover:text-primary-700 hover:bg-primary-50 -mx-2 rounded-lg px-2 py-1.5 text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

// ── Desktop nav button (no dropdown inline — panel lives in <header>) ─────────

function NavItemDesktop({
  item,
  active,
  onEnter,
}: {
  item: NavItem;
  active: boolean;
  onEnter: () => void;
}) {
  if (!item.sections) {
    return (
      <Link
        href={item.href!}
        className="text-ink-2 hover:text-ink flex items-center px-3 py-1.5 text-sm font-medium transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <button
      className={clsx(
        "flex items-center gap-0.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
        active ? "text-primary-700 bg-primary-50" : "text-ink-2 hover:text-ink hover:bg-slate-50",
      )}
      onMouseEnter={onEnter}
      aria-expanded={active}
      aria-haspopup="true"
    >
      {item.label}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className={clsx("transition-transform duration-150", active ? "rotate-180" : "")}
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
}

// ── Mobile drawer ─────────────────────────────────────────────────────────────

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex flex-col lg:hidden">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div className="relative mt-[60px] flex h-full flex-col overflow-y-auto bg-white shadow-2xl">
        <nav className="flex flex-col gap-0.5 p-4">
          {NAV_ITEMS.map((item) => {
            if (!item.sections) {
              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={onClose}
                  className="text-ink hover:bg-slate-50 rounded-lg px-4 py-3 text-base font-medium"
                >
                  {item.label}
                </Link>
              );
            }
            const isOpen = expanded === item.label;
            return (
              <div key={item.label}>
                <button
                  onClick={() => setExpanded(isOpen ? null : item.label)}
                  className="text-ink hover:bg-slate-50 flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium"
                  aria-expanded={isOpen}
                >
                  {item.label}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={clsx("transition-transform", isOpen ? "rotate-180" : "")}
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="mb-1 ml-4 flex flex-col gap-4 border-l border-slate-100 pl-4 pt-2">
                    {item.sections.map((section) => (
                      <div key={section.title}>
                        {section.title && (
                          <p className="text-muted mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em]">
                            {section.title}
                          </p>
                        )}
                        <ul className="flex flex-col gap-0.5">
                          {section.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={onClose}
                                className="text-ink-2 hover:text-primary-700 block rounded-md px-2 py-1.5 text-sm"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="border-line mt-auto flex flex-col gap-3 border-t p-4">
          <Link
            href="/rise-cockpit/request-access/"
            onClick={onClose}
            className="border-line text-ink hover:border-primary-400 flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors"
          >
            <span className="bg-primary-600 h-1.5 w-1.5 rounded-full" />
            Try the AI Cockpit
          </Link>
          <Link
            href="/contact/"
            onClick={onClose}
            className="bg-primary-700 hover:bg-primary-800 flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── Root Nav ──────────────────────────────────────────────────────────────────

export function Nav() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  // Close dropdowns on route change
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setActiveItem(null); setMobileOpen(false); }, [pathname]);

  function openMenu(label: string) {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setActiveItem(label);
  }

  function scheduleClose() {
    leaveTimer.current = setTimeout(() => setActiveItem(null), 180);
  }

  function cancelClose() {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
  }

  const activeNavItem = NAV_ITEMS.find((i) => i.label === activeItem && !!i.sections) ?? null;

  return (
    <>
      {/*
        The <header> is the positioning parent for the mega-menu panel.
        onMouseEnter/Leave here — not on individual items — so the mouse can
        travel freely from nav buttons into the dropdown without closing it.
      */}
      <header
        className="bg-white/90 border-slate-200/70 supports-[backdrop-filter]:bg-white/75 sticky top-0 z-40 border-b backdrop-blur-md"
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <Container size="xl">
          <div className="flex h-[60px] items-center gap-4">
            {/* Logo */}
            <Link href="/" aria-label="Sierra Digital — home" className="flex-shrink-0">
              <SierraLogo className="h-[26px] w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
              {NAV_ITEMS.map((item) => (
                <NavItemDesktop
                  key={item.label}
                  item={item}
                  active={activeItem === item.label}
                  onEnter={() => openMenu(item.label)}
                />
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="ml-auto hidden items-center gap-2 lg:flex">
              <Link
                href="/rise-cockpit/request-access/"
                className="border-slate-200 text-ink-2 hover:border-primary-400 hover:text-primary-700 flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors"
              >
                <span className="bg-primary-600 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                Try the AI Cockpit
              </Link>
              <Link
                href="/contact/"
                className="bg-primary-700 hover:bg-primary-800 rounded-full px-4 py-1.5 text-sm font-semibold text-white transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="text-ink-2 hover:text-ink hover:bg-slate-50 ml-auto rounded-lg p-2 transition-colors lg:hidden"
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </Container>

        {/*
          Mega-menu panel — absolute top-full left-0 right-0 so it spans the
          full viewport width and is NEVER clipped by the screen edge,
          regardless of which nav item triggered it.
        */}
        {activeNavItem && (
          <div className="absolute top-full left-0 right-0 border-b border-slate-200/80 bg-white shadow-lg">
            <Container size="xl">
              <MegaMenuContent item={activeNavItem} />
            </Container>
          </div>
        )}
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
