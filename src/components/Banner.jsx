const Banner = () => {
  return (
    <div
      className="hero h-96"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/jG9YMQW/Blue-And-White-Illustration-Freelance-Linked-In-Banner-2.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content content-start text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Job Connect</h1>
          <p className="mb-5">
            Find the Best Suitable Job
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
