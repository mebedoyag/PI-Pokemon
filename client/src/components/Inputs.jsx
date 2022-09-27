import Search from "./Search";
import Filter from "./Filter";
import Order from "./Order";
import s from './Inputs.module.css';

function Inputs() {
  return (
    <div className={s.container}>
      <Search />
      <Filter />
      <Order />
    </div>
  )
}

export default Inputs;