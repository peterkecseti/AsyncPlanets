document.addEventListener('DOMContentLoaded', async () => {
    //1.Feladat
    document.getElementById('btn1').addEventListener('click', async () => {
        console.log("asd")
       let response = await fetch('planets.json');
       console.log(response)
       let data = await response.json();
       
       data.planets.sort((a,b) => a.name.localeCompare(b.name));

       let ul = document.getElementById('osszesBolygo');
       ul.textContent = '';
        for( let q of data.planets){
            let li  = document.createElement('li');
            ul.appendChild(li);
            
            if(q.dwarf){
                li.innerHTML =  '<i>' + q.name; + '</i>'
            }
            else{
            li.innerHTML = q.name;
        }
        }
    });


    document.getElementById('btn2').addEventListener('click', async () => {
        let response = await fetch('planets.json');
        console.log(response)
        let data = await response.json();
        let s = "";
        
        let diameters = [];
       
        for(let p of data.planets){
            let D = Math.sqrt(p.area / 4 * Math.PI);
            diameters.push(D);
        }

        for(let d of diameters){
            s += d + "; ";
        }
        document.getElementById('diameters').innerHTML = s;

    });

    document.getElementById('btn3').addEventListener('click', async () => {
        let response = await fetch('planets.json');
        console.log(response)
        let data = await response.json();
        let min = document.getElementById('min').value;
        let max = document.getElementById('max').value;
        let inbetween = [];
        inbetween.push(data.planets.filter(planet => planet.area >= min && planet.area <= max))
        console.log(inbetween)

        let ul = document.getElementById('inbetween');
        ul.textContent = '';
        for( let i of inbetween[0]){
            let li  = document.createElement('li');
            ul.appendChild(li);
        
            li.innerHTML = i.name;
        }
    });

    document.getElementById('btn4').addEventListener('click', async () => {
        let response = await fetch('planets.json');
        console.log(response)
        let data = await response.json();

        let torpe = document.getElementById('torpe').checked;

        let sumA = 0;
        let filteredPlanets = [];

        filteredPlanets.push(data.planets.filter(planet => planet.dwarf == torpe))
        for(let fp of filteredPlanets[0]){
            sumA += fp.area;
            console.log(fp.area)
        }
        document.getElementById('darab').value = sumA;

    });


});