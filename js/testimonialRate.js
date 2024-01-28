const testiData = [
    {
        image: "./assets/testimonial/nissa.png",
        quotes: "teruslah bernyanyi jika suara emasmu ada dan tunjukan penampilan terbaikmu",
        author: "Nissa Sabyan",
        rating: 4
    },
    {
        image: "./assets/testimonial/chef_renata.png",
        quotes: "Masakan yang penting enak dicicipi dan bisa untuk dimakan",
        author: "Chef Renata",
        rating: 5
    },
    {
        image: "./assets/testimonial/chef_juna.png",
        quotes: "Masakan yang penting enak dicicipi dan bisa untuk dimakan",
        author: "Chef Juna",
        rating: 5
    },
    {
        image: "./assets/testimonial/nissa.png",
        quotes: "teruslah bernyanyi jika suara emasmu ada dan tunjukan penampilan terbaikmu",
        author: "Nissa Sabyan",
        rating: 1
    },
    {
        image: "./assets/testimonial/chef_renata.png",
        quotes: "Masakan yang penting enak dicicipi dan bisa untuk dimakan",
        author: "Chef Renata",
        rating: 2
    }
]

function renderData() {
    let testiHtml = ''

    testiData.forEach((data) => {
        testiHtml += `
<div class="card shadow" id="testi">
    <div class="testiContent">
        <div>
            <img src="${data.image}" alt="" class="testiImg">
        </div>
        <div>
            <p class="quotes">"${data.quotes}"</p>
        </div>
        <div>
            <p class="author">- ${data.author}</p>
        </div>
        <div>
            <p class="rating">${data.rating} </p>
        </div>
    </div>
</div>
`
    })

    document.getElementById("testBody").innerHTML = testiHtml
}
renderData()

function filterRating(rating) {
    let testiHtml = ''

    const filterData = testiData.filter(function (data) {
        return data.rating === rating
    })
    console.log(filterData)

    if (filterData.length === 0) {
        testiHtml = `<h1>Data Not Found</h1>`
    } else {
        filterData.forEach((data) => {
            testiHtml += `
<div class="card shadow" id="testi">
    <div class="testiContent">
        <div>
            <img src="${data.image}" alt="" class="testiImg">
        </div>
        <div>
            <p class="quotes">"${data.quotes}"</p>
        </div>
        <div>
            <p class="author">- ${data.author}</p>
        </div>
        <div>
            <p class="author">${data.rating}</p>
        </div>
    </div>
</div>
        `
        })
    }

    document.getElementById("testBody").innerHTML = testiHtml
}