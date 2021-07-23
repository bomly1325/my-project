async function fetchData() {
    const res = await fetch('https://reqres.in/api/users');
    const data = await res.json();
    const info = await data.data;
    var html = info.map(function(x) {
        return `<h1>${x.first_name} ${x.last_name}</h1>
        <p>Email: ${x.email}</p>`;
    })
    const index = document.getElementById('input-el').value - 1;
    document.getElementById('output-el').innerHTML = html[index];
}
const getBtn = document.getElementById('get-btn')
getBtn.addEventListener('click', function() {
    fetchData();
})