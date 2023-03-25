function showEnglish() {
    document.getElementById("engVer").style.display = "";
    document.getElementById("chiVer").style.display = "none";
    document.getElementById("toptitle").innerHTML = "Fitness Walking Tracks";
    document.getElementById("engInput").style.display = "";
    document.getElementById("chiInput").style.display = "none";
    document.getElementById("Engdistrictselect").style.display = "";
    document.getElementById("EnglishDistrictfuncButton").style.display = "";
    document.getElementById("Chidistrictselect").style.display = "none";
    document.getElementById("ChineseDistrictfuncButton").style.display = "none";
    document.getElementById("engVerwithdistrict").style.display = "none";
    document.getElementById("chiVerwithdistrict").style.display = "none";
    
}

function showChinese() {
    document.getElementById("engVer").style.display = "none";
    document.getElementById("chiVer").style.display = "";
    document.getElementById("toptitle").innerHTML = "健步行徑";
    document.getElementById("engInput").style.display = "";
    document.getElementById("chiInput").style.display = "none";
    document.getElementById("Engdistrictselect").style.display = "none";
    document.getElementById("EnglishDistrictfuncButton").style.display = "none";
    document.getElementById("Chidistrictselect").style.display = "";
    document.getElementById("ChineseDistrictfuncButton").style.display = "";
    document.getElementById("engVerwithdistrict").style.display = "none";
    document.getElementById("chiVerwithdistrict").style.display = "none";
}

//EnglishDistrictfunc
function EnglishDistrictfunc() {  
    var e = document.getElementById("Engdistrictselect");
    var value = e.value;
    areadistrict = e.options[e.selectedIndex].text;
    var rowCount = tb3.rows.length;
    for (var i = rowCount-1 ; i > 0; i--) {
        tb3.deleteRow(i);
    }
    fetch("mydata.json")
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i<data.items.length; i++){
            let textwithcontainspace = data.items[i].District_en;
            let result = textwithcontainspace.trim();
            if(result == areadistrict){
                let vTitle_enwithdistrict = data.items[i].Title_en;
                let vDistrict_enwithdistrict = data.items[i].District_en;
                let vRoute_enwithdistrict = data.items[i].Route_en;
                let vHowToAccess_enwithdistrict = data.items[i].HowToAccess_en;
                let vMapURL_enwithdistrict = data.items[i].MapURL_en;
                let vLatitudewithdistrict = data.items[i].Latitude;
                let vLongitudewithdistrict = data.items[i].Longitude;
                    document.querySelector("#tb3").innerHTML += `
                        <tbody>
                            <tr>
                                <td>${vTitle_enwithdistrict}</td>
                                <td>${vDistrict_enwithdistrict}</td>
                                <td>${vRoute_enwithdistrict}</td>
                                <td>${vHowToAccess_enwithdistrict}</td>
                                <td>${vLatitudewithdistrict}</td>
                                <td>${vLongitudewithdistrict}</td>
                            </tr>
                        <tbody>`;
            }
        }
      })

    document.getElementById("engVer").style.display = "none";
    document.getElementById("chiVer").style.display = "none";
    document.getElementById("toptitle").innerHTML = "Fitness Walking Tracks";
    document.getElementById("engInput").style.display = "";
    document.getElementById("chiInput").style.display = "none";
    document.getElementById("engVerwithdistrict").style.display = "";
}
//Chinese District func
function ChineseDistrictfunc() {  
    var f = document.getElementById("Chidistrictselect");
    var value2 = f.value;
    areadistrictchi = f.options[f.selectedIndex].text;
    var rowCount = tb4.rows.length;
    for (var i = rowCount-1 ; i > 0; i--) {
        tb4.deleteRow(i);
    }
    fetch("mydata.json")
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i<data.items.length; i++){
            let textwithcontainspacechi = data.items[i].District_tc;
            let resultchi = textwithcontainspacechi.trim();
            if(resultchi == areadistrictchi){
                let vTitle_chwithdistrict = data.items[i].Title_tc;
                let vDistrict_chwithdistrict = data.items[i].District_tc;
                let vRoute_chwithdistrict = data.items[i].Route_tc;
                let vHowToAccess_chwithdistrict = data.items[i].HowToAccess_tc;
                let vMapURL_chwithdistrict = data.items[i].MapURL_tc;
                let vLatitudewithdistrict = data.items[i].Latitude;
                let vLongitudewithdistrict = data.items[i].Longitude;
                    document.querySelector("#tb4").innerHTML += `
                        <tbody>
                            <tr>
                                <td>${vTitle_chwithdistrict}</td>
                                <td>${vDistrict_chwithdistrict}</td>
                                <td>${vRoute_chwithdistrict}</td>
                                <td>${vHowToAccess_chwithdistrict}</td>
                                <td>${vLatitudewithdistrict}</td>
                                <td>${vLongitudewithdistrict}</td>
                            </tr>
                        <tbody>`;
            }
        }
      })

    
    document.getElementById("toptitle").innerHTML = "健步行徑";
    document.getElementById("engInput").style.display = "none";
    document.getElementById("chiInput").style.display = "";
    document.getElementById("engVerwithdistrict").style.display = "none";
    document.getElementById("chiVerwithdistrict").style.display = "";
    
}

