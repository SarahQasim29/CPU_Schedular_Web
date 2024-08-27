var suggestions = [
    {
        'text': 'CPU Scheduling',
        'display': 'CPU Scheduling',
        'href': '../OS_VirtualLab_CPUscheduling-master/CPU_Scheduling/cpu_scheduling_index.html'
    },
    {
        'text': 'First Come First Served',
        'display': 'First Come First Served (FCFS)',
        'href': '../OS_VirtualLab_CPUscheduling-master/CPU_Scheduling/FCFS_CPU.html'
    },
    {
        'text': 'FCFS',
        'display': 'First Come First Served (FCFS)',
        'href': '../OS_VirtualLab_CPUscheduling-master/CPU_Scheduling/FCFS_CPU.html'
    },
    {
        'text': 'Shortest Remaining Job First',
        'display': 'Shortest Remaining Job First (SRJF)',
        'href': '../OS_VirtualLab_CPUscheduling-master/CPU_Scheduling/SRJF_CPU.html'
    },
    {
        'text': 'SRJF',
        'display': 'Shortest Remaining Job First (SRJF)',
        'href': '../OS_VirtualLab_CPUscheduling-master/CPU_Scheduling/SRJF_CPU.html'
    },
    {
        'text': 'Compare Algorithms',
        'display': 'Compare Algorithms',
        'href': '../OS_VirtualLab_CPUscheduling-master/CPU_Scheduling/CPU_Algo_comp.html'
    },
    {
        'text': 'Round Robin',
        'display': 'Round Robbin',
        'href': '../OS_VirtualLab_CPUscheduling-master/CPU_Scheduling/RoundRobin_CPU.html'
    },
    {
        'text': 'Shortest Job First',
        'display': 'Shortest Job First (SJB)',
        'href': '../OS_VirtualLab_CPUscheduling-master/CPU_Scheduling/SJF_CPU.html'
    },
    {
        'text': 'First In First Out',
        'display': 'First In First Out (FIFO)',
        'href': '../OS_VirtualLab_CPUscheduling-master/Page_Replacement/fifo.html'
    },
    {
        'text': 'FIFO',
        'display': 'First In First Out (FIFO)',
        'href': '../OS_VirtualLab_CPUscheduling-master/Page_Replacement/fifo.html'
    },
    {
        'text': 'Least Recently Used',
        'display': 'Least Recently Used (LRU)',
        'href': '../OS_VirtualLab_CPUscheduling-master/Page_Replacement/lru.html'
    },
    {
        'text': 'LRU',
        'display': 'Least Recently Used (LRU)',
        'href': '../OS_VirtualLab_CPUscheduling-master/Page_Replacement/lru.html'
    },
    {
        'text': 'Not Recently Used',
        'display': 'Not Recently Used (NRU)',
        'href': '../OS_VirtualLab_CPUscheduling-master/Page_Replacement/nru.html'
    },
    {
        'text': 'NRU',
        'display': 'Not Recently Used (NRU)',
        'href': '../OS_VirtualLab_CPUscheduling-master/Page_Replacement/nru.html'
    },
    {
        'text': 'Second Chance',
        'display': 'Second Chance (SC)',
        'href': '../OS_VirtualLab_CPUscheduling-master/Page_Replacement/SecondChance.html'
    },
    {
        'text': 'Optimal',
        'display': 'Optimal',
        'href': '../OS_VirtualLab_CPUscheduling-master/Page_Replacement/optimal.html'
    },

    {
        'text': 'Page Replacement',
        'display': 'Page Replacement',
        'href': '../OS_VirtualLab_CPUscheduling-master/Page_Replacement/pagereplacement_index.html'
    }
]; 

var dropdownMenu = document.getElementById('suggestions');
dropdownMenu.style.display = 'none';
var searchInput = document.getElementById('search-input');

searchInput.addEventListener('keyup', () => {
    dropdownMenu.innerHTML = ``;
    dropdownMenu.style.display = 'none';
    let userData = searchInput.value.toLowerCase().split(' ').join('');
    let relatedSuggestions = [];
    if(userData!=''){
        relatedSuggestions = suggestions.filter((obj) =>{
            return obj.text.toLowerCase().split(' ').join('').startsWith(userData);
        });
    }

    const uniqueKeyToRelatedSuggestions = new Map(
        relatedSuggestions.map((relatedSuggestions) => [relatedSuggestions.display, relatedSuggestions])
    );

    relatedSuggestions = [...uniqueKeyToRelatedSuggestions.values()];
    console.log(relatedSuggestions);

    if(relatedSuggestions.length === 0 && userData!=''){
        dropdownMenu.innerHTML = `<li class='dropdown-item'>No search results</li>`;
        dropdownMenu.style.display = 'block';
        dropdownMenu.style.fontSize = "14px";
    }
    else if(userData!=''){
        relatedSuggestions.forEach((value) => {
            let newDropItem = document.createElement('li');
            let newLink = document.createElement('a');
            newLink.className = 'dropdown-item'; newLink.href = value.href; newLink.innerText = value.display;
            newDropItem.appendChild(newLink);
            dropdownMenu.appendChild(newDropItem);
            newLink.style = "font-size: 14px";
        });
        dropdownMenu.style.display = 'block';
    }
})


window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        document.getElementsByClassName('navbar')[0].classList.add('animate__slideOutUp');
        setTimeout(() => {
            document.getElementsByClassName('navbar')[0].style.display = 'none';

            document.getElementsByClassName('navbar')[0].classList.remove('animate__slideOutUp');
        }, 100);
    }
    else {
        if (document.getElementsByClassName('navbar')[0].style.display === 'none') {
            document.getElementsByClassName('navbar')[0].classList.add('animate__slideInDown');
            setTimeout(() => {
                document.getElementsByClassName('navbar')[0].style.display = 'block';
            }, 50);
            setTimeout(() => {
                document.getElementsByClassName('navbar')[0].classList.remove('animate__slideInDown');
            }, 500);
        }

    }
});
