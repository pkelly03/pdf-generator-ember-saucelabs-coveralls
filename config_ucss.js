module.exports = {
    "pages": { // (Required) Pages to check. Crawl or include is required.
        "crawl": "http://localhost:9000/", // (Optional, if "include" is given).
                                      // Starting point for crawler.
        "include": [ // (Optional, if "crawl" is given) List of HTML 
                     // files/URLs to check.
            "http://localhost/unlinkedpage",
            "http://localhost/products/foo" // Add product from excluded
                                            // subfolder.
        ]
    },
    "headers": { "Accept-Language": "nb-no" }, // (Optional) Headers to send
                                               // to server.
    "css": [ // (Required) List of CSS files to check.
        "base.css"
    ],
    "whitelist": [".foo", ".bar"], // (Optional) List of CSS rules to ignore,
                                   // e.g. ones added by JavaScript.
    "timeout": 4000, // (Optional) Timeout for HTTP requests. (default is 
                     // 4000ms).
    "auth": { // (Optional) Authentication information.
              // Please see docs for more info.
        "username": "foo",
        "password": "bar",
        "loginUrl": "http://localhost:8000/accounts/login/",
        "loginFunc": "djangoLogin"
    },
    "output": { // (Optional) How to output information from uCSS
        "logger": function(res, originalUrl, loggedIn) {
            // (Optional) Function that is called for each URL that is visited.
            // Use null for if you want it to be silent.
            console.log("Visited: ", originalUrl);
        },
        "result": function(result) { console.log(result); } // (Optional)
    }
};