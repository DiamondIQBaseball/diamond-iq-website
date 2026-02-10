import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 relative">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/logo.png"
          alt="Diamond IQ - Training & Skills App"
          width={400}
          height={400}
          priority
          className="w-64 md:w-80 lg:w-96 h-auto"
        />
      </div>

      {/* Tagline */}
      <p className="text-gray-400 text-lg md:text-xl text-center max-w-md mb-12">
        Train smarter. Track progress.
      </p>

      {/* Coming Soon Badge */}
      <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
        Coming Soon
      </span>

      {/* Footer */}
      <footer className="absolute bottom-6 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Diamond IQ Baseball
      </footer>
    </main>
  );
}
