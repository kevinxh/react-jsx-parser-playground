import "./App.css";
import JsxParser from "react-jsx-parser";

const products = [
  { name: "product1", price: 20.99 },
  { name: "product2", price: 15.99 },
];

const Box = (props: any) => {
  return (
    <div>
      This is a custom Box component
      <div>{props.children}</div>
    </div>
  );
};

const ProductsProvider = (props: any) => {
  return props.children;
};

function App() {
  return (
    <JsxParser
      jsx={
        "<div><ProductsProvider>{products.map((product) => (<Box>{product.name}</Box>))}</ProductsProvider></div>"
      }
      bindings={{ products: products }}
      components={{ ProductsProvider, Box }}
    ></JsxParser>
  );
}

export default App;
