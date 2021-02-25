const fs = require("fs");
fs.writeFile("./folder1/a.txt", "je suis un cammerounais et toi", (err) => {
  if (err) {
    throw error;
  } else console.log("c'est fini");
});

fs.writeFile("./folder1/b.txt", "mon deuxieme file", (err) => {
  if (err) {
    throw error;
  } else console.log("c'est fini");
});

const fse = require("fs-extra");

/* const srcDir = `path/to/file`;
const destDir = `path/to/destination/directory`; */

// To copy a folder or file
fse.copy("folder1", "folder2", function (err) {
  if (err) {
    console.error(err);
    {
      overwrite: true;
    } // add if you want to replace existing folder or file with same name
  } else {
    console.log("success!");
  }
});
// destination will be created or overwritten by default.
/* fs.copyFile("a.txt", "b.txt", (err) => {
  if (err) throw err;
  console.log("File was copied to destination");
}); */
/* fs.appendFileSync("titi.txt", " ceci est le deuxieme text", (err) => {
  if (err) {
    throw err;
  } else console.log("je viens d'ajouter un nouveau text");
}); */
/* fs.appendFileSync("titi.txt", " ceci est le deuxieme text");
const fs1 = new fs.Stats();
console.log(__filename.trim()); */
/* const path = require("path");

fs.readdir(
  __dirname,
  { encoding: "utf-8", withFileTypes: false },
  (err, files) => {
    if (err) console.log(err);
    else {
      files.forEach((file) => {
        console.log(path.parse(file).name);
      });
    }
  }
); */
/* let files = "titi.txt"
fs.access(files, fs.constants.W_OK, (err) => {
    console.log(`${files} ${err ? 'is not writable' : 'is writable'}`);
  }); */

/* fs.rename("titi.txt", "toto.txt", (err) => {
  if (err) throw err;
  else console.log("le changement de nom de fichier est terminer");
});
console.log(__dirname);
fs.mkdir("newfolder", { recursive: true }, (err) => {
  if (err) throw err;
  else console.log("the new folder has been created");
}); */

/* fs.rmdir("newfolder", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("j'ai supprimer");
  }
}); */
