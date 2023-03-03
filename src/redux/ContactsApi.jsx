import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const ContactsApi = createApi({
    reducerPath: 'contactsApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://64020f82ab6b7399d0b2db81.mockapi.io/contacts/v1/contacts',
    }),

    tagTypes: ['Contacts'],

    endpoints: builder => ({
        getContact: builder.query({
            query: () => '/contacts',
            providesTags: ['Contacts'],
        }),

        addContacts: builder.mutation({
            query: contact => ({
                url: `/contacts`,
                method: 'POST',
                body: contact,
            }),
            invalidatesTags: ['Contacts'],
        }),

        deleteContacts: builder.mutation({
            query: id => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        }),
    }),
});

export const {
    useGetContactQuery,
    useAddContactsMutation,
    useDeleteContactsMutation,
    use,
} = ContactsApi;