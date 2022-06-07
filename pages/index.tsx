import type {NextPage} from "next";
import Link from "next/link";
import {useState, useEffect} from "react";
import StoreCard from "../components/StoreCard";
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
    {stores.map((store)=>(
      <Link key={stores.id} passHref href={'/{store.id}'}>
        <a>
        <StoreCard  store={store}/>
        </a>
      </Link>
    ))}
  </main>
  );
};

export default HomePage;
