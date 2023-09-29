import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center">
      <div className="font-bold text-6xl">404</div>
      <div className="mt-4 text-lg">Oh no! This page doesn't exist.</div>
      <div className="text-lg">
        Let's go{" "}
        <Link href="/" className="link">
          back home
        </Link>
        .
      </div>
    </div>
  );
}

NotFound.disableLayout = true;
