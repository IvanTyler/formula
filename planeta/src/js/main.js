import '../scss/style.scss'
import '../scss/user.scss'

const staffStructure = document?.querySelector('.staff-structure')

staffStructure?.addEventListener('click', (e) => {

    const parent = e.target.closest('.staff-structure-item')
    const circle = parent.querySelector('.staff-structure-item__circle')

    circle.classList.contains('show') ?
        circle.classList.remove('show') :
        circle.classList.add('show')
})
