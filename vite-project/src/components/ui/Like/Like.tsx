import styles from "./Like.module.scss";

interface ILike {
  reaction: "like" | "dislike" | null;
  count: number;
  addLike: () => void;
}

const Like = ({ reaction, count, addLike }: ILike) => {
  return (
    <div className={styles.like} onClick={() => addLike()}>
      <svg
        width="28"
        height="25"
        viewBox="0 0 28 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.666626 24.6667H3.33329C4.06663 24.6667 4.66663 24.0667 4.66663 23.3334V11.3334C4.66663 10.6 4.06663 10 3.33329 10H0.666626V24.6667ZM27.1066 15.1734C27.2533 14.84 27.3333 14.48 27.3333 14.1067V12.6667C27.3333 11.2 26.1333 10 24.6666 10H17.3333L18.56 3.80002C18.6266 3.50669 18.5866 3.18669 18.4533 2.92002C18.1466 2.32002 17.76 1.77335 17.28 1.29335L16.6666 0.666687L8.11996 9.21335C7.61329 9.72002 7.33329 10.4 7.33329 11.1067V21.56C7.33329 23.2667 8.73329 24.6667 10.4533 24.6667H21.2666C22.2 24.6667 23.08 24.1734 23.56 23.3734L27.1066 15.1734Z"
          fill={reaction === "like" ? "#219653" : "#3A3541"}
          fillOpacity="0.54"
        />
      </svg>
      <span className={styles.count}>{count}</span>
    </div>
  );
};

export default Like;
