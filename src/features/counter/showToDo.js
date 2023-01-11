import { useSelector } from "react-redux";

const ShowTodo = () => {
  const todoInfo = useSelector((state) => state.todo.todos);

  return (
    <>
      <ol>
        {todoInfo.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ol>
    </>
  );
};

export default ShowTodo;
