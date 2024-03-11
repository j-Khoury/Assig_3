import { FC } from "react";
import {
  TaskListContainer,
  TaskListUl,
  TaskListItem,
  TaskListButton,
} from "@/assets/style.jsx";
import Link from "next/link";

interface TaskListProps {
  title: string;
  message: string;
  tasks: { id: string, name: string, desc:string }[];
  onTaskCompletion?: (index: number) => void;
  onTaskReactivation?: (index: number) => void;
  onTaskDeletion: (index: number) => void;
}

const TaskList: FC<TaskListProps> = ({
  title,
  message,
  tasks,
  onTaskCompletion,
  onTaskReactivation,
  onTaskDeletion,
}) => {
  
  return (
    <TaskListContainer>
      <h2 className="mb-3">{title}</h2>

      {tasks.length === 0 ? (
        <p>{message}</p>
      ) : (
        <TaskListUl className="card p-2">
          {tasks.map((task, index) => (
            <TaskListItem key={index}>
              <span className="d-flex flex-column">
                <span className="d-flex flex-row">
                  <span className="d-flex align-items-center flex-row">
                    <input
                      className="form-check-input mt-0 mr-2"
                      type="checkbox"
                      checked={title === "Completed Tasks"}
                      onChange={() =>
                        title === "Active Tasks"
                          ? onTaskCompletion && onTaskCompletion(index)
                          : onTaskReactivation && onTaskReactivation(index)
                      }
                    />
                  </span>
                  <span>{task.name}</span>
                </span>
                <div style={{ fontSize: "11px" }}>
                  <Link href={`details/${task.id}`}>
                    more details
                  </Link>
                </div>
              </span>
              <TaskListButton onClick={() => onTaskDeletion(index)}>
                Delete
              </TaskListButton>
            </TaskListItem>
          ))}
        </TaskListUl>
      )}
    </TaskListContainer> 
  );
};

export default TaskList;
