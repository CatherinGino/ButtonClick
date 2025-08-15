const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = modalOverlay.querySelector("h2");
const modalText = modalOverlay.querySelector("p");

const modalContent = {
  "btn-1": {
    title: "The type of LOVE",
    text: "The type of love where we don't need words to communicate and one could read the other's silence. That is exactly the type of love you deserve. A person who stays by your side no matter what and on days when you don't feel like yourself, their hug is all it needs to make you feel alive again. <3",
  },
  "btn-2": {
    title: "Beauty in everything",
    text: "If you see beauty in something - don't wait for others to agree. Not everyone is blessed with the ability to see beauty in everything. ",
  },
  "btn-3": {
    title: "Being heartless",
    text: "Everytime I tried to be the heartless one - that corner of my heart screamed `It's not you, it's not you`. Don't change who you are as a person - just know that you are rare, not everyone is lucky enough to be you.",
  },
  "btn-4": {
    title: "You did it anyway",
    text: "The courage it took to get out of the bed each morning to face the same things over and over again was enourmous. Don't forget - you overcame 100% of your worst days and you are still perfectly alright to face more of that, I trust in you.",
  },
  "btn-5": {
    title: "Courage",
    text: "I hope one day you have the courage to run away from everything that makes you miserable. I trust in you.",
  },
  "btn-6": {
    title: "I am Sorry",
    text: " `To whom do I owe the biggest apology?` - ``No one's been crueler than I've been to me.``   I promise I will treat you better ~ Trust me, and just give me a chance.",
  },
  "btn-7": {
    title: "Searching for LOvE",
    text: "Somewhere someone is searching for you in every person they meet. So don't you dare settle for someone who doesn't deserve you, have some self-respect. Show yourself the love that you give out.",
  },
  "btn-8": {
    title: "Everything or Nothing",
    text: "This is a mindset that the younger generation is going behind and here is why it is toxic - more and more people are brave enough to die but not brave enough to live the way they like: Expectations shapes the way they live and they think suicide is the only escape, I agree it's hard to live but I want you to live the way you love with courage. If you are brave enough to think about suicide then think about living the life you actaully want to live for once - the kind of live without external expectations.",
  },
  "btn-9": {
    title: "The love we desire",
    text: "I was desired but never loved, i was a choice but never chosen, i was the maybe but never the one.   But it's not the end - Mine will come for me.",
  },
  "btn-10": {
    title: "I am Cursed",
    text: "Cursed are those who feel oceans but can express just a drop - what can I do? There are not enough words to explain it ~ it's a miracle.",
  },
  "btn-11": {
    title: "Being myself is so complex",
    text: "I enjoy going out, but not too oftern. I like talking, but not to everyone. I like company, but need alone time. I hate small talk, but love deep chats. I am outgoing, but not with everyone. I find people exciting and exhausting - Guess I am just a introvert.",
  },
  "btn-12": {
    title: "Be unreasonable",
    text: "The intuitive mind is a sacred gift and the rational mind is a faithful servant. We have created a society that honors the servant and has forgotten the gift. - Albert Einstein. Before you decide to play safe know that Nobody successful was realistic.They were unrealistic and persistent. Let's try to be unreasonable once.",
  },
  "btn-13": {
    title: "Why fear?",
    text: "There were two reasons I was scared to let people in, The damage they could do, and the damage they could find. It's scary to trust people when everyone we trusted once broke us."
  },
  "btn-14": {
    title: "Stay away from that type of people",
    text: "Some people talk like they don't want to lose you, but act like they don't want to keep you. - If you ask me it's better to keep your distance from all types of people.",
  },
  "btn-15": {
    title: "Lies",
    text: "The dilemma you feel when someone's actions are hurting you but their words are comforting you at the same time. Don't be so hard on yourself for being there - it was the best you could have done at that time with what you know. ``Accept that somethings can't be fixed``",
  },
  "btn-16": {
    title: "Found yourself?",
    text: "`Sometimes you think you want to disappear, but all you really want is to be found.` - what a paradox? we want to be loved but we are scared of being seen - the fear, vulnerability",
  },
};

Object.keys(modalContent).forEach((btnClass) => {
  document.querySelectorAll(`.${btnClass}`).forEach((btn) => {
    btn.addEventListener("click", () => {
      modalTitle.textContent = modalContent[btnClass].title;
      modalText.textContent = modalContent[btnClass].text;
      modalOverlay.style.display = "flex";
    });
  });
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});
