import type {GetServerSideProps, NextPage} from "next";
import Link from "next/link";
import api from "../api";
import StoreCard from "../components/StoreCard";
import {Store} from "../types";

interface Props{
  stores: Store[]
}

const HomePage: NextPage<Props> = ({stores}) => {

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

export const getServerSideProps: GetServerSideProps = async () => {
  const stores = await api.list();

  return {
    props: { stores },
  };
};


export default HomePage;
