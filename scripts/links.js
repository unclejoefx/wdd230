const baseURL = "https://unclejoefx.github.io/wdd230/";
const linksURL = "https://unclejoefx.github.io/wdd230/data/links.json";
const activity = document.querySelector('#activity');

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data)
            displayLinks(data.weeks);
        } else {
            throw Error(response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
getLinks();

function displayLinks(weeks) {
    const list = document.querySelector('#activity ul')
    list.innerHTML = '';
    // const list = document.createElement('ul');
    weeks.forEach(weekData => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `${weekData.week}:`;

        weekData.links.forEach(link => {
            let anchor = document.createElement('a');
            let span = document.createElement('span');
            anchor.setAttribute('href', link.url)
            anchor.textContent = link.title;
            span.innerHTML = '&ensp;';
            listItem.appendChild(anchor);
            listItem.appendChild(span);
        });

        list.appendChild(listItem);

    });
    


    activity.appendChild(list);
}