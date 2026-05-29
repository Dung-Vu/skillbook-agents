import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound(): React.ReactElement {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold gradient-text mb-4">404</h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-8">
          Skill này chưa được thêm vào bộ sưu tập.
        </p>
        <Link href="/skills" className="btn-primary">
          <ArrowLeft size={18} />
          Back to Catalog
        </Link>
      </div>
    </div>
  );
}
