import { ArrowRight } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="mt-12 px-4">
      <div className="flex justify-center">
        <div
          className="relative max-w-md w-full bg-white/20 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-xl border border-white/10
                     transition-all duration-500 hover:scale-105 hover:shadow-2xl group overflow-hidden"
        >
          {/* Gradient Border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r from-green-400 via-lime-400 to-emerald-500 pointer-events-none transition" />

          <h2 className="text-2xl md:text-3xl font-bold text-[#536451] text-center mb-4">
            Dizayningizni bugun bosib chiqaring
          </h2>

          <p className="text-gray-600 text-base text-center mb-6">
            WayPrint bilan yaratish, bosib chiqarish va yetkazish bir joyda.
          </p>

          <div className="flex justify-center">
            <button className="px-4 py-2 bg-gradient-to-r from-[#88a984] to-[#6f9272] text-white font-medium rounded-lg shadow-md
                               hover:from-[#6f9272] hover:to-[#88a984] transition flex items-center gap-2 text-sm">
              Boshlash <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
