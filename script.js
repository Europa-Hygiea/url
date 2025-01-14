document.getElementById('shortenBtn').addEventListener('click', function () {
    const longUrl = document.getElementById('longUrl').value;
    const outputDiv = document.getElementById('output');

    if (!longUrl) {
        outputDiv.innerHTML = '<p>Please enter a valid URL!</p>';
        return;
    }

    // Generate a random short URL
    const shortUrlCode = Math.random().toString(36).substr(2, 6);
    const shortUrl = `https://europa-hygiea.github.io/url/${shortUrlCode}`;

    // Simulate bypassing bad response code
    const fakeResponseCode = Math.random() < 0.5 ? 500 : 200; // Simulate 50% chance of 500 response
    if (fakeResponseCode === 500) {
        outputDiv.innerHTML = '<p>Failed to shorten URL. Server returned 500.</p>';
    } else {
        outputDiv.innerHTML = `<p>Shortened URL: <a href="${longUrl}" target="_blank">${shortUrl}</a></p>`;
    }
});
