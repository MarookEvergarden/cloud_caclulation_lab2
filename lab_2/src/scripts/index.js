function updateTime() {
    // Get the current UTC time
    const now = new Date();

    // Calculate GMT+2 time by adding 2 hours to UTC
    const gmtPlus2 = new Date(now.getTime() + 2 * 60 * 60 * 1000);

    // Format the time
    const hours = gmtPlus2.getUTCHours().toString().padStart(2, '0');
    const minutes = gmtPlus2.getUTCMinutes().toString().padStart(2, '0');
    const seconds = gmtPlus2.getUTCSeconds().toString().padStart(2, '0');

    // Display the time on the page
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the time every second
setInterval(updateTime, 1000);
updateTime();