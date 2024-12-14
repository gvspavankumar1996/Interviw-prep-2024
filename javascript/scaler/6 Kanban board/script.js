let addBtn = document.querySelector(".add-btn");
let deleteBtn = document.querySelector(".delete-btn");
let modal = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
let toolboxColors = document.querySelectorAll(".color-box");

let modalPriorityColor = "lightpink";
let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";
let modelopen = false;
let removeTaskFlag = false;
let allPriorityColorValues = ["lightpink", "lightgreen", "lightblue", "black"];
let ticketsArr = [];

addBtn.addEventListener("click", () => {
  if (modelopen) {
    modelopen = false;
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
    modelopen = true;
  }
});

modal.addEventListener("keydown", (e) => {
  let key = e.key;

  if (key == "Enter") {
    if (e.target.value.length > 0) {
      createTicket(e.target.value);
    }
  } else {
    console.log("Shift key not pressed");
  }
});

function createTicket(value) {
  let ticketCont = document.createElement("div");
  ticketCont.classList.add("ticket-cont");

  ticketCont.innerHTML = `
        <div class="ticket-color ${modalPriorityColor}"></div>

        <div class="ticket-id">123</div>

        <div class="ticket-task">${value}</div>

        <div class="ticket-lock">
        <i class="fa-solid fa-lock"></i>
        </div>
        `;
  mainCont.appendChild(ticketCont);
  modelopen = false;
  modal.style.display = "none";
  handleLock(ticketCont);
  handleRemoval(ticketCont);
  handleColor(ticketCont);
}

allPriorityColors.forEach((div) => {
  div.addEventListener("click", function () {
    document.querySelector(".priority-color.active").classList.remove("active");

    modalPriorityColor = this.classList[0];
    this.classList.add("active");
  });
});

function handleLock(ticket) {
  let ticketLockElem = ticket.querySelector(".ticket-lock");
  let ticketLockIcon = ticketLockElem.children[0];
  let ticketTaskArea = ticket.querySelector(".ticket-task");

  ticketLockIcon.addEventListener("click", function () {
    if (ticketLockIcon.classList.contains(lockClass)) {
      ticketLockIcon.classList.remove(lockClass);
      ticketLockIcon.classList.add(unlockClass);
      ticketTaskArea.setAttribute("contenteditable", "true");
    } else {
      ticketLockIcon.classList.remove(unlockClass);
      ticketLockIcon.classList.add(lockClass);
      ticketTaskArea.setAttribute("contenteditable", "false");
    }
  });
}

deleteBtn.addEventListener("click", function () {
  removeTaskFlag = !removeTaskFlag;
  if (removeTaskFlag === true) {
    alert("delete button activated!");
    deleteBtn.style.backgroundColor = "red";
  } else {
    deleteBtn.style.backgroundColor = "#3d3d3d";
    alert("delete button deactivated!");
  }
});

function handleRemoval(ticket) {
  ticket.addEventListener("click", function () {
    if (!removeTaskFlag) return;
    ticket.remove();
  });
}

function handleColor(ticket) {
  let ticketColorBand = ticket.querySelector(".ticket-color");

  ticketColorBand.addEventListener("click", function () {
    let currentColor = ticketColorBand.classList[1];
    let currentColorIndex = allPriorityColorValues.indexOf(currentColor);
    let newTicketColor =
      allPriorityColorValues[
        (currentColorIndex + 1) % allPriorityColorValues.length
      ];

    ticketColorBand.classList.add(newTicketColor);
    ticketColorBand.classList.remove(currentColor);

    // if (currentColorIndex === -1) {
    //   return;
    // } else if (currentColorIndex === allPriorityColorValues.length - 1) {
    //   ticketColorBand.classList.add(allPriorityColorValues[0]);
    //   ticketColorBand.classList.remove(
    //     allPriorityColorValues[currentColorIndex]
    //   );
    // } else {
    //   ticketColorBand.classList.add(
    //     allPriorityColorValues[currentColorIndex + 1]
    //   );
    //   ticketColorBand.classList.remove(
    //     allPriorityColorValues[currentColorIndex]
    //   );
    // }
  });
}

for (let i = 0; i < toolboxColors.length; i++) {
  toolboxColors[i].addEventListener("click", () => {
    let selectedToolBoxColor = toolboxColors[i].classList[0];
    let allTickets = document.querySelectorAll(".ticket-cont");
    let filteredTickets = allTickets.filter((tkt) => {
      console.log(tkt,"tkt")
      return tkt;
    });
  });
}
