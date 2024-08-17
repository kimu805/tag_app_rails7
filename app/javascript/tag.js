function tag() {
  const tagNameInput = document.getElementById("post_form_tag_name")



  if (tagNameInput) {
    tagNameInput.addEventListener("input", () => {
      const keyword = tagNameInput.value
      const XHR = new XMLHttpRequest()
      XHR.open("GET", `/posts/search/?keyword=${keyword}`, true)
      XHR.responseType = "json"
      XHR.send()

      XHR.onload = () => {
        const searchResult = document.getElementById("search-result")
        searchResult.innerHTML = ""
        if (XHR.response) {
          const tagName = XHR.response.keyword
          tagName.forEach(tag => {
            const childElement = document.createElement("div")
            childElement.setAttribute("class", "child")
            childElement.setAttribute("id", tag.id)
            childElement.innerHTML = tag.tag_name
            searchResult.appendChild(childElement)
  
            const clickElement = document.getElementById(tag.id)
            clickElement.addEventListener("click", () => {
              tagNameInput.value = clickElement.textContent
              clickElement.remove()
            })
          })
        }

      }
    })
  }
}

window.addEventListener("turbo:load", tag)