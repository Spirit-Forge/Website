function tabTo(target) {
    let sections = document.getElementsByTagName("main")[0].children;
    let current = document.getElementsByClassName("active")[0];
    if (current.id == target) {
        return;
    } else {
        current.classList.remove("active");
        for (let i = 0; i < sections.length; i++) {
            if (sections[i].id == target) {
                sections[i].classList.add("active");
                break;
            }
        }
    }
}

function openLink(url) {
    if (url == "voot") {
        window.open("https://drive.google.com/drive/u/0/folders/1w5sNVBiVOdqxxxEKrLSLtviT44WtAr0j", '_blank');
    } else if (url == "sido") {
        window.open("https://kingsidorak.gumroad.com/l/Sidopak", '_blank');
    }
}