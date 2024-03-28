import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { addLike, addDislike } from "../redux/slices/posts"; // Замените на путь к вашему файлу с редьюсерами

const usePutReaction = () => {
  const dispatch = useDispatch();

  const addOneLike = useCallback(
    (postId: number | string) => {
      dispatch(addLike(+postId));
    },
    [dispatch]
  );

  const addOneDislike = useCallback(
    (postId: number | string) => {
      dispatch(addDislike(+postId));
    },
    [dispatch]
  );

  return { addOneLike, addOneDislike };
};

export default usePutReaction;
