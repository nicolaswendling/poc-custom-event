# POC Custom Events

Deux fichier distinct qui ne possède aucun liens ensemble `listener.js` et `trigger.js`.

Je les fais communiquer ensemble via un `CustomEvent` par
window. `trigger.js` envoie un Event avec un `DispatchEvent`.

`listener.js` quand à lui ecoute window sur le nom (type) de
l'évenement choisi (kernel dans l'exemple)

[Démonstration live](https://nicolaswendling.github.io/poc-custom-event/)

## Le code

### Listener

```javascript
window.addEventListener("kernel", (event) => {
  // Do Something
})
```

### Dispatcher (trigger)

La différence entre Event et CustomEvent c'est seulement le fait que tu
peux utiliser `{detail:{}}` pour passer de la data.

#### Event (classic)

```javascript
trigger.addEventListener("click", () => {
  window.dispatchEvent(new Event("kernel"))
})
```

#### CustomEvent

```javascript
trigger.addEventListener("click", () => {
  window.dispatchEvent(
    new CustomEvent("kernel", {detail: {message: "Hello World"}})
  )
})
```

#### Type Assertion en TypeScript

```typescript
window.addEventListener("change-theme", ((event: CustomEvent) => {
  // Do Something
}) as EventListener)
```
