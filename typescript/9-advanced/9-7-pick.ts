{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };
  // Pick util을 사용하여, id와 title만 가져올 수 있다.
  type VideoMetadata = Pick<Video, "id" | "title">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
