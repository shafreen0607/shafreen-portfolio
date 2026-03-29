export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()}{' '}
        <span className="font-medium bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(to right, #F13E93, #ff6eb4)' }}>
          Shafreen Syed Mohamed
        </span>
      </p>
      <p className="text-slate-700 text-xs mt-1">Built with React & Tailwind CSS</p>
    </footer>
  );
}
