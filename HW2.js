const person = {
    name: "David",
    city: "London",
    age: 30,
};

// 2.1번
for (let key in person) {
    if (typeof person[key] === "string") {
        person[key] = person[key] + " (확인됨)";
    }
}

console.log(person);

// 2.2번
const words = ["apple", "banana", "cherry", "fig", "grape", "melon"];
const filteredWords = [];

for (let word of words) {
    if (word.length >= 5) {
        filteredWords.push(word);
    }
}

console.log(filteredWords); //출력 예시에는 apple이 빠져있었지만 apple까지 있는게 맞는 것 같아서 그렇게 진행했습니다!
