let arr=[["name","age"],["Navin",22]]
let table=document.createElement('table')
arr.forEach((ele,ind)=>{
    let tr=document.createElement('tr')
    ele.forEach(data=>{
        let res=document.createElement(ind==0?'th':'td')
        res.textContent=data
        tr.append(res)
    })
    table.append(tr)
})
document.body.append(table)
