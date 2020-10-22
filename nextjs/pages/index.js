import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

const Index = props => (
  <Layout>
    <div>
      <h1>Welcome to BitzPrice</h1>
      {props.disclaimer}
    </div>
  </Layout>
);

Index.getStaticProps = async function () {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    props: {bpi: data},
  };
};

export default Index;
