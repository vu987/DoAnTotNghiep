const clickModal = (modal, val1, val2) => {
    document.getElementById(modal).style.display='block'
    document.getElementById(val1).style.display='block'
    document.getElementById(val2).style.display='none'
    console.log(modal, val1, val2);
}

const closeModal = (modal, val1, val2) => {
    document.getElementById(modal).style.display='none'
    document.getElementById(val1).style.display='none'
    document.getElementById(val2).style.display='none'
}

closeModal('modal', 'formDK', 'formDN')

document.getElementById('btnDK').onclick = () => clickModal('modal', 'formDK', 'formDN')
document.getElementById('btnTroLai').onclick = () => closeModal('modal', 'formDK', 'formDN')

document.getElementById('btnDN').onclick = () => clickModal('modal', 'formDN', 'formDK')
document.getElementById('btnTroLaiAu').onclick = () => closeModal('modal', 'formDK', 'formDN')