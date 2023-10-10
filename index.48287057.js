console.log(10),fetch("https://rickandmortyapi.com/api/character").then((o=>{if(console.log(o),!o.ok)throw new Error(`Вимушена помилка статусу: ${o.status}`);return o.json()})).then((o=>console.log(o))).catch((o=>console.log(o)));
//# sourceMappingURL=index.48287057.js.map
