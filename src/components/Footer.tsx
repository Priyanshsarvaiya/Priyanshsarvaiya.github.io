export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 text-center text-sm text-neutral-400">
      <div className="container-app">
        © {new Date().getFullYear()} Priyansh Sarvaiya 
      </div>
    </footer>
  );
}