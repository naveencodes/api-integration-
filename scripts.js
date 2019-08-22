const app= document.getElementById('content')
const logo = document.createElement('img')

logo.src='logo.png'
 const container=document.createElement('div')
container.setAttribute('class','container') 
app.appendChild(logo)
app.appendChild(container)


var request=  new XMLHttpRequest()
request.open('get','https://ghibliapi.herokuapp.com/films', true )
console.log(request)
request.onload=function(){
    var data = JSON.parse(this.response)
    console.log(data)
if(request.status >=200 && request.status <=400){
    data.forEach(movie => {

        const card=document.createElement('div')
        card.setAttribute('class','card')
        const h1=document.createElement('h1')
        h1.textContent=movie.title

        const p= document.createElement('p')
        movie.description = movie.description.substring(0,300)
        p.textContent=`${movie.description}...`
        container.append(card)
        card.appendChild(h1)
        card.appendChild(p)

      })
}
}

request.send()
