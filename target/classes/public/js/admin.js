let lastGuestId = 0;

// generateWeddingGuests();

getWeddingGuests(0);






document.body.addEventListener("click", function (e) {
    let target = e.target
    if (target.classList.contains("next")) {
        let nextIndex = target.parentElement.previousElementSibling.value - 1;
        getWeddingGuests(nextIndex);
        console.log(nextIndex);
    }
})

function generateWeddingGuests() {
    let weddingGuestsXhr = new XMLHttpRequest();
    weddingGuestsXhr.open("GET", "http://127.0.0.1/invitation/generate", true);
    weddingGuestsXhr.send();

    weddingGuestsXhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response);
            response.forEach(function (item, index) {
                document.getElementById("table").innerHTML += bindWeddingGuest(item, index + 1);
            })
        }
    }
}

function getWeddingGuests(id) {
    let weddingGuestsXhr = new XMLHttpRequest();
    weddingGuestsXhr.open("GET", `http://127.0.0.1/invitations/${id}`, true);
    weddingGuestsXhr.send();

    weddingGuestsXhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response);
            document.getElementById("table").innerHTML = "";
            response.forEach(function (item, index) {
                let tempGuestIndex = index - lastGuestId;
                if ((index + 1) == response.length) {
                    lastGuestId = item.id;
                }
                console.log(lastGuestId)
                document.getElementById("table").innerHTML += bindWeddingGuest(item, tempGuestIndex + 1);
            })
            let paginations = document.querySelectorAll(".pagination");
            paginations.forEach(function (item, index) {
                item.value = (lastGuestId + 1) + (index * response.length) - response.length;
                if (index == 0) {
                    if ((parseInt(item.value) - 40) < 0) {
                        item.value = 0;
                    }
                    else {
                        item.value = (parseInt(item.value) - 40)
                    }
                }
                else if ((index + 1) < paginations.length) {
                    item.nextElementSibling.children[0].textContent = item.value;
                }
                else {
                    item.value = (40 + parseInt(item.value));
                }
            })
        }
    }
}

function bindWeddingGuest(guest, index) {
    return `<tr class="gold-text">
    <td>${index}</td>
    <td style="display: flex; justify-content: center; align-items: center;"><img src="${guest.photo}"
            alt="" style="width: 70px; height: 70px; border-radius: 70px; object-fit: cover;"></td>
    <td>
        <p>${guest.title} ${guest.firstName} ${guest.lastName}</p>
        <p>${guest.mobileNumber}</p>
    </td>
    <td>
        <p>Confirmed</p>
    </td>
</tr>`
}