// Utilisation de l'API Fetch
/*
    1/ Collecter la donnée (souvent en JSON)
    2/ Si elle est bonne, la dé-jsonifier
    3/ utiliser les données
    4/ Gérer les erreurs
*/

// on va récuperer les images sur picsum : je vais collecter l'url de la requête: adresse https
fetch("https://picsum.photos/v2/list?page=2&limit=3")
.then(function(collectedImages) {
    if (collectedImages.ok) {
        return collectedImages.json();   //je retourne les images que je transforme en js avec la méthode .js
    } else {
        throw new Error("Le serveur n'a pas répondu.")
    }
})
.then(function(jsImages) {
    for (let jsImage of jsImages) {                                              //je boucle sur le tableau d'objets avec let ...of
        document.body.innerHTML += `<img src="${jsImage.download_url}">`;       //je récupère la propriété download_url, j'ajoute le html au body
    }
})