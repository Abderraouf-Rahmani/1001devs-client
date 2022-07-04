export default function formatDate(date) {
    const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let day = new Date(date).getDate().toString()
  let month = new Date(date).getMonth().toString()
  let year = new Date(date).getUTCFullYear().toString() === new Date().getFullYear().toString() ? '': new Date(date).getUTCFullYear().toString()
  return `${day}, ${monthShort[parseInt(month)]} ${year}`
}