export interface IPost {
  id: number;
  title: string;
  body?: string;
  reactions: {
    likes: number;
    dislikes: number;
    selfReaction: "like" | "dislike" | null;
  };
}
