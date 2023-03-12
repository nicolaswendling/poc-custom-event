const trigger = document.querySelector("#trigger")
trigger.addEventListener("click", () => {
  const customEvent = new CustomEvent("kernel", {
    detail: {
      message: "Hello World",
    },
  })
  window.dispatchEvent(customEvent)
})
