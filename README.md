# vueapp
Cette petite app à pour objectif de deployer vuejs sur heroku

## Project setup
1. Installer vuejs ubuntu 20.04 et verifier sa version
```
cd ~
curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs
node --version
npm --version

```
2. Créer votre app 
```
vue create app
```
3. Créer un fichier server.js dans votre app et copiez ce contenu
```
# c'est une application simple qui affiche hello word

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
```

### Installation de express
```
npm install express --save
```
### Compiler votre app pour la production
```
npm run build
```

### Github
1. Au préalable vous devriez avoir un compte github ou le créer.
2. Créer un repository avec le nom de votre app ou autre.

```
git init
git commit -m "first commit"
git add -A
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/votre-compte-git/votre-repository.git
git push -u origin main
```

### Heroku
1. Au préalable vous devriez avoir un compte heroku ou le créer.
2. Installer votre heroku cli
```
sudo snap install --classic heroku
```
3. Connecter vous à votre compte heroku
```
 heroku login
```
3. Création et deploiement de votre app sur heroku
```
# Crée votre repository sur heroku
heroku create

# remote votre repository crée à l'instant.
heroku git:remote -a "votre repository"
git remote -v
git push heroku main
```
4. Connecter vous à votre application sur heroku.
vous trouverez le lien dans le settings de votre repository.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
