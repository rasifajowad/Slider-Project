import { list } from "./data";
import Carousel from "./Carousel";
import AlternativeCarousel from "./AlternativeCarousel";

const App = () => {
  return (
    <main>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        Carousel (Own Implementation)
      </h1>
      <Carousel list={list} />
      <h1 style={{ textAlign: "center" }}>Carousel (React-Slider)</h1>
      <AlternativeCarousel list={list} />
    </main>
  );
};
export default App;
