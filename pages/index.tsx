import React from "react";

import Link from "next/link";

interface Content {
  title: string;
}

export default ({ ...props }) => {
  const { content } = props;
  return (
    <div>
      <h1>{content.title}</h1>
      <Link href="/notes"> Go tdo notes</Link>
    </div>
  );
};

export function getStaticProps() {
  return {
    props: {
      content: {
        title: "This is my really nice app",
      },
    },
  };
}
