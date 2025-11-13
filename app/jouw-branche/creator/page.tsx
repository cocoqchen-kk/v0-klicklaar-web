import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function CreatorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <section className="py-16 md:py-24 px-4 bg-[#EEF0FD]">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Creative & Design</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Boekhouding voor creatievelingen en designers
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
