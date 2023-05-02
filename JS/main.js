// ******************************************************
// OBJECTS
// ******************************************************

// Array of objects
const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {   
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
];

// ******************************************************
// FUNCTIONS
// ******************************************************

// Function to print on console the array of objects
const printTeamMembersInConsole = (array) => {
    array.forEach((element) => {
        console.log(element.name, element.role, element.photo);
    });
};

// Function to print on DOM the array of objects
const printTeamMembersDOM = (array) => {
    array.forEach((element) => {
        const {name, role, photo} = element;
        const cardTeamMembers = `
            <div class="card">
                <img src="img/${photo}" alt="${name}">
                <h3>${name}</h3>
                <p>${role}</p>
            </div>
        `;
        document.getElementById('teamMembers').innerHTML += cardTeamMembers;
    });
};

// ******************************************************
// PRINT 
// ******************************************************

// Print on console the array of objects
printTeamMembersInConsole(teamMembers);

// Print on DOM the array of objects
printTeamMembersDOM(teamMembers);


