import * as React from "react";
import News from "./News";

export default function Home({ news }: any) {
  return (
    <div>
      <News news={news} />
    </div>
  );
}
