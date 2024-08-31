// List in the format {curentnumber: [title, [choice1, whereischoice1going]], [choice2,whereischoice2going]}
// if currentnumber becomes end number, story is finished, else it continous


const storyObject = {
    "A": ["You find yourself in front of a massive cave in a huge forest. Its near dusk, the air is cold and you surprisingly have a jacket. You look around, you see an empty highway, with nothing. You get a torch and.. Begin to go inside… Then you hear a strange voice 'Oh nooo. PLEASE DON'T DO THIS TO ME’ What do you do?",
        ["‘Well, yeah. I’m out of here, gotta go somewhere else.’ ", "B"],
        ["‘Ohfff, seems scary… But I have no other place to defend myself against the predators and the cold’ ", "C"]
    ],
    "B": ["You walk and walk, you suddenly see a light. You run towards it expecting to see a human, but you see a kitten which examines you thoroughly and leaves running in distress. Now what do you do?"
        ,
        ["'Well, I gotta know what’s wrong with the kitten.' You follow it along in hopes of encountering a river, and maybe a civilisation. You are VERY thirsty.", "D"],
        ["'Isn’t it strange to see a domestic cat in the middle of the forest. Something is not right I don’t think its safe to go further, I’ll set up my camp here'", "E"]
    ],
    "C": ["You enter the cave, then suddenly it gets lighter and bigger. You encounter a room made of rock and sand, and carefully lean by its entrance, 'YOU SHALL BE PUNISHED FOR YOUR SINS' you hear a woman’s voice and a man pleading 'PLEASE FORGIVE ME' and suddenly an electric beam passes through the man and he is turned… into… an old person. 'What is this going on?' You wonder."
        ,
        ["The woman looked like your mom, but anyway, you hold your hands in the namaste position, and enter the room 'Forgive me mother, I’m lost, I somehow encountered this cave, I have no bad intention. I beg for your mercy'", "F"],
        ["You continue to walk further, and you see another room. The one where people are turning into…. Cats.", "G"]
    ],
    "D": ["The kittens path leads you to a nearby lake, and a cave like structure, where a bunch of kittens are drinking water from. 'What on earth is this? Someone TELL ME WHAT'S GOING ON' You yell. And suddenly, you are… dragged towards the cave, by your own will. Inside the cave you encounter an old woman. What do you ask her?"
        ,
        ["'Forgive me mother, I’m lost, I somehow encountered this cave, I have no bad intention. I beg for your mercy'", "F"],
        ["'Please mother, give me an iPhone so I can contact my parents and tell them my location.'", "H"]
    ],
    "E": ["You don’t have any materials with you, no phone, no water, nothing. So you change your mind to 'try' to trace the kittens path. You encounter a place where a lot of capybaras are drinking water from. You quench your thirst, and in a calm tone, ask one of them 'Who are you'. You were not expecting any answer from an animal, but you are shocked. 'Please help me. Please follow me.' he said. What do you do?"
        ,
        ["'Okay, sure.'", "J"],
        ["'No, sorry I’m scared.'", "K"]
    ],
    "F": ["The woman seems pleased by your plea and says 'Wake up child…. From your illusions. Live in reality. What do you want?' She has a lot of power, and can give it to anyone when they ask her nicely. But the powers must not be intended to fulfill materialistic needs.You are unaware of this fact when you ask this next question."
        ,
        ["'Please mother, save me, I don’t know what, where, why, how I am facing issues and obstacles. Today has been a weird day, I don’t know what I’m doing. Please be my guiding light'", "I"],
        ["'Please mother, give me an iPhone so I can contact my parents and tell them my location.'", "H"]
    ],
    "G": ["You encounter the same woman again. This time you are calm and approach her in a way more normal manner. 'Forgive me mother, I’m lost, I somehow encountered this cave, I have no bad intention. I beg for your mercy' The woman seems pleased by your plea and says 'Wake up child…. From your illusions. Live in reality. What do you want?' She has a lot of powers, and can give it to anyone when they ask her nicely. But the powers must not be intended to fulfill materialistic needs.You are unaware of this fact when you ask this next question"
        ,
        ["'Please mother, save me, I don’t know what, where, why, how I am facing issues and obstacles. Today has been a weird day, I don’t know what I’m doing. Please be my guiding light'", "I"],
        ["'Please mother, give me an iPhone so I can contact my parents and tell them my location.", "H"]
    ],
    "H": ["'WHAT DID YOU SAY CHILD? YOU WANT A FREAKING IPHONE? EVEN A SAMSUNG OR A REDMI WOULD’VE BEEN FINE. YOU SHALL BE PUNISHED FOR YOUR GREEDINESS'. 'Forgive me mother, please don’t turn me into a capybar-' and you turn into a capybara. And wander around in sadness and it starts raining. 'AAHAH' you scream. You just wake up from your sleep and its your mother trying to get you to wake up as it is GETTING LATE! You run, do everything, then board the bus. On your way, you see a movie poster 'The Cave Encounter' . You stand there speechless and move on."
        ,
        ["The", "A"],
        ["End", "A"]
    ],
    "I": ["'Surely, Child. I bless you with my wisdom and I shall be your guiding light and help you whenever you call me'. You suddenly encounter a huge spray of water. 'AAHAH' you scream. You just wake up from your sleep and its your mother trying to get you to wake up as it is GETTING LATE! You run, do everything, then board the bus. On your way, you see a movie poster 'The Cave Encounter' you laugh and move on."
        ,
        ["The", "A"],
        ["End", "A"]
    ],

    "J": ["The capybaras lead you to an old courtyard with flowers which are rotten. 'We are actually humans like you, but due to greed, we had to convert into a capybara. By saying this spell, we shall become humans again.' You ask 'Why do you need me then?'. 'It is you who has to recite the spell, we have lost our abilities to reach a consciousness'. You say the spell and suddenly everyone turns into a human. As they are celebrating in joy, it starts raining and suddenly you scream 'AAAH' to everyone’s surprise. You just wake up from your sleep and it's your mother trying to get you to wake up as it is GETTING LATE! You run, do everything, then board the bus. On your way, you see a movie poster 'The Cave Encounter' . You stand there with a smile and move on."
        ,
        ["The", "A"],
        ["End", "A"]
    ],
    "K": ["'Okay, your loss'. You did not understand what they meant. Before you could turn towards a path, a wild tiger attacks you. 'AAAH' you scream. You just wake up from your sleep and its your mother trying to get you to wake up as it is GETTING LATE! You run, do everything, then board the bus. On your way, you see a movie poster 'The Cave Encounter' you stand there with wonder and move on."
        ,
        ["The", "A"],
        ["End", "A"]
    ]
};

let current = "A";  
// Event listener for choice1 button
document.getElementById("choice1").addEventListener("click", function () {
    let data = storyObject[current];   
    let where = data[1][1];             

    updateStory(where);                 
});

// Event listener for choice2 button
document.getElementById("choice2").addEventListener("click", function () {
    let data = storyObject[current];   
    let where = data[2][1];            

    updateStory(where);                 
});

// UPdating story
function updateStory(nextStep) {
    current = nextStep;                 
    let data = storyObject[current];    // Get the new story data
    changeImage(current)

    document.getElementById("main").style.animation="2s appear";
    document.getElementById("titlesto2").textContent = data[0];  
    document.getElementById("choice1").textContent = data[1][0]; 
    document.getElementById("choice2").textContent = data[2][0];
}
function changeImage(pos) {
    const image = document.getElementById('imag');
    nam="IMG/s2/"+pos+".png";
    console.log(nam);
    image.setAttribute('src', nam);
  }





