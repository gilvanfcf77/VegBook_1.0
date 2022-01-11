import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: 'https://pbs.twimg.com/media/FIFLcifaUAMhDN_?format=jpg&name=large',
        user: USERS[0].user,
        likes: 525,
        caption: 'oie eu sou a sakura',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'tatuado05',
                comment: 'Eita, que coisa bizarra'
            }
        ]

    },
    {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTn9jP_7dixJGxr51KTdxrS3X0eW8mXjLcBw&usqp=CAU',
        user: USERS[1].user,
        likes: 1525,
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque justo nec eros fermentum faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin dignissim posuere urna, et gravida eros porttitor ac.',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'hackermesmo',
                comment: 'Eita, que coisa legal'
            },
            {
                user: 'abigail',
                comment: 'Eita, que coisa legal'
            },
            {
                user: 'obama',
                comment: 'Eita, que coisa legal'
            }
        ]

    },
    {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTn9jP_7dixJGxr51KTdxrS3X0eW8mXjLcBw&usqp=CAU',
        user: USERS[1].user,
        likes: 1525,
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque justo nec eros fermentum faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin dignissim posuere urna, et gravida eros porttitor ac.',
        profile_picture: USERS[0].image,
        comments: [

        ]

    }

]