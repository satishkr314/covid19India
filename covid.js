function getData(data)
{
    html="";
    console.log(data.data.regional);
    for(eachItems in data.data.regional)
    {
        let activeCases=data.data.regional[eachItems].totalConfirmed-data.data.regional[eachItems].discharged-data.data.regional[eachItems].deaths;
        
        html+=`<div class="StateInformation">
        <div>
            ${data.data.regional[eachItems].loc}
        </div>
        <div>
            ${data.data.regional[eachItems].totalConfirmed}
        </div>
        <div>
            ${activeCases}
        </div>
        <div>
            ${data.data.regional[eachItems].discharged}
        </div>
        <div>
        ${data.data.regional[eachItems].deaths}
        </div>
    </div>`
        
    }
    document.getElementsByClassName('allStates')[1].innerHTML=html;
}
const fetchData=fetch("https://api.rootnet.in/covid19-in/stats/latest")
.then((response)=>{return response.json();})
.then((data)=>{getData(data)});
