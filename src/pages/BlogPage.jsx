import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight, Calendar, Clock, Search } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Separator } from "../components/ui/separator"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function BlogPage() {
  // Sample blog post data
  const featuredPost = {
    title: "The Magic of Outdoor Reading: Why We Love Our Big Tree",
    description:
      "Discover why reading under our magnificent tree has become a beloved tradition at Dhumbarahi Children Library.",
    image: "https://placehold.co/1200x600",
    date: "July 10, 2023",
    readTime: "5 min read",
    author: "Aarav Sharma",
    authorImage: "https://placehold.co/100x100",
  }

  const blogPosts = [
    {
      title: "Summer Reading Challenge 2023",
      description: "Join our exciting summer reading program with prizes and adventures.",
      image: "https://placehold.co/600x400",
      date: "June 15, 2023",
      readTime: "4 min read",
      category: "Events",
    },
    {
      title: "New Books in Our Collection",
      description: "Explore the latest additions to our growing library of children's literature.",
      image: "https://placehold.co/600x400",
      date: "May 28, 2023",
      readTime: "3 min read",
      category: "Books",
    },
    {
      title: "Tree Planting Day Success",
      description: "How our community came together to plant new trees in our garden.",
      image: "https://placehold.co/600x400",
      date: "April 22, 2023",
      readTime: "6 min read",
      category: "Community",
    },
    {
      title: "The Importance of Storytelling for Children",
      description: "Why narrative and storytelling are crucial for child development and learning.",
      image: "https://placehold.co/600x400",
      date: "April 10, 2023",
      readTime: "7 min read",
      category: "Education",
    },
    {
      title: "Meet Our Volunteer Reading Buddies",
      description: "Learn about our program pairing older students with younger readers.",
      image: "https://placehold.co/600x400",
      date: "March 15, 2023",
      readTime: "4 min read",
      category: "Volunteers",
    },
    {
      title: "Creating a Reading-Friendly Home Environment",
      description: "Tips for parents to encourage reading habits at home.",
      image: "https://placehold.co/600x400",
      date: "February 28, 2023",
      readTime: "5 min read",
      category: "Parenting",
    },
  ]

  const categories = ["All", "Books", "Events", "Education", "Community", "Parenting", "Volunteers", "Activities"]

  return (
    <div className="flex min-h-screen flex-col">
      <Header activePage="blog" />
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Blog</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Stories, updates, and insights from Dhumbarahi Children Library
          </p>

          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-8" />
            </div>
          </div>

          <div className="mt-12">
            <Card className="overflow-hidden">
              <div className="relative h-64 w-full md:h-96">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredPost.date}</span>
                  <Separator orientation="vertical" className="h-4" />
                  <Clock className="h-4 w-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <CardTitle className="text-2xl md:text-3xl">{featuredPost.title}</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full">
                    <img
                      src={featuredPost.authorImage || "/placeholder.svg"}
                      alt={featuredPost.author}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="text-sm font-medium">{featuredPost.author}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{featuredPost.description}</p>
              </CardContent>
              <CardFooter>
                <Button>
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover w-full h-full" />
                  <div className="absolute right-2 top-2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    {post.category}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                    <Separator orientation="vertical" className="h-3" />
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-sm text-muted-foreground">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-start p-0 text-primary">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-2">
            <Button variant="outline" size="icon" disabled>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <span>...</span>
            <Button variant="outline" size="sm">
              8
            </Button>
            <Button variant="outline" size="icon">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

