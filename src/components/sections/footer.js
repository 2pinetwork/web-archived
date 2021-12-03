import Image from 'next/image'
import Link from 'next/link'
import Links from '../links'
import Spaceship from '../spaceship'

const FooterSection = () => (
  <section id="footer" className="pb-3">
    <div className="container">
      <h2 className="h3 monospace text-center my-4">
        Hey DeFi user,<br />join our community
      </h2>

      <div className="row justify-content-center">
        <div className="col-lg-9 col-xl-8 col-xxl-7">
          <Spaceship />
        </div>
      </div>

      <div className="mt-4 pb-4 text-center">
        <a className="btn btn-primary btn-gradient rounded-pill border-0 px-4 ms-auto mt-n2"
           href="https://discord.com/invite/h8VG2XcwvT" target="_blank" rel="noreferrer">
          Join us on Discord
        </a>
      </div>

      <div className="hr w-100 my-5"></div>

      <h2 className="h3 monospace text-center my-4">
        Strategic Backers
      </h2>

      <div className="d-flex flex-column flex-sm-row flex-wrap align-items-center justify-content-evenly">
        <div className="m-3">
          <a href="https://www.northisland.ventures" target="_blank" rel="noreferrer">
            <Image src="/images/logos/niv.svg" alt="North Island Ventures" width="180" height="37" unoptimized={true} />
          </a>
        </div>
        <div className="m-3">
          <a href="https://au21.capital" target="_blank" rel="noreferrer">
            <Image src="/images/logos/au21.png" alt="AU21 Capital" width="120" height="41" unoptimized={true} />
          </a>
        </div>
        <div className="m-3">
          <a href="https://www.11-11dg.partners" target="_blank" rel="noreferrer">
            <Image src="/images/logos/11-11dg.svg" alt="11-11 DG Partners" width="150" height="32" unoptimized={true} />
          </a>
        </div>
        <div className="m-3">
          <a href="https://www.node.capital" target="_blank" rel="noreferrer">
            <Image src="/images/logos/node.svg" alt="Node" width="120" height="27" unoptimized={true} />
          </a>
        </div>
        <div className="m-3">
          <a href="https://www.kosmos.vc" target="_blank" rel="noreferrer">
            <Image src="/images/logos/kosmos.png" alt="Kosmos" width="150" height="56" unoptimized={true} />
          </a>
        </div>
        <div className="m-3">
          <a href="https://www.meld.ventures" target="_blank" rel="noreferrer">
            <Image src="/images/logos/meld.png" alt="Meld Ventures" width="66" height="80" unoptimized={true} />
          </a>
        </div>
      </div>

      <hr className="mt-5 mb-3" />

      <div className="row">
        <div className="col-md d-flex align-items-center justify-content-center justify-content-md-start mb-4 mb-md-0">
          <p className="small text-nowrap m-0">
            ©2021 2PI Ltd.
          </p>

          <a className="btn btn-outline-light btn-sm rounded-pill px-4 ms-4"
             href="https://app.2pi.network" title="Launch legacy app">
             Launch Legacy App
          </a>
        </div>

        <div className="col-md-auto text-end mt-sm-n1">
          <div className="d-md-none">
            <Links />
          </div>

          <div className="d-none d-md-flex align-items-center">
            <p className="small d-inline m-0">
              Join the community:
            </p>

            <ul className="list-inline m-0">
              <li className="list-inline-item ms-3">
                <a className="text-white opacity-75" title="Tweet us!"
                   href="https://twitter.com/2piNetwork"
                   target="_blank" rel="noreferrer">
                  <i className="bi-twitter fs-5"></i>
                </a>
              </li>

              <li className="list-inline-item ms-3">
                <a className="text-white opacity-75" title="Talk with us!"
                   href="https://discord.com/invite/h8VG2XcwvT"
                   target="_blank" rel="noreferrer">
                  <i className="bi-discord fs-5"></i>
                </a>
              </li>

              <li className="list-inline-item ms-3">
                <a className="text-white opacity-75" title="Read us!"
                   href="https://2pinetwork.medium.com"
                   target="_blank" rel="noreferrer">
                  <i className="bi-medium fs-5"></i>
                </a>
              </li>

              <li className="list-inline-item ms-3">
                <a className="text-white opacity-75" title="Inspect us!"
                   href="https://github.com/2pinetwork"
                   target="_blank" rel="noreferrer">
                  <i className="bi-github fs-5"></i>
                </a>
              </li>

              <li className="list-inline-item ms-3">
                <a className="text-white opacity-75" title="Learn with us!"
                   href="https://docs.2pi.network"
                   target="_blank" rel="noreferrer">
                  <i className="bi-file-text fs-5"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default FooterSection
