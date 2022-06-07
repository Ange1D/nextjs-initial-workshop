import type {NextPage} from "next";
import Link from "next/link";
import {useState, useEffect} from "react";
import {Store} from "../types";


const HomePage: NextPage = () => {

  const [stores, setStores] = useState<Store[]>([]);

useEffect(() => {
  fetch("/api/stores")
    .then((res) => res.json())
    .then((stores: Store[]) => setStores(stores));
}, []);

if (!stores.length) {
  return <span>cargando...</span>;
}


  return (
  <main>
    <p>Hello index</p>
    <Link href="/id">Ir a id</Link>
  </main>
  );
};

export default HomePage;
