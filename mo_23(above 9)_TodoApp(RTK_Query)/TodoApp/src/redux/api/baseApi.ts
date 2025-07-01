import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["task"],           //data create korar por automatic data fetch hoa ui te show korar jnno..reload dia data nia aste hobe na..
    endpoints: (builder) => ({

        getTasks: builder.query({
            query: () => "/tasks",
            providesTags: ["task"]         //data create korar por automatic data fetch hoa ui te show korar jnno..reload dia data nia aste hobe na..
        }),

        createTask: builder.mutation({
            query: (taskData) =>({
                url: "/tasks",
                method: "POST",
                body: taskData
            }),
            invalidatesTags: ["task"]       //data create korar por automatic data fetch hoa ui te show korar jnno..reload dia data nia aste hobe na..
        }), 

        deleteTask: builder.mutation({
            query: (taskId) => ({
                url: `/tasks/${taskId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["task"]  // ডিলিট করার পর task ডেটা আবার ফেচ হবে
        })

    })
})

export const { useGetTasksQuery, useCreateTaskMutation, useDeleteTaskMutation} = baseApi