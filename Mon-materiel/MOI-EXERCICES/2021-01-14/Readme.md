Créez une application bancaire en ligne simple qui comprend les fonctionnalités suivantes:


1- Il existe une fonction d'authentification qui prend [IBAN & code PIN] et renvoie un "numéro de jeton" (cela peut aussi être un nombre aléatoire).

    Par exemple: curl -d "IBAN = DE000000000 & picode = 1234" -X POST http: // localhost: 7000 / authentication

2- Créez une fonction qui prend le jeton généré et un montant donné, et vous permet de transférer de l'argent sur votre compte bancaire (augmentez votre solde actuel)

    Par exemple: curl -d "token = {generatedToken} & amount = 1000" -X POST http: // localhost: 7000 / transfer


3- Créez une fonction qui prend le jeton de génération et un montant donné pour retirer ce montant de votre solde actuel:

   Par exemple: curl -d "token = {generatedToken} & amount = 1000" -X POST http: // localhost: 7000 / remove


4- Créez une fonction qui prend le jeton de génération et présente votre solde actuel (en prenant le jeton seul):

      Par exemple: curl -d "token = {generatedToken}" -X POST http: // localhost: 7000 / balance


















//------- Create a simple online banking application that comprises the following features:


1- There is an authentication function that takes [IBAN & pincode] and returns a "token number" (it can be a random number too).

    For instance:  curl -d "IBAN=DE000000000&picode=1234" -X POST  http://localhost:7000/authentication

2- Create a function that takes the generated token and a given amount, and allows you to transfer some money to your bank account (increase your current balance)

    For instance:  curl -d "token={generatedToken}&amount=1000" -X POST  http://localhost:7000/transfer


3- Create a function that takes the generate token and a given amount   to withdraw this amount from your current balance:

   For instance:  curl -d "token={generatedToken}&amount=1000" -X POST  http://localhost:7000/withdraw


4- Create a function that takes the generate token and presents your current balance (by taking the token alone):

      For instance:  curl -d "token={generatedToken}" -X POST  http://localhost:7000/balance