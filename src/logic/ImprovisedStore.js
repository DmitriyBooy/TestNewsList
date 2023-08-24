export default class ImprovisedStore {
  items = []
  currentPage = 0
  totalPages = null

  constructor() {}

  get loadIsPossible() {
    return this.currentPage !== this.totalPages
  }

  send() {
    if (this.loadIsPossible) {
      const xhr = new XMLHttpRequest()

      xhr.open('GET', `https://flems.github.io/test/api/news/${this.currentPage + 1}`)

      xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const { nav: { current, total }, items } = JSON.parse(xhr.responseText)

          if (!this.totalPages) {
            this.totalPages = total
          }

          this.items.push(...items)

          this.currentPage = current
        } else {
          console.error("Ошибка при загрузке")
        }
      }

      xhr.send()
    }
  }
}