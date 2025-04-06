const gallery = document.getElementById('gallery');

async function fetchphotos(){
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
        if(!res.ok){
            throw new Error('Failed to fetch')
        }
        const data = await res.json();

        data.forEach(photo =>{
            const div =  document.createElement('div');
            div.className = 'photo-card';
            div.innerHTML = `
            <img src="${photo.thumbnailUrl}" alt="${photo.title}"/>
            <p>${photo.title}</p>`;
            gallery.appendChild(div);
        })
    }
    catch(err){
        console.log("Error fetching photos",err)
    }

}

window.addEventListener('scroll',()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 100){
        fetchphotos();
    }
});

document.addEventListener('DOMContentLoaded',()=>{
    fetchphotos();
})