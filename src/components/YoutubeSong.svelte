<script>
  const SongList = ["5Z3kPL_UAys"];
  let randomNumber = Math.floor(Math.random() * SongList.length);
</script>

<iframe
  style="position:absolute;"
  width="0"
  height="0"
  src={`https://www.youtube.com/embed/${SongList[randomNumber]}?autoplay=1&vq=medium&loop=1&controls=0&modestbranding=0&playlist=${SongList[randomNumber]}`}
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
/>
