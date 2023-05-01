const commentarios = [{
    "filme": "The Avengers", "comenatarios": [{
        "usuario": "mary",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "mary",
        "comentario": "Adorei a trilha sonora desse filme, é muito legal ver uma história de heróis no espaço."
    },
    {
        "usuario": "mary",
        "comentario": "Muito bom, gostei!"
    }
    ]
},
{
    "filme": "Avengers: Age of Ultron", "comenatarios": [{
        "usuario": "mary",
        "comentario": "Adorei a história desse filme, o personagem principal é muito interessante."
    },
    {
        "usuario": "mary",
        "comentario": "Esse filme é muito legal! A magia e os efeitos especiais são incríveis."
    }
    ]
},
{
    "filme": "Avengers: Infinity War", "comenatarios": [{
        "usuario": "mary",
        "comentario": "O final épico que a saga dos Vingadores merecia! Muito emocionante."
    },
    {
        "usuario": "mary",
        "comentario": "Muito bom, gostei muito!"
    }
    ]
},
{
    "filme": "Avengers: Endgame", "comenatarios": [{
        "usuario": "mary",
        "comentario": "Esse filme é incrível! As cenas de batalha são épicas e o desfecho da história é emocionante."
    },
    {
        "usuario": "mary",
        "comentario": "Muito bom, gostei muito!"
    }
    ]
},
{
    "filme": "Wonder Woman", "comenatarios": [{
        "usuario": "mary",
        "comentario": "Esse filme é épico! Muita ação, aventura e emoção do começo ao fim."
    },
    {
        "usuario": "mary",
        "comentario": "Esse filme é incrível, a trama é muito boa e as cenas de luta são emocionantes."
    }
    ]
},
{
    "filme": "Doctor Strange", "comenatarios": [{
        "usuario": "mary",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "mary",
        "comentario": "Muito bom, gostei muito!"
    }
    ]
},
{
    "filme": "Guardians of the Galaxy", "comenatarios": [{
        "usuario": "mary",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "mary",
        "comentario": "Adorei esse filme! Muito legal ver todos os heróis juntos."
    }
    ]
},
{
    "filme": "Iron Man 2", "comenatarios": [{
        "usuario": "mary",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "mary",
        "comentario": "Muito divertido e empolgante, vale a pena assistir!"
    }
    ]
},
{
    "filme": "Iron Man", "comenatarios": [{
        "usuario": "mary",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "mary",
        "comentario": "Adorei a trilha sonora desse filme, é muito legal ver uma história de heróis no espaço."
    }
    ]
}
]

export default function Comments({ filme }) {
    const comentariosFilme = commentarios.filter(f =>
        f.filme === filme
    );
    return (
        <div className="container text-center">
            {comentariosFilme[0].comenatarios.map((comment, i) => (
                <div className="row">
                    <div className="col-md-3" key={i.toString()}>
                        {comment.usuario}
                    </div>
                    <div className="col-md-9" key={i.toString()}>
                        {comment.comentario}
                    </div>
                </div>
            ))}
        </div>
    )
}