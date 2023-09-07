import React from "react";
import styles from "./job.module.css";
import Dropwdown from "../dropdown/Dropwdown";
import data from "@/utils/db";

const Job = () => {


  return (
    <div className={styles.jobList}>
      {
        data.jobs.map((job)=>(
          <Dropwdown key={job.id} title={job.title} links={job.links}/>
        ))
      }
    </div>
  );
};

export default Job;
