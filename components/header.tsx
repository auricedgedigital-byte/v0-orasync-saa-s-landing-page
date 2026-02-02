"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-serif text-2xl font-bold tracking-tight text-foreground">
          Auric Edge
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <a
            href="/#how-it-works"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            How It Works
          </a>
          <a
            href="/audit"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Free Audit
          </a>
          <a
            href="/book-call"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Book a Call
          </a>
        </div>

        <a
          href="/audit"
          className="hidden md:inline-flex px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-opacity-90 transition-opacity duration-300"
        >
          Get Free Audit
        </a>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
          <div className="flex flex-col px-6 py-6 gap-4">
            <a
              href="/#how-it-works"
              onClick={() => setIsOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </a>
            <a
              href="/audit"
              onClick={() => setIsOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Free Audit
            </a>
            <a
              href="/book-call"
              onClick={() => setIsOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Book a Call
            </a>
            <a
              href="/audit"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md text-center"
            >
              Get Free Audit
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
