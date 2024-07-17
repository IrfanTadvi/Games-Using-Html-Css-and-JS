let boxes = document.querySelectorAll(".box");
let hide = document.querySelector(".win");
let reset = document.querySelector(".reset");
let newgame = document.querySelector(".newgame");
hide.style.backgroundColor = "#1679AB";
hide.style.fontSize = "30px";
hide.classList.add("hide");
newgame.classList.add("hide");
let firstplayer = true;
let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (firstplayer) {
            box.innerText = "X";
            firstplayer = false;
        } else {
            box.innerText = "O";
            firstplayer = true;
        }
        count++;
        for (let box1 of boxes) {
            box.disabled = true;
            if (count !== 9) {
                checkwinner();
            } else {
                console.log("Draw");
                hide.classList.remove("hide");
                hide.innerText = "It's a Draw!";
                newgame.classList.remove("hide");
                disablebtn();
            }
        }
    });
});

const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];

reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    hide.classList.add("hide");
    hide.innerText = "";
    firstplayer = true;
    count = 0;
});

newgame.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    newgame.classList.add("hide");
    hide.classList.add("hide");
    firstplayer = true;
    count = 0;
});

const disablebtn = () => {
    for (let box1 of boxes) {
        box1.disabled = true;
    }
}

const checkwinner = () => {
    for (let pattern of winpattern) {
        let post1 = boxes[pattern[0]].innerText;
        let post2 = boxes[pattern[1]].innerText;
        let post3 = boxes[pattern[2]].innerText;
        if (post1 != "" && post2 != "" && post3 != "") {
            if (post1 == post2 && post2 == post3) {
                console.log("Winner");
                hide.classList.remove("hide");
                hide.innerText = `Congratulations, Winner is ${post1}`;
                newgame.classList.remove("hide");
                disablebtn();
                return;
            }
        }
    }
};
