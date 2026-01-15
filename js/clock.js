// GMT Clock
const updateGMTTime = () => {
    const timeEl = document.getElementById('gmt-time');
    if (timeEl) {
        const time = new Date().toLocaleTimeString('en-GB', {
            timeZone: 'GMT',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        timeEl.textContent = time + ' GMT';
    }
};

// Start clock
setInterval(updateGMTTime, 1000);
updateGMTTime();
