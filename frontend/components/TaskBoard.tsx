// components/TaskBoard.tsx
import React from "react";
import Task from "./TaskCard";
import styles from "../styles/dashboard.module.css";

const TaskBoard: React.FC = () => {
  return (
    <div className={styles.boardContainer}>
      <div className={styles.column}>
        <div className={styles.columnHeader}>To Do</div>
        <Task title="Task 1" description="Description 1" />
        <Task title="Task 2" description="Description 2" />
      </div>
      <div className={styles.column}>
        <div className={styles.columnHeader}>In Progress</div>
        <Task title="Task 3" description="Description 3" />
      </div>
      <div className={styles.column}>
        <div className={styles.columnHeader}>Under Review</div>
        <Task title="Task 4" description="Description 4" />
      </div>
      <div className={styles.column}>
        <div className={styles.columnHeader}>Completed</div>
        <Task title="Task 5" description="Description 5" />
      </div>
    </div>
  );
};

export default TaskBoard;
