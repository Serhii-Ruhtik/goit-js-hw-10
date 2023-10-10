console.log(10),fetch("https://rickandmortyapi.com/api/character").then((function(o){if(console.log(o),!o.ok)throw new Error("Вимушена помилка статусу: ".concat(o.status));return o.json()})).then((function(o){return console.log(o)})).catch((function(o){return console.log(o)}));
//# sourceMappingURL=index.b66aa0b2.js.map
