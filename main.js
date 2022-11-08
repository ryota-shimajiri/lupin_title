const TEXT = "アドベントカレンダー2022始まるよ！！";

window.onload = async () => {
  const show = document.getElementById("show");
  show.style.fontSize = "150px";

  for (let i = 0; i < TEXT.length; i++) {
    show.innerHTML = TEXT[i];
    await sleep();
    show.innerHTML = "";
  }
  show.innerHTML = TEXT;
  show.style.fontSize = "70px";
};

const sleep = () => {
  return new Promise((resolve) => setTimeout(resolve, 200));
};
