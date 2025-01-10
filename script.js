const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("file-input");

dropArea.addEventListener("click", () => {
  fileInput.click();
});

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.style.borderColor = "green";
});

dropArea.addEventListener("dragleave", () => {
  dropArea.style.borderColor = "#ccc";
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  dropArea.style.borderColor = "#ccc";
  const files = e.dataTransfer.files;
  handleFiles(files);
});

fileInput.addEventListener("change", () => {
  const files = fileInput.files;
  handleFiles(files);
});

function handleFiles(files) {
  console.log(files);
  alert("Files have been selected or dropped!");
}
