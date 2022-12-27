let colorPalettes = [
    {
        paletteImage: "./uiux_images/1.webp",
        typefaceName: "nunito",
        paletteColors: ['#318162', '#f9b75d', '#132f3a', '#fef8f0'],
        designer: 'harshil acharya',
        designerSocialLinks: [{
                socialSiteIcon: 'instagram',
                socialSiteUrl: "https://www.instagram.com/harshil_designer/?hl=en"
            },
            {
                socialSiteIcon: 'dribble',
                socialSiteUrl: "https://dribbble.com/harshil"
            },

        ]
    },
    
    {
        paletteImage: "./uiux_images/2.webp",
        typefaceName: "gilroy",
        paletteColors: ['#5698ee', '#040d2e', '#ffffff', '#8c9cda'],
        designer: 'harshil acharya',
        designerSocialLinks: [{
                socialSiteIcon: 'instagram',
                socialSiteUrl: "https://www.instagram.com/harshil_designer/?hl=en"
            },
            {
                socialSiteIcon: 'dribble',
                socialSiteUrl: "https://dribbble.com/harshil"
            },

        ]
    },

    {
        paletteImage: "./uiux_images/3.webp",
        typefaceName: "gilroy",
        paletteColors: ['#24cca7', '#4a56e2', '#ffffff', '#000000','#afb1bb','#fd5166'],
        designer: 'harshil acharya',
        designerSocialLinks: [{
                socialSiteIcon: 'instagram',
                socialSiteUrl: "https://www.instagram.com/harshil_designer/?hl=en"
            },
            {
                socialSiteIcon: 'dribble',
                socialSiteUrl: "https://dribbble.com/harshil"
            },

        ]
    },

    {
        paletteImage: "./uiux_images/4.webp",
        typefaceName: "Adobe caslon pro",
        paletteColors: ['#af5e41', '#6eabe9', '#050418', '#ffffff'],
        designer: 'harshil acharya',
        designerSocialLinks: [{
                socialSiteIcon: 'instagram',
                socialSiteUrl: "https://www.instagram.com/harshil_designer/?hl=en"
            },
            {
                socialSiteIcon: 'dribble',
                socialSiteUrl: "https://dribbble.com/harshil"
            },

        ]
    },

    {
        paletteImage: "./uiux_images/5.webp",
        typefaceName: "sans-serif",
        paletteColors: ['#157dff', '#31d67b', '#d0e5ff', '#ffffff','#272b31','#676a6f','#a9b2c0'],
        designer: 'harshil acharya',
        designerSocialLinks: [{
                socialSiteIcon: 'instagram',
                socialSiteUrl: "https://www.instagram.com/harshil_designer/?hl=en"
            },
            {
                socialSiteIcon: 'dribble',
                socialSiteUrl: "https://dribbble.com/harshil"
            },

        ]
    },

    {
        paletteImage: "./uiux_images/6.webp",
        typefaceName: "system-ui, lato, poppins",
        paletteColors: ['#31ad5f', '#326543','#fafafa', '#000000', '#ffffff','#b2b2b2'],
        designer: 'Permadi Satria Dewanto',
        designerSocialLinks: [
            {
                socialSiteIcon: 'dribble',
                socialSiteUrl: "https://dribbble.com/permadi"
            },

        ]
    },
]


// parent element for all cards

let paletteCardContainer = document.getElementsByTagName('main')[0];

// design palatte card 
let addCard = (cardData) => {

    let paletteCard = document.createElement("div");
    paletteCard.classList.add("palette_card");

    let paletteCardImage = document.createElement("img");
    paletteCardImage.classList.add("pallete_image");
    paletteCardImage.setAttribute("src", cardData.paletteImage);
    paletteCardImage.setAttribute("alt", "image not found");

    let paletteCardInfo = document.createElement("div");
    paletteCardInfo.classList.add("palette_info");

    let paltteInfoTypeface = document.createElement("div");
    paltteInfoTypeface.classList.add("typeface");
    paltteInfoTypeface.innerHTML = `Typeface <span class="typeface_name">${cardData.typefaceName}</span>`

    let colorPalette = document.createElement("div");
    colorPalette.classList.add("color_palette");

    let uniqueIdSalt=0;

    let addColorInColorPalette = (color) => {
        let colorCode = String(color).toUpperCase();
        colorPalette.innerHTML += `
        <div class="color_info">
            <div class="color">
                <input type="color" id="${colorCode+uniqueIdSalt}" value="${colorCode}" opacity>
                <label class="color_code" for=${colorCode+uniqueIdSalt}>${colorCode}</label>
            </div>
            <button class="copy_code_btn" aria-label="copy color code" data-clipboard-text="${colorCode}"><img src="./icons/copy_light.webp" alt=""></button>
        </div>
        `;
        uniqueIdSalt++;
    }

    // call function for colors array
    cardData.paletteColors.forEach(element => {
        addColorInColorPalette(element)
    });

    // code for author information

    let authorInfo = document.createElement('div');
    authorInfo.classList.add("author_info");

    if (cardData.designerSocialLinks.length === 2) {
        authorInfo.innerHTML =
            `
        <span class="text">Designed by <span class="author">${cardData.designer}</span></span>
        <div class="social_links">
            <a href="${cardData.designerSocialLinks[0].socialSiteUrl}" aria-label="${cardData.designer}:instagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                    height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                        d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"
                        fill="rgba(255,255,255,1)" /></svg>
            </a>
            <a href="${cardData.designerSocialLinks[1].socialSiteUrl}" aria-label="${cardData.designer}:dribble"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                    height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                        d="M19.989 11.572a7.96 7.96 0 0 0-1.573-4.351 9.749 9.749 0 0 1-.92.87 13.157 13.157 0 0 1-3.313 2.01c.167.35.32.689.455 1.009v.003a9.186 9.186 0 0 1 .11.27c1.514-.17 3.11-.108 4.657.101.206.028.4.058.584.088zm-9.385-7.45a46.164 46.164 0 0 1 2.692 4.27c1.223-.482 2.234-1.09 3.048-1.767a7.88 7.88 0 0 0 .796-.755A7.968 7.968 0 0 0 12 4a8.05 8.05 0 0 0-1.396.121zM4.253 9.997a29.21 29.21 0 0 0 2.04-.123 31.53 31.53 0 0 0 4.862-.822 54.365 54.365 0 0 0-2.7-4.227 8.018 8.018 0 0 0-4.202 5.172zm1.53 7.038c.388-.567.898-1.205 1.575-1.899 1.454-1.49 3.17-2.65 5.156-3.29l.062-.018c-.165-.364-.32-.689-.476-.995-1.836.535-3.77.869-5.697 1.042-.94.085-1.783.122-2.403.128a7.967 7.967 0 0 0 1.784 5.032zm9.222 2.38a35.947 35.947 0 0 0-1.632-5.709c-2.002.727-3.597 1.79-4.83 3.058a9.77 9.77 0 0 0-1.317 1.655A7.964 7.964 0 0 0 12 20a7.977 7.977 0 0 0 3.005-.583zm1.873-1.075a7.998 7.998 0 0 0 2.987-4.87c-.34-.085-.771-.17-1.245-.236a12.023 12.023 0 0 0-3.18-.033 39.368 39.368 0 0 1 1.438 5.14zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
                        fill="rgba(255,255,255,1)" /></svg>
            </a>
        </div>
        `
    } else {
        authorInfo.innerHTML =
            `
        <span class="text">Designed by <span class="author">${cardData.designer}</span></span>
        <div class="social_links">
            <a href="${cardData.designerSocialLinks[0].socialSiteUrl}" aria-label="${cardData.designer}:dribble><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
            height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
                d="M19.989 11.572a7.96 7.96 0 0 0-1.573-4.351 9.749 9.749 0 0 1-.92.87 13.157 13.157 0 0 1-3.313 2.01c.167.35.32.689.455 1.009v.003a9.186 9.186 0 0 1 .11.27c1.514-.17 3.11-.108 4.657.101.206.028.4.058.584.088zm-9.385-7.45a46.164 46.164 0 0 1 2.692 4.27c1.223-.482 2.234-1.09 3.048-1.767a7.88 7.88 0 0 0 .796-.755A7.968 7.968 0 0 0 12 4a8.05 8.05 0 0 0-1.396.121zM4.253 9.997a29.21 29.21 0 0 0 2.04-.123 31.53 31.53 0 0 0 4.862-.822 54.365 54.365 0 0 0-2.7-4.227 8.018 8.018 0 0 0-4.202 5.172zm1.53 7.038c.388-.567.898-1.205 1.575-1.899 1.454-1.49 3.17-2.65 5.156-3.29l.062-.018c-.165-.364-.32-.689-.476-.995-1.836.535-3.77.869-5.697 1.042-.94.085-1.783.122-2.403.128a7.967 7.967 0 0 0 1.784 5.032zm9.222 2.38a35.947 35.947 0 0 0-1.632-5.709c-2.002.727-3.597 1.79-4.83 3.058a9.77 9.77 0 0 0-1.317 1.655A7.964 7.964 0 0 0 12 20a7.977 7.977 0 0 0 3.005-.583zm1.873-1.075a7.998 7.998 0 0 0 2.987-4.87c-.34-.085-.771-.17-1.245-.236a12.023 12.023 0 0 0-3.18-.033 39.368 39.368 0 0 1 1.438 5.14zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
                fill="rgba(255,255,255,1)" /></svg>
            </a>
        </div>
        `
    }


    // arrenge all elements by append elements
    paletteCard.append(paletteCardImage);
    paletteCard.append(paletteCardInfo);
    paletteCardInfo.append(paltteInfoTypeface);
    paletteCardInfo.append(colorPalette)
    paletteCardInfo.append(authorInfo);

    // add card in container
    paletteCardContainer.append(paletteCard);

}

// call function for each every palette object
colorPalettes.forEach(element => {
    addCard(element)
})