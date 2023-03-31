const data =
{
    "dataSiswa": [
        {
            "id": "1",
            "name": "Kariman Kasim Mangunsong",
            "foto": "https://xsgames.co/randomusers/assets/avatars/male/11.jpg"
        },
        {
            "id": "2",
            "name": "Melinda Hassanah",
            "foto": "https://xsgames.co/randomusers/assets/avatars/female/21.jpg"
        },
        {
            "id": "3",
            "name": "Rafi Halim",
            "foto": "https://xsgames.co/randomusers/assets/avatars/male/31.jpg"
        },
        {
            "id": "4",
            "name": "Eka Wahyuni",
            "foto": "https://xsgames.co/randomusers/assets/avatars/female/41.jpg"
        },
        {
            "id": "5",
            "name": "Arta Wibisono",
            "foto": "https://xsgames.co/randomusers/assets/avatars/male/51.jpg"
        },
        {
            "id": "6",
            "name": "Kusuma Ziah",
            "foto": "https://xsgames.co/randomusers/assets/avatars/female/61.jpg"
        }
    ]
};

const tampilData = () => {
    var html = '';
    var number = 0;
    var tbody = document.getElementById('datanya');
    data.dataSiswa.forEach(element => {
        // console.log(element)
        html += `<tr>
            <td>${number += 1}</td>
            <td>${element.name}</td>
            <td><center><img width="150" src="${element.foto}?img=` + Math.random() + `"></center></td>
            <td><a href=detail.html?id=${element.id}>Detail</a></td>
        </tr>`
    });
    tbody.innerHTML += html
}


const getId = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    return id;
}

var detailDataSiswa = data.dataSiswa.filter(function (i) {
    return i.id == getId();
});

const tampilDetail = () => {
    let detail = detailDataSiswa[0];
    if (detailDataSiswa.length <= 0) {
        document.getElementsByClassName('card')[0].innerHTML = `<center><h1>Data tidak di temukan!..  <hr> No Data Found!.. </h1></center>`
    } else {
        document.getElementById("detailDataSiswa").innerHTML = `<tr>
        <th>Nama</th>
        <th>:</th>
        <th><q>${detail.name}</q></th>
    </tr>
    
    <tr>
        <th>Foto</th>
        <th>:</th>
        <th><center><img width="150" src="${detail.foto}?img=` + Math.random() + `"></center></th>
    </tr>`;
        document.getElementById('h1').innerHTML = "Biodata " + detail.name;
    }
}