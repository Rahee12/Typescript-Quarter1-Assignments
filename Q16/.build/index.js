"use strict";
const guestList = [
  {
    name: "Albert Einstein",
    message: "We would be honored if you, Albert Einstein, could join us for dinner. Your wisdom and brilliance would be a great addition to our conversation. Please let us know if you are available."
  },
  {
    name: "Maya Angelou",
    message: "We would be delighted if you, Maya Angelou, could come to dinner. Your words and spirit have touched so many, and we would love to learn from you. Please let us know if you're available."
  },
  {
    name: "Nelson Mandela",
    message: "We would be honored to have you, Nelson Mandela, join us for dinner. Your leadership and courage have inspired us all, and we would be privileged to hear your thoughts. Please let us know if you can attend."
  }
];
console.log("Good news! We found a bigger dinner table.\n");
const newGuests = [
  {
    name: "Malala Yousafzai",
    message: "We would be honored if you, Malala Yousafzai, could come to dinner. Your courage and activism for girls' education has inspired us all. Please let us know if you're available."
  },
  {
    name: "Stephen Hawking",
    message: "We would be honored if you, Stephen Hawking, could join us for dinner. Your contributions to science and human understanding are truly remarkable. Please let us know if you can attend."
  },
  {
    name: "Marie Curie",
    message: "We would be delighted if you, Marie Curie, could come to dinner. Your pioneering work in the field of radioactivity has paved the way for many scientific breakthroughs. Please let us know if you're available."
  }
];
guestList.unshift(newGuests[0]);
guestList.splice(2, 0, newGuests[1]);
guestList.push(newGuests[2]);
guestList.forEach((guest) => {
  const message = `Dear ${guest.name},

${guest.message}

Sincerely,
The Hosts
`;
  console.log(message);
});
//# sourceMappingURL=index.js.map
