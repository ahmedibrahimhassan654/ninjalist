import React, { useState } from "react";

import styles from "../../styles/ninjas.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { ninjas: data },
  };
};

const ninjas = ({ ninjas }) => {
  return (
    <>
      <h1>All Ninjas</h1>
      {/* {JSON.stringify(ninjas)} */}
      {ninjas.map((ninja) => (
        <>
          <Link key={ninja.id} href={`ninjas/${ninja.id}`}>
            <a className={styles.single}>
              <h3> {ninja.name}</h3>
            </a>
          </Link>
        </>
      ))}
    </>
  );
};

export default ninjas;
