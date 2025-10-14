import { NavLink, Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "../data/site";
import ThemeToggle from "./ThemeToggle";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `nav-link ${isActive ? "nav-link-active" : ""}`;

export default function Nav() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/60 backdrop-blur"
      role="banner"
    >
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <div className="container-app">
        <nav
          aria-label="Primary"
          className="flex items-center justify-between py-3"
        >
          <Link
            to="/"
            className="text-sm font-semibold tracking-wide hover:opacity-90"
            aria-label={`${site.name} – Home`}
          >
            {site.name}
          </Link>

          <div className="flex items-center gap-1">
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
            <NavLink to="/skills" className={linkClass}>
              Skills
            </NavLink>
            <NavLink to="/resume" className={linkClass}>
              Resume
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>

            {/* Socials */}
            {site.socials.github && (
              <a
                className="icon-btn"
                href={site.socials.github}
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
              </a>
            )}
            {site.socials.linkedin && (
              <a
                className="icon-btn"
                href={site.socials.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
              </a>
            )}
            {site.email && (
              <a
                className="icon-btn"
                href={`mailto:${site.email}`}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            )}

            {/* Theme toggle (we'll create this next) */}
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}