const $listFolders = document.querySelector('.list-folders')

$listFolders?.addEventListener('click', (e) => {
    const $parent = e.target.closest('.list-folders__item')

    e.target.checked ?
        $parent.classList.add('active') :
        $parent.classList.remove('active')

})