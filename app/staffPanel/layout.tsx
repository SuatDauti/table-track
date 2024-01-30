import StaffNavbar from "../components/staffPanel/staffNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <StaffNavbar />
      {children}
    </div>
  );
}
