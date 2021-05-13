import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1> The Home Page </h1>
      <ul>
        <li>
          <Link href="https://github.com/kunalgoyat999">Portfolio</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
