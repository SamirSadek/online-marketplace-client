const Hero = () => {
  return (
    <div>
        <h2 className="mt-20 text-center text-4xl font-bold ">What Our Clients Says</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card my-10 w-96 bg-slate-800 text-primary-content">
          <div className="avatar justify-center">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://i.ibb.co/54DLbZt/Social-Media-Profile-Picture.png" />
            </div>
          </div>
          <div className="card-body ">
            <h2 className="card-title justify-center">Jhon Abraham</h2>
            <p>
              I've been using the online job market platform for a few months
              now, and I can't express how grateful I am for the opportunities
              it has provided. Finding a job that matches my skills and
              interests was a breeze, thanks to the platform's user-friendly
              interface
            </p>
            <div className="card-actions justify-center">
              <div className="rating rating-lg">
                <input type="radio" name="rating-9" className="rating-hidden" />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-yellow-500 "
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-yellow-500"
                  checked={true}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card my-10 w-96 bg-slate-800 text-primary-content">
          <div className="avatar justify-center">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://i.ibb.co/BzH6ghc/Simple-Profile-Photo-Instagram-Post.png" />
            </div>
          </div>
          <div className="card-body ">
            <h2 className="card-title justify-center">Angel Lofez</h2>
            <p>
              As a freelance professional, the online job market platform has
              been my go-to place for finding freelance gigs. The wide range of
              job categories and the ability to set my preferences make it easy
              for me to connect with clients seeking my expertise.
            </p>
            <div className="card-actions justify-center">
              <div className="rating rating-lg">
                <input type="radio" name="rating-9" className="rating-hidden" />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-yellow-500 "
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-yellow-500"
                  checked={true}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card my-10 w-96 bg-slate-800 text-primary-content">
          <div className="avatar justify-center">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://i.ibb.co/54DLbZt/Social-Media-Profile-Picture.png" />
            </div>
          </div>
          <div className="card-body ">
            <h2 className="card-title justify-center">Amir Khan</h2>
            <p>
              The online job market platform has been a game-changer in my
              career. It has simplified the job search process, allowing me to
              filter and apply for positions that align with my qualifications
              and career goals.{" "}
            </p>
            <div className="card-actions justify-center">
              <div className="rating rating-lg">
                <input type="radio" name="rating-9" className="rating-hidden" />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-yellow-500 "
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-yellow-500"
                  checked={true}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
