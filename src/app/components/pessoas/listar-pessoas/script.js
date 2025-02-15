document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll(".grid__item");
    const detailsSection = document.getElementById("details-section");
  
    gridItems.forEach(gridItem => {
      gridItem.addEventListener("click", function() {
        detailsSection.classList.toggle("active");
        const expanded = detailsSection.classList.contains("active");
  
        if (expanded) {
          detailsSection.style.maxHeight = detailsSection.scrollHeight + "px";
        } else {
          detailsSection.style.maxHeight = "0";
        }
      });
    });
  });
  