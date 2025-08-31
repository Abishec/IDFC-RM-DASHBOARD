// dashboard.js
// Copy-to-Clipboard and Health Bar Init

function setupCopy() {
  document.querySelectorAll('.copyable').forEach(el => {
    el.addEventListener('click', () => {
      const text = el.dataset.copy || el.textContent.trim();
      navigator.clipboard.writeText(text).then(showCopyNotification);
    });
  });
}

function showCopyNotification() {
  const note = document.getElementById('copyNotification');
  note.style.display = 'block';
  setTimeout(() => note.style.display = 'none', 2000);
}

function initHealthBars() {
  document.querySelectorAll('.client-card').forEach(card => {
    const score = parseInt(card.dataset.healthScore, 10);
    card.style.setProperty('--health-score', score);
    card.classList.add('active');
  });
}

function openClientModal(id) {
  const data = {
    'arjun': { name:'Arjun Sharma', company:'TechVista Solutions', aum:'₹3.2Cr', healthScore:'92/100' }
    // Add other clients similarly
  }[id];
  if (!data) return;
  document.getElementById('modalTitle').textContent = `${data.name} – Profile`;
  document.getElementById('modalBody').innerHTML = `
    <p><strong>Company:</strong> ${data.company}</p>
    <p><strong>AUM:</strong> ${data.aum}</p>
    <p><strong>Health Score:</strong> ${data.healthScore}</p>
  `;
  document.getElementById('clientModal').style.display = 'block';
  setupCopy();
}

function closeModal() {
  document.getElementById('clientModal').style.display = 'none';
}

window.onclick = e => {
  if (e.target === document.getElementById('clientModal')) closeModal();
};

document.addEventListener('DOMContentLoaded', () => {
  setupCopy();
  initHealthBars();
});
