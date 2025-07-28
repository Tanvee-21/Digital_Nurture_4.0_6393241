import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ id, technology, status, startDate, coach, trainer }) => {
  const statusClass = status.toLowerCase() === 'ongoing' ? styles.ongoing : styles.completed;

  return (
    <div className={styles.box}>
      <h3 className={statusClass}>Cohort: {id}</h3>
      <dl>
        <dt>Technology:</dt>
        <dd>{technology}</dd>
        <dt>Status:</dt>
        <dd>{status}</dd>
        <dt>Start Date:</dt>
        <dd>{startDate}</dd>
        <dt>Coach:</dt>
        <dd>{coach}</dd>
        <dt>Trainer:</dt>
        <dd>{trainer}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
