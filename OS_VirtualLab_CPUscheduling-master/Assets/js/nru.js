function simulateNRU() {
    const referenceString = document.getElementById('referenceString').value.split(',').map(Number);
    const numberOfFrames = parseInt(document.getElementById('frames').value, 10);
    const frames = new Array(numberOfFrames).fill(null);
    const used = new Array(numberOfFrames).fill(false);
    let pageFaults = 0;
    let pageHits = 0;

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

    // Simulate NRU page replacement
    referenceString.forEach((ref, index) => {
        let frameIndex = frames.indexOf(ref);
        if (frameIndex !== -1) {
            used[frameIndex] = true;
            pageHits++;
            hitMissRow.cells[index].innerText = 'Hit';
            hitMissRow.cells[index].className = 'hit';
        } else {
            pageFaults++;
            let replaced = false;
            for (let i = 0; i < numberOfFrames; i++) {
                if (frames[i] === null) {
                    frames[i] = ref;
                    used[i] = true;
                    replaced = true;
                    break;
                }
            }
            if (!replaced) {
                for (let i = 0; i < numberOfFrames; i++) {
                    if (!used[i]) {
                        frames[i] = ref;
                        used[i] = true;
                        replaced = true;
                        break;
                    }
                }
            }
            if (!replaced) {
                frames[0] = ref; // Fallback replacement
                used[0] = true;
            }
            hitMissRow.cells[index].innerText = 'Miss';
            hitMissRow.cells[index].className = 'miss';
        }
        used.fill(false); // Reset used array

        // Update frame rows for current reference
        frames.forEach((frame, i) => {
            table.rows[i + 1].cells[index].innerText = frame !== null ? frame : '';
        });
    });

    table.appendChild(hitMissRow);
    tableContainer.appendChild(table);

    // Summary
    const summary = document.getElementById('summary');
    summary.innerHTML = `Page Faults: ${pageFaults} <br> Page Hits: ${pageHits}`;
}
