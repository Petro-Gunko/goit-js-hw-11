import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const getImages = (query) => {
    loaderRef.style.display = 'block';
    return fetch(`https://pixabay.com/api/?key=41717891-03a798ff6847d2641a93432cc&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
}

const formRef = document.querySelector('.form')
const galleryRef = document.querySelector('.gallery')
const loaderRef = document.querySelector('.loader')

loaderRef.style.display = 'none'

formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchQuery = event.currentTarget.elements.query.value.trim()
    getImages(searchQuery).then((result) => {
        if (!result.ok) {
            throw new Error(result.status);
        }
        return result.json();

    })
        .then((result) => {
            loaderRef.style.display = 'none';
            if (result.hits.length === 0) {
                galleryRef.innerHTML = "";
                iziToast.error({
                    position: 'topRight',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                }); return
            }
            const markup = result.hits.map((hit) => {
               
                return `<li class="gallery-item">
                <a class="gallery-link" href="${hit.largeImageURL}">
                    <img
                        class="gallery-image"
                        src="${hit.webformatURL}"
                        alt="${hit.tags}"
                    />
                    <ul class="list">
                        <li class="list-item"><h3>likes</h3><span>${hit.likes}</span></li>
                        <li class="list-item"><h3>views</h3><span>${hit.views}</span></li>
                        <li class="list-item"><h3>comments</h3><span>${hit.comments}</span></li>
                        <li class="list-item"><h3>downloads</h3><span>${hit.downloads}</span></li>
                    </ul>
                </a>
            </li>`
            }).join("")
            galleryRef.insertAdjacentHTML(`beforeend`, markup)
            new SimpleLightbox(`.gallery-item a`)           
        })
        .catch(error => {
            loaderRef.style.display = 'none';
            iziToast.error({
                position: 'topRight',
                message: 'Sorry. Please try again!',
            })
        })
})


