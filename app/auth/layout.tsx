export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-from),_var(--tw-gradient-to))] from-sky-300 to-blue-700">
      {children}
    </div>
  );
}
