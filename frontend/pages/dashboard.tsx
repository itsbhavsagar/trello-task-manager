// pages/dashboard.tsx
import { NextPage } from "next";
import TaskBoard from "../components/TaskBoard";
import styles from "../styles/dashboard.module.css";

const Dashboard: NextPage = () => {
  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <h1>Dashboard</h1>
        <button>Logout</button>
      </header>
      <TaskBoard />
    </div>
  );
};

export default Dashboard;
