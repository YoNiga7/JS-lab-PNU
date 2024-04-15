var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  var name = names[i];

  if (name.charAt(0).toLowerCase() === 'j') {
    speakGoodBye(name); 
  } else {
    speakHello(name); 
  }
}
var names1 = ["Ava", "Liam", "Sophia", "Noah", "Emma", "Jackson", "Olivia", "Lucas", "Isabella", "Ethan"];
console.log("Якщо перша літера імені j або J , виводимо 'Goodbye', інакше - 'Hello'.");

for (var i = 0; i < names1.length; i++) {
    var name = names1[i];
    var lastLetter = name.charAt(name.length - 1).toLowerCase(); 
  
    if ('aeiou'.indexOf(lastLetter) !== -1) {
      speakHello(name); 
    } else {
      speakGoodBye(name); 
    }
  }
  
  console.log("Якщо остання літера імені голосна (a, e, i, o, u), виводимо 'Hello', інакше - 'Goodbye'.");