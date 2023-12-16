import Link from "next/link";

function AdminDashboardHeader() {
  return (
    <header>
      <div className="flex space-x-4">
        <Link href="/admin/dashboard/projectList">Project</Link>
        <Link href="/admin/dashboard/welcomevideo" className="text-red-500">
          Welcome Video
        </Link>
        <Link href="/" className="text-yellow-500">
          Courses
        </Link>
      </div>
    </header>
  );
}

export default AdminDashboardHeader;
