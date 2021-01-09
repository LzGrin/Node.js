//   }
// }

const deleteProduct = (url) => {

    fetch(url)
        .then(response => response.json())
        .then(json => {
            let textBlock = document.querySelector(".text");
            textBlock.innerHTML = `<span> ID: ` + json.articul + `</span><br>
                              <span> Title: ` + json.title + `</span><br>
                              <span> Price: ` + json.price + `</span><br>
                              <span> Count: ` +json.count + `</span>;
        }
}