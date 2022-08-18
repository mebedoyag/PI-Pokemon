import PokeSearch from "./PokeSearch"
import Filter from "./Filter"
import Order from "./Order"
import s from './Inputs.module.css';

function Inputs() {
  return (
    <div className={s.container}>
      <PokeSearch />
      <Filter />
      <Order />
    </div>
  )
}

export default Inputs;