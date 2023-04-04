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
const guestWhoCantMakeIt = "Maya Angelou";
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
const newGuest = "Malala Yousafzai";
guestList.splice(1, 1, {
  name: newGuest,
  message: `We would be honored if you, ${newGuest}, could come to dinner. Your courage and activism for girls' education has inspired us all. Please let us know if you're available.`
});
for (const guest of guestList) {
  console.log(`Dear ${guest.name},

${guest.message}

Sincerely,
The Hosts`);
}
//# sourceMappingURL=index.js.map
