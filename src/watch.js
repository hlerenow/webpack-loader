const watchers = window['watchers'] = []
let lastWatcher = () => {}
function reactive(obj) {
  return new Proxy(obj, {
    get: (target, prop) => {
      watchers[prop] = watchers[prop] || lastWatcher
      return target[prop]
    },
    set: (target, prop, value) => {
      target[prop] = value
      watchers[prop] && watchers[prop]()
      return target[prop]
    }
  })
}

function watch(effect) {
  lastWatcher = effect
  effect()
}

const state = window['state'] = reactive({
  name: '123',
  sex: '男'
})

watch(() => {
  state.name = 1
})



