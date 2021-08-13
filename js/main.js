let phyChaptersDiv = document.querySelector('#phyChapters');



function getDetails(chapterName) {
    let details = {
        videoLectures: JSON.parse(localStorage.getItem(chapterName))['videoLectures'],
        notesMade: JSON.parse(localStorage.getItem(chapterName))['videoLectures'],
        rev1: JSON.parse(localStorage.getItem(chapterName))['rev1'],
        rev2: JSON.parse(localStorage.getItem(chapterName))['rev2'],
        rev3: JSON.parse(localStorage.getItem(chapterName))['rev3'],
        pyqs: JSON.parse(localStorage.getItem(chapterName))['pyqs'],
        e1: JSON.parse(localStorage.getItem(chapterName))['e1'],
        e2: JSON.parse(localStorage.getItem(chapterName))['e2'],
        e3: JSON.parse(localStorage.getItem(chapterName))['e3'],
    }

    return details;
}
function setDetailsTotally(chapterName) {
    let details = {
        videoLectures: false,
        notesMadeArray: false,
        rev1: false,
        rev2: false,
        rev3: false,
        pyqs: false,
        e1: false,
        e2: false,
        e3: false,
    }

    return localStorage.setItem(chapterName, JSON.stringify(details));
}
// phyChaptersArray.forEach(function (element) {
//     setDetailsTotally(element)
// })




let details = {
    videoLectures: false,
    notesMade: false,
    rev1: false,
    rev2: false,
    rev3: false,
    pyqs: false,
    e1: false,
    e2: false,
    e3: false,
}
function setDetails(chapterName) {
    localStorage.setItem(chapterName, JSON.stringify(details))
}

let phyChaptersArray = [
    'Rectilinear Motion',
    "Projectile Motion",
    "Relative Motion",
    "Geometrical Optics and Optical Instruments",
    "NLM",
    "Friction",
    "Work Power and Energy",
    "Circular Motion",
    "Center of Mass",
    "Rigid Body Dynamics",
    "SHM",
    "Electrostatics and Conductors",
    "Gravitation",
    "Current Electricity",
    "Heat transfer",
    "Capacitance",
    "EMF",
    "EMI",
    "AC",
    "EMW",
    "Modern Physics I",
    "Modern Physics II",
    "Wave on String",
    "Sound Waves",
    "Wave Optics",
    "Thermodynamics and thermal expansion",
    "Fluid and Viscosity",
    "Properties of Matter",
    "Semi - Conductor",
    "Communication System",
    "ERROR and Measuring Instruments"
]

if (localStorage.getItem('Rectilinear Motion') == null) {
    phyChaptersArray.forEach(function (element) {
        setDetailsTotally(element)
    })
}


phyChaptersArray.forEach(function (chapterName, index) {
    phyChaptersDiv.innerHTML += `
                        <div class="list-group-item list-group-item-action " aria-current="true" id="${chapterName}">
                            <div class="d-flex w-100 justify-content-between ">
                                <h5 class="mb-1">Chapter ${index + 1} :<br><br> ${chapterName}</h5>
                            </div><br>
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <input id = "${chapterName},videoLectures" onclick = 'changeValue(this.id)' class="form-check-input me-1" type="checkbox" value="" aria-label="..."
                                        ${checkValue(chapterName + ",videoLectures")} >
                                        <a href = "">Video Lectues</a>

                                    </li>
                                    <li class="list-group-item">
                                        <input id = "${chapterName},notesMade" onclick = 'changeValue(this.id)' class="form-check-input me-1" type="checkbox" value="" aria-label="..."${checkValue(chapterName + ",notesMade")}>
                                        Notes
                                    </li>
                                    <li class="list-group-item">
                                        <input id = "${chapterName},rev1" class="form-check-input me-1" onclick = 'changeValue(this.id)' type="checkbox" value="" aria-label="..."${checkValue(chapterName + ",rev1")}>
                                        Complete Revision 1
                                    </li>
                                    <li class="list-group-item">
                                        <input id = "${chapterName},rev2" class="form-check-input me-1" onclick = 'changeValue(this.id)' type="checkbox" value="" aria-label="..."${checkValue(chapterName + ",rev2")}>
                                        Complete Revision 2
                                    </li>
                                    <li class="list-group-item">
                                        <input id = "${chapterName},rev3" class="form-check-input me-1" onclick = 'changeValue(this.id)' type="checkbox" value="" aria-label="..."${checkValue(chapterName + ",rev3")}>
                                        Complete Revision 3
                                    </li>
                                    <li class="list-group-item">
                                        <input id = "${chapterName},pyqs" class="form-check-input me-1" onclick = 'changeValue(this.id)' type="checkbox" value="" aria-label="..."${checkValue(chapterName + ",pyqs")}>
                                        JEE MAIN PYQs
                                    </li>
                                    <li class="list-group-item">
                                        <input id = "${chapterName},e1" class="form-check-input me-1" onclick = 'changeValue(this.id)' type="checkbox" value="" aria-label="..."${checkValue(chapterName + ",e1")}>
                                        Exercise 1
                                    </li>
                                    <li class="list-group-item">
                                        <input id = "${chapterName},e2" class="form-check-input me-1" onclick = 'changeValue(this.id)' type="checkbox" value="" aria-label="..."${checkValue(chapterName + ",e2")}>
                                        Exercise 2
                                    </li>
                                    <li class="list-group-item">
                                        <input id = "${chapterName},e3" class="form-check-input me-1" onclick = 'changeValue(this.id)' type="checkbox" value="" aria-label="..."${checkValue(chapterName + ",e3")}>
                                        Exercise 3
                                    </li>

                                </ul>
                       <br> </div><br>`;
})

function changeValue(id) {
    let chapterName = id.split(",")[0];
    let valueToBeChanged = id.split(",")[1];
    details[valueToBeChanged] = document.getElementById(id).checked;
    setDetails(chapterName);
}

function checkValue(id) {
    return JSON.parse(localStorage.getItem(id.split(',')[0]))[id.split(',')[id.split(',').length - 1]] ? "checked" : ""
}
