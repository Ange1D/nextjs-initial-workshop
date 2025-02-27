import {NextResponse} from "next/server";

import api from "../../api";

export default async function middleware() {
  const hot = await api.hot();

  return NextResponse.rewrite(`http://localhost:3000/${hot.id}`);
}
