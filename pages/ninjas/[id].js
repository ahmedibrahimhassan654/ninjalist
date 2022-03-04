export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  // map data to an array of path objects with params (id)
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <>
      <div>
        <h4>Id {ninja.id}</h4>
        <h1>name: {ninja.name}</h1>
        <p>Email: {ninja.email}</p>
        <p>WebSite: {ninja.website}</p>
        <p>city: {ninja.address.city}</p>
      </div>
    </>
  );
};

export default Details;
