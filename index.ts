import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get(url)
  .then((response) => {
    const todo = response.data as Todo;
    const { id, title, completed } = todo;

    printTodo(id, title, completed);
    printTodoObject(todo);
  })
  .catch((err) => {
    console.log(err);
  });

const printTodoObject = ({ id, completed, title }: Todo): void => {
  console.log(`
      TodoID: ${id}
      TodoTitle: ${title}
      isTodoCompleted: ${completed}
    `);
};

const printTodo = (id: number, title: string, completed: boolean): void => {
  console.log(`
      TodoID: ${id}
      TodoTitle: ${title}
      isTodoCompleted: ${completed}
    `);
};
