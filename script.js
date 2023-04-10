const progressBar = document.querySelector(".progress_bar"),
  progressLable = document.querySelector(".progress_indicator p strong"),
  progressPrecElement = document.querySelector(".progress_indicator p span");

function load(perc = 0) {
  progressBar.value = perc;
  progressPrecElement.textContent = `${Math.floor(perc)}%`;
  if (perc < 100) {
    requestAnimationFrame(() => load(perc + 0.5));
  } else {
    progressLable.textContent = "Complete";
    setTimeout(() => {
      progressLable.textContent = "Uploading File...";
      load()
    }, 2000);
  }
}

load();
