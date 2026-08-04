const user = { name: 'Азрет', skills: ['JS'] };
const copy = { ...user }; // Поверхностная копия

copy.skills.push('React'); 

// Оба объекта изменились, потому что skills указывает на один массив в памяти!
console.log(user.skills); // ['JS', 'React'] — мутация!ƒ

const deepCopy = structuredClone(user);
console.log(user);
console.log(deepCopy);