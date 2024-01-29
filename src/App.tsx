import "./App.css";
import JsxParser from "react-jsx-parser";

const products = [
  { name: "product1", price: 20.99 },
  { name: "product2", price: 15.99 },
];

const ProductsProvider = (props: any) => {
  return props.children;
};

function App() {
  return (
    <JsxParser
      jsx={
        "<div><ProductsProvider>{products.map((product) => (<h1>{product.name}</h1>))}</ProductsProvider></div>"
      }
      bindings={{ products: products }}
      components={{ ProductsProvider }}
    ></JsxParser>
  );
}

export default App;
