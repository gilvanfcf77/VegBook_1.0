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
        imageUrl: 'https://img.cybercook.com.br/imagens/receitas/313/bolo-amanteigado-de-fecula-de-batata.jpg',
        user: USERS[1].user,
        likes: 1525,
        caption: 'Bolo de batata',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'ciadosbolos',
                comment: 'Eita, parece bom'
            },
            {
                user: 'abigail',
                comment: 'Muito apetitoso'
            }
        ]

    },
    {
        imageUrl: 'https://www.receitasagora.com.br/wp-content/uploads/2020/07/receita-de-suco-de-beterraba-scaled.jpg',
        user: USERS[1].user,
        likes: 1327,
        caption: 'Suco de beterraba',
        profile_picture: USERS[1].image,
        comments: [

        ]

    }

]