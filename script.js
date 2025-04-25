
document.getElementById("click").addEventListener("click", function() {
    alert("Hiciste click");
  });
  

  document.getElementById("dblclick").addEventListener("dblclick", function() {
    alert("Doble click detectado");
  });
  

  document.getElementById("input").addEventListener("input", function(e) {
    console.log("Escribiendo: " + e.target.value);
  });
  

  document.getElementById("mouseover").addEventListener("mouseover", function() {
    this.style.background = "blue";
  });
  
 
  document.getElementById("mouseout").addEventListener("mouseout", function() {
    this.style.background = "green";
  });
  

  document.getElementById("mousedown").addEventListener("mousedown", function() {
    alert("Presionaste el mouse");
  });
  

  document.getElementById("mouseup").addEventListener("mouseup", function() {
    alert("Soltaste el mouse");
  });
  

  document.getElementById("change").addEventListener("change", function(e) {
    alert("Seleccionaste: " + e.target.value);
  });
  

  document.getElementById("submitForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    alert("Formulario enviado: " + document.getElementById("nombre").value);
  });
  
 
  document.getElementById("presiona").addEventListener("keydown", function(event) {
    console.log("Tecla presionada: " + event.key);
  });
  
  