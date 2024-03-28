import styles from "./Dislike.module.scss";

interface IDislike {
  reaction: "like" | "dislike" | null;
  count: number;
  addDislike: () => void;
}

const Dislike = ({ reaction, count, addDislike }: IDislike) => {
  return (
    <div className={styles.dislike} onClick={() => addDislike()}>
      <svg
        width="28"
        height="25"
        viewBox="0 0 28 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.666584 0.333313H3.33325C4.06658 0.333313 4.66658 0.933313 4.66658 1.66665V13.6666C4.66658 14.4 4.06658 15 3.33325 15H0.666584V0.333313ZM27.1066 9.82665C27.2533 10.16 27.3333 10.52 27.3333 10.8933V12.3333C27.3333 13.8 26.1333 15 24.6666 15H17.3333L18.5599 21.2C18.6266 21.4933 18.5866 21.8133 18.4533 22.08C18.1466 22.68 17.7599 23.2266 17.2799 23.7066L16.6666 24.3333L8.11992 15.7866C7.61325 15.28 7.33325 14.6 7.33325 13.8933V3.45331C7.33325 1.73331 8.73325 0.333313 10.4533 0.333313H21.2533C22.1999 0.333313 23.0666 0.826646 23.5466 1.62665L27.1066 9.82665Z"
          fill={reaction === "dislike" ? "#EB5757" : "#3A3541"}
          fillOpacity="0.54"
        />
      </svg>
      <span className={styles.count}>{count}</span>
    </div>
  );
};

export default Dislike;
