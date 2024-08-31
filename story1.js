// List in the format {curentnumber: [title, [choice1, whereischoice1going]], [choice2,whereischoice2going]}
// if currentnumber becomes end number, story is finished, else it continous


const storyObject = {
    "A": ["You are on your way to the metro station for work. But it is 2km away from your home. What do you do?",
        ["Go by an E-Rickshaw by paying Rs 30.", "B"],
        ["Go by a DTC Bus paying just Rs 5, but its a few meters away.", "C"]
    ],
    "B": ["E-Rickshaw it is. You get on the seat. It starts moving. Suddenly, the driver slams on the brakes, REALLY hard. “Why did you slam the brakes” you ask. Then you see the red light. Driver tells you while pointing his finger below the traffic light “Look over there. Its probably some accident. We should probably check them out”. What do you do?"
        ,
        ["'Arre bhaiya, chalo na, I’m getting late for work. Bohut log he, wo sab sambhal lenge'", "D"],
        ["'Okay, sure, we might need to call an ambulance.'", "E"]
    ],
    "C": ["You walk with your headphones on. You board the bus, get the window seat. In no time, you are at your stop. You get down. And suddenly, you see a huge crowd following a man in white clothes carrying nothing but a small bag not even enough to fit a laptop! “How weird.” But anyway, You board a train towards the Botanical Garden, intending to interchange at Hauz-Khas. What do you want to open on your phone?"
        ,
        ["Youtube for some content and maybe something comedy.", "F"],
        ["Spotify to enjoy some good Arijit tracks.", "G"]
    ],
    "D": ["You get to your metro station and board a train towards Botanical Garden, intending to change at Hauz Khas. What do you want to open on your phone?"
        ,
        ["Youtube for some content and maybe something comedy.", "F"],
        ["Spotify to enjoy some good Arijit tracks.", "G"]
    ],
    "E": ["You get down with the driver. You see a crowd and someone in a white cloths is the odd-one out. You get nearer, see a bunch of smiling and frustrated faces. And you hear a lot of curses and things like “Is this how you do something like this? Why.” “Laughing on an accident” really? You thought. In no time, the signal turns green and you head back. You call your local friend nearby at a hospital to check this situation out.  You reach and board a train towards the Botanical Garden, intending to interchange at Hauz-Khas. What do you want to open on your phone?"
        ,
        ["Youtube for some content and maybe something comedy.", "F"],
        ["Spotify to enjoy some good Arijit tracks.", "G"]
    ],
    "F": ["You open up a Youtube Video, then you see a 1 minute unskippable ad. “WHAT! WHY?” The ad is about some washing powder claiming to remove 100% stains. You get remembered of your strange encounters of today. What do you do?"
        ,
        ["Watch the ad, and continue along the video.", "H"],
        ["Close Youtube, open Spotify to enjoy some good Arijit tracks.", "G"]
    ],
    "G": ["Nice choice. You complete three songs, and are in complete awe of his singing talent. Suddenly you get an ad, thinking its the usual “Buy Premium” ad, but no, its about a washing powder claiming to remove 100% stains. Ah Well, You continue to listen along. You do the interchange, and after a while you reach your office. You hear your co-workers giggling together. What do you do?"
        ,
        ["‘What are you two laughing at, please tell me about it’", "I"],
        ["You just walk over to your system, thinking its some meme stuff you wouldn’t understand.", "J"]
    ],
    "H": ["You do the interchange, after a while you reach your office. You hear your co-workers giggling together. What do you do?"
        ,
        ["‘What are you two laughing at, please tell me about it’", "I"],
        ["You just walk over to your system, thinking its some meme stuff you wouldn’t understand.", "J"]
    ],
    "I": ["You are generally quite a serious person, who doesn’t really involve in humor. They get frightened and say ‘Oh, it's nothing Raj… I did the work you told me yesterday’. You insist warmly. ‘Oh it's just, a company is getting a lot of praise, and they’re quite creativ-’. Suddenly the boss comes over, and you head back to your workstation and continue till the ending time."
        ,
        ["Proceed Further", "K"],
        ["Proceed Further", "K"]
    ],

    "J": ["So you complete your day, and still wonder what they were talking about. But anyway, it's the end of work and now you want to head home."
        ,
        ["Proceed Further", "K"],
        ["Proceed Further", "K"]
    ],
    "K": ["You jump on the metro and find a seat. You open Google News. What you saw there shocked you and you started LAUGHING. Some detergent company went too far in promoting their products. If the online ads were not enough, they went offline too! A person gave a cleaning demo in front of the live public of stained clothes. Apparently the public liked the product so much, they ran after the poor salesman. Another one being faking an accident and promoting the detergent by cleaning a dirty cloth on the spot, leading to a strange commotion. You reach your home and go to bed with a profound wonder at this. The next day, the company had to pay compensation to all the people who were affected."
        ,
        ["THE", "A"],
        ["END", "A"]
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
    document.getElementById("titlesto").textContent = data[0];  // Update the scenario
    document.getElementById("choice1").textContent = data[1][0]; // Update choice1 text
    document.getElementById("choice2").textContent = data[2][0]; // Update choice2 text
}

function changeImage(pos) {
    const image = document.getElementById('imag');
    nam="IMG/s1/"+pos+".png";
    console.log(nam);
    image.setAttribute('src', nam);
  }


