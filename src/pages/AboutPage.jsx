import Header from "../components/Header"
import Footer from "../components/Footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-light-orange/20">
      <Header activePage="about" />
      <main className="flex-1">
        {/* Content will be added here */}
        <div className="container py-12 md:py-24">
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-center sm:text-5xl md:text-6xl text-sky-blue">About Us</h1>
          <section className="mb-12 md:mb-16 p-6 rounded-lg">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-grass-green">Our Vision</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Dhumbarahi Children's Library is a community-driven initiative dedicated to bridging the educational gap between government and private school students.
              By providing free access to books, digital learning materials, and interactive programs, the library empowers children from underprivileged backgrounds with quality educational resources.
              It fosters a love for reading, creativity, and critical thinking through engaging workshops and mentorship programs. 
              By creating an inclusive learning space, the library plays a vital role in ensuring that children from government schools receive 
              the support they need to compete on an equal footing with their peers in private institutions.
              </p>
            </div>
          </section>

            <div className="container mx-auto p-6 rounded-lg mb-12 md:mb-16">
              <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-sunny-yellow">Our Big Tree</h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                  Located within a government school, our library is dedicated to empowering students with the resources and skills needed to stand alongside their peers from private institutions.
                </p>
              </div>
              <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 items-center">
                <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl border-4 border-grass-green">
                  <img
                    src="/Images/dhumbarai_school_photo.jpg"
                    alt="The big tree with swings"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold text-bubblegum-pink">A Place Of Growth And Dreams</h3>
                  <p className="text-muted-foreground">
                    The place has witnessed countless stories, laughter, and friendships. Its provide
                    education, entertainment and a feeling of joy to the people of the comunity not just letting them develop but help them grow into their best self
                  </p>
                  <p className="text-muted-foreground">
                    Children are encouraged to spend time outdoors, balancing screen time with green time, fostering both
                    physical health and mental wellbeing.
                  </p>
                </div>
              </div>
            </div>

          <section className="mt-12 md:mt-16 p-6 rounded-lg">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-sky-blue">Visit Us</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                We are located at Dhumbarahi, Kathmandu, Nepal (inside the government school premises).
              </p>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                You can visit us on <span className="font-semibold text-grass-green">Saturdays from 9:00 AM to 11:00 AM</span>.
              </p>
            </div>
          </section>

          {/* Google Map Embed */}
          <section className="mt-12 md:mt-16">
            <div className="mx-auto max-w-[58rem]">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-center mb-8 text-sunny-yellow">Find Us Here</h2>
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl border-4 border-sky-blue">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d882.9377628235645!2d85.34050814383313!3d27.724971721900797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1968e639ffe1%3A0x189db1ad8f08f27c!2sDhumbarahi%20Secondary%20School%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1745145492727!5m2!1sen!2snp" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dhumbarahi Location Map"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}