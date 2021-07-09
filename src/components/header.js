const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const div = document.createElement("div");
  const span1 = document.createElement("span");
  const mainTitle = document.createElement("h1");
  const span2 = document.createElement("span");
  
  div.appendChild(span1);
  div.appendChild(mainTitle);
  div.appendChild(span2);

  div.classList.add("header");
  span1.classList.add("date");
  span2.classList.add("temp");

  mainTitle.textContent = `${title}`;
  span1.textContent = `${date}`;
  span2.textContent = `${temp}`;
  return div
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const domElement = document.querySelector(selector)
  domElement.appendChild(Header("test title","test date","test temp"));

  return domElement;
}

export { Header, headerAppender }
