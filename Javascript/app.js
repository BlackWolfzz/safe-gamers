var communitiesRef = firebase.database().ref('communities');
communitiesRef.once("value", (snapshot) => {
    snapshot.forEach((element) => {
        console.log(element.val());
    })
})