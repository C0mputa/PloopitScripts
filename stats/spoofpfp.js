javascript:(function() {
  function getPloops() {
    var ploop = prompt("Enter the ploop name:");
    if (!ploop) return;
    fetch('/get_ploops')
      .then(response => response.json())
      .then(data => {
        for (var key in data) {
          if (data[key].pName && data[key].pName.toLowerCase().includes(ploop.toLowerCase())) {
            var imageUrl = "https://ploopit.org/static/images/ploops/" + data[key].pImage;
            document.getElementById('pfp').src = imageUrl;
            return;
          }
        }
        alert("Ploop not found.");
      })
      .catch(error => console.error('Error fetching ploops:', error));
  }

  function changing() {
    getPloops();
  }

  changing();
})();
