let myjokes = [
  {
    "joke": "A SQL statement walks into a bar and sees two tables.\nIt approaches, and asks \"may I join you?\"",

  },
  {

    "joke": "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",

  },
  {

    "setup": "Why is crucified Jesus always depicted with six-pack abs?",
    "delivery": "He did CrossFit.",

  },
  {

    "setup": "My first high-school football game was a lot like my first time having sex...",
    "delivery": "I was bloody and sore at the end, but at least my dad came.",

  },
  {

    "setup": "Where do sick cruise ships go to get healthy?",
    "delivery": "The dock!",

  },
  {

    "joke": "Debugging: Removing the needles from the haystack.",

  },
  {

    "setup": "Why did the database administrator leave his wife?",
    "delivery": "She had one-to-many relationships.",

  },
  {
    "joke": "My wife is really mad at the fact that I have no sense of direction.\nSo I packed up my stuff and right.",

  },
  {

    "setup": "Why does Santa go down the chimney?",
    "delivery": "Because it soots him!",

  },
  {
    "setup": "Why do German showers have 11 holes?",
    "delivery": "Because Jews only have 10 fingers.",

  },
  {
    "joke": "Eight bytes walk into a bar.\nThe bartender asks, \"Can I get you anything?\"\n\"Yeah,\" reply the bytes.\n\"Make us a double.\"",

  },
  {

    "setup": "I'm not saying my son is ugly...",
    "delivery": "But on Halloween he went to tell the neighbors to turn down their TV and they gave him some candy.",

  },
]

let index = Math.floor(Math.random() * (myjokes.length - 1))
console.log(index)
joke.innerHTML = myjokes[index].joke;