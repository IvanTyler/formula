const $listFolders = document.querySelector('.list-folders')

$listFolders?.addEventListener('click', (e) => {
    const $parent = e.target.closest('.list-folders__item')

    e.target.checked ?
        $parent.classList.add('active') :
        $parent.classList.remove('active')

})
const $calendarSelect = document.querySelector('.calendar-select')
const $titleYear = document.querySelector('#title-year')
const $listMonth = document.querySelectorAll('.calendar-select__item')

const $calendarSelectConversion = document.querySelector('.calendar-select-conversion')
const $titleYearConversion = document.querySelector('#title-year-conversion')
const $listMonthConversion = document.querySelectorAll('.calendar-select-conversion__item')

function selectYear(title, calendarSelect, listMonth) {
    title?.addEventListener('click', () => {
        if (calendarSelect.classList.contains('open')) {
            calendarSelect.classList.remove('open')
            title.classList.remove('open')
        } else {
            calendarSelect.classList.add('open')
            title.classList.add('open')
        }
    })
    
    listMonth?.forEach((el) => {
        el.addEventListener('click', (e) => {
            listMonth.forEach(el => {
                el.classList.remove('active')
                calendarSelect.classList.remove('open')
            })
            title.innerText = el.innerText
            e.target.classList.add('active')
        })
    })
}

selectYear($titleYear, $calendarSelect, $listMonth)
selectYear($titleYearConversion, $calendarSelectConversion, $listMonthConversion)
