
(async () => {
  if (document.getElementById('meet-monitor-popup')) return;

  try {
    const audio = new Audio(chrome.runtime.getURL("555.wav"));
    // Ensure audio plays automatically when pop-up appears
    audio.play().catch(e => {
      console.warn("Failed to play audio:", e);
    });
  } catch (e) {
    console.warn("Error with audio playback:", e);
  }

  const key = 'popup_count';
  try {
    // Ensure chrome.storage.local.get handles undefined or null values correctly
    const result = await chrome.storage.local.get([key]);
    const count = result[key] || 0; // Default to 0 if the value is not found
    chrome.storage.local.set({ [key]: count + 1 });
  } catch (e) {
    console.warn("Error accessing chrome.storage.local:", e);
  }

  const shouldTriggerPopup = (url) => {
    // Do not trigger popup if the user is in Google Meet
    return url && !url.includes("meet.google.com") && !url.startsWith("chrome://") && !url.startsWith("chrome-extension://");
  };

  // Check if we should show the popup
  if (!shouldTriggerPopup(window.location.href)) {
    return; // Exit if the URL matches Google Meet
  }

  const modal = document.createElement('div');
  modal.id = 'meet-monitor-popup';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.background = 'rgba(0, 0, 0, 0.5)';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zIndex = '999999';

  let countdown = 30;
  const interval = setInterval(() => {
    const label = document.getElementById('countdown-label');
    if (label) {
      label.textContent = `Pop-up akan hilang dalam ${countdown} detik...`;
    }
    if (countdown <= 0) {
      clearInterval(interval);
      closePopup();
    }
    countdown--;
  }, 1000);

  modal.innerHTML = `
    <div style="
      background: white;
      border-radius: 10px;
      padding: 30px;
      max-width: 400px;
      width: 100%;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      text-align: center;
      font-family: 'Segoe UI', sans-serif;
      box-sizing: border-box;
    ">
      <h2 style="color: maroon; margin-bottom: 10px;">⚠️ PERHATIAN</h2>
      <p style="margin-bottom: 20px;">Kamu terdeteksi keluar dari Google Meet.<br>Harap segera kembali ke ruang kelas.</p>
      <button id="close-popup-btn" style="
        background-color: #28a745;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.2s ease;
      ">Saya akan kembali</button>
      <p id="countdown-label" style="margin-top: 10px; font-size: 12px; color: gray;">Pop-up akan hilang dalam 30 detik...</p>
    </div>
  `;

  document.body.appendChild(modal);

  const closePopup = () => {
    const el = document.getElementById('meet-monitor-popup');
    if (el) el.remove();
    clearInterval(interval);
  };

  const btn = document.getElementById('close-popup-btn');
  btn.addEventListener('click', closePopup);
  btn.addEventListener('mouseenter', () => {
    btn.style.padding = "12px 24px";
    btn.style.fontSize = "15px";
    btn.style.backgroundColor = "#218838";
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.padding = "10px 20px";
    btn.style.fontSize = "14px";
    btn.style.backgroundColor = "#28a745";
  });
})();
