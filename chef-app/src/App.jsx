import { Header } from "./components/Header";
import { InputText } from "./components/Input";
import { IngridientList } from "./components/Ingridients";
import { LoadRecipe } from "./components/Recipe";

function App(){
  return (
    <main className="container">
    <Header />
    <InputText />
    <IngridientList />
    <LoadRecipe />
    </main>
  )
}
export default App;

