"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
const links = [["Experience", "/#experience"], ["Skills", "/#skills"], ["About", "/#about"], ["Contact", "/#contact"]];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeMenu = () => { document.body.style.overflow = ""; setOpen(false); };
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !open) return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", close); };
  }, [open]);
  return <header className="site-header"><nav className="nav-shell" aria-label="Primary navigation">
    <Link href="/" className="brand" aria-label="Mohamed Chokor, home"><span>Chokor</span><span className="brand-accent">.Portfolio()</span></Link>
    <div className="desktop-nav">{links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}<Link href="/resume" className="nav-resume">Resume</Link></div>
    <button ref={buttonRef} className="menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <CloseIcon /> : <MenuIcon />}</button>
    <div ref={menuRef} id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-hidden={!open}>{links.map(([label, href], index) => <Link key={label} href={href} tabIndex={open ? 0 : -1} onClick={closeMenu}><span>0{index + 1}</span>{label}</Link>)}<Link href="/resume" tabIndex={open ? 0 : -1} onClick={closeMenu}><span>05</span>Resume</Link></div>
  </nav></header>;
}
