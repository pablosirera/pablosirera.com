function loadScript(a) {
  const b = document.getElementsByTagName('head')[0]
  const c = document.createElement('script')
  c.type = 'text/javascript'
  c.src = 'https://tracker.metricool.com/resources/be.js'
  c.onreadystatechange = a
  c.onload = a
  b.appendChild(c)
}

const execHash = () => {
  // eslint-disable-next-line no-undef
  beTracker.t({ hash: '4158eccd51099adbf7fcd1d821103298' })
}

loadScript(execHash)
