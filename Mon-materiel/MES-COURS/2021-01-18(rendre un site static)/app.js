/* 
pour rendre un site static tu fais ceci:

app.use(express.static(path.join(__dirname,"public")))

- le fichier index.html dans le dossier public sera accessible en faisant : localhost:port
- lefichier blog.html dans le dossier public sera accessible en faisant: localhost:port/blog.html et ainsi de suite

*/