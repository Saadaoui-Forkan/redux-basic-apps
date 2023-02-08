/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice ({
    name : 'posts',
    initialState : {
        postsArray : [],
    },
    reducers : {
        addPosts : function (state,action) {
            state.postsArray.push(action.payload)
        },
        deletePost : function (state,action) {
            state.postsArray = state.postsArray.filter(post => post.id !== action.payload)
        },
        updatePost : function(state,action) {
            // console.log(state.postsArray)
            state.postsArray.map(p => {
                if (p.id === action.payload.id) {
                    p.title = action.payload.title
                    p.description = action.payload.description
                }
            })
        }
    },
})

export const { addPosts,deletePost,updatePost } = postsSlice.actions;

export default postsSlice.reducer;