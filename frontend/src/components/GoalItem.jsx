import { FiDelete } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{goal.text}</h2>
      <button className="close" onClick={() => dispatch(deleteGoal(goal._id))}>
        <FiDelete />
      </button>
    </div>
  );
}

export default GoalItem;
