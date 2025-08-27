------index-----
// Toggle sidebar menu
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

// Attach toggle function to the button
const toggleButton = document.querySelector('.menu-toggle');
toggleButton.addEventListener('click', toggleMenu);

// Close sidebar when a link is clicked (mobile)
const links = document.querySelectorAll('.sidebar a');
links.forEach(link => {
  link.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('active');
    }
  });
});
-----homem------
<!-- Footer -->
<footer>
  <p>© 2025 Marvel Motors | All Rights Reserved</p>
</footer>

<!-- Link external JS -->
<script src="script.js"></script>
</body>
</html>

// Gallery Lightbox
let currentIndex = 0;
const images = document.querySelectorAll('#gallery-container img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    openLightbox();
  });
});

function openLightbox() {
  lightbox.style.display = 'flex';
  lightboxImg.src = images[currentIndex].src;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

window.addEventListener("click", function (e) {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// About Section Toggle
function toggleMore() {
  const section = document.getElementById("moreInfo");
  section.style.display = (section.style.display === "block") ? "none" : "block";
}

function toggleFullDetails() {
  const section = document.getElementById("fullDetails");
  section.style.display = (section.style.display === "block") ? "none" : "block";
}

// Sidebar Toggle
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}


-----gallery----
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "flex";
  lightboxImg.src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Close lightbox when clicking outside the image
window.addEventListener("click", function(e) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
----service---
// Example: Highlight link when clicked
const serviceLinks = document.querySelectorAll('.services-container a');

serviceLinks.forEach(link => {
    link.addEventListener('click', () => {
        serviceLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});
------about-----
// Toggle Overview Section
function toggleMore() {
  const section = document.getElementById("moreInfo");
  section.style.display = (section.style.display === "block") ? "none" : "block";
}

// Toggle Full Details Section
function toggleFullDetails() {
  const section = document.getElementById("fullDetails");
  section.style.display = (section.style.display === "block") ? "none" : "block";
}

// Toggle Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}
-----feed-----
// Get references to form and next comment message
const form = document.getElementById("feedbackForm");
const nextCommentMsg = document.getElementById("next-comment");

// Listen for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);

  fetch("sendfeedback.php", {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    alert("✅ Successfully Submitted");    // Show success alert
    form.reset();                         // Clear the form fields
    nextCommentMsg.style.display = "block"; // Show "next comment" message
  })
  .catch(error => {
    alert("❌ Error sending feedback. Try again."); // Show error alert
    console.error("Error:", error);
  });
});
-----faq-----

// Function to toggle FAQ answer visibility
function toggleAnswer(element) {
  const answer = element.querySelector(".faq-answer");
  const isVisible = answer.style.display === "block";
  answer.style.display = isVisible ? "none" : "block";
}
<script src="faq.js"></script>



