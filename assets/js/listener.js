window.addEventListener("kernel", (event) => {
  alert("CustomEvent bien reçu ! Détail dans ta Console")
  console.group("CustomEvent Kernel")
  console.log("J'ai bien reçu le CustomEvent Kernel")
  console.log("--")
  console.log("Type:", event.type)
  console.log("Data, Detail, Payload:", event.detail)
  console.log("--")
  console.log("Detail CustomEvent:", {event})
})
