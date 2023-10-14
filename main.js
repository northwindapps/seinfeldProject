const synth = window.speechSynthesis;
const speakButton = document.getElementById('speak');
const inputField = document.getElementById('text-to-speech');
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US'; // Set the language for recognition

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  document.getElementById('output').textContent = transcript;
  speakText();
};

recognition.onerror = (event) => {
  console.error('Speech recognition error:', event.error);
};

const startButton = document.getElementById('start-recognition');
const speakers = [];
const transcripts = [];
startButton.addEventListener('click', () => {
  console.log('haha');
  for (let item of json) {
    speakers.push(item.speaker);
    transcripts.push(item.line);
  }
  console.log(transcripts);
  recognition.start();
});

recognition.onend = () => {
  recognition.start(); // Continuously listen for speech
};

recognition.onspeechend = () => {
  recognition.stop(); // Stop listening after speech ends
};

function speakText() {
    // const text = inputField.value;
    const text = 'ah ha.Oh yes.'
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = synth.getVoices()[0]; // Set the voice (you may need to select an available voice)
    utterance.rate = 1.0; // Speech rate (0.1 to 10)
    utterance.pitch = 1.0; // Speech pitch (0 to 2)
    const voices = synth.getVoices();
    const usEnglishVoice = voices.find(voice => voice.lang === 'en-US');
    utterance.voice = usEnglishVoice;
    synth.speak(utterance);
  }
  
  

let json = [
  {
      "speaker": "Production Credits",
      "line": " Supervising Producer ................. Larry Charles Supervising Producer ................. Tom Cherones Executive Producer ................... Andrew Sherman Created By ........................... Larry David and Jerry Seinfeld Teleplay By .......................... Larry Charles Story By ............................. Bruce Kirschbaum Directed By .......................... Tom Cherones ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
  },
  {
      "speaker": "Cast",
      "line": " Jerry Seinfeld ....................... Jerry Seinfeld George Costanza ...................... Jason Alexander Elaine Benes ......................... Julia Louis-Drefus Kramer ............................... Michael Richards"
  },
  {
      "speaker": "With",
      "line": " Newman ............................... Wayne Knight Corinne ............................... Carol Kane Lippman ............................... Richard Fancy Testikov ............................... George Murdock Diane ............................... Rosalind Allen"
  },
  {
      "speaker": "Also",
      "line": " Hotel Clerk ............................... Daivid Blackwood Woman at beach ............................... Heather Morgan ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ (Open Jerry's apartment, Jerry is at the table and Elaine is on the phone) "
  },
  {
      "speaker": "Elaine",
      "line": "(to the phone)Well did he bring it up in the meeting?  (Jerry picks up a yellow shirt and walks to Elaine) "
  },
  {
      "speaker": "Jerry",
      "line": "Elaine, see this T-shirts, six years I've had this T-shirts, it's my best one, I call him...Golden Boy"
  },
  {
      "speaker": "Elaine",
      "line": "I'm on the phone here."
  },
  {
      "speaker": "Jerry",
      "line": "Golden Boy is always the first shirt I wear out of the laundry, here touch Golden Boy!"
  },
  {
      "speaker": "Elaine",
      "line": "No thanks. (to the phone)Yeah, Yeah I'll hold."
  },
  {
      "speaker": "Jerry",
      "line": "But see look at the collar, see it's fraying. Golden Boy is slowly dying. Each wash is brings him one step closer, that's what makes the T-shirts such a tragic figure."
  },
  {
      "speaker": "Elaine",
      "line": "Why don't you just let Golden Boy soak in the sink with some Woolight?"
  },
  {
      "speaker": "Jerry",
      "line": "No!!! The reason he's iron man is because he goes out there and plays every game. Wash!!! Spin!!! Rinse!!! Spin!!! You take that away from him, you break his spirit!  (Elaine is suddenly excited) "
  },
  {
      "speaker": "Elaine",
      "line": "(to the phone)Yeah. Oh! What? He is! Oh! this is so fantastic! I'm so excited! Yes I'm excited, OK I'll be in soon! OK, OK, I'm coming, yeah, yeah I'm coming, I'm coming! (Elaine jumps up and dances around) Yuri Testikov, the Russian writer!"
  },
  {
      "speaker": "Jerry",
      "line": "The guy in the gulag!"
  },
  {
      "speaker": "Elaine",
      "line": "Yeah! Pendant's publishing his new book, and I'm working on it! Lippman and I are going to the airport to pick him up Thursday in a limousine!"
  },
  {
      "speaker": "Jerry",
      "line": "You wanna barrow Golden Boy!"
  },
  {
      "speaker": "Elaine",
      "line": "Oh! Don't you know what this means, it's like working with Tolstoy!"
  },
  {
      "speaker": "Jerry",
      "line": "Hey ya know what I read the most unbelievable thing about Tolstoy the other day, did you know the original title for \"War and Peace\" was \"War--What Is It Good For?\"!"
  },
  {
      "speaker": "Elaine",
      "line": "Ha ha."
  },
  {
      "speaker": "Jerry",
      "line": "No, no.. I'm not kidding Elaine it's true, his mistress didn't like the title and insisted him change it to \"War and Peace\"!"
  },
  {
      "speaker": "Elaine",
      "line": "But it's a line from that song!"
  },
  {
      "speaker": "Jerry",
      "line": "That's were they got it from!"
  },
  {
      "speaker": "Elaine",
      "line": "Really?"
  },
  {
      "speaker": "Jerry",
      "line": "I'm not joking!  (George enters with a handful of mail) "
  },
  {
      "speaker": "George",
      "line": "You can't handle the truth!(he salutes)"
  },
  {
      "speaker": "Jerry",
      "line": "What?"
  },
  {
      "speaker": "George",
      "line": "I'm working on my Jack Nicholson, You can't handle the truth!(he solutes)"
  },
  {
      "speaker": "Elaine",
      "line": "What, is this your mail? (She takes the mail and starts flipping through)"
  },
  {
      "speaker": "George",
      "line": "Yeah, I grabbed it on my way, I don't want my mother reading it."
  },
  {
      "speaker": "Elaine",
      "line": "Oh! Your Alumni Magazine."
  },
  {
      "speaker": "Jerry",
      "line": "Your mother reads your mail?"
  },
  {
      "speaker": "George",
      "line": "Yeah."
  },
  {
      "speaker": "Jerry",
      "line": "What do you mean like post-cards?"
  },
  {
      "speaker": "George",
      "line": "No, anything."
  },
  {
      "speaker": "Jerry",
      "line": "She doesn't open?"
  },
  {
      "speaker": "George",
      "line": "She'll open!"
  },
  {
      "speaker": "Jerry",
      "line": "You've caught your mother opening envelopes!"
  },
  {
      "speaker": "George",
      "line": "Yeah."
  },
  {
      "speaker": "Jerry",
      "line": "What did she say?"
  },
  {
      "speaker": "George",
      "line": "I was curious!"
  },
  {
      "speaker": "Jerry",
      "line": "Isn't that against the law?"
  },
  {
      "speaker": "George",
      "line": "Maybe I can get her locked up."
  },
  {
      "speaker": "Elaine",
      "line": "(She looks closer at the mag.) Hey Jerry, you're in the Alumni"
  },
  {
      "speaker": "magazine! Listen to this",
      "line": "Jerry Seinfled has appeared on \"David Letterman\" and the \"Tonight Show\" and he did a pilot for NBC called \"Jerry\"...that was not picked up. Georgie, why isn't there anything about you in here?"
  },
  {
      "speaker": "Jerry",
      "line": "He can't handle the truth!"
  },
  {
      "speaker": "Elaine",
      "line": "All right.. this is too fun I gotta get back to work.  (Elaine leaves and in the hall she meets up with Kramer, he is holding a set of golf clubs) "
  },
  {
      "speaker": "Kramer",
      "line": "Ah, maybe you could use this (he searches through his jacket) Ah, here, ah, it's an electronic organizer, ah, here it is.  (Elaine Gasps) "
  },
  {
      "speaker": "Kramer",
      "line": "Yeah you know, for phone numbers, addresses, keep appointments, everything"
  },
  {
      "speaker": "Elaine",
      "line": "Wow!"
  },
  {
      "speaker": "Kramer",
      "line": "It's got an alarm that beeps!"
  },
  {
      "speaker": "Elaine",
      "line": "Oh! I can't believe this, Kramer! I've been wanting to get one of these things! Are you sure...(Kramer drops a piece of paper and bends over to pick it up and drops balls everywhere) Are you sure you can't use one of these things??"
  },
  {
      "speaker": "Kramer",
      "line": "Oh no. I got all my appointments up here. (he points to his head)"
  },
  {
      "speaker": "Elaine",
      "line": "Where'd you get this?"
  },
  {
      "speaker": "Kramer",
      "line": "The bank, I opened a new account.  (Back inside Jerry's apartment) "
  },
  {
      "speaker": "George",
      "line": "Did you see that whale thing on TV last night?"
  },
  {
      "speaker": "Jerry",
      "line": "No."
  },
  {
      "speaker": "George",
      "line": "I'm such a Huge whale fan. These marine biologists were showing how they communicate with each other with these squeaks and squeals, what a fish!"
  },
  {
      "speaker": "Jerry",
      "line": "It's a mammal."
  },
  {
      "speaker": "George",
      "line": "Whatever. (George looks to the table) Hey new tape recorder?"
  },
  {
      "speaker": "Jerry",
      "line": "Yeah, got it from the bank.  (Kramer enters without his golf bag) "
  },
  {
      "speaker": "Kramer",
      "line": "(over excited) Hey"
  },
  {
      "speaker": "George",
      "line": "Hey"
  },
  {
      "speaker": "Kramer",
      "line": "(still over excited) Who wants to have some fun!"
  },
  {
      "speaker": "Jerry",
      "line": "I do."
  },
  {
      "speaker": "George",
      "line": "I do."
  },
  {
      "speaker": "Kramer",
      "line": "(once again, over excited) Are you just sayin' you want to have fun or do you really want to have fun?!"
  },
  {
      "speaker": "Jerry",
      "line": "I really wanna have some fun."
  },
  {
      "speaker": "George",
      "line": "I'm just sayin' I wanna have some fun."
  },
  {
      "speaker": "Kramer",
      "line": "Right now there six-hundred Titleists that I got at the driving range in the trunk of my car. Why don't we drive out to Rock-a-Way and hit them-----------(very over excited) into the ocean! Now picture this....we find a nice sweet spot between the dunes, we take out our drivers, we tea up and (he makes a golf stroke), that ball goes sailing up into the sky holds there for a moment and then....... ..... gulp!"
  },
  {
      "speaker": "George",
      "line": "Come on. Ya wanna go get some lunch?"
  },
  {
      "speaker": "Jerry",
      "line": "Yeah, let me just stop by the cash machine and I'll meet you at the coffee shop."
  },
  {
      "speaker": "George",
      "line": "Yeah, I'm gonna go get a paper.  (Kramer gets ready to make another swing) "
  },
  {
      "speaker": "George",
      "line": "Keep your head down.  (At the automatic teller machine Jerry is getting his money and there is a woman beside him) "
  },
  {
      "speaker": "Jerry",
      "line": "Cash advance...yes (he looks over) no (he looks over again)balance inquiry...no (he looks again) receipt....no (he looks again) processing...processing...processing.(He opens the box and gets his money and then looks at the woman and says)I won!  (Jerry starts to walk away) "
  },
  {
      "speaker": "Diane",
      "line": "Jerry?"
  },
  {
      "speaker": "Jerry",
      "line": "Yeah"
  },
  {
      "speaker": "Diane",
      "line": "Diane, Diane DeConn, from college. I've seen you on TV you're doin' great."
  },
  {
      "speaker": "Jerry",
      "line": "Yeah pluggin' along."
  },
  {
      "speaker": "Diane",
      "line": "I got the Alumni magazine. Ya know what ever happened to your friend George? I never see him in there."
  },
  {
      "speaker": "Jerry",
      "line": "Well he's kind of modest."
  },
  {
      "speaker": "Diane",
      "line": "He was always such a goof-off. I mean did he ever get anywhere?"
  },
  {
      "speaker": "Jerry",
      "line": "Sure."
  },
  {
      "speaker": "Diane",
      "line": "Yeah? What field?"
  },
  {
      "speaker": "Jerry",
      "line": "Marine biology."
  },
  {
      "speaker": "Diane",
      "line": "George is a marine biologist?!"
  },
  {
      "speaker": "Jerry",
      "line": "A pretty damn good one, too!"
  },
  {
      "speaker": "Diane",
      "line": "I can't believe it I mean I would never had thought.."
  },
  {
      "speaker": "Jerry",
      "line": "Yeah...he specializing in whales. He's working on lowering the cholesterol level in whales...all that blubber-- quite unhealthy. You know its the largest mammal on earth but as George says \"they don't have to be.\"  (In the coffee shop Jerry and George are sitting) "
  },
  {
      "speaker": "George",
      "line": "Diane DeConn? You saw Diane DeConn!"
  },
  {
      "speaker": "Jerry",
      "line": "Something huh?"
  },
  {
      "speaker": "George",
      "line": "Yeah! How'd she look."
  },
  {
      "speaker": "Jerry",
      "line": "She looked great. She asked about you."
  },
  {
      "speaker": "George",
      "line": "She did! What did she say?"
  },
  {
      "speaker": "Jerry",
      "line": "\"How's George?\""
  },
  {
      "speaker": "George",
      "line": "George! She said George? She remembered my name. Diane DeConn remembered my name. She was the \"it\" girl!"
  },
  {
      "speaker": "Jerry",
      "line": "Yeah she asked for your number, I think she's gonna get in touch with you."
  },
  {
      "speaker": "George",
      "line": "OK, I'm tellin' you right now if your kiddin' around I'm not gonna be able to be friends with you anymore. I'm serious about that. You got that."
  },
  {
      "speaker": "Jerry",
      "line": "I got no problem with that."
  },
  {
      "speaker": "George",
      "line": "Good. Cause if this is a lie, if this is a joke, if this is your idea of some cute little game...we're finished!"
  },
  {
      "speaker": "Jerry",
      "line": "Expect a call."
  },
  {
      "speaker": "George",
      "line": "Oh my god he's not kidding."
  },
  {
      "speaker": "Jerry",
      "line": "Now I should tell you at this point she's under the impression the you are a....."
  },
  {
      "speaker": "George",
      "line": "A what?"
  },
  {
      "speaker": "Jerry",
      "line": "A marine biologist."
  },
  {
      "speaker": "George",
      "line": "A marine biologist....why am I a marine biologist?"
  },
  {
      "speaker": "Jerry",
      "line": "I may have mentioned it."
  },
  {
      "speaker": "George",
      "line": "But I'm not a marine biologist!"
  },
  {
      "speaker": "Jerry",
      "line": "I'm aware of that."
  },
  {
      "speaker": "George",
      "line": "So?"
  },
  {
      "speaker": "Jerry",
      "line": "You don't think it's a good job."
  },
  {
      "speaker": "George",
      "line": "I didn't think it was a job."
  },
  {
      "speaker": "Jerry",
      "line": "Oh. It's a fascinating field!"
  },
  {
      "speaker": "George",
      "line": "What if she calls. What will I say?  (In George's parent's house...George is sitting in a chair. He is talking to Diane on the phone) "
  },
  {
      "speaker": "George",
      "line": "Algae, obviously plankton, I don't know what else I can tell you, Oh I just got back from a trip to the Galapagos Islands, I was living with the turtles.  (In the limo Elaine, Lippman, and Testikov are talkin') "
  },
  {
      "speaker": "Lippman",
      "line": "We have got you in a very nice hotel, I don't know how you like to work but I can arrange for an office if you want."
  },
  {
      "speaker": "Testikov",
      "line": "I will work in hotel...much better. I will work away from all the penny bickering and interference."
  },
  {
      "speaker": "Lippman",
      "line": "You know Tolstoy use to write in the village square. The faces inspired him."
  },
  {
      "speaker": "Testikov",
      "line": "He didn't need any inspiration....God spoke through his pen."
  },
  {
      "speaker": "Elaine",
      "line": "That is so true! Although one wonders if \"War and Peace\" would has been as highly acclaimed as it was if it was published under it's original name \"War---What Is It Good For?\""
  },
  {
      "speaker": "Lippman",
      "line": "What?"
  },
  {
      "speaker": "Elaine",
      "line": "Yes. Mr. Lippman. It was his mistress who insisted he called it \"War and Peace.\" \"War--What Is It Good For.\"(sang) Absolutely nothin'! (spoken to Testikov)that's the song that they got from Tolstoy."
  },
  {
      "speaker": "Lippman",
      "line": "I'm sorry, it's just her sense of humor.  (Elaine's organizer starts beeping) "
  },
  {
      "speaker": "Testikov",
      "line": "What is that noise!"
  },
  {
      "speaker": "Lippman",
      "line": "What is that?"
  },
  {
      "speaker": "Elaine",
      "line": "It's coming from my purse. It must be my new organizer, here."
  },
  {
      "speaker": "Lippman",
      "line": "Elaine...here!"
  },
  {
      "speaker": "Testikov",
      "line": "Turn it off."
  },
  {
      "speaker": "Lippman",
      "line": "It's the top one!"
  },
  {
      "speaker": "Elaine",
      "line": "I'm trying!"
  },
  {
      "speaker": "Testikov",
      "line": "HERE!  (He throws it out the window of the limo)  (On the beach Kramer is getting ready to hit a ball. He swings and misses. He looks for it in the air and the notes that it is still on the ground. Then he goes nuts) "
  },
  {
      "speaker": "Jerry",
      "line": "I did it for you."
  },
  {
      "speaker": "George",
      "line": "Yeah, but what did you have to tell her that for. You put me in a very difficult position, Marine Biologist! I'm very uncomfortable with this whole thing."
  },
  {
      "speaker": "Jerry",
      "line": "You know with all do respect I would think it's right up your alley."
  },
  {
      "speaker": "George",
      "line": "Well it's not up my alley! It's one thing if I make it up. I know what I'm doin, I know my alleys! You got me in the Galapagos Islands livin' with the turtles, I don't know where the hell I am."
  },
  {
      "speaker": "Jerry",
      "line": "Well you came in the other day with all that whale stuff, the squeaking and the squealing."
  },
  {
      "speaker": "George",
      "line": "Why couldn't you have made me an architect? You know I always wanted to pretend that I was an architect. Well I'm supposed to see her tomorrow, I'm gonna tell her what's goin on. Maybe she likes me for me.  (Kramer bangs into the room with his golf clubs) "
  },
  {
      "speaker": "Kramer",
      "line": "Hey."
  },
  {
      "speaker": "Jerry",
      "line": "Hey."
  },
  {
      "speaker": "Kramer",
      "line": "Hey ya want these (He throws down the golf clubs) I don't want em!"
  },
  {
      "speaker": "Jerry",
      "line": "What?"
  },
  {
      "speaker": "Kramer",
      "line": "I stink! I can't play! The ball is just sitting there, Jerry, and I can't hit it! I only hit one really good ball that went way out!"
  },
  {
      "speaker": "Jerry",
      "line": "Well what happened?"
  },
  {
      "speaker": "Kramer",
      "line": "I have no concentration!  (Kramer starts to scratch his body and rip his coat off) "
  },
  {
      "speaker": "Jerry",
      "line": "What, what, what's wrong with you?"
  },
  {
      "speaker": "Kramer",
      "line": "Sand, I can get rid of the sand. (Looking down his shirt) Look there is still some in here, it won't go away! Look I even got sand in the pockets!  (He empties his pocket and tons of sand falls out) "
  },
  {
      "speaker": "Jerry",
      "line": "Hey you're getting it all over the floor!  (Karma falls over as the phone rings) "
  },
  {
      "speaker": "Jerry",
      "line": "(to the phone)Hello....yeah....yes it is....really....oh. Can you hold on a second? (to George and Kramer) Hey listen to this, some woman found an electronic organizer, my name was in it, she wants me to help track down the owner."
  },
  {
      "speaker": "George",
      "line": "How'd she find it?"
  },
  {
      "speaker": "Jerry",
      "line": "It hit her in the head!  (Woman on the phone and Jerry are sitting in the coffee shop) "
  },
  {
      "speaker": "Corinne",
      "line": "So I am walkin' along, minding my own business when all off the sudden this thing come flying out off no were and cunks me right on the head."
  },
  {
      "speaker": "Jerry",
      "line": "Ya."
  },
  {
      "speaker": "Corinne",
      "line": "Yeah, So they took me to the hospital and they put me in this thing that fells like a coffin for forty-five minutes. Have you ever been in one of those things? You could go berserk in there!"
  },
  {
      "speaker": "Jerry",
      "line": "Well you have insurance..."
  },
  {
      "speaker": "Corinne",
      "line": "I wish!"
  },
  {
      "speaker": "Jerry",
      "line": "Unbelievable!"
  },
  {
      "speaker": "Corinne",
      "line": "Yeah.  (Organizer beeps) "
  },
  {
      "speaker": "Jerry",
      "line": "What is with this thing."
  },
  {
      "speaker": "Corinne",
      "line": "I don't know, it never shuts up. So anyway, you can see why I would be interested in finding this person."
  },
  {
      "speaker": "Jerry",
      "line": "Absolutely. You should not have to pay for that.  (Organizer beeps again) "
  },
  {
      "speaker": "Corinne",
      "line": "(shouting at the top of her lungs)Stop it! Stop it!"
  },
  {
      "speaker": "Jerry",
      "line": "Let me have a look at this thing."
  },
  {
      "speaker": "Corinne",
      "line": "Yeah know somebody told me they thought they saw it coming out of a limousine."
  },
  {
      "speaker": "Jerry",
      "line": "Typical rich people, using the world for their personal garbage can."
  },
  {
      "speaker": "Corinne",
      "line": "Boy am I lucky your name came up. I just pushed a button."
  },
  {
      "speaker": "Jerry",
      "line": "I would like to know what my name is doin in this creep's organizer to begin with."
  },
  {
      "speaker": "Corinne",
      "line": "Ya."
  },
  {
      "speaker": "Jerry",
      "line": "Who do I even know that would have been in a limousine yesterday anyway. OHHHH!  (In the hallway Elaine knocks on Kramer's door, he answers) "
  },
  {
      "speaker": "Kramer",
      "line": "Oh, hey."
  },
  {
      "speaker": "Elaine",
      "line": "Hey, \"great\" organizer that you gave me.  (Kramer is still itching cause the sand) "
  },
  {
      "speaker": "Kramer",
      "line": "Oh, you like it huh."
  },
  {
      "speaker": "Elaine",
      "line": "It wouldn't stop beeping in the car so Testikov through it out the window."
  },
  {
      "speaker": "Kramer",
      "line": "Oh."
  },
  {
      "speaker": "Elaine",
      "line": "I transferred everything in there. I threw out my old book. I'm lost now, Kramer.  (He goes crazy again) "
  },
  {
      "speaker": "Elaine",
      "line": "What, what is it?"
  },
  {
      "speaker": "Kramer",
      "line": "The sand, it's everywhere!"
  },
  {
      "speaker": "Elaine",
      "line": "OK I'll see you later.  (Kramer closes the door and Jerry walks up to his door) "
  },
  {
      "speaker": "Jerry",
      "line": "Oh, there you are!"
  },
  {
      "speaker": "Elaine",
      "line": "There you are!"
  },
  {
      "speaker": "Jerry",
      "line": "So?"
  },
  {
      "speaker": "Elaine",
      "line": "So?"
  },
  {
      "speaker": "Jerry",
      "line": "So what do you have to say for yourself?"
  },
  {
      "speaker": "Elaine",
      "line": "So what do you have to say for yourself?  (Jerry unlocks the door and they both walk in and close the door) "
  },
  {
      "speaker": "Jerry",
      "line": "Why should I have anything for say for myself?"
  },
  {
      "speaker": "Elaine",
      "line": "\"War-- What is it go for?\"!"
  },
  {
      "speaker": "Jerry",
      "line": "Ha Ha, who told you?"
  },
  {
      "speaker": "Elaine",
      "line": "Ha ha ha. Yuri Testikov, the Russian writer!"
  },
  {
      "speaker": "Jerry",
      "line": "You told Testikov that Tolstoy wanted to name his book \"War-- What Is IT Good For?\"?"
  },
  {
      "speaker": "Elaine",
      "line": "Ya know what happened?"
  },
  {
      "speaker": "Jerry",
      "line": "Can I take a guess?"
  },
  {
      "speaker": "Elaine",
      "line": "Please."
  },
  {
      "speaker": "Jerry",
      "line": "Oh I don't know, he threw your organizer out the window?  (Elaine pushes Jerry) "
  },
  {
      "speaker": "Elaine",
      "line": "What, how did you know that?"
  },
  {
      "speaker": "Jerry",
      "line": "Because I know who has it."
  },
  {
      "speaker": "Elaine",
      "line": "What, how did you find it?"
  },
  {
      "speaker": "Jerry",
      "line": "Because the woman who got hit in the head with it found my name in it, called me up, and we met!"
  },
  {
      "speaker": "Elaine",
      "line": "Well where is it, give it to me!"
  },
  {
      "speaker": "Jerry",
      "line": "I don't have it!"
  },
  {
      "speaker": "Elaine",
      "line": "Why not."
  },
  {
      "speaker": "Jerry",
      "line": "Because she's not returning it until she gets the money back for the hospital bill."
  },
  {
      "speaker": "Elaine",
      "line": "But I didn't do Testikov did it, he should have to pay for it!"
  },
  {
      "speaker": "Jerry",
      "line": "How much is Testikov getting from Pendman for this book?"
  },
  {
      "speaker": "Elaine",
      "line": "One million."
  },
  {
      "speaker": "Jerry",
      "line": "Well that's a start.  (George and Diane are walking on the beach) "
  },
  {
      "speaker": "George",
      "line": "Then of course with evolution the octopus lost the nostrils and took on the more familiar look that we know today. But if you look really closely you can still see a bump where the nose use to be."
  },
  {
      "speaker": "Diane",
      "line": "Really?"
  },
  {
      "speaker": "George",
      "line": "Yeah, but enough about fish I can talk about other things like... architecture...  (At the hotel that Testikov is staying at) "
  },
  {
      "speaker": "Jerry",
      "line": "You know what room Testikov's in?"
  },
  {
      "speaker": "Elaine",
      "line": "Ya, 308. I'm crazy for doing this!"
  },
  {
      "speaker": "Jerry",
      "line": "Well, you want to get your organizer back don't you?"
  },
  {
      "speaker": "Elaine",
      "line": "Why are you so interested, you want to take her out?"
  },
  {
      "speaker": "Jerry",
      "line": "You know when Super Man saves someone no one asks if he's trying to hit on her!"
  },
  {
      "speaker": "Elaine",
      "line": "Well you're not Super Man."
  },
  {
      "speaker": "Jerry",
      "line": "Well you're not Louis Lane."
  },
  {
      "speaker": "Elaine",
      "line": "Oh. Listen, you have the tape-recorder."
  },
  {
      "speaker": "Jerry",
      "line": "Ya, are you sure you want to do this."
  },
  {
      "speaker": "Elaine",
      "line": "Ya I got to get Testikov on tape. If this woman ends up in the \"New England Journal Of Medicine\" I'm not going to pay for it."
  },
  {
      "speaker": "Jerry",
      "line": "Ah, here she comes.  (Corinne enters through the hotel door) "
  },
  {
      "speaker": "Jerry",
      "line": "Hi, Elaine, this is Corinne."
  },
  {
      "speaker": "Elaine",
      "line": "Hi, you got the organizer?  (The organizer starts to beep as Corinne opens her coat to show the organizer in her inside coat pocket) "
  },
  {
      "speaker": "Jerry",
      "line": "All right lets go. We'll meet you back here in ten minutes hopefully with the money.  (At the beach George and Diane are still walking) "
  },
  {
      "speaker": "Diane",
      "line": "Your parents must be so proud of you, George."
  },
  {
      "speaker": "George",
      "line": "Oh, they're busting!  (there is a large crowd of men and women) "
  },
  {
      "speaker": "Diane",
      "line": "What are those people doing over there?  (In Testikov's hotel room there is a knock and he goes to answer it. He opens it up and it is Jerry and Elaine) "
  },
  {
      "speaker": "Testikov",
      "line": "(In a loud and cranky voice) What, What is it! Oh! Come in. That is if you can spare a minute from your busy schedule! And you bring guest for my entertainment?"
  },
  {
      "speaker": "Elaine",
      "line": "Um, yes this is my friend Jerry. He accompanied me, ya know, single woman alone in a big city could be dangerous."
  },
  {
      "speaker": "Jerry",
      "line": "Yes. That's why I where these sneakers, in case of any trouble and zip, I'm gone."
  },
  {
      "speaker": "Testikov",
      "line": "Yeah, Yeah. The sneakers. The Americans and their sneakers. Always running from something. Well, sit stop running, two minutes and I'll give you the latest manuscript!  (They both sit down and Jerry picks out a very large book from the coffee table) "
  },
  {
      "speaker": "Jerry",
      "line": "Oh! Ramscy<?>, great great book if I my say so sir. I almost read the whole thing.  (Corinne is standing in the hotel lobby smoking while the organizer is still beeping) "
  },
  {
      "speaker": "Corinne",
      "line": "What!"
  },
  {
      "speaker": "Hotel Clerk",
      "line": "If you can't thing off I'm going to have to ask you to leave."
  },
  {
      "speaker": "Corinne",
      "line": "I'm waitin for two people!"
  },
  {
      "speaker": "Hotel Clerk",
      "line": "Well you can wait for them outside."
  },
  {
      "speaker": "Corinne",
      "line": "Yeah I guess I'd better. Wouldn't want to take any attention away from the hookers!"
  },
  {
      "speaker": "Hotel Clerk",
      "line": "All right, All right. Out, Out."
  },
  {
      "speaker": "Corinne",
      "line": "What ever you say Cro..w-well!  (On the beach George and Diane are standing with the crowd) "
  },
  {
      "speaker": "Diane",
      "line": "What's going on over here?"
  },
  {
      "speaker": "Woman at beach",
      "line": "There is a beached whale, she's dying."
  },
  {
      "speaker": "Voice",
      "line": "Is anyone here a marine biologist?  (In Testikov's room) "
  },
  {
      "speaker": "Testikov",
      "line": "Here is the latest draft. I see you next week. Same time, same place. On time please."
  },
  {
      "speaker": "Jerry",
      "line": "It was nice meeting you, real pleasure!"
  },
  {
      "speaker": "Elaine",
      "line": "Oh, by the way Mr. Testikov do you remember the other day when we were in the limo and my organizer started beeping and you threw it out the window?"
  },
  {
      "speaker": "Testikov",
      "line": "How could I forget?"
  },
  {
      "speaker": "Elaine",
      "line": "Well would you believe that it hit actually somebody in the head."
  },
  {
      "speaker": "Jerry",
      "line": "Right in the head!"
  },
  {
      "speaker": "Elaine",
      "line": "Boing!  (The tape-recorder in Elaine's purse starts to squeak) "
  },
  {
      "speaker": "Testikov",
      "line": "(Shouting)What is that noise!"
  },
  {
      "speaker": "Elaine",
      "line": "Um ,nothing."
  },
  {
      "speaker": "Testikov",
      "line": "What is the noise!  (He grabs the purse)"
  },
  {
      "speaker": "Elaine",
      "line": "Hey that's my purse! (He pulls out the recorder) "
  },
  {
      "speaker": "Testikov",
      "line": "A recorder!"
  },
  {
      "speaker": "Elaine",
      "line": "No that's a radio.."
  },
  {
      "speaker": "Testikov",
      "line": "You were spying on me!"
  },
  {
      "speaker": "Elaine",
      "line": "No I wasn't.  (He throws the recorder out of the hotel window)  (Corinne is standing outside of the hotel and looks up to see the tape-recorder falling to hit her in the head)  (Kramer is standing at his window knocking his boot on the windowsill trying to get the sand out but he drops it)  (Newman is walking down the street whistling but he stops and looks up and he yells as the boat hits him in the head)  (At the beach everyone is yelling at George) "
  },
  {
      "speaker": "Crowd",
      "line": "Come on! Save the whale! Hurry up it's gonna die!"
  },
  {
      "speaker": "Diane",
      "line": "Save the whale George... for me.  (He turns and throws his hat down. He walks into the ocean)  (At the coffee shop Jerry and Kramer are awaiting the story) "
  },
  {
      "speaker": "George",
      "line": "So I started to walk into the water. I won't lie to you boys, I was terrified! But I pressed on and as I made my way passed the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment I was a marine biologist!  (Elaine enters and sits down) "
  },
  {
      "speaker": "Elaine",
      "line": "George I was just reading this thing in the papers, it's amazing!"
  },
  {
      "speaker": "George",
      "line": "I know I was just telling them the story."
  },
  {
      "speaker": "Kramer",
      "line": "Come on George, finish the story."
  },
  {
      "speaker": "George",
      "line": "The sea was angry that day my friends, like an old man trying to return soup at a deli!  (Jerry gives Kramer a \"what the h-\" glance) "
  },
  {
      "speaker": "George",
      "line": "I got about fifty-feet out and then suddenly the great beast appeared before me. I tell ya he was ten stories high if he was a foot. As if sensing my presence he gave out a big bellow. I said, \"Easy big fella!\" And then as I watched him struggling I realized something was obstructing his breathing. From where I was standing I could see directly into the eye of the great fish!"
  },
  {
      "speaker": "Jerry",
      "line": "Mammal."
  },
  {
      "speaker": "George",
      "line": "Whatever."
  },
  {
      "speaker": "Kramer",
      "line": "Well, what did you do next?"
  },
  {
      "speaker": "George",
      "line": "Then from out of nowhere a huge title wave lifted, tossed like a cork and I found myself on top of him face to face with the blow-hole. I could barely see from all of the waves crashing down on top of me but I knew something was there so I reached my hand and pulled out the obstruction!  (George pulls out of the inside pocket a golf ball)  (Jerry and George just stare at Kramer) "
  },
  {
      "speaker": "Kramer",
      "line": "What is that a Titleist? A hole in one eh."
  },
  {
      "speaker": "Jerry",
      "line": "Well the crowd most have gone wild!"
  },
  {
      "speaker": "George",
      "line": "Oh yes they did Jerry they were all over me. It was like Rocky 1. Diane came up to me, threw her arms around me, and kissed me. We both had tears streaming down our faces. I never saw anyone so beautiful. It was at that moment I decided to tell her I was not a marine biologist!"
  },
  {
      "speaker": "Jerry",
      "line": "Wow! What'd she say?"
  },
  {
      "speaker": "George",
      "line": "She told me to \"Go to hell!\" and I took the bus home."
  },
  {
      "speaker": "Jerry",
      "line": "All right lets go."
  },
  {
      "speaker": "Elaine",
      "line": "Are you in a bad mood?"
  },
  {
      "speaker": "Jerry",
      "line": "No, I just got my laundry back."
  },
  {
      "speaker": "Elaine",
      "line": "Ohhh! GoldenBoy?"
  },
  {
      "speaker": "Jerry",
      "line": "He didn't make it."
  },
  {
      "speaker": "Elaine",
      "line": "I'm sorry."
  },
  {
      "speaker": "Jerry",
      "line": "This is GoldenBoy's son, BabyBlue."
  },
  {
      "speaker": "Kramer",
      "line": "What's with you?"
  },
  {
      "speaker": "George",
      "line": "Sand. It's everywhere (End) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   <Spellchecked and reformatted by Mike \"The News Guy\">    Episodes Overview | Scripts | Contact Copyright 2002-2011 SeinfeldScripts.com"
  }
];