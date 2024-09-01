import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Track } from '../../thor/model'


type TracksResponse = Track[]

export const trackApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/v1/' }),
  tagTypes: ['Track'],
  endpoints: (build) => ({
    getTracks: build.query<TracksResponse, void>({
      query: () => 'Track',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Track' as const, id })),
              { type: 'Track', id: 'LIST' },
            ]
          : [{ type: 'Track', id: 'LIST' }],
    }),
    addTrack: build.mutation<Track, Partial<Track>>({
      query: (body) => ({
        url: `Track`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Track', id: 'LIST' }],
    }),
    getTrack: build.query<Track, string>({
      query: (id) => `Track/${id}`,
      providesTags: (result, error, id) => [{ type: 'Track', id }],
    }),
    updateTrack: build.mutation<void, Pick<Track, 'id'> & Partial<Track>>({
      query: ({ id, ...patch }) => ({
        url: `Track/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          trackApi.util.updateQueryData('getTrack', id, (draft) => {
            Object.assign(draft, patch)
          }),
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Track', id }],
    }),
    deleteTrack: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `Track/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Track', id }],
    }),
  }),
})

export const {
  useGetTrackQuery,
  useGetTracksQuery,
  useAddTrackMutation,
  useUpdateTrackMutation,
  useDeleteTrackMutation,
} = trackApi
