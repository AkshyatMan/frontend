"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { BookOpen } from "lucide-react"
import { Button } from "./ui/button"

export default function Header({ activePage = "home" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Dhumbarahi Children Library</span>
        </div>
        <nav className="hidden md:flex md:gap-6">
          <Link
            to="/"
            className={`text-sm font-medium ${activePage === "home" ? "text-primary" : "hover:text-primary"}`}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={`text-sm font-medium ${activePage === "blog" ? "text-primary" : "hover:text-primary"}`}
          >
            Blog
          </Link>
          <Link to="#" className="text-sm font-medium hover:text-primary">
            Events
          </Link>
          <Link to="#" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link to="#" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>
        <Button size="sm" className="hidden md:flex">
          Visit Us
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>

        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <div className="container py-4 flex flex-col gap-4">
              <Link
                to="/"
                className={`text-sm font-medium ${activePage === "home" ? "text-primary" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/blog"
                className={`text-sm font-medium ${activePage === "blog" ? "text-primary" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link to="#" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Events
              </Link>
              <Link to="#" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="#" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <Button size="sm" className="w-full">
                Visit Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

