import "./App.css";
import JsxParser from "react-jsx-parser";

const products = [
  { name: "product1", price: 20.99 },
  { name: "product2", price: 15.99 },
];

const ProductsProvider = (props: any) => {
  return props.render(props.products);
};

function App() {
  return (
    <JsxParser
      jsx={
        "<ProductsProvider products={products} render={(products) => products.map((product) => <div>{product.name} - {product.price}</div>)}></ProductsProvider>"
      }
      bindings={{ products: products }}
      components={{ ProductsProvider }}
    ></JsxParser>
  );
}

export default App;
