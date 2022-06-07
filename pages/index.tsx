import type {NextPage} from "next";
import Link from "next/link";


const HomePage: NextPage = () => {
  return (
  <main>
    <p>Hello index</p>
    <Link href="/id">Ir a id</Link>
  </main>
  );
};

export default HomePage;
