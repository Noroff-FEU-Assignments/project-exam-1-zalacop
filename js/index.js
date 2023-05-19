const slider = document.querySelector(".carousel");

const localHost = "https://www.webupload.no";
const wordPress = "/wp-json/wp/v2";
const posts = "/posts";


const urlPosts = localHost + wordPress + posts + "/?_embed&per_page=20"; 

async function getSliderPosts() {

    // fetching the JSON and catching error message
    
    try {

        const getPosts = await fetch(urlPosts);
        const posts = await getPosts.json();

        slider.innerHTML = " ";
    
        for (let i = 0; i < posts.length; i++) {
            const getTitle = posts[i].title;
            const postTitle = getTitle.rendered;
            const tryImage = posts[i]._embedded["wp:featuredmedia"][0].source_url;
    
            console.log(postTitle);
    
            // creating the slider on home page
            slider.innerHTML = ``
        }

    } catch (error) { // catching if an error occours
        console.log(error);

        // displaying error message
        slider.innerHTML = errorMessage(); 
    }
}

getSliderPosts();