var ExpVMNIcon = '';
var RetVMNIcon = '';




if (localStorage.getItem('theme') == null); {
    //localStorage.setItem('theme', "luminary");
    localStorage.setItem('theme', "theme");
};

if (localStorage.theme == "luminary") {
    setLuminary();
} else if (localStorage.theme == "eclipse") {
    setEclipse();
} else if (hrs < 18  && hrs > 6 || hrs == 18 && mins <= 14) {
    setLuminary();
} else if (hrs > 18 || hrs < 6 || hrs == 18 && mins >= 15) {
    setEclipse();
} else {
    //default
    setLuminary();
}

document.getElementById('themeBtn').addEventListener('click', () => {
    if (localStorage.theme == "luminary") {
        //change to eclipe theme
        setEclipse();

    } else if (localStorage.theme == "eclipse") {
        //change to luminary theme
       setLuminary();
    }
});


function setLuminary() {
    document.getElementById("styleSheetLink").href = "luminary.css";

    document.getElementById("siteLogo").src = "luminary_campmar_icon.png";
    document.getElementById("userIcon").src = "luminary_user_icon.png";
    document.getElementById("themeIcon").src = "luminary_theme_icon.png";
    document.getElementById("modeIcon").src = "luminary_mode_icon.png";
    document.getElementById("categIcon").src = "luminary_category_icon.png";
    document.getElementById("helpIcon").src = "luminary_help_icon.png";
    document.getElementById("aboutIcon").src = "luminary_about_icon.png"; 

	document.getElementById('themeName').innerHTML = 'Eclipse';

    document.getElementById("svExpIcon").src = "luminary_expanded_view_icon.png";
    document.getElementById("svRetIcon").src = "luminary_retracted_view_icon.png";

    ExpVMNIcon = "luminary_expanded_view_icon.png";
    RetVMNIcon = "luminary_retracted_view_icon.png"

    localStorage.theme = "luminary";
};

function setEclipse() {
    document.getElementById("styleSheetLink").href = "eclipse.css";

    document.getElementById("siteLogo").src = "eclipse_campmar_icon.png";
    document.getElementById("userIcon").src = "eclipse_user_icon.png";
    document.getElementById("themeIcon").src = "eclipse_theme_icon.png";
    document.getElementById("modeIcon").src = "eclipse_mode_icon.png";
    document.getElementById("categIcon").src = "eclipse_category_icon.png";
    document.getElementById("helpIcon").src = "eclipse_help_icon.png";
    document.getElementById("aboutIcon").src = "eclipse_about_icon.png";

	document.getElementById('themeName').innerHTML = "Luminary";

    document.getElementById("svExpIcon").src = "eclipse_expanded_view_icon.png";
    document.getElementById("svRetIcon").src = "eclipse_retracted_view_icon.png";

    ExpVMNIcon = "eclipse_expanded_view_icon.png";
    RetVMNIcon = "eclipse_retracted_view_icon.png"

    localStorage.theme = "eclipse";
};
