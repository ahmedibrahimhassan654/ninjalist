import Head from "next/head";
import Fotter from "../components/Fotter";
import Navbar from "../components/Navbar";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>
        ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum
        laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
        fuga praesentium optio, eaque rerum! Provident similique accusantium
        nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
        architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!
        Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum
        debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae
        fuga? Ipsa laudantium molestias eos sapiente officiis modi a{" "}
      </p>
      <p className={styles.text}>
        ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum
        laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
        fuga praesentium optio, eaque rerum! Provident similique accusantium
        nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
        architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!
        Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum
        debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae
        fuga? Ipsa laudantium molestias eos sapiente officiis modi a
      </p>
      <Link href="ninjas">
        <a className={styles.btn}> See Nenga Listing</a>
      </Link>
    </div>
  );
}
