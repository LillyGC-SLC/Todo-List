import { useState, type ChangeEvent } from "react";
import FormComponent from "./FormComponent";
import TodosContainer from "./TodosContainer";

export interface TodoCardProps {
  id: string;
  title: string;
  checked: boolean;
}

export interface TodosContainerProps {
  todosList: TodoCardProps[];
}

export interface FormComponentProps extends TodoCardProps {
  handleFormOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TodoApp() {
  //States
  //A state to store the input change
  //once the submit button is clicked, the state will be stored
  //as a todo entry in another state that will save a list of todos
  const [todo, setTodo] = useState<TodoCardProps>({
    id: "",
    title: "",
    checked: false,
  });

  //Second state: a state to store all the todos entry in one array.
  const [todosList, setTodosList] = useState<TodoCardProps[]>([]);

  //Handlers

  //1. Handle the form input change that will allow typing in the input
  const handleFormOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo((prevTodo) => ({ ...prevTodo, [e.target.name]: e.target.value }));
  };

  //Main Return
  return (
    <div>
      <h1>Todo List App</h1>
      <FormComponent {...todo} handleFormOnChange={handleFormOnChange}/>
      <TodosContainer todosList={todosList} />
    </div>
  );
}
