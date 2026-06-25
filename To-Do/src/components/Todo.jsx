
import css from './Todo.module.css';

const Todo = () => {
  return (
    <>
      <div className={css.todo}>
        <input type="text" placeholder="Enter your activity" className={css.input} />
        <input type="date"  className={css.date}/>
        <input type="submit" value="Submit"  className= {css.submit}/>
      </div>
    </>
  );
};

export default Todo;