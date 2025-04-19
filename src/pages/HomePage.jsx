import { ArrowRight, BookOpen, Calendar, MapPin, MessageSquare } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-background" />
          <div className="relative h-[500px] w-full overflow-hidden">
            <img
              src="/Images/HomePage1.png" 
              alt="Children playing outside under a big tree with swings"
              className="object-cover w-full h-full object-[60%_75%]"
            />
          </div>
          <div className="container relative z-20 -mt-32 flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to Dhumbarahi Children Library
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
              A place where imagination grows, knowledge flows, and friendships blossom under our big tree.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg">
                Explore Our Books
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Join Our Community
              </Button>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Our Vision</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Dhumbarahi Children's Library is a community-driven initiative dedicated to bridging the educational gap between government and private school students.
            By providing free access to books, digital learning materials, and interactive programs, the library empowers children from underprivileged backgrounds with quality educational resources.
            It fosters a love for reading, creativity, and critical thinking through engaging workshops and mentorship programs. 
            By creating an inclusive learning space, the library plays a vital role in ensuring that children from government schools receive 
            the support they need to compete on an equal footing with their peers in private institutions.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
          <Card className="flex flex-col items-center text-center">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary/10 p-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Reading & Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our diverse collection of books caters to all ages and interests, fostering a love for reading and
                  lifelong learning.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary/10 p-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Activities & Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From storytelling sessions to creative workshops, we organize regular events to engage young minds.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary/10 p-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Community & Friendship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We create spaces for children to connect, collaborate, and build meaningful friendships in a safe
                  environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="bg-muted/50 py-12 md:py-24">
          <div className="container">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Our Big Tree</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                The heart of our library is the magnificent tree in our garden, where children gather to read, play, and
                swing in the fresh air.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <img
                  src="https://placehold.co/600x800"
                  alt="The big tree with swings"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">A Place of Wonder</h3>
                <p className="text-muted-foreground">
                  Our beloved tree has witnessed countless stories, laughter, and friendships. Its branches provide
                  shade for readers, its trunk supports our swings, and its roots remind us of our connection to nature
                  and community.
                </p>
                <p className="text-muted-foreground">
                  Children are encouraged to spend time outdoors, balancing screen time with green time, fostering both
                  physical health and mental wellbeing.
                </p>
                <Button className="w-fit">
                  Join Our Outdoor Activities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Latest Blog Posts</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Stay updated with our library activities, book recommendations, and children's stories.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Summer Reading Challenge 2023",
                description: "Join our exciting summer reading program with prizes and adventures.",
                image: "https://placehold.co/600x400",
                date: "June 15, 2023",
              },
              {
                title: "New Books in Our Collection",
                description: "Explore the latest additions to our growing library of children's literature.",
                image: "https://placehold.co/600x400",
                date: "May 28, 2023",
              },
              {
                title: "Tree Planting Day Success",
                description: "How our community came together to plant new trees in our garden.",
                image: "https://placehold.co/600x400",
                date: "April 22, 2023",
              },
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover w-full h-full" />
                </div>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.description}</p>
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
          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg">
              View All Blog Posts
            </Button>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="container py-12 md:py-24">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Visit Us Today</h2>
                <p className="text-primary-foreground/90">
                  We welcome children of all ages to explore our library, join our activities, and become part of our
                  growing community.
                </p>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Dhumbarahi, Kathmandu, Nepal</span>
                </div>
                <Button variant="secondary" className="w-fit">
                  Get Directions
                </Button>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-xl md:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.7396289799854!2d85.34264049999999!3d27.725324299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1968e639ffe1%3A0x189db1ad8f08f27c!2sDhumbarahi%20Secondary%20School%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1741529034326!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Dhumbarahi Children Library Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

