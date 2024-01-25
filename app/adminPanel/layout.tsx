import AdminNavbar from "../components/adminPanel/adminNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <AdminNavbar />
      {children}
    </div>
  );
}
