for(let i=1;i<51;i++){
    let button=document.createElement('button')
    button.setAttribute('class','button')
    button.style.display='block'
    button.style.marginBottom="10px"
    button.textContent=`Button ${i}`
    document.body.appendChild(button)
}

for(let i=1;i<101;i++){
    let h1=document.createElement('h1')
    h1.setAttribute('class','heading')
    h1.textContent=`Iam heading ${i}`
    document.body.append(h1)
}

for(let i=1;i<201;i++){
    let p=document.createElement('p')
    p.setAttribute('class',`p${i}`)
    p.textContent=`Iam para ${i}`
    document.body.append(p)
}


let table=document.createElement('table')
let tr0=document.createElement('tr')
let tr1=document.createElement('tr')
let tr2=document.createElement('tr')
let tr3=document.createElement('tr')
let td1=document.createElement('td')
let td2=document.createElement('td')
let td3=document.createElement('td')
let td4=document.createElement('td')
let td5=document.createElement('td')
let td6=document.createElement('td')
let td7=document.createElement('td')
let td8=document.createElement('td')
let td9=document.createElement('td')
td1.textContent="pawan"
td2.textContent="25000"
td3.textContent="ft dev"
td4.textContent="sanjana"
td5.textContent="23000"
td6.textContent="java developer"
td7.textContent="Ania"
td8.textContent="250000"
td9.textContent="backend developer"

let th1=document.createElement('th')
let th2=document.createElement('th')
let th3=document.createElement('th')
th1.textContent="ename"
th2.textContent="sal"
th3.textContent="role"

tr0.append(th1,th2,th3)
tr1.append(td1,td2,td3)
tr2.append(td4,td5,td6)
tr3.append(td7,td8,td9)

table.append(tr0,tr1,tr2,tr3)

document.body.append(table)
