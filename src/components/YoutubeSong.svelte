<script>
  let SongList = [
    "dHDNHIxmBNU",
    "iB3_NR5bYVc",
    "H5ohDQ-umHM"
  ];
  let randomNumber = Math.floor(Math.random() * SongList.length);
</script>

<iframe
  style="position:absolute;"
  width="0"
  height="0"
  src={`https://www.youtube.com/embed/${SongList[randomNumber]}?autoplay=1&vq=medium&loop=1&playlist=${SongList[randomNumber]}`}
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
/>
