type VideoProps = {
  youtubeId: string;
};

export default function Video({ youtubeId }: VideoProps) {
  return (
    <section className="max-w-screen-2lg mx-auto py-14 px-5">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        aria-hidden="true"
        className="w-full aspect-video self-stretch md:min-h-96"
      />
    </section>
  );
}
