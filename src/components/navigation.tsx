"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
const links = [["Experience", "/#experience"], ["Skills", "/#skills"], ["About", "/#about"], ["Contact", "/#contact"]];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileFocusHrefRef = useRef<string | null>(null);
  const closeMenu = () => { mobileFocusHrefRef.current = null; document.body.style.overflow = ""; setOpen(false); };

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const menu = menuRef.current;
    const links = Array.from(menu?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
    document.body.style.overflow = "hidden";
    mobileFocusHrefRef.current = links[0]?.getAttribute("href") ?? null;
    const focusTimer = window.setTimeout(() => links[0]?.focus(), 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        mobileFocusHrefRef.current = null;
        setOpen(false);
        requestAnimationFrame(() => buttonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab" || links.length === 0) return;
      const first = links[0];
      const last = links[links.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    let focusFrame = 0;
    const resetMobileMenu = () => {
      if (!desktop.matches) return;
      const activeHref = mobileFocusHrefRef.current;
      document.body.style.overflow = "";
      setOpen(false);
      if (activeHref) {
        const desktopLink = Array.from(document.querySelectorAll<HTMLAnchorElement>(".desktop-nav a"))
          .find((link) => link.getAttribute("href") === activeHref);
        focusFrame = requestAnimationFrame(() => desktopLink?.focus());
      }
      mobileFocusHrefRef.current = null;
    };
    desktop.addEventListener("change", resetMobileMenu);
    window.addEventListener("resize", resetMobileMenu);
    const viewportObserver = new ResizeObserver(resetMobileMenu);
    viewportObserver.observe(document.documentElement);
    return () => {
      cancelAnimationFrame(focusFrame);
      desktop.removeEventListener("change", resetMobileMenu);
      window.removeEventListener("resize", resetMobileMenu);
      viewportObserver.disconnect();
    };
  }, []);

  return <header className="site-header"><nav className="nav-shell" aria-label="Primary navigation">
    <Link href="/" className="brand" aria-label="Mohamed Chokor, home"><span>Chokor</span><span className="brand-accent">.Portfolio()</span></Link>
    <div className="desktop-nav">{links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}<Link href="/resume" className="nav-resume">Resume</Link></div>
    <button ref={buttonRef} className="menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => { if (open) mobileFocusHrefRef.current = null; setOpen(!open); }}>{open ? <CloseIcon /> : <MenuIcon />}</button>
    <div ref={menuRef} id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-hidden={!open}>{links.map(([label, href], index) => <Link key={label} href={href} tabIndex={open ? 0 : -1} onFocus={() => { mobileFocusHrefRef.current = href; }} onClick={closeMenu}><span>0{index + 1}</span>{label}</Link>)}<Link href="/resume" tabIndex={open ? 0 : -1} onFocus={() => { mobileFocusHrefRef.current = "/resume"; }} onClick={closeMenu}><span>05</span>Resume</Link></div>
  </nav></header>;
}
