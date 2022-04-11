import { createAsyncThunk } from "@reduxjs/toolkit";
import { updatePayload } from "./projectsSlice";
import { fetchAllProjects } from "./projectAPI";

export const getAllProjects = createAsyncThunk(
    'projects/getAll',
    async (_, thunkAPI) => {
        const response: any = await fetchAllProjects();
        thunkAPI.dispatch(updatePayload(response));
        return response.data;
    }
);
