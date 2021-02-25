/* 

//Function connection

function connect() {
    return new Promise((resolve, reject) => {
        if(mongoose.connection.readyState === 1) {
            resolve();
        } else {
            mongoose.connect(connectionString, {
                useUnifiedTopology: true,
                useCreateIndex: true,
                useNewUrlParser: true
            }).then(() =>{
                resolve()
            }).catch(error => {
                reject(error)
            })
        }
    })
}


// Add Document


function addComment(name, email, comment, commentDate) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            // create new comment instance from Comment
            // using the parameters
            const newComment = new Comment({
                name, // name: name ''
                email,
                comment,
                commentDate
            });
            // save data to database
            newComment.save().then(result => {
                console.log(result);
                resolve();
            }).catch(error => {
                reject(error);
            })
        }).catch(error => {
            reject(error);
        })
    })
}


// Get Document 

function getComments() {
    return new Promise((resolve, reject) => {
        // first connect to data base
        connect().then(() => {
            BankInfoDB.find().then(comments => {
                resolve(comments);
        }).catch(error => {
            reject(error);
        })
        }).catch(error => {
            reject(error);
        })
        
    })
}

*/