// These are the things that will change for a given server:
// I used this command to start a proxy to allow the requests to occur:  
// npx local-cors-proxy --proxyUrl http://localhost --port 8010
// then domain and proxt was localhost:8010/proxy
let domain_and_proxy = "todo";
let auth = btoa("todo");


const requiredHeaders = new Headers();
requiredHeaders.append("Authorization", "Basic " + auth);
requiredHeaders.append("OCS-APIRequest", "true");
requiredHeaders.append("Content-Type", "application/json");
requiredHeaders.append("Accept", "application/json")

async function getRecentFiles() {
    const url = "http://" + domain_and_proxy + "/nextcloud/index.php/apps/files/api/v1/recent"

    const response = await fetch(url, {
        method: "GET",
        headers: requiredHeaders
    });


    const parsed = response.json();
    console.log(parsed);
}

async function getStats() {
    const url = "http://" + domain_and_proxy +"/nextcloud/index.php/apps/files/api/v1/stats"

    const response = await fetch(url, {
        method: "GET",
        headers: requiredHeaders
    });


    const parsed = response.json();
    console.log(parsed);
}


async function getLinkForEditing(path_input, fileId_input) {
    const url = "http://" + domain_and_proxy +"/nextcloud/ocs/v2.php/apps/files/api/v1/directEditing/open";

    const params = {
        path: path_input,
        fileId: fileId_input
    }

    const response = await fetch(url, {
        method: "POST",
        headers: requiredHeaders,
        body: JSON.stringify(params)
    });

    console.log(response.json());
}

async function getThumbnail(file, width, height) {
    const url = "http://" + domain_and_proxy +"/nextcloud/index.php/apps/files/api/v1/thumbnail/" 
    + width + "/" + height + "/" + file;

    const response = await fetch(url, {
        method: "GET",
        headers: requiredHeaders,
    });

    const blobert = await response.blob();
    console.log(blobert);

    const imgURL = URL.createObjectURL(blobert);
    const img = document.createElement('img');
    img.src = imgURL;
    img.alt = "Thumbnail of " + file;
    img.style.maxWidth = '600px';
    document.body.appendChild(img);
}


getRecentFiles();
getStats();
getLinkForEditing("todo", "todo");
getThumbnail("todo", todo, todo);