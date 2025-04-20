import { Link } from "react-router-dom"
import { BookOpen } from "lucide-react"

export default function Footer() {
  return (
    <footer id="footer-section" className="border-t bg-light-orange/20">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-sky-blue" />
              <span className="text-xl font-bold text-sky-blue">Dhumbarahi Children Library</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              A place where imagination grows, knowledge flows, and friendships blossom. Opened on saturdays 9-11 AM
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-grass-green">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-grass-green">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-grass-green">
                  Blog
                </Link>
              </li>
              <li>
                {/* <Link to="#" className="text-muted-foreground hover:text-foreground">
                  Events
                </Link> */}
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-grass-green">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-sunny-yellow">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="https://www.instagram.com/dhumbarahi_library/" className="text-muted-foreground hover:text-sunny-yellow">
                  Instagram
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/people/Dhumbarahi-childrens-library/61565047871383/?_rdr" className="text-muted-foreground hover:text-sunny-yellow">
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="https://www.threads.net/@dhumbarahi_library?xmt=AQGzmbo4Y18JHRDVldosRiYq9cMkM1fqCz8co0MzWkqYNjM" className="text-muted-foreground hover:text-sunny-yellow">
                  Threads
                </Link>
              </li>
              {/* <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  Volunteer
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-bubblegum-pink">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Dhumbarahi, Kathmandu, Nepal</li>
              <li className="text-muted-foreground">Skandaswar@gmail.com</li>
              <li className="text-muted-foreground">+977 981-3602208</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dhumbarahi Children Library. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

