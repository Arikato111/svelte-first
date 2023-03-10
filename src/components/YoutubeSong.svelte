<script>
  let SongList = [
    "https://www.youtube.com/embed/dHDNHIxmBNU",
    "https://www.youtube.com/embed/iB3_NR5bYVc",
    "https://www.youtube.com/embed/H5ohDQ-umHM"
  ];
  let randomNumber = Math.floor(Math.random() * SongList.length);
</script>

<iframe
  style="position:absolute;"
  width="0"
  height="0"
  src={SongList[randomNumber] + "?autoplay=1&vq=medium"}
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
/>
