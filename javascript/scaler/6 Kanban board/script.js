let addBtn = document.querySelector('.add-btn');
let modal = document.querySelector('.modal-cont');
let mainCont = document.querySelector('.main-cont');
let allPriorityColors = document.querySelectorAll('.priority-color');
let modalPriorityColor = 'lightpink';
let lockClass = 'fa-lock';
let unlockClass = 'fa-lock-open';

let modelopen = false;
addBtn.addEventListener('click', () => {
  if (modelopen) {
    modelopen = false;
    modal.style.display = 'none';
  } else {
    modal.style.display = 'flex';
    modelopen = true;
  }
});

modal.addEventListener('keydown', (e) => {
  let key = e.key;

  if (key == 'Enter') {
    if (e.target.value.length > 0) {
      createTicket(e.target.value);
    }
  } else {
    console.log('Shift key not pressed');
  }
});

function createTicket(value) {
  console.log(value, 'hello');
  let ticketCont = document.createElement('div');
  ticketCont.classList.add('ticket-cont');

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
  modal.style.display = 'none';
  handleLock(ticketCont);
}

allPriorityColors.forEach((div) => {
  div.addEventListener('click', function () {
    document.querySelector('.priority-color.active').classList.remove('active');

    modalPriorityColor = this.classList[0];
    this.classList.add('active');
  });
});

function handleLock(ticket) {
  let ticketLockElem = ticket.querySelector('.ticket-lock');
  let ticketLockIcon = ticketLockElem.children[0];
  let ticketTaskArea = ticket.querySelector('.ticket-task');

  ticketLockIcon.addEventListener('click', function () {
    console.log('clicked');
    if (ticketLockIcon.classList.contains(lockClass)) {
      ticketLockIcon.classList.remove(lockClass);
      ticketLockIcon.classList.add(unlockClass);
      ticketTaskArea.setAttribute('contenteditable', 'true');
    } else {
      ticketLockIcon.classList.remove(unlockClass);
      ticketLockIcon.classList.add(lockClass);
      ticketTaskArea.setAttribute('contenteditable', 'false');
    }
  });
}
