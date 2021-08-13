let phyChaptersDiv = document.querySelector('#phyChapters');

let phyChaptersArray = [
    'Rectilinear Motion',
    "Projectile Motion",
    "Relative Motion",
    "Geometrical Optics / Optical Instruments",
    "NLM",
    "Friction",
    "Work Power and Energy",
    "Circular Motion",
    "Center of Mass",
    "Rigid Body Dynamics",
    "SHM",
    "Electrostatics / Conductors",
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




phyChaptersArray.forEach(function (chapterName, index) {
    phyChaptersDiv.innerHTML += `
                        <a href="#" class="list-group-item list-group-item-action " aria-current="true" id="${chapterName}">
                            <div class="d-flex w-100 justify-content-between ">
                                <h5 class="mb-1">Chapter ${index + 1} :<br><br> ${chapterName}</h5>
                            </div><br>
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <input id = "videoLectures" class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                                        Video Lectures
                                    </li>
                                    <li class="list-group-item">
                                        <input id = "notesMade" class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                                        Notes
                                    </li>
                                    <li class="list-group-item">
                                        <input id = "completeRevision1" class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                                        Complete Revision 1
                                    </li>
                                    <li class="list-group-item">
                                        <input id = "completeRevision2" class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                                        Complete Revision 2
                                    </li>
                                    <li class="list-group-item">
                                        <input id = "completeRevision3" class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                                        Complete Revision 3
                                    </li>
                                    <li class="list-group-item">
                                        <input id = "completeRevision3" class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                                        JEE MAIN PYQs
                                    </li>
                                    <li class="list-group-item">
                                        <input id = "completeRevision3" class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                                        Study Materials
                                    </li>
                                </ul>
                                <button type="button" class="btn btn-primary my-3 mt-4">Save</button>
                       <br> </a><br>`;
})