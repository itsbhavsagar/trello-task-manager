// components/Task.tsx
import React from "react";
import styles from "../styles/dashboard.module.css";

interface TaskProps {
  title: string;
  description: string;
}

const TaskCard: React.FC<TaskProps> = ({ title, description }) => {
  return (
    <div className={styles.task}>
      <div className={styles.taskTitle}>{title}</div>
      <div className={styles.taskDescription}>{description}</div>
    </div>
  );
};

export default TaskCard;
