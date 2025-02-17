document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("surprise").classList.remove("hidden");
});

document.getElementById("noBtn").addEventListener("click", function() {
    alert("Oh no! 😭 Jeg vet hvor du bor.!");
});
