"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-primary glow">RuslanGavrilov</span>
          <span className="text-xl font-bold text-secondary">.Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#about"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#education"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Education
          </Link>
          <Link
            href="#contact"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="https://github.com/RuslanG4" target="_blank" aria-label="GitHub">
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/ruslan-gavrilov-778233240/" target="_blank" aria-label="LinkedIn">
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="mailto:contact@example.com" aria-label="Email">
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <Mail className="h-5 w-5" />
            </Button>
          </Link>
          <Button className="ml-3 bg-primary hover:bg-primary/90">Resume</Button>
        </div>

        {/* Mobile Menu Button */}
        <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40 md:hidden">
            <DropdownMenuItem asChild>
              <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
                Projects
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#skills" onClick={() => setIsMobileMenuOpen(false)}>
                Skills
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#education" onClick={() => setIsMobileMenuOpen(false)}>
                Education
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button className="w-full mt-2">Resume</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
