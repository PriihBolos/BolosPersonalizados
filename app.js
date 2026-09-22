const WHATSAPP = "5511965872637";

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const contactWhatsapp = document.getElementById("contactWhatsapp");
const orderWhatsapp = document.getElementById("orderWhatsapp");
const pageIntro = document.getElementById("pageIntro");

window.setTimeout(() => {
  pageIntro?.setAttribute("aria-hidden", "true");
}, 3400);

// Menu mobile
menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// Preenche o WhatsApp de contato.
const genericMessage = encodeURIComponent(
  "Olá! Gostaria de saber mais sobre os bolos de aniversário e fazer uma encomenda."
);
contactWhatsapp.href = `https://wa.me/${WHATSAPP}?text=${genericMessage}`;
orderWhatsapp.href = `https://wa.me/${WHATSAPP}?text=${genericMessage}`;

const imageModal = document.getElementById("imageModal");
const imageModalContent = document.getElementById("imageModalContent");
const imageModalClose = document.querySelector(".image-modal-close");

const closeImageModal = () => {
  imageModal.hidden = true;
  document.body.style.overflow = "";
  imageModalContent.src = "";
};

document.querySelectorAll(".gallery-item img").forEach(image => {
  image.tabIndex = 0;
  image.setAttribute("role", "button");
  image.setAttribute("aria-label", `${image.alt}. Clique para ampliar`);

  const openImageModal = () => {
    imageModalContent.src = image.src;
    imageModalContent.alt = image.alt;
    imageModal.hidden = false;
    document.body.style.overflow = "hidden";
  };

  image.addEventListener("click", openImageModal);
  image.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openImageModal();
    }
  });
});

imageModalClose?.addEventListener("click", closeImageModal);
imageModal?.addEventListener("click", event => {
  if (event.target === imageModal) closeImageModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !imageModal.hidden) closeImageModal();
});
