import styled from 'styled-components';

// Define the styled component for the task list
const TaskListContainer = styled.div`
  margin-bottom: 30px;
  padding: 30px;
`;

// Define the styled component for the list
const TaskListUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

// Define the styled component for list items
const TaskListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

// Define the styled component for the button
const TaskListButton = styled.button`
  padding: 5px 10px;
  background-color: #ff5757;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff0000;
  }
`;


export const ModalContainer = styled.div`
  display: ${({ isopen }) => (isopen ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ModalButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const CloseButton = styled.button`
  padding: 8px 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #bd2130;
  }
`;

export const OpenModalButton = styled.button`
  padding: 8px 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 90%;

  &:hover {
    background-color: #218838;
  }
`;


// Export the styled components and the spin keyframes
export { TaskListContainer, TaskListUl, TaskListItem, TaskListButton };