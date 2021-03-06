import Image from 'next/image'
import APY from '../apy'
import AstroboyJump from '../astroboy/jump'
import Header from '../header'

const MainSection = () => (
  <section id="main">
    <div className="container">
      <Header />

      <header className="text-center">
        <h1 className="h1 text-white fw-bold monospace mt-n3 d-none d-lg-block">
          DeFi SuperPowers for Fintechs
        </h1>
        <h1 className="h3 text-white fw-bold monospace mt-n4 d-none d-md-block d-lg-none">
          DeFi SuperPowers for Fintechs
        </h1>
        <h1 className="h4 text-white fw-bold monospace mt-n5 d-md-none">
          DeFi SuperPowers for Fintechs
        </h1>
      </header>

      <div className="pt-xl-5 mt-xl-5">
        <AstroboyJump />
      </div>

      <div className="row justify-content-center my-5">
        <div className="col-lg-8 col-xl-7 pt-0 pt-sm-5 pt-lg-0">
          <p className="text-center mt-5 d-sm-none">
            Connect 2PI API and generate yield now
          </p>
          <p className="lead text-center mt-5 mb-4 d-none d-sm-block">
            Connect 2PI API and generate yield now
          </p>

          <p className="text-center mb-0">
            <a className="btn btn-primary btn-gradient rounded-pill border-0 px-4"
               href="https://2pi.gitbook.io/2pi-documentation/getting-credentials"
               target="_blank" rel="noreferrer" title="Devs API">
              Get API Keys
            </a>
          </p>
        </div>
      </div>

      <div className="row justify-content-center my-5">
        <div className="col-sm-4 col-lg-3 col-xl-2 text-center">
          <div className="d-flex justify-content-center">
            <div className="mt-1 mt-xl-2 me-2">
              <Image src="/images/protocols/aave.svg" alt="Aave" width="91" height="26" unoptimized={true} />
            </div>
            <div>
              <span className="h2 m-0">/</span>
            </div>
            <div className="mt-2 ms-1 pt-xl-1">
              <Image src="/images/protocols/curve.png" alt="Curve" width="123" height="34" unoptimized={true} />
            </div>
          </div>

          <p className="small">
            Strategies built on top of Blue Chip Protocols
          </p>
        </div>
      </div>

      <div className="hr w-100 my-5"></div>
    </div>
  </section>
)

export default MainSection
