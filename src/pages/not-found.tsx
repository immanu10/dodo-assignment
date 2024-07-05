import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex h-screen items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="flex flex-col items-center text-center text-black-12">
        <p className="text-base font-semibold">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <Link
          to="/"
          className="mt-10 text-foreground flex items-center justify-center py-[6px] px-4 rounded-[40px] bg-muted text-sm font-medium cursor-pointer hover:bg-blue-primary text-black-50 hover:text-black-100 transition-all"
        >
          <span>Back to home</span>
        </Link>
      </div>
    </main>
  );
}
