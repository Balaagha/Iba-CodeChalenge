export function getFormattedTime(timestamp) {
    let date = new Date(+timestamp);
    let month = date.getMonth();
    let day = date.getDay();
    let year = date.getFullYear();
    let formattedTime = `${day} ${month} ${year}`;
    return formattedTime;
}