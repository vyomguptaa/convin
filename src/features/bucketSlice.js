import { createSlice, nanoid, } from '@reduxjs/toolkit'

const initialState = {
    buckets: [{
            id: nanoid(),
            name: "Education",
            cards: [{
                id: nanoid(),
                title: "Web Development Bootcamp",
                link: "https://youtube.com/embed/l1EssrLxt7E"
            }]
        },
        {
            id: nanoid(),
            name: "Standup Comedy",
            cards: [{
                id: nanoid(),
                title: "Bassi Standup",
                link: "https://youtube.com/embed/Tqsz6fjvhZM"
            }]
        },
        {
            id: nanoid(),
            name: "Movie Trailers",
            cards: [{
                    id: nanoid(),
                    title: "Avengers",
                    link: "https://youtube.com/embed/6ZfuNTqbHE8"
                },
                {
                    id: nanoid(),
                    title: "Super30",
                    link: "https://youtube.com/embed/QpvEWVVnICE"
                }

            ]
        },
        {
            name: "Songs",
            id: nanoid(),
            cards: [{
                    id: nanoid(),
                    title: "Udd Gaye",
                    link: "https://youtube.com/embed/0gosur3db5I"
                },
                {
                    id: nanoid(),
                    title: "Sage",
                    link: "https://youtube.com/embed/_kUrW9SEaJc"
                },
            ]
        }

    ],
}

export const bucketSlice = createSlice({
    name: "buckets",
    initialState,
    reducers: {
        editBucketName: {
            reducer(state, action) {
                const { editedName, id } = action.payload
                const foundBucket = state.buckets.find(bucket => bucket.id === id)
                if (foundBucket) {
                    foundBucket.name = editedName
                }
            }
        },
        deleteBucket: {
            reducer(state, action) {
                const { index } = action.payload
                state.buckets.splice(index, 1);
            }
        },
        addBucket: {
            reducer(state, action) {
                state.buckets.unshift({
                    name: "new bucket",
                    id: nanoid(),
                    cards: [],
                    initialEdit: true,
                })
            }
        },
        addCard: {
            reducer(state, action) {
                const { bucketIndex, title, link } = action.payload;
                const newCard = {
                    id: nanoid(),
                    title,
                    link,
                }

                const foundBucket = state.buckets.find((bucket, index) => index === bucketIndex)
                foundBucket.cards.unshift(newCard)
            }
        },
        updateCard: {
            reducer(state, action) {
                const { title, link, bucketIndex, cardIndex } = action.payload
                const foundBucket = state.buckets.find((bucket, index) => index === bucketIndex)
                const foundCard = foundBucket.cards[cardIndex]
                foundCard.title = title;
                foundCard.link = link;
            }
        },
        deleteCard: {
            reducer(state, action) {
                const { bucketIndex, cardIndex } = action.payload
                console.log(action.payload, "deelele");
                state.buckets[bucketIndex].cards.splice(cardIndex, 1);
            }
        },
        toggleInitialEditValue: {
            reducer(state, action) {
                const { index } = action.payload
                const val = state.buckets[index].initialEdit
                if (val !== undefined) {
                    state.buckets[index].initialEdit = false;
                }
            }
        }
    }
})

export const allBuckets = (state) => state.buckets.buckets
export const { editBucketName, addCard, updateCard, deleteBucket, addBucket, deleteCard, toggleInitialEditValue } = bucketSlice.actions

export default bucketSlice.reducer
