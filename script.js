let mediaStream = null;
const startBtn = document.getElementById("startShare");
const stopBtn = document.getElementById("stopShare");
const videoEl = document.getElementById("screenVideo");

// স্ক্রিন শেয়ার শুরু
startBtn.addEventListener("click", async () => {
  try {
    mediaStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true
    });
    videoEl.srcObject = mediaStream;
    startBtn.disabled = true;
    stopBtn.disabled = false;
  } catch (err) {
    alert("স্ক্রিন শেয়ার অনুমোদন পাওয়া যায়নি!");
    console.error(err);
  }
});

// স্ক্রিন শেয়ার বন্ধ
stopBtn.addEventListener("click", () => {
  if (mediaStream) {
    let tracks = mediaStream.getTracks();
    tracks.forEach(track => track.stop());
    videoEl.srcObject = null;
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
});
