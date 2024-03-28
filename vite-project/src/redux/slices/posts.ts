import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IPost } from "../../types/post";

interface IPostsState {
  posts: IPost[];
  postsStatus: string;
  filteredPost: IPost[];
  filterStatus: string;
}

// Fetch posts
export const fetchPosts = createAsyncThunk<IPost[], undefined>(
  "posts/fetchPosts",
  async () => {
    const postsData = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await postsData.json();
  }
);

// Fetch filtered post
export const fetchFilteredPost = createAsyncThunk(
  "posts/fetchFilteredPost",
  async (postName: string) => {
    const filteredPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts?title=${postName}`
    );
    return await filteredPost.json();
  }
);

const initialState: IPostsState = {
  posts: [],
  postsStatus: "idle",
  filteredPost: [],
  filterStatus: "idle",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addLike: (state, { payload }) => {
      if (state.posts) {
        const likedPostIndex = state.posts.findIndex(
          (post) => post.id === payload
        );

        if (
          state.posts[likedPostIndex].reactions.selfReaction !== "like" &&
          state.posts[likedPostIndex].reactions.selfReaction !== "dislike"
        ) {
          state.posts[likedPostIndex].reactions.likes += 1;
          state.posts[likedPostIndex].reactions.selfReaction = "like";
        } else if (
          state.posts[likedPostIndex].reactions.selfReaction == "dislike"
        ) {
          state.posts[likedPostIndex].reactions.dislikes -= 1;
          state.posts[likedPostIndex].reactions.likes += 1;
          state.posts[likedPostIndex].reactions.selfReaction = "like";
        } else {
          state.posts[likedPostIndex].reactions.likes -= 1;
          state.posts[likedPostIndex].reactions.selfReaction = null;
        }
      }
    },

    addDislike: (state, { payload }) => {
      if (state.posts) {
        const likedPostIndex = state.posts.findIndex(
          (post) => post.id === payload
        );

        if (
          state.posts[likedPostIndex].reactions.selfReaction !== "dislike" &&
          state.posts[likedPostIndex].reactions.selfReaction !== "like"
        ) {
          state.posts[likedPostIndex].reactions.dislikes += 1;
          state.posts[likedPostIndex].reactions.selfReaction = "dislike";
        } else if (
          state.posts[likedPostIndex].reactions.selfReaction == "like"
        ) {
          state.posts[likedPostIndex].reactions.likes -= 1;
          state.posts[likedPostIndex].reactions.dislikes += 1;
          state.posts[likedPostIndex].reactions.selfReaction = "dislike";
        } else {
          state.posts[likedPostIndex].reactions.dislikes -= 1;
          state.posts[likedPostIndex].reactions.selfReaction = null;
        }
      }
    },
  },
  extraReducers: (builder) => {
    // Fetch posts
    builder.addCase(fetchPosts.pending, (state) => {
      state.postsStatus = "loading";
    });
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      state.posts = payload.map((post: IPost) => {
        return {
          ...post,
          reactions: {
            likes: +(Math.random() * 50).toFixed(),
            dislikes: +(Math.random() * 50).toFixed(),
            selfReaction: null,
          },
        };
      });
      state.postsStatus = "idle";
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.postsStatus = "error";
    });

    // Fetch filtered posts
    builder.addCase(fetchFilteredPost.pending, (state) => {
      state.filterStatus = "loading";
    });
    builder.addCase(fetchFilteredPost.fulfilled, (state, { payload }) => {
      state.filteredPost = payload;
      state.filterStatus = "idle";
    });
    builder.addCase(fetchFilteredPost.rejected, (state) => {
      state.filterStatus = "error";
    });
  },
});

export const { addLike, addDislike } = postsSlice.actions;

export default postsSlice.reducer;
