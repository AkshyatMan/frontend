import Header from "../components/Header"
import Footer from "../components/Footer"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-light-orange/20">
      <Header activePage="blog" />
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <h1 className="mb-6 text-3xl font-bold">Blog</h1>
          <div className="space-y-8">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm flex flex-col md:flex-row gap-4">
              <img src="/Images/Blog/1.jpg" alt="Weekly Reading Habits Thumbnail" className="w-full md:w-1/6 h-32 object-cover rounded-md mb-4 md:mb-0" />
              <div class="flex-1">
                <h2 className="mb-2 text-xl font-semibold">Weekly Reading Habits</h2>
              <p className="mb-4 text-muted-foreground">
              Encouraging kids to cultivate reading habits by engaging them in extra activities at DCL
              </p>
              <a
                href="https://www.instagram.com/dhumbarahi_library/p/DHhZ2mxB_Gs/?img_index=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                View on Instagram
              </a>
              </div>
            </div>
 <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm flex flex-col md:flex-row gap-4">
              <img src="/Images/Blog/2.jpg" alt="Weekly Reading Habits Thumbnail" className="w-full md:w-1/6 h-32 object-cover rounded-md mb-4 md:mb-0" />
              <div class="flex-1">
                <h2 className="mb-2 text-xl font-semibold">Books Available</h2>
              <p className="mb-4 text-muted-foreground">
              The Books available at DCL are all provided by the students and other children who are willing to donate their books.
              </p>
              <a
                href="https://www.instagram.com/p/DHhZQoZheFZ/?img_index=3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                View on Instagram
              </a>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm flex flex-col md:flex-row gap-4">
              <img src="/Images/Blog/3.jpg" alt="Weekly Reading Habits Thumbnail" className="w-full md:w-1/6 h-32 object-cover rounded-md mb-4 md:mb-0" />
              <div class="flex-1">
                <h2 className="mb-2 text-xl font-semibold">Activities like Dancing and Singing </h2>
              <p className="mb-4 text-muted-foreground">
              At DCL we not only provide books but also provide activities like Dancing and Singing.
              </p>
              <a
                href="https://www.instagram.com/p/DHhaqELh5Ib/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                View on Instagram
              </a>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm flex flex-col md:flex-row gap-4">
              <img src="/Images/Blog/4.jpg" alt="Weekly Reading Habits Thumbnail" className="w-full md:w-1/6 h-32 object-cover rounded-md mb-4 md:mb-0" />
              <div class="flex-1">
                <h2 className="mb-2 text-xl font-semibold">Kids Talking about DCL and it's imapact on kids from government school</h2>
              <p className="mb-4 text-muted-foreground">
                At DCL it's not only providing books but we help the kids grow into their best self
              </p>
              <a
                href="https://www.instagram.com/dhumbarahi_library/reel/DHNXzzoId-J/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                View on Instagram
              </a>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm flex flex-col md:flex-row gap-4">
              <img src="/Images/Blog/5.jpg" alt="Weekly Reading Habits Thumbnail" className="w-full md:w-1/6 h-32 object-cover rounded-md mb-4 md:mb-0" />
              <div class="flex-1">
                <h2 className="mb-2 text-xl font-semibold">Weakly Brief By our Co-Founder </h2>
              <p className="mb-4 text-muted-foreground">
              Dhumbarahi Children's Library Weakly Brief By our Co-Founder
              </p>
              <a
                href="https://www.instagram.com/p/DHNXbcPI7Bw/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                View on Instagram
              </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

