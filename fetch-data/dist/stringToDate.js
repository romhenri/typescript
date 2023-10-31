export default function stringToDate(text) {
    const [date, time] = text.split(" ");
    const [day, month, year] = date.split("/").map(Number);
    const [hours, minutes] = time.split(":").map(Number);
    const now = new Date(year, month - 1, day, hours, minutes);
    return now;
}
