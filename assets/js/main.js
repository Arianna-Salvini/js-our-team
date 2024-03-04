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

// - prendere l'elemento e importarlo in una costante in js
const pEl = document.querySelector('.row')
// console.log( pEl);
//  - Inserisco l'array di ogetti in un ciclo for
for (let i = 0; i < team.length; i++) {
    //- Ogni oggetto (salvato in una costante) dell'array
    const member = team[i];
    // console.log(member);
    // console.log(member.image);
    // console.log(member.name);
    // console.log(member.role);

    // - Iteroro nel ciclo for-in 
    // for (const key in member) {
    //     // - Stampo in console i valori dell'oggetto
    //     // console.log(member[key]);
    //     memberInfos = String(member[key])
    //     console.log(memberInfos); 
    // };

    //- stampare nell'elemento della DOM le proprietà degli object "member" in stringa 
    const memberCardMarkup = `
    <div class="col">
        <div class="card">
            <p> ${member.image}</p>
            <h3> ${member.name}</h3>
            <p> ${member.role}</p>
        </div>
    </div>`

pEl.innerHTML += (memberCardMarkup)

}


