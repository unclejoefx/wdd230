const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
};

const lastModified = new Date(document.lastModified).toLocaleDateString("en-US", options);

document.querySelector('#lastModified').textContent = lastModified;