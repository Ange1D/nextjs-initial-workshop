import type {NextPage} from "next";
import { NextRouter,withRouter } from "next/router";

interface Props {
  router: NextRouter;
}

const HomePage: NextPage<Props> = ({router}) => {
  return (
    <main>
    <p>Hello index</p>
    <a role="button" onClick={() => router.push("/id")}>
    Ir a id
    </a>
  </main>
  );
};

export default withRouter(HomePage);
