function runFIFO() {
    const referenceString = document.getElementById('referenceString').value.split(',').map(Number);
    const frameCount = parseInt(document.getElementById('frameCount').value);

    let frames = Array(frameCount).fill(null);
    let pageFaults = 0;
    let hits = 0;
    let currentFrame = 0;

    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    referenceString.forEach(page => {
        const headerCell = document.createElement('th');
        headerCell.textContent = page;
        headerRow.appendChild(headerCell);
    });
    table.appendChild(headerRow);

    for (let i = 0; i < frameCount; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < referenceString.length; j++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    const resultRow = document.createElement('tr');
    for (let i = 0; i < referenceString.length; i++) {
        const cell = document.createElement('td');
        resultRow.appendChild(cell);
    }
    table.appendChild(resultRow);

    referenceString.forEach((page, index) => {
        let hit = false;
        if (frames.includes(page)) {
            hits++;
            hit = true;
        } else {
            frames[currentFrame] = page;
            currentFrame = (currentFrame + 1) % frameCount;
            pageFaults++;
        }

        for (let i = 0; i < frameCount; i++) {
            const cell = table.rows[i + 1].cells[index];
            cell.textContent = frames[i] !== null ? frames[i] : '';
        }

        const resultCell = table.rows[frameCount + 1].cells[index];
        resultCell.textContent = hit ? 'Hit' : 'Miss';
        resultCell.style.backgroundColor = hit ? '#d4edda' : '#f8d7da';
    });

    tableContainer.appendChild(table);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Total Page Faults: ${pageFaults}</p><p>Total Hits: ${hits}</p>`;
}
