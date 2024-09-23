// Select all plants
const plants = document.querySelectorAll('.plant');

// Initialize dragging for all plants
plants.forEach(plant => dragElement(plant));

function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    terrariumElement.onpointerdown = function (e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        document.onpointermove = function (e) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            
            // Update the position of the element
            terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
            terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
        };

        document.onpointerup = function () {
            document.onpointerup = null;
            document.onpointermove = null;
        };
    };
}
