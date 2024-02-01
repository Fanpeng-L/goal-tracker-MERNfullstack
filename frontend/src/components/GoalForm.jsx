import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";
import { FaArrowDown } from "react-icons/fa";

function GoalForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="input-label" htmlFor="text">
            <span>Set a New Goal Here</span>
            <FaArrowDown />
          </label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            placeholder="Enter a new goal"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
