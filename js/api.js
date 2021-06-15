function verifyEmail() {
    var email = document.getElementById("email-input").value;
    console.log(email)
    var url = "https://emailvalidation.abstractapi.com/v1/?api_key=82a0da7a3d2f49a2a2981715dbfe385f&email=" + email
    console.log(url)
    httpGetAsync(url)
}

function httpGetAsync(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
                var response = xmlHttp.responseText;
                var emailStatus = JSON.parse(response);

                document.getElementById("email").innerHTML = 'Showing results for: ' + '"' + emailStatus.email + '"';
                document.getElementById("deliverability").innerHTML = emailStatus.deliverability;
                document.getElementById("quality-score").innerHTML = emailStatus.quality_score;
                document.getElementById("is-valid-format").innerHTML = emailStatus.is_valid_format.text;
                document.getElementById("is-free-email").innerHTML = emailStatus.is_free_email.text;
                document.getElementById("is-disposable-email").innerHTML = emailStatus.is_disposable_email.text;
                document.getElementById("is-role-email").innerHTML = emailStatus.is_role_email.text;
                document.getElementById("is-catchall-email").innerHTML = emailStatus.is_catchall_email.text;
                document.getElementById("is-mx-found").innerHTML = emailStatus.is_mx_found.text;
                document.getElementById("is-smtp-valid").innerHTML = emailStatus.is_smtp_valid.text;

                var scrollToResults = document.querySelector("#result-heading");
                scrollToResults.scrollIntoView();
            } else {
                alert('Error!' + xmlHttp.statusText)
                console.log("Error", xmlHttp.statusText);
            }
        }
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}

