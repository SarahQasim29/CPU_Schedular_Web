function simulateSecondChance() {
    const referenceString = document.getElementById('referenceString').value.split(',').map(Number);
    const numberOfFrames = parseInt(document.getElementById('frames').value, 10);
    const frames = [];
    const referenceBits = [];
    let pageFaults = 0;
    let pointer = 0;

    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const hitMissRow = document.createElement('tr');
    
    // Create table header
    referenceString.forEach(ref => {
        const th = document.createElement('th');
        th.innerText = ref;
        headerRow.appendChild(th);

        const hitMissCell = document.createElement('td');
        hitMissRow.appendChild(hitMissCell);
    });
    table.appendChild(headerRow);

    // Create frame rows
    for (let i = 0; i < numberOfFrames; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < referenceString.length; j++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    // Simulate Second Chance page replacement
    referenceString.forEach((ref, index) => {
        let frameIndex = frames.indexOf(ref);
        if (frameIndex !== -1) {
            referenceBits[frameIndex] = 1;
            hitMissRow.cells[index].innerText = 'Hit';
            hitMissRow.cells[index].className = 'hit';
        } else {
            pageFaults++;
            while (true) {
                if (referenceBits[pointer] === 0) {
                    frames[pointer] = ref;
                    referenceBits[pointer] = 1;
                    pointer = (pointer + 1) % numberOfFrames;
                    break;
                } else {
                    referenceBits[pointer] = 0;
                    pointer = (pointer + 1) % numberOfFrames;
                }
            }
            hitMissRow.cells[index].innerText = 'Miss';
            hitMissRow.cells[index].className = 'miss';
        }

        // Update frame rows for current reference
        frames.forEach((frame, i) => {
            table.rows[i + 1].cells[index].innerHTML = frame !== undefined ? `${frame} (${referenceBits[i]})` : '';
        });
    });

    table.appendChild(hitMissRow);
    tableContainer.appendChild(table);

    // Summary
    const summary = document.getElementById('summary');
    summary.innerHTML = `<br><h5>Page Faults: ${pageFaults}<h5>`;
}
