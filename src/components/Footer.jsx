export default function Footer() {
  const year = new Date().getFullYear();
  return <div className="text-center p-8 w-fill">&copy; {year} Atlas School</div>;
}
