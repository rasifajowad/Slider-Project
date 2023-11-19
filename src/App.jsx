import { list } from "./data";
import Carousel from "./Carousel";

const App = () => {
  return (
    <main>
      <Carousel list={list} />
    </main>
  );
};
export default App;
