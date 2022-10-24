export default class ScoreboardView{
    constructor(root, nameOne, nameTwo, onControlButtonClicked) {
        this.root = root;
        console.log(this.root);
        this.root.innerHTML = `
            
        
            <div class="d-flex flex-row justify-content-center pt-3 " style="gap: 120px">
                <button class="btn nameOne the-btn" data-for-player="one"><img src="img/zyro-image.png" style="width: 200px" alt=""></button>
                <button class="btn nameTwo the-btn" data-for-player="two"><img src="img/zyro-image%20(1).png" style="width: 200px" alt=""></button>
            </div>
            <div class="d-flex flex-row justify-content-between mt-3" style="margin: 300px">
                <p class="display-1 score-one the-score fw-semibold" data-for-player="one">0</p>
                <p class="display-1 score-two the-score fw-semibold" data-for-player="two">0</p>
            </div>
            <div class="d-flex flex-row justify-content-" style="gap: 300px;">
            <button class=" the-btn display-6 text-white bg-danger px-3" data-for-player="one">-</button>
           <button class=" the-btn display-6 text-white bg-danger px-3" data-for-player="two">-</button>
           </div>`;

        this.root.querySelectorAll(".the-btn").forEach(controlButton =>{
            controlButton.addEventListener("click", () =>{
                const direction = controlButton.textContent === "-" ? "minus" : "plus";
                const player = controlButton.closest(".the-btn").dataset.forPlayer;

               onControlButtonClicked(player, direction);
            });
        });
    }

    update(playerOneScore, playerTwoScore) {
        this.root.querySelector(".the-score[data-for-player='one']").textContent = playerOneScore;
        this.root.querySelector(".the-score[data-for-player='two']").textContent = playerTwoScore;
    }
}