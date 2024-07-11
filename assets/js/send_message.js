document.addEventListener('DOMContentLoaded', function() {
    const formDOM = document.querySelector("#contact form");
    const modal = document.querySelector("#confirmationModal");
  
    function openModal() {
      modal.style.display = 'block';
    }
  
    function closeModal() {
      modal.style.display = 'none';
    }
  
    formDOM.addEventListener("submit", function(e) {
      e.preventDefault(); 
  
      const formData = new FormData(formDOM);
      const xhr = new XMLHttpRequest();
      xhr.open(formDOM.method, formDOM.action);
      xhr.setRequestHeader("Accept", "application/json");
  
      xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          formDOM.reset();
          openModal(); 
          setTimeout(closeModal, 2000); 
        } else {
          console.error("Error al enviar el formulario:", xhr.status);
        }
      };
  
      xhr.send(formData);
    });
  });
  
  