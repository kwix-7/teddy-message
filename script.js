function nextScene(sceneNumber) {

    const scenes = document.querySelectorAll(".scene");

    scenes.forEach(function(scene) {
        scene.classList.remove("active");
    });

    document.getElementById("scene" + sceneNumber).classList.add("active");
}
