/*
 * Name: Rita Kuo
 * Date: November 18, 2020
 * Section: CSE 154 AJ
 * This is the JS to implement CP4. It helps fetch and get data from our own APIs, including
 * movie names and movie summaries.
 */
"use strict";
(function() {
  window.addEventListener("load", init);

  /**
   * When users click the button, it will remove the popcorn image
   * Initialize the ajax button to call the correct function when pressed.
   * There are three buttons in the page corrensponds to their summaries.
   */
  function init() {
    id("remove-btn").addEventListener("click", removeImg);
    id("name-btn").addEventListener("click", fetchMovieName);
    id("summary-btn1").addEventListener("click", fetchMovieSummaryOne);
    id("summary-btn2").addEventListener("click", fetchMovieSummaryTwo);
    id("summary-btn3").addEventListener("click", fetchMovieSummaryThree);
  }

  /**
   * function used to remove the popcorn image
   */
  function removeImg() {
    let PARENT = id("parent");
    let REMOVE = id("remove");
    PARENT.removeChild(REMOVE);
  }

  /**
   * This is a function that is used to fetch the names for three movies
   */
  function fetchMovieName() {
    id("response-message").textContent = "Here are the names:";
    fetch("/name/year")
      .then(checkStatus)
      .then(resp => resp.text())
      .then(processNames)
      .catch(handleRequestError);
  }

  /**
   * This is a function that takes the fetch names and date for three movies
   * @param {JSON} namesText - names and date for three movies
   */
  function processNames(namesText) {
    let names = gen("p");
    names.textContent = namesText;
    id("name-response").appendChild(names);
  }

  /**
   * This is a function that is used to fetch the summary for Interstellar
   */
  function fetchMovieSummaryOne() {
    let url = '/name/Interstellar';
    id("response-message").textContent = "Here are the summaries:";
    fetch(url)
      .then(checkStatus)
      .then(resp => resp.json())
      .then(processSummaryOne)
      .catch(handleRequestError);
  }

  /**
   * This is a function that takes the fetch data and generate the summary for Interstellar
   * @param {JSON} summaryJson - summary data of three movies
   */
  function processSummaryOne(summaryJson) {
    let summaryOne = gen("p");
    summaryOne.textContent = summaryJson['Interstellar'];
    id("summary-response").appendChild(summaryOne);
  }

  /**
   * This is a function that is used to fetch the summary for Peninsula
   */
  function fetchMovieSummaryTwo() {
    let url = '/name/Peninsula';
    id("response-message").textContent = "Here are the summaries:";
    fetch(url)
      .then(checkStatus)
      .then(resp => resp.json())
      .then(processSummaryTwo)
      .catch(handleRequestError);
  }

  /**
   * This is a function that takes the fetch data and generate the summary for Peninsula
   * @param {JSON} summaryJson - summary data of three movies
   */
  function processSummaryTwo(summaryJson) {
    let summaryTwo = gen("p");
    summaryTwo.textContent = summaryJson['Peninsula'];
    id("summary-response").appendChild(summaryTwo);
  }

  /**
   * This is a function that is used to fetch the summary for Tenet
   */
  function fetchMovieSummaryThree() {
    let url = '/name/Tenet';
    id("response-message").textContent = "Here are the summaries:";
    fetch(url)
      .then(checkStatus)
      .then(resp => resp.json())
      .then(processSummaryThree)
      .catch(handleRequestError);
  }

  /**
   * This is a function that takes the fetch data and generate the summary for Tenet
   * @param {JSON} summaryJson - summary data of three movies
   */
  function processSummaryThree(summaryJson) {
    let summaryThree = gen("p");
    summaryThree.textContent = summaryJson['Tenet'];
    id("summary-response").appendChild(summaryThree);
  }

  /**
   * This function will be called when there's an error occur
   * fetch process failed, show error.
   * @param {JSON} responseJson - error message being sent
   */
  function handleRequestError(responseJson) {
    let msg = "There was an error requesting data from the service";
    id("error-response").textContent = msg + responseJson;
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

  /**
   * This is a helper function to throw an Error if the fetch response status is not ok
   * before processing the data.
   * @param {res} res - check status response
   */
  async function checkStatus(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }
})();
