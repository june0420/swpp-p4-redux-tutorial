import "./TodoDetail.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppDispatch } from "../../store";
import { selectTodo, fetchTodo } from "../../store/slices/todo";

type Props = {
  title: string;
  content: string;
};



const TodoDetail = (props: Props) => {
const { id } = useParams();
const dispatch = useDispatch();
const todoState = useSelector(selectTodo);
useEffect(() => {
  dispatch(fetchTodo(Number(id)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);


  return (
    <div className="TodoDetail">
      <div className="row">
        <div className="left">Name:</div>
        <div className="right">{todoState.selectedTodo?.title}</div>
      </div>
      <div className="row">
        <div className="left">Content:</div>
        <div className="right">{todoState.selectedTodo?.content}</div>
      </div>
    </div>
  );
};
export default TodoDetail;
