import Link from "next/link";

const Home = props => (
  <div>
    <p>Welcome to SlickSporting</p>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
  </div>
);

export default Home;
