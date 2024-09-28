import heroImg from './assets/hero.svg';
function Hero() {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            asperiores amet pariatur provident sapiente, itaque perspiciatis
            nulla corporis esse, autem praesentium illo totam porro aspernatur
            sed, consequatur suscipit aperiam eum.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='womand the the browser' className='image' />
        </div>
      </div>
    </section>
  );
}
export default Hero;
