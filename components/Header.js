import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <h2>Ubay Blog</h2>
        </Link>
      </div>
    </header>
  );
};
