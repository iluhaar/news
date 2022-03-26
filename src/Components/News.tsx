import * as React from "react";
import Article from "./Article";

export default function News({ news }: any) {
  return (
    <>
      <div>
        <Article news={news} />
      </div>
    </>
  );
}
