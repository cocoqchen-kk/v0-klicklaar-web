import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function OverOnsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Placeholder section - ready for Figma design import */}
        <section className="bg-[#EEF0FD] py-16 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Over ons</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Ontdek wie wij zijn en waar we voor staan.
            </p>
          </div>
        </section>

        {/* Add your Figma sections here */}
      </main>

      <Footer />
    </div>
  )
}
