
import css from './items.module.css'


const Items = ({ fooditems }) => {
  return (
    <li className={`${css["kg-item"]}  list-group-item`}>
      {fooditems}
    </li>
  );
};

export default Items;