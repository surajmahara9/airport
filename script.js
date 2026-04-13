function openMenu(){
  document.getElementById("nav-menu").style.left = "0";
}

function closeMenu(){
  document.getElementById("nav-menu").style.left = "-300px";
}

function checkForm(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let from = document.getElementById("from").value.trim();
  let to = document.getElementById("to").value.trim();
  let date = document.getElementById("date").value;
  let passengers = document.getElementById("passengers").value;
  let travelClass = document.getElementById("class").value;

  let alertBox = document.getElementById("alert");

  // validation
  if (!name || !from || !to || !date || !passengers || !travelClass) {
    alertBox.innerText = "Please fill all fields!";
    return;
  }

  alertBox.innerText = "";

  // fill ticket data
  document.getElementById("pass-name").innerText = "Passenger: " + name;
  document.getElementById("from-data").innerText = from;
  document.getElementById("to-data").innerText = to;
  document.getElementById("date-data").innerText = date;
  document.getElementById("passenger-data").innerText = passengers;
  document.getElementById("class-data").innerText = travelClass;

  // switch UI
  document.getElementById("booking").style.display = "none";
  document.querySelector(".ticket").style.display = "block";
   let ok =document.getElementById("ok");
  ok.style.display="none";
  // store data for download
  window.ticketData = {
    name,
    from,
    to,
    date,
    passengers,
    travelClass
  };
}

function downloadTicket() {
  let ticket = document.getElementById("ticketCard");
  let btn = ticket.querySelector("button"); // download button
  let ticket_down_msg =document.getElementById("tick-down-msg");
  // hide button
  btn.style.display = "none";

  html2canvas(ticket).then(canvas => {
    let image = canvas.toDataURL("image/png");

    let link = document.createElement("a");
    link.href = image;
    link.download = "air-ticket.png";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    ticket_down_msg.innerText="Ticket Downloaded Successfully!"
    // show button again
 let dwn =document.getElementById("dwn");
  dwn.style.display="none";
      let ok =document.getElementById("ok");
  ok.style.display="block";
      
  });

}

function ok(){
 document.querySelector(".ticket").style.display = "none";
  document.getElementById("booking").style.display = "block";
 
   document.getElementById("name").value="";
  document.getElementById("from").value="";
  document.getElementById("to").value="";
  document.getElementById("date").value="";
  document.getElementById("passengers").value="";
  document.getElementById("class").value="";
     
}