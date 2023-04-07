import { objJSON } from "./b.js";

objJSON.push({
    "name":"John",
    "status":1,
})

// export const newJSON = [objJSON, {
//     "name":"John",
//     "status":1,
// }];

export const newJson = objJSON.push({
    "name":"Star",
    "status":1,
});

console.log("New",newJSON);

console.log(objJSON);