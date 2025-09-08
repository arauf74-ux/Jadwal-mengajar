const dataJadwal = [
  { hari: "Senin", mapel: "Matematika", jam: "07.30 - 09.00" },
  { hari: "Selasa", mapel: "Bahasa Indonesia", jam: "09.30 - 11.00" },
  { hari: "Rabu", mapel: "IPA", jam: "07.30 - 09.00" }
];

const container = document.getElementById("jadwal");

dataJadwal.forEach(item => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<b>${item.hari}</b><br>${item.mapel} (${item.jam})`;
  container.appendChild(div);
});
