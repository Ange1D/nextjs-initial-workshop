import type {NextPage} from "next";
import { useRouter } from "next/router";

const StorePage: NextPage = () => {
  const router = useRouter();
  return (
      <main>
          <p>Hello id</p>
          <a role="button" onClick={()=>router.push("/")}>
              Ir a /
          </a>
      </main>
  );
};

export default StorePage;