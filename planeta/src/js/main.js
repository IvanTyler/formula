import '../scss/style.scss'
import '../scss/user.scss'
import '../scss/staffStructureItem.scss'
import '../scss/staffStructureItemWrapper.scss'
import '../scss/staffUnderStructure.scss'
import '../scss/underStructureItem.scss'
import '../scss/staffStructureTabs.scss'


const staffStructure = document?.querySelector('.staff-structure')

staffStructure?.addEventListener('click', (e) => {

    const parent = e.target.closest('.staff-structure-item')
    const circle = parent.querySelector('.staff-structure-item__circle')

    circle.classList.contains('show') ?
        circle.classList.remove('show') :
        circle.classList.add('show')
})
