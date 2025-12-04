import { Header } from "./components/Header";
import { InputText } from "./components/Input";
import { IngridientList } from "./components/Ingridients";
import { LoadRecipe } from "./components/Recipe";
//1..08..21..03.
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

