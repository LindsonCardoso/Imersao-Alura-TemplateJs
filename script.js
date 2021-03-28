const listMangas = [
    {  "nome":"Jujutsu kaisen",
        "img": "https://who.placapa.xyz/uploads/j/jujutsu-kaisen/jujutsu-kaisen.jpg",
        "link": "jujutsu-kaisen-online/"
    },

    {
        "nome": "Boruto Next Generation",
        "img":"https://who.placapa.xyz/uploads/b/boruto-naruto-next-generations/boruto-naruto-next-generations.jpg",
        "link": "boruto-naruto-next-generations-online/"
    },

    {
        "nome": "Shingeki no kyojin",
        "img": "https://who.placapa.xyz/uploads/s/shingeki-no-kyojin/shingeki-no-kyojin.jpg",
        "link": "shingeki-no-kyojin-online/"
        
    },

    {
        "nome": "Kaiju no.8",
        "img": "https://dn1.imgstatic.club/uploads/k/kaiju-no8/kaiju-no8.jpg",
        "link": "kaiju-no8-online/"
        
    },

    {
        "nome": "Uzumaki Spiral int horror",
        "img": "https://dn1.imgstatic.club/uploads/u/uzumaki-uzumaki-spiral-into-horror/uzumaki-uzumaki-spiral-into-horror.jpg",
        "link": "uzumaki-uzumaki-spiral-into-horror-online/"
        
    },
    
    {
        "nome": "Solo leveling",
        "img": "https://dn1.imgstatic.club/uploads/s/solo-leveling/solo-leveling.jpg",
        "link": "solo-leveling-online/"      
    },
    
    

]


const ViewMang = () => {
    for(i of listMangas){
            div = document.createElement('div')
            div.classList.add('card')
            div.innerHTML = `<h3>${i.nome}</h3>
            <a  href="https://www.brmangas.com/manga/${i.link}"> 
            <img src = "${i.img}" ></a>
            `
            div.i = i
            items.append(div); 
    }
} 

ViewMang();


