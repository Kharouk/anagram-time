import fs from "fs";

const data = fs.readFileSync(__dirname + "/wordlist.txt").toString();

export default data;
