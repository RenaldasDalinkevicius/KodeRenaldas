// Declaring variables
const progress_transition_html = document.querySelector(".current_progress_graph_html")
const progress_transition_css = document.querySelector(".current_progress_graph_css")
const progress_transition_javascript = document.querySelector(".current_progress_graph_javascript")
const progress_transition_python = document.querySelector(".current_progress_graph_python")
const progress_transition_html_counter = document.querySelector(".graph_html_counter")
const progress_transition_css_counter = document.querySelector(".graph_css_counter")
const progress_transition_javascript_counter = document.querySelector(".graph_javascript_counter")
const progress_transition_python_counter = document.querySelector(".graph_python_counter")
const nav_bar_list = document.querySelectorAll(".nav_bar_list")
const nav_bar_interactive_clr = document.querySelector(".nav_bar_interactive")
//Removing the animation/effect
progress_transition_html.classList.remove("current_progress_graph_html")
progress_transition_css.classList.remove("current_progress_graph_css")
progress_transition_javascript.classList.remove("current_progress_graph_javascript")
progress_transition_python.classList.remove("current_progress_graph_python")

progress_transition_python_counter.classList.remove("graph_python_counter")
progress_transition_javascript_counter.classList.remove("graph_javascript_counter")
progress_transition_css_counter.classList.remove("graph_css_counter")
progress_transition_html_counter.classList.remove("graph_html_counter")

//Adding the animation class

// CSS
const observerCSS = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            progress_transition_css.classList.add("current_progress_graph_css", "graph_css_procent")
            progress_transition_css_counter.classList.add("graph_css_counter")
            return
        }
        progress_transition_css.classList.remove("current_progress_graph_css")
        progress_transition_css_counter.classList.remove("graph_css_counter")
    })
})
// HTML
const observerHTML = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            progress_transition_html.classList.add("current_progress_graph_html")
            progress_transition_html_counter.classList.add("graph_html_counter")
            return
        }
        progress_transition_html.classList.remove("current_progress_graph_html")
        progress_transition_html_counter.classList.remove("graph_html_counter")
    })
})
// Javascript
const observerJavaScript = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            progress_transition_javascript.classList.add("current_progress_graph_javascript")
            progress_transition_javascript_counter.classList.add("graph_javascript_counter")
            return
        }
        progress_transition_javascript.classList.remove("current_progress_graph_javascript")
        progress_transition_javascript_counter.classList.remove("graph_javascript_counter")
    })
})
// Python
const observerPython = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            progress_transition_python.classList.add("current_progress_graph_python")
            progress_transition_python_counter.classList.add("graph_python_counter")
            return
        }
        progress_transition_python.classList.remove("current_progress_graph_python")
        progress_transition_python_counter.classList.remove("graph_python_counter")
    })
})
//When the ID is observed, 
observerCSS.observe(document.querySelector("#graph_css"))
observerHTML.observe(document.querySelector("#graph_html"))
observerJavaScript.observe(document.querySelector("#graph_javascript"))
observerPython.observe(document.querySelector("#graph_python"))

//scroll down fade in/out

header = document.querySelector("header")

function fadeOutOnScroll(element) {
  if(!element) {
    return
  }
  const distanceToTop = window.pageXOffset + element.getBoundingClientRect().top
  const elementHeight = element.offsetHeight
  const scrollTop = document.documentElement.scrollTop
  let opacity = 1
  
  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight
  }
  if (opacity >=0) {
    element.style.opacity = opacity
  }
}
function scrollHandler() {
  fadeOutOnScroll(header)
}
window.addEventListener("scroll", scrollHandler)

/* Hide and show navbar */

function responsiveNavBar() {
  nav_bar_interactive_clr.classList.add("nav_bar_interactive_clr")
  for (let i = 0; i< nav_bar_list.length; i++) {
    if (nav_bar_list[i].className==="nav_bar_list hide_navbar") {
      nav_bar_list[i].classList.remove("hide_navbar")
    }
    else {
      nav_bar_list[i].classList.add("hide_navbar")
      nav_bar_interactive_clr.classList.remove("nav_bar_interactive_clr")
    }
  }
}
/////////////////////////////////////////////////////////////////
/*      THIS IS FOR THE WHOLE DIV  (current_progress div)      */
/////////////////////////////////////////////////////////////////
/*
progress_transition_html.classList.remove("current_progress_graph_html")
progress_transition_css.classList.remove("current_progress_graph_css")
progress_transition_javascript.classList.remove("current_progress_graph_javascript")
progress_transition_python.classList.remove("current_progress_graph_python")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            progress_transition_html.classList.add("current_progress_graph_html")
            progress_transition_css.classList.add("current_progress_graph_css")
            progress_transition_javascript.classList.add("current_progress_graph_javascript")
            progress_transition_python.classList.add("current_progress_graph_python")
            
            return
        }
        progress_transition_html.classList.remove("current_progress_graph_html")
        progress_transition_css.classList.remove("current_progress_graph_css")
        progress_transition_javascript.classList.remove("current_progress_graph_javascript")
        progress_transition_python.classList.remove("current_progress_graph_python")
    })
})
observer.observe(document.querySelector(".current_progress div"))
const observerCSS = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            progress_transition_css.classList.add("current_progress_graph_css", "graph_css_procent")
            document.getElementById("graph_css").innerHTML="<h4>CSS(79%)</h4>"
            return
        }
        progress_transition_css.classList.remove("current_progress_graph_css")
    })
})
*/
////////////////////////////////////////////////////////////////////////
/*                    COUNTER FOR % IN H4 ELEMENTS(DONT WORK)         */
////////////////////////////////////////////////////////////////////////
/*
const counters_html = document.querySelectorAll('.counter_html')
const counters_css = document.querySelectorAll('.counter_css')
const counters_javascript = document.querySelectorAll('.counter_javascript')
const counters_python = document.querySelectorAll('.counter_python')
const speed = 7000
const update_count_timer = 30 //Timer for fade in
/*                CSS               
            for(let n of counters_css) {
                const updateCount = () => {
                  const target = + n.getAttribute('data-target');
                  const count = + n.innerText;
                  const inc = target / speed; 
                  if(count < target) {
                    n.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, update_count_timer);
                  } else {
                    n.innerText = target;
                  }
                }
                updateCount();
              }
*/
/*              HTML
            document.getElementById("graph_html").innerHTML="<h4>HTML(<h4 class='counter_html' data-target='91'>0</h4>%)</h4>"
            for(let n of counters_html) {
                const updateCount = () => {
                  const target = + n.getAttribute('data-target');
                  const count = + n.innerText;
                  const inc = target / speed; 
                  if(count < target) {
                    n.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, update_count_timer);
                  } else {
                    n.innerText = target;
                  }
                }
                updateCount();
              }
*/
/*                  javascript
            for(let n of counters_javascript) {
                const updateCount = () => {
                  const target = + n.getAttribute('data-target');
                  const count = + n.innerText;
                  const inc = target / speed; 
                  if(count < target) {
                    n.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, update_count_timer);
                  } else {
                    n.innerText = target;
                  }
                }
                updateCount();
              }
*/
/*                python
            for(let n of counters_python) {
                const updateCount = () => {
                  const target = + n.getAttribute('data-target');
                  const count = + n.innerText;
                  const inc = target / speed; 
                  if(count < target) {
                    n.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, update_count_timer);
                  } else {
                    n.innerText = target;
                  }
                }
                updateCount();
              }
*/