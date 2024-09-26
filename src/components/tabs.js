import axios from "axios"

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const divTopics = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const div4 = document.createElement("div");
  const div5 = document.createElement("div");
  const div6 = document.createElement("div");

  divTopics.appendChild(div2);
  divTopics.appendChild(div3);
  divTopics.appendChild(div4);
  divTopics.appendChild(div5);
  divTopics.appendChild(div6);

  divTopics.classList.add("topics");
  div2.classList.add("tab");
  div3.classList.add("tab");
  div4.classList.add("tab");
  div5.classList.add("tab");
  div6.classList.add("tab");

  div2.textContent = topics[0];
  div3.textContent = topics[1];
  div4.textContent = topics[2];
  div5.textContent = topics[3];
  div6.textContent = topics[4];
return divTopics;

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/topics`)
  .then((response)=> {
    const domElement = document.querySelector(selector);
    domElement.appendChild(Tabs(response.data.topics));
   
  })
  .catch((err) => {
    console.log(err, "error");
  })


}

export { Tabs, tabsAppender }
