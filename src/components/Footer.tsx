export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl font-bold text-green-600">EcoMetrics</div>
        <div className="flex space-x-8 text-gray-500 text-base">
          <a href="/privacy" className="hover:text-green-600">Privacy Policy</a>
          <a href="/terms" className="hover:text-green-600">Terms of Service</a>
          <a href="mailto:contact@ecometrics.com" className="hover:text-green-600">Contact</a>
        </div>
        <div className="text-sm text-gray-400">&copy; {new Date().getFullYear()} EcoMetrics. All rights reserved.</div>
      </div>
    </footer>
  );
} 