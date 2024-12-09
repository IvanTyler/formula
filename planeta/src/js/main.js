import '../scss/style.scss'

const staffStructure = document?.querySelector('.staff-structure')

staffStructure?.addEventListener('click', (e) => {

    if (e.target.classList === 'staff-structure-item__circle-wrapper' || 'staff-structure-item__circle') {
        console.log(e.target.classList)
    }
})
