export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">Auric Edge Digital</h3>
            <p className="text-sm text-muted-foreground">Systems & AI consulting for operations-heavy businesses.</p>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Industries Served</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Professional Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Hospitality
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Multi-Location
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/audit" className="hover:text-foreground transition-colors">
                  Free Audit
                </a>
              </li>
              <li>
                <a href="/book-call" className="hover:text-foreground transition-colors">
                  Book a Call
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="mailto:contact@auricedge.com" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 Auric Edge Digital. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Powered by systems thinking.</p>
        </div>
      </div>
    </footer>
  )
}
