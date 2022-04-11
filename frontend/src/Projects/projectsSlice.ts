import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface ProjectState {
    projects: any[];
    isLoading: boolean;
}

const initialState: ProjectState = {
    projects: [],
    isLoading: false,
};

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        updatePayload: (state, action) => {
            const newProjects = action.payload.projects;
            return {
                ...state,
                projects: newProjects
            }
        },
    }
 });

export const selectProjects = (state: RootState) => state.projects.projects

export const { updatePayload } = projectSlice.actions;


export default projectSlice.reducer;
