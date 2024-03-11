import React, { useState } from "react";
import TaskList from "@/components/taskList";
import { v4 as uuidv4 } from 'uuid';
import {
  ModalContainer,
  ModalInput,
  ModalButton,
  CloseButton,
  OpenModalButton,
} from "@/assets/style";
import { useDispatch, useSelector } from "react-redux";
import { addTask, completeTask, deleteTask, reactivateTask } from "@/redux/actions/taskActions";

export default function TaskManager() {
  const activeTasks = useSelector((state) => state.tasks.activeTasks);
  const completedTasks = useSelector((state) => state.tasks.completedTasks);

  // console.log(activeTasks);
  // console.log(completeTask);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDesc, setNewTaskDesc] = useState("");


  // add new task to active tasks list process
  const dispatch = useDispatch();

  const handleNewTaskChange = (event) => {
    setNewTaskName(event.target.value);
  };

  const handleNewTaskDesc = (event) => {
    setNewTaskDesc(event.target.value);
  };

  const handleCreateTask = () => {
    if (newTaskName.trim() !== "" && newTaskDesc.trim() !== "") {
      const newTask = { id: uuidv4(), name: newTaskName, desc: newTaskDesc };
      dispatch(addTask(newTask.id,newTask.name, newTask.desc));
      setNewTaskName("");
      setNewTaskDesc("");
      setShowModal(false);
    }
  };

  // change task status from active to complete
  const handleTaskCompletion = (index) => {
    const taskToComplete = activeTasks[index];
    dispatch(completeTask(taskToComplete.id)); // Dispatch action to mark task as complete
  };

  // change task status from complete to active
  const handleTaskReactivation = (index) => {
    const taskToReactivate = completedTasks[index];
    dispatch(reactivateTask(taskToReactivate.id)); // Dispatch action to mark task as active
  };

  //delete task process
  const handleTaskDeletion = (index, listType) => {
    dispatch(deleteTask(index, listType));
  };


  //modal
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
              <div
          className="d-flex justify-content-center"
          style={{ width: "100%" }}
        >
          <div
            className="container-lg py-4 my-4"
            style={{
              width: "600px",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >

            {/* modal container */}
            <ModalContainer isopen={showModal}>
              <ModalInput
                type="text"
                placeholder="Enter task name"
                value={newTaskName}
                onChange={handleNewTaskChange}
              />
              <ModalInput
                type="text"
                placeholder="Enter task description"
                value={newTaskDesc}
                onChange={handleNewTaskDesc}
              />
              <ModalButton
                onClick={handleCreateTask}
                disabled={!newTaskName.trim()}
              >
                Create
              </ModalButton>
              <CloseButton onClick={closeModal}>Close</CloseButton>
            </ModalContainer>

            {/* Button to open modal */}
            <div
              style={{ width: "100%" }}
              className="d-flex justify-content-center"
            >
              <OpenModalButton onClick={openModal}>
                Add new task
              </OpenModalButton>
            </div>

            <div className="tabs">
              <TaskList
                title="Active Tasks"
                message="no active tasks"
                tasks={activeTasks}
                onTaskCompletion={handleTaskCompletion}
                onTaskDeletion={(index) => handleTaskDeletion(index, "active")}
              />
              <TaskList
                title="Completed Tasks"
                message="no completed tasks"
                tasks={completedTasks}
                onTaskReactivation={handleTaskReactivation}
                onTaskDeletion={(index) =>
                  handleTaskDeletion(index, "completed")
                }
              />
            </div>
          </div>
        </div>
    </main>
  );
}


