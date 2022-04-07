console.log('hallo');
console.log('hallo');
console.log('hallo');


var title = "Constructing HTML Elements";

// var html = [
//     '<div class="tutorial">',
//         '<h1 class="tutorial-heading">' + title + '<h1>',
//     '</div>'
// ].join("\n");
// html: '<div ...>\n<h1 ...>Constructing HTML Elements<h1>\n</div>'

var html = `
    <div class="tutorial">
        <h1 class="tutorial-header"> ${title} </h1>
    </div>
`;

// var otherHtml = "<div class='tutorial'><h1 class='tutorial-header'>hallo</h1></div>";

// console.log('hallo');

// var body = document.getElementById('inherepls');
// console.log("body");
// console.log(body);
// console.log(document.getElementById('inherepls'));
// // $("body").append(html);

// var tag = document.createElement('p');
// var text = document.createTextNode("Tutrix hallo");
// tag.appendChild(text);

function createTableElement(id, name, notes, whatever) {
    var newElement = `
        <tr>
            <td>${id} ${name}</td>
            <td>${notes}</td>
            <td>${whatever}</td>
        </tr>
    `

    $("#taskTable").append(newElement);
}


//sort by date
//sort by date within the goals themselves


window.onload = () => {
    // console.log('loaded');
    // console.log(document.getElementById('inherepls'));
    // var body = document.getElementById('inherepls');
    // // body.append(html);
    // // body.append(otherHtml);
    // // document.getElementById('inherepls').appendChild(otherHtml);
    // document.body.append(otherHtml);

    // console.log(tag);
    // document.body.append(tag);

    // var container = $("<div");
    // console.log(container);
    $("body").append(html);

    var header = '<tr><th>WhichOne</th><th>notes</th><th>whatever</th></tr>'

    $('#taskTable').append(header);

    var allInfos = [
        {
            id: 0,
            name: 'name0',
            notes: 'i am a note thank you pls',
            whatever: 89089080
        },
        {
            id: 1,
            name: 'name1',
            notes: 'i am a note thank you pls SIR',
            whatever: '89089080asdjkl'
        },
        {
            id: 2,
            name: 'name2',
            notes: 'a note thank you pls SIR',
            whatever: 10
        }
    ]

    for (var i in allInfos) {
        var t = allInfos[i];
        createTableElement(t.id, t.name, t.notes, t.whatever);
    }
}