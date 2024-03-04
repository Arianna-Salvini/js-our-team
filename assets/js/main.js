console.log('Hello, team!');

//  - Copio l'array "team" nel file js
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

//  - Inserisco l'array di ogetti in un ciclo for
//      - Ogni oggetto dell'array lo passo nel ciclo for-in
//          - Stampo in console i valori dell'oggetto

for (let i = 0; i < team.length; i++) {
    const member = team[i];
    // console.log(member);

    for (const key in member) {
        console.log(member[key]);
    };
    
}

   
    
