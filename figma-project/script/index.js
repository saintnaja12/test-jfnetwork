
const games = [
    {
        "Team": "U8 mix",
        "Child": [
            {
                "Day": "Thursday",
                "StartTime": "15:30",
                "EndTime": "16:45",
                "Hall": "Deusterschule Kitzingen"
            }
        ]
    },
    {
        "Team": "U10 mix",
        "Child": [
            {
                "Day": "Thursday",
                "StartTime": "17:00",
                "EndTime": "18:30",
                "Hall": "Deusterschule Kitzingen"
            },
            {
                "Day": "Thursday",
                "StartTime": "16:45",
                "EndTime": "18:15",
                "Hall": "Deusterschule Kitzingen"
            }
        ]
    },
    {
        "Team": "U12 mix",
        "Child": [
            {
                "Day": "Thursday",
                "StartTime": "17:35",
                "EndTime": "18:45",
                "Hall": "Mainstockheim"
            },
            {
                "Day": "Thursday",
                "StartTime": "11:00",
                "EndTime": "12:30",
                "Hall": "Mainstockheim"
            }
        ]
    },
    {
        "Team": "U14 m",
        "Child": [
            {
                "Day": "Thursday",
                "StartTime": "16:30",
                "EndTime": "18:30",
                "Hall": "Arena Kitzingen"
            },
            {
                "Day": "Thursday",
                "StartTime": "17:00",
                "EndTime": "18:30",
                "Hall": "Arena Kitzingen"
            }
        ]
    },
    {
        "Team": "U14 w",
        "Child": [
            {
                "Day": "Thursday",
                "StartTime": "17:00",
                "EndTime": "18:30",
                "Hall": "Arena Kitzingen"
            },
            {
                "Day": "Thursday",
                "StartTime": "18:30",
                "EndTime": "20:30",
                "Hall": "Arena Kitzingen"
            }
        ]
    },
    {
        "Team": "U16 m",
        "Child": [
            {
                "Day": "Thursday",
                "StartTime": "16:30",
                "EndTime": "18:30",
                "Hall": "Arena Kitzingen"
            },
            {
                "Day": "Thursday",
                "StartTime": "18:30",
                "EndTime": "20:00",
                "Hall": "Arena Kitzingen"
            }
        ]
    },
    {
        "Team": "U18/20 Damon",
        "Child": [
            {
                "Day": "Thursday",
                "StartTime": "18:30",
                "EndTime": "20:00",
                "Hall": "Arena Kitzingen"
            },
            {
                "Day": "Thursday",
                "StartTime": "18:30",
                "EndTime": "20:30",
                "Hall": "Arena Kitzingen"
            }
        ]
    },
    {
        "Team": "U18 m",
        "Child": [
            {
                "Day": "Thursday",
                "StartTime": "20:30",
                "EndTime": "22:00",
                "Hall": "Arena Kitzingen"
            },
            {
                "Day": "Thursday",
                "StartTime": "18:30",
                "EndTime": "20:00",
                "Hall": "Arena Kitzingen"
            }
        ]
    },
    {
        "Team": "U20 / Men",
        "Child": [
            {
                "Day": "Thursday",
                "StartTime": "20:30",
                "EndTime": "22:00",
                "Hall": "Arena Kitzingen"
            },
            {
                "Day": "Thursday",
                "StartTime": "20:00",
                "EndTime": "21:30",
                "Hall": "Arena Kitzingen"
            }
        ]
    },
    {
        "Team": "OPEN COURT",
        "Child": [
            {
                "Day": "Thursday",
                "StartTime": "15:00",
                "EndTime": "16:00",
                "Hall": "Arena Kitzingen"
            }
        ]
    }
];

function isEvenOrOdd(number) {
    if(number % 2 === 0){
        return '1'
    }else {
        return '2'
    }
}

const table = document.getElementById("game-schedule");

const rowthead = document.createElement("tr");
rowthead.innerHTML = `
    <th>Team</th>
    <th class="day-time">Day</th>
    <th class="day-time">Time</th>
    <th>Hall</th>
`;
const thead = document.createElement("thead")
thead.appendChild(rowthead)

const tbody = document.createElement("tbody");

for (let i = 0; i < games.length; i++) {
    let game = games[i]
    const row = document.createElement("tr");
    row.classList.add(`tr-${isEvenOrOdd(i)}`)
    row.innerHTML = `
        <td rowspan="${game.Child.length}">${game.Team}</td>
        <td class="child">${game.Child[0].Day}</td>
        <td class="child child-time">
            <div class="chip-time">
                ${game.Child[0].StartTime}
            </div>
            <span> - </span>
            <div class="chip-time">
                ${game.Child[0].EndTime}
            </div>
        </td>
        <td class="child">${game.Child[0].Hall}</td>
        `;
    tbody.appendChild(row);

    if(game.Child.length > 1){
        const row2 = document.createElement("tr");
        row2.classList.add(`tr-${isEvenOrOdd(i)}`)
        for (let j = 1; j < game.Child.length; j++){
            let child = game.Child[j]
            row2.innerHTML = `
                <td class="child">${child.Day}</td>
                <td class="child child-time">
                    <div class="chip-time">
                        ${child.StartTime}
                    </div>
                    <span> - </span>
                    <div class="chip-time">
                        ${child.EndTime}
                    </div>
                </td>
                <td class="child">${child.Hall}</td>
            `
        }
        tbody.appendChild(row2);
    }
}

table.appendChild(thead);
table.appendChild(tbody);
