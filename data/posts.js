import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: 'https://s2.glbimg.com/KFlz5D3wx8p1P8U1Yv7mR0y_KHM=/0x0:3648x2736/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2014/09/24/10_37_36_586_DSC02756.JPG',
        user: USERS[0].user,
        likes: 525,
        caption: 'Bolo de brócolis',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'amante_de_bolos',
                comment: 'Parece uma delícia'
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