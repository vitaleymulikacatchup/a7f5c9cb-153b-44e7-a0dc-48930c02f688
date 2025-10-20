import React from 'react';

export default function App() {
  return (
    <div className="page-home ac-nav-overlap globalnav-scrim globalheader-dark">
      {/* NAVIGATION */}
      <nav
        id="globalnav"
        lang="en-US"
        dir="ltr"
        aria-label="Global"
        data-analytics-element-engagement-start="globalnav:onFlyoutOpen"
        data-analytics-element-engagement-end="globalnav:onFlyoutClose"
        data-store-api="/[storefront]/shop/bag/status"
        data-analytics-activitymap-region-id="global nav"
        data-analytics-region="global nav"
        className="globalnav js"
        style={{ "--r-globalnav-text-zoom-scale": 1 }}
      >
        <div className="globalnav-content">
          <div className="globalnav-item globalnav-menuback globalnav-item-mac globalnav-item-ipad globalnav-item-iphone globalnav-item-watch globalnav-item-vision globalnav-item-airpods globalnav-item-tv-home globalnav-item-entertainment globalnav-item-accessories globalnav-item-support">
            <button aria-label="Main menu" className="globalnav-menuback-button">
              <span className="globalnav-chevron-icon">
                <svg height="48" viewBox="0 0 9 48" width="9" xmlns="http://www.w3.org/2000/svg">
                  <path d="m1.5618 24.0621 6.5581-6.4238c.2368-.2319.2407-.6118.0088-.8486-.2324-.2373-.6123-.2407-.8486-.0088l-7 6.8569c-.1157.1138-.1807.2695-.1802.4316.001.1621.0674.3174.1846.4297l7 6.7241c.1162.1118.2661.1675.4155.1675.1577 0 .3149-.062.4326-.1846.2295-.2388.2222-.6187-.0171-.8481z" />
                </svg>
              </span>
            </button>
          </div>
          <ul id="globalnav-list" className="globalnav-list">
            <li
              data-analytics-element-engagement="globalnav hover - apple"
              className="globalnav-item globalnav-item-apple  globalnav-search shift-0-1 globalnav-bag"
            >
              <a
                href="/"
                data-globalnav-item-name="apple"
                data-analytics-title="apple home"
                aria-label="Apple"
                className="globalnav-link globalnav-link-apple globalnav-link-mac globalnav-link-ipad globalnav-link-iphone globalnav-link-watch globalnav-link-vision globalnav-link-airpods globalnav-link-tv-home globalnav-link-entertainment globalnav-link-accessories globalnav-link-support globalnav-link-search globalnav-link-bag"
              >
                <span className="globalnav-image-regular globalnav-link-image">
                  <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" />
                  </svg>
                </span>
                <span className="globalnav-image-compact globalnav-link-image">
                  <svg height="48" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg">
                    <path d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z" />
                  </svg>
                </span>
                <span className="globalnav-link-text">Apple</span>
              </a>
            </li>
            <li
              data-topnav-flyout-item="menu"
              data-topnav-flyout-label="Menu"
              className="globalnav-item globalnav-menu  globalnav-search shift-0-1 globalnav-bag"
            >
              <div
                data-topnav-flyout="menu"
                className="globalnav-flyout"
                style={{ "--r-globalnav-flyout-item-total": 0, "--r-globalnav-flyout-group-number": 0 }}
              >
                <div className="globalnav-menu-list" style={{ "--r-globalnav-flyout-item-total": 11 }}>
                  <div
                    data-analytics-element-engagement="globalnav hover - store"
                    className="globalnav-item globalnav-item-store globalnav-item-menu globalnav-item-submenu globalnav-item-mac globalnav-item-ipad globalnav-item-iphone globalnav-item-watch globalnav-item-vision globalnav-item-airpods globalnav-item-tv-home globalnav-item-entertainment globalnav-item-accessories globalnav-item-support"
                    style={{ "--r-globalnav-flyout-item-number": 0 }}
                  >
                    <ul className="globalnav-submenu-trigger-group">
                      <li className="globalnav-submenu-trigger-item">
                        <a
                          href="/us/shop/goto/store"
                          data-globalnav-item-name="store"
                          data-topnav-flyout-trigger-compact="true"
                          data-analytics-title="store"
                          data-analytics-element-engagement="hover - store"
                          aria-label="Store"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-store globalnav-link-mac globalnav-link-ipad globalnav-link-iphone globalnav-link-watch globalnav-link-vision globalnav-link-airpods globalnav-link-tv-home globalnav-link-entertainment globalnav-link-accessories globalnav-link-support globalnav-link-search globalnav-link-bag"
                        >
                          <span className="globalnav-link-text-container">
                            <span className="globalnav-image-regular globalnav-link-image">
                              <svg height="44" viewBox="0 0 30 44" width="30" xmlns="http://www.w3.org/2000/svg">
                                <path d="m26.5679 20.4629c1.002 0 1.67.738 1.693 1.857h-3.48c.076-1.119.779-1.857 1.787-1.857zm2.754 2.672v-.387c0-1.963-1.037-3.176-2.742-3.176-1.735 0-2.848 1.289-2.848 3.276 0 1.998 1.096 3.263 2.848 3.263 1.383 0 2.367-.668 2.66-1.746h-1.008c-.264.557-.814.856-1.629.856-1.072 0-1.769-.791-1.822-2.039v-.047zm-9.547-3.451h.96v.937h.094c.188-.615.914-1.049 1.752-1.049.164 0 .375.012.504.03v1.007c-.082-.023-.445-.058-.644-.058-.961 0-1.659 1.098-1.659 1.535v3.914h-1.007zm-4.27 5.519c-1.195 0-1.869-.867-1.869-2.361 0-1.5.674-2.361 1.869-2.361 1.196 0 1.87.861 1.87 2.361 0 1.494-.674 2.361-1.87 2.361zm0-5.631c-1.798 0-2.912 1.237-2.912 3.27 0 2.027 1.114 3.269 2.912 3.269 1.799 0 2.913-1.242 2.913-3.269 0-2.033-1.114-3.27-2.913-3.27zm-5.478-1.475v1.635h1.407v.843h-1.407v3.575c0 .744.282 1.06.938 1.06.182 0 .281-.006.469-.023v.849c-.199.035-.393.059-.592.059-1.301 0-1.822-.481-1.822-1.688v-3.832h-1.02v-.843h1.02v-1.635zm-8.103 5.694c.129.885.973 1.447 2.174 1.447 1.137 0 1.975-.615 1.975-1.453 0-.72-.527-1.177-1.693-1.47l-1.084-.282c-1.53-.386-2.192-1.078-2.192-2.279 0-1.436 1.201-2.408 2.988-2.408 1.635 0 2.854.972 2.942 2.338h-1.061c-.146-.867-.861-1.383-1.916-1.383-1.125 0-1.869.562-1.869 1.418 0 .662.463 1.043 1.629 1.342l.885.234c1.752.439 2.455 1.119 2.455 2.361 0 1.553-1.225 2.543-3.158 2.543-1.793 0-3.03-.949-3.141-2.408z" />
                              </svg>
                            </span>
                            <span className="globalnav-link-text">Store</span>
                          </span>
                          <span className="globalnav-link-chevron">
                            <svg height="48" viewBox="0 0 9 48" width="9" xmlns="http://www.w3.org/2000/svg">
                              <path d="m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z" />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li className="globalnav-submenu-trigger-item">
                        <button
                          id="globalnav-menubutton-link-store"
                          className="globalnav-submenu-trigger-button"
                          aria-expanded="false"
                          aria-controls="globalnav-submenu-link-store"
                          aria-label="Store menu"
                          data-topnav-flyout-trigger-regular="true"
                        >
                          <span className="globalnav-image-regular globalnav-submenu-button-icon">
                            <svg height="10" viewBox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg">
                              <path d="m4.6725 6.635-2.655-2.667a.445.445 0 0 1 -.123-.304.4331.4331 0 0 1 .427-.439h.006a.447.447 0 0 1 .316.135l2.357 2.365 2.356-2.365a.458.458 0 0 1 .316-.135.433.433 0 0 1 .433.433v.006a.4189.4189 0 0 1 -.123.3l-2.655 2.671a.4451.4451 0 0 1 -.327.14.464.464 0 0 1 -.328-.14z" />
                            </svg>
                          </span>
                          <span className="globalnav-image-compact globalnav-submenu-button-icon">
                            <svg height="48" viewBox="0 0 9 48" width="9" xmlns="http://www.w3.org/2000/svg">
                              <path d="m7.4382 24.0621-6.5581-6.4238c-.2368-.2319-.2407-.6118-.0088-.8486.2324-.2373.6123-.2407.8486-.0088l7 6.8569c.1157.1138.1807.2695.1802.4316-.001.1621-.0674.3174-.1846.4297l-7 6.7242c-.1162.1118-.2661.1675-.4155.1675-.1577 0-.3149-.062-.4326-.1846-.2295-.2388-.2222-.6187.0171-.8481l6.5537-6.2959z" />
                            </svg>
                          </span>
                        </button>
                      </li>
                    </ul>
                    <div
                      id="globalnav-submenu-link-store"
                      className="globalnav-flyout globalnav-submenu"
                      aria-labelledby="globalnav-menubutton-link-store"
                      style={{
                        "--r-globalnav-flyout-item-total": 0,
                        "--r-globalnav-flyout-group-number": 0,
                        "--r-globalnav-flyout-height": 490,
                        "--r-globalnav-flyout-rate": "240ms",
                      }}
                    >
                      <div className="globalnav-flyout-scroll-container">
                        <div className="globalnav-flyout-content globalnav-submenu-content" style={{ "--r-globalnav-flyout-elevated-group-count": 1, "--r-globalnav-flyout-group-total": 2, "--r-globalnav-flyout-item-total": 9 }}>
                          <div className="globalnav-submenu-group globalnav-submenu-group-elevated" data-analytics-region="explore shop" style={{ "--r-globalnav-flyout-group-number": 0 }}>
                            <h2 className="globalnav-submenu-header" id="c64e0a00" style={{ "--r-globalnav-flyout-item-number": 1 }}>Shop</h2>
                            <ul className="globalnav-submenu-list" aria-labelledby="c64e0a00">
                              <li className="globalnav-submenu-list-item-elevated" style={{ "--r-globalnav-flyout-item-number": 2 }}><a href="/us/shop/goto/store" className="globalnav-submenu-link" data-analytics-title="shop the latest" aria-label="Shop the latest Apple products">Shop the Latest</a></li>
                              <li className="globalnav-submenu-list-item-elevated" style={{ "--r-globalnav-flyout-item-number": 3 }}><a href="/us/shop/goto/buy_mac" className="globalnav-submenu-link" data-analytics-title="mac">Mac</a></li>
                              <li className="globalnav-submenu-list-item-elevated" style={{ "--r-globalnav-flyout-item-number": 4 }}><a href="/us/shop/goto/buy_ipad" className="globalnav-submenu-link" data-analytics-title="ipad">iPad</a></li>
                              <li className="globalnav-submenu-list-item-elevated" style={{ "--r-globalnav-flyout-item-number": 5 }}><a href="/us/shop/goto/buy_iphone" className="globalnav-submenu-link" data-analytics-title="iphone">iPhone</a></li>
                              <li className="globalnav-submenu-list-item-elevated" style={{ "--r-globalnav-flyout-item-number": 6 }}><a href="/us/shop/goto/buy_watch" className="globalnav-submenu-link" data-analytics-title="apple watch">Apple Watch</a></li>
                              <li className="globalnav-submenu-list-item-elevated" style={{ "--r-globalnav-flyout-item-number": 7 }}><a href="/us/shop/goto/buy_vision" className="globalnav-submenu-link" data-analytics-title="apple vision pro">Apple Vision Pro</a></li>
                              <li className="globalnav-submenu-list-item-elevated" style={{ "--r-globalnav-flyout-item-number": 8 }}><a href="/us/shop/goto/airpods/accessories" className="globalnav-submenu-link" data-analytics-title="airpods">AirPods</a></li>
                              <li className="globalnav-submenu-list-item-elevated" style={{ "--r-globalnav-flyout-item-number": 9 }}><a href="/us/shop/goto/buy_accessories" className="globalnav-submenu-link" data-analytics-title="accessories">Accessories</a></li>
                            </ul>
                          </div>
                          <div className="globalnav-submenu-group" data-analytics-region="quick links - store" style={{ "--r-globalnav-flyout-group-number": 1 }}>
                            <h2 className="globalnav-submenu-header" id="eb6bee9f" style={{ "--r-globalnav-flyout-item-number": 1 }}>Quick Links</h2>
                            <ul className="globalnav-submenu-list" aria-labelledby="eb6bee9f">
                              <li className="globalnav-submenu-list-item" style={{ "--r-globalnav-flyout-item-number": 2 }}><a href="/retail/" className="globalnav-submenu-link" data-analytics-title="find a store">Find a Store</a></li>
                              <li className="globalnav-submenu-list-item" style={{ "--r-globalnav-flyout-item-number": 3 }}><a href="/us/shop/goto/order/list" className="globalnav-submenu-link" data-analytics-title="order status">Order Status</a></li>
                              <li className="globalnav-submenu-list-item" style={{ "--r-globalnav-flyout-item-number": 4 }}><a href="/us/shop/goto/trade_in" className="globalnav-submenu-link" data-analytics-title="apple trade in">Apple Trade In</a></li>
                              <li className="globalnav-submenu-list-item" style={{ "--r-globalnav-flyout-item-number": 5 }}><a href="/us/shop/goto/payment_plan" className="globalnav-submenu-link" data-analytics-title="financing">Financing</a></li>
                              <li className="globalnav-submenu-list-item" style={{ "--r-globalnav-flyout-item-number": 6 }}><a href="/us/shop/goto/personal_setup" className="globalnav-submenu-link" data-analytics-title="personal setup">Personal Setup</a></li>
                            </ul>
                          </div>
                          <div className="globalnav-submenu-group" data-analytics-region="shop special stores" style={{ "--r-globalnav-flyout-group-number": 2 }}>
                            <h2 className="globalnav-submenu-header" id="68805228" style={{ "--r-globalnav-flyout-item-number": 1 }}>Shop Special Stores</h2>
                            <ul className="globalnav-submenu-list" aria-labelledby="68805228"><li className="globalnav-submenu-list-item" style={{ "--r-globalnav-flyout-item-number": 2 }}><a href="/us/shop/goto/special_deals" className="globalnav-submenu-link" data-analytics-title="certified refurbished">Certified Refurbished</a></li><li className="globalnav-submenu-list-item" style={{ "--r-globalnav-flyout-item-number": 3 }}><a href="/us/shop/goto/educationrouting" className="globalnav-submenu-link" data-analytics-title="education">Education</a></li><li className="globalnav-submenu-list-item" style={{ "--r-globalnav-flyout-item-number": 4 }}><a href="/retail/business/" className="globalnav-submenu-link" data-analytics-title="business">Business</a></li><li className="globalnav-submenu-list-item" style={{ "--r-globalnav-flyout-item-number": 5 }}><a href="/us/shop/goto/eppstore/veteransandmilitary" className="globalnav-submenu-link" data-analytics-title="military">Military</a></li></ul></div></div></div></div></div></nav>

      {/* MAIN-CONTENT */}
      <main className="main" role="main" data-anim-scroll-group="bubble-gum-group">
      
        <section className="homepage-section collection-module standalone-module" data-module-template="heroes" data-analytics-region="hero">
      
          <div data-unit-id="macbook-pro-m5" data-analytics-section-engagement="name:hero-macbook-pro-m5">
            <div className="module-content">
      
              <div className="unit-wrapper theme-dark gallery-item current theme-light">
                <a className="unit-link" href="/macbook-pro/" target="_self" rel="follow" data-analytics-region="learn more" aria-hidden="true" tabIndex="-1">&nbsp;</a>
                <div className="unit-copy-wrapper">
                  <h2 className="headline">MacBook&nbsp;Pro 14”</h2>
                  <p className="subhead">Supercharged by M5.</p>
      
                  <p className="callout">Available starting 10.22</p>
      
                  <div className="cta-links">
                    <a className="button button-elevated button-primary default ios" href="/macbook-pro/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="learn more - macbook pro 14-inch with m5" aria-label="Learn more, MacBook Pro 14-inch with M5">Learn more</a>
      
                    <a className="button button-elevated button-tertiary default ios" href="/us/shop/goto/buy_mac/macbook_pro/14_inch" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="pre-order - macbook pro 14-inch with m5" aria-label="Pre-order, MacBook Pro 14-inch with M5">Pre-order</a>
      
                  </div>
                </div>
                <div className="unit-image-wrapper">
                  <figure className="unit-image unit-image-macbook-pro-m5-hero-macbook-pro-m5-announce unit-image-iphone-tradein-promo-iphone-tradein unit-image-apple-card-promo-apple-card" role="img" aria-label="14-inch MacBook Pro, display partly open, positioned in the shape of a V, silver color, with left side ports: headphone jack, two Thunderbolt ports, and MagSafe connector">
                  </figure>
                </div>
              </div>
            </div>
          </div>
      
          <div data-unit-id="ipad-pro" data-analytics-section-engagement="name:hero-ipad-pro">
            <div className="module-content">
      
              <div className="unit-wrapper theme-dark gallery-item current theme-light">
                <a className="unit-link" href="/ipad-pro/" target="_self" rel="follow" data-analytics-region="learn more" aria-hidden="true" tabIndex="-1">&nbsp;</a>
                <div className="unit-copy-wrapper">
                  <h2 className="headline">iPad&nbsp;Pro</h2>
                  <p className="subhead">Advanced AI performance and&nbsp;game-changing capabilities.</p>
      
                  <p className="callout">Available starting 10.22</p>
      
                  <div className="cta-links">
                    <a className="button button-elevated button-primary default ios" href="/ipad-pro/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="learn more - ipad pro" aria-label="Learn more, iPad Pro">Learn more</a>
      
                    <a className="button button-elevated button-tertiary default ios" href="/us/shop/goto/ipad_pro/select" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="pre-order - ipad pro" aria-label="Pre-order, iPad Pro">Pre-order</a>
      
                  </div>
                </div>
                <div className="unit-image-wrapper">
                  <figure className="unit-image unit-image-ipad-pro-hero-ipad-pro-announce unit-image-iphone-tradein-promo-iphone-tradein unit-image-apple-card-promo-apple-card" role="img" aria-label="Two iPad Pro devices, front exterior, portrait orientation, black display bezel, display showing multicolored, curved line art, side exterior, thin profile, volume-up button, volume-down button, raised Pro Camera System">
                  </figure>
                </div>
              </div>
            </div>
          </div>
      
          <div data-unit-id="iphone-17-pro" data-analytics-section-engagement="name:hero-iphone-17-pro">
            <div className="module-content">
      
              <div className="unit-wrapper theme-dark gallery-item current theme-light">
                <a className="unit-link" href="/iphone-17-pro/" target="_self" rel="follow" data-analytics-region="learn more" aria-hidden="true" tabIndex="-1">&nbsp;</a>
                <div className="unit-copy-wrapper">
                  <h2 className="headline">iPhone 17 Pro</h2>
                  <p className="subhead">All out Pro.</p>
      
                  <div className="cta-links">
                    <a className="button button-elevated button-primary default ios" href="/iphone-17-pro/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="learn more - iphone 17 pro" aria-label="Learn more, iPhone 17 Pro">Learn more</a>
      
                    <a className="button button-elevated button-tertiary default ios" href="/us/shop/goto/buy_iphone/iphone_17_pro" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="buy - iphone 17 pro" aria-label="Buy, iPhone 17 Pro">Buy</a>
                  </div>
                </div>
                <div className="unit-image-wrapper">
                  <figure className="unit-image unit-image-iphone-17-pro-hero-iphone-17-pro unit-image-iphone-tradein-promo-iphone-tradein unit-image-apple-card-promo-apple-card" role="img" aria-label="iPhone 17 Pro in cosmic orange finish, Pro Fusion camera system, 3 lenses, microphone, flash">
                  </figure>
                </div>
              </div>
            </div>
          </div>
      
        </section>
      
        <section className="homepage-section collection-module standalone-module" data-module-template="promos" data-analytics-region="promo">
      
          <div data-unit-id="iphone-air" data-analytics-section-engagement="name:promo-iphone-air">
            <div className="module-content">
      
              <div className="unit-wrapper">
                <a className="unit-link" href="/iphone-air/" target="_self" rel="follow" data-analytics-region="learn more" aria-hidden="true" tabIndex="-1">&nbsp;</a>
                <div className="unit-copy-wrapper">
                  <h3 className="headline logo-image-apple-card-logo">iPhone Air</h3>
                  <p className="subhead">The thinnest iPhone ever. With the power of pro inside.</p>
      
                  <div className="cta-links">
                    <a className="button button-primary default ios" href="/iphone-air/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="learn more - iphone air" aria-label="Learn more, iPhone Air">Learn more</a>
      
                    <a className="button button-tertiary default ios" href="/us/shop/goto/buy_iphone/iphone_air" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="buy - iphone air" aria-label="Buy, iPhone Air">Buy</a>
                  </div>
                </div>
                <div className="unit-image-wrapper">
                  <figure className="unit-image unit-image-iphone-air-promo-iphone-air unit-image-iphone-tradein-promo-iphone-tradein unit-image-apple-card-promo-apple-card" role="img" aria-label="Side view of iPhone Air, showing very thin titanium side">
                  </figure>
                </div>
              </div>
            </div>
          </div>
      
          <div data-unit-id="apple-vision-pro-m5" data-analytics-section-engagement="name:promo-apple-vision-pro-m5">
            <div className="module-content">
      
              <div className="unit-wrapper">
                <a className="unit-link" href="/apple-vision-pro/" target="_self" rel="follow" data-analytics-region="learn more" aria-hidden="true" tabIndex="-1">&nbsp;</a>
                <div className="unit-copy-wrapper">
      
                  <h3 className="logo-image logo-image-apple-vision-pro-m5-promo-logo-apple-vision-pro-m5-announce headline logo-image-apple-card-logo"><span className="visuallyhidden">Apple Vision Pro</span></h3>
                  <p className="subhead">New powerful M5 chip and comfortable band.</p>
      
                  <p className="callout">Available starting 10.22</p>
      
                  <div className="cta-links">
                    <a className="button button-primary default ios" href="/apple-vision-pro/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="learn more - apple vision pro" aria-label="Learn more, Apple Vision Pro">Learn more</a>
      
                    <a className="button button-tertiary default ios" href="/us/shop/goto/buy_vision/apple_vision_pro" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="pre-order - apple vision pro" aria-label="Pre-order, Apple Vision Pro">Pre-order</a>
                  </div>
                </div>
                <div className="unit-image-wrapper">
                  <figure className="unit-image unit-image-apple-vision-pro-m5-promo-apple-vision-pro-m5-announce unit-image-iphone-tradein-promo-iphone-tradein unit-image-apple-card-promo-apple-card" role="img" aria-label="Person wearing Apple Vision Pro, assembled with Dual Knit Band">
                  </figure>
                </div>
              </div>
            </div>
          </div>
      
          <div data-unit-id="airpods-pro-3" data-analytics-section-engagement="name:promo-airpods-pro-3">
            <div className="module-content">
      
              <div className="unit-wrapper">
                <a className="unit-link" href="/airpods-pro/" target="_self" rel="follow" data-analytics-region="learn more" aria-hidden="true" tabIndex="-1">&nbsp;</a>
                <div className="unit-copy-wrapper">
                  <h3 className="headline logo-image-apple-card-logo">AirPods Pro 3</h3>
                  <p className="subhead">The world’s best in-ear Active Noise Cancellation.</p>
      
                  <div className="cta-links">
                    <a className="button button-primary default ios" href="/airpods-pro/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="learn more - airpods pro 3" aria-label="Learn more, AirPods Pro 3">Learn more</a>
      
                    <a className="button button-tertiary default ios" href="/us/shop/goto/buy_airpods/airpods_pro_3" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="buy - airpods pro 3" aria-label="Buy, AirPods Pro 3">Buy</a>
                  </div>
                </div>
                <div className="unit-image-wrapper">
                  <figure className="unit-image unit-image-airpods-pro-3-promo-airpodspro-3 unit-image-iphone-tradein-promo-iphone-tradein unit-image-apple-card-promo-apple-card" role="img" aria-label="AirPods Pro 3, wireless headphones, white color, silicone tips" data-anim-lazy-image="">
                  </figure>
                </div>
              </div>
            </div>
          </div>
      
          <div data-unit-id="apple-watch-series-11" data-analytics-section-engagement="name:promo-apple-watch-series-11">
            <div className="module-content">
      
              <div className="unit-wrapper">
                <a className="unit-link" href="/apple-watch-series-11/" target="_self" rel="follow" data-analytics-region="learn more" aria-hidden="true" tabIndex="-1">&nbsp;</a>
                <div className="unit-copy-wrapper">
      
                  <h3 className="logo-image logo-image-apple-watch-series-11-promo-logo-apple-watch-series-11 headline logo-image-apple-card-logo"><span className="visuallyhidden">Apple Watch Series 11</span></h3>
                  <p className="subhead">The ultimate way to watch your health.</p>
      
                  <div className="cta-links">
                    <a className="button button-primary default ios" href="/apple-watch-series-11/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="learn more - apple watch series 11" aria-label="Learn more, Apple Watch Series 11">Learn more</a>
      
                    <a className="button button-tertiary default ios" href="/us/shop/goto/buy_watch/apple_watch_series_11" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="buy - apple watch series 11" aria-label="Buy, Apple Watch Series 11">Buy</a>
                  </div>
      
                </div>
                <div className="unit-image-wrapper">
                  <figure className="unit-image unit-image-apple-watch-series-11-promo-apple-watch-series-11 unit-image-iphone-tradein-promo-iphone-tradein unit-image-apple-card-promo-apple-card" role="img" aria-label="Apple Watch Series 11, rose gold color, aluminum case, sleep score, right side exterior, Digital Crown, microphone, side button, starlight Sport Band" data-anim-lazy-image="">
                  </figure>
                </div>
              </div>
            </div>
          </div>
      
          <div data-unit-id="iphone-tradein" data-analytics-section-engagement="name:promo-iphone-tradein">
            <div className="module-content">
      
              <div className="unit-wrapper">
                <a className="unit-link" href="/us/shop/goto/trade_in" target="_self" rel="follow" data-analytics-region="buy" aria-hidden="true" tabIndex="-1">&nbsp;</a>
                <div className="unit-copy-wrapper">
      
                  <h3 className="logo-image logo-image-iphone-tradein-promo-logo-iphone-tradein headline logo-image-apple-card-logo"><span className="visuallyhidden">Apple Trade In</span></h3>
                  <p className="subhead">Upgrade your device and get credit.</p>
      
                  <div className="cta-links">
                    <a className="button button-primary default ios" href="/us/shop/goto/trade_in" target="_self" rel="follow" data-analytics-region="learn more" aria-label="Learn more, Apple Trade In">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
        </section>
      </main>

      {/* SECTION-1 */}
      <section className="homepage-section collection-module" data-module-template="heroes" data-analytics-region="hero">
        <div data-unit-id="macbook-pro-m5" data-analytics-section-engagement="name:hero-macbook-pro-m5">
          <div className="module-content">
            <div className="unit-wrapper theme-dark">
              <a className="unit-link" href="/macbook-pro/" target="_self" rel="follow" data-analytics-region="learn more" aria-hidden="true" tabIndex="-1">&nbsp;</a>
              <div className="unit-copy-wrapper">
                <h2 className="headline">MacBook&nbsp;Pro 14”</h2>
                <p className="subhead">Supercharged by M5.</p>
                <p className="callout">Available starting 10.22</p>
                <div className="cta-links">
                  <a className="button button-elevated button-primary" href="/macbook-pro/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="learn more - macbook pro 14-inch with m5" aria-label="Learn more, MacBook Pro 14-inch with M5">Learn more</a>
                  <a className="button button-elevated button-tertiary" href="/us/shop/goto/buy_mac/macbook_pro/14_inch" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="pre-order - macbook pro 14-inch with m5" aria-label="Pre-order, MacBook Pro 14-inch with M5">Pre-order</a>
                </div>
              </div>
              <div className="unit-image-wrapper">
                <figure className="unit-image unit-image-macbook-pro-m5-hero-macbook-pro-m5-announce" role="img" aria-label="14-inch MacBook Pro, display partly open, positioned in the shape of a V, silver color, with left side ports: headphone jack, two Thunderbolt ports, and MagSafe connector"></figure>
              </div>
            </div>
          </div>
        </div>
        <div data-unit-id="ipad-pro" data-analytics-section-engagement="name:hero-ipad-pro">
          <div className="module-content">
            <div className="unit-wrapper theme-dark">
              <a className="unit-link" href="/ipad-pro/" target="_self" rel="follow" data-analytics-region="learn more" aria-hidden="true" tabIndex="-1">&nbsp;</a>
              <div className="unit-copy-wrapper">
                <h2 className="headline">iPad&nbsp;Pro</h2>
                <p className="subhead">Advanced AI performance and&nbsp;game-changing capabilities.</p>
                <p className="callout">Available starting 10.22</p>
                <div className="cta-links">
                  <a className="button button-elevated button-primary" href="/ipad-pro/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="learn more - ipad pro" aria-label="Learn more, iPad Pro">Learn more</a>
                  <a className="button button-elevated button-tertiary" href="/us/shop/goto/ipad_pro/select" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="pre-order - ipad pro" aria-label="Pre-order, iPad Pro">Pre-order</a>
                </div>
              </div>
              <div className="unit-image-wrapper">
                <figure className="unit-image unit-image-ipad-pro-hero-ipad-pro-announce" role="img" aria-label="Two iPad Pro devices, front exterior, portrait orientation, black display bezel, display showing multicolored, curved line art, side exterior, thin profile, volume-up button, volume-down button, raised Pro Camera System"></figure>
              </div>
            </div>
          </div>
        </div>
        <div data-unit-id="iphone-17-pro" data-analytics-section-engagement="name:hero-iphone-17-pro">
          <div className="module-content">
            <div className="unit-wrapper theme-dark">
              <a className="unit-link" href="/iphone-17-pro/" target="_self" rel="follow" data-analytics-region="learn more" aria-hidden="true" tabIndex="-1">&nbsp;</a>
              <div className="unit-copy-wrapper">
                <h2 className="headline">iPhone 17 Pro</h2>
                <p className="subhead">All out Pro.</p>
                <div className="cta-links">
                  <a className="button button-elevated button-primary" href="/iphone-17-pro/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="learn more - iphone 17 pro" aria-label="Learn more, iPhone 17 Pro">Learn more</a>
                  <a className="button button-elevated button-tertiary" href="/us/shop/goto/buy_iphone/iphone_17_pro" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="buy - iphone 17 pro" aria-label="Buy, iPhone 17 Pro">Buy</a>
                </div>
              </div>
              <div className="unit-image-wrapper">
                <figure className="unit-image unit-image-iphone-17-pro-hero-iphone-17-pro" role="img" aria-label="iPhone 17 Pro in cosmic orange finish, Pro Fusion camera system, 3 lenses, microphone, flash"></figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-2 */}
      <section className="homepage-section collection-module" data-module-template="promos" data-analytics-region="promo">
        <div data-unit-id="iphone-air" data-analytics-section-engagement="name:promo-iphone-air">
          <div className="module-content">
            <div className="unit-wrapper">
              <a className="unit-link" href="/iphone-air/" target="_self" rel="follow" data-analytics-region="learn more" aria-hidden="true" tabIndex="-1">&nbsp;</a>
              <div className="unit-copy-wrapper">
                <h3 className="headline">iPhone Air</h3>
                <p className="subhead">The thinnest iPhone ever. With the power of pro inside.</p>
                <div className="cta-links">
                  <a className="button button-primary" href="/iphone-air/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="learn more - iphone air" aria-label="Learn more, iPhone Air">Learn more</a>
                  <a className="button button-tertiary" href="/us/shop/goto/buy_iphone/iphone_air" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="buy - iphone air" aria-label="Buy, iPhone Air">Buy</a>
                </div>
              </div>
              <div className="unit-image-wrapper">
                <figure className="unit-image unit-image-iphone-air-promo-iphone-air" role="img" aria-label="Side view of iPhone Air, showing very thin titanium side">
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div data-unit-id="apple-vision-pro-m5" data-analytics-section-engagement="name:promo-apple-vision-pro-m5">
          <div className="module-content">
            <div className="unit-wrapper">
              <a className="unit-link" href="/apple-vision-pro/" target="_self" rel="follow" data-analytics-region="learn more" aria-hidden="true" tabIndex="-1">&nbsp;</a>
              <div className="unit-copy-wrapper">
                <h3 className="logo-image logo-image-apple-vision-pro-m5-promo-logo-apple-vision-pro-m5-announce headline"><span className="visuallyhidden">Apple Vision Pro</span></h3>
                <p className="subhead">New powerful M5 chip and comfortable band.</p>
                <p className="callout">Available starting 10.22</p>
                <div className="cta-links">
                  <a className="button button-primary" href="/apple-vision-pro/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="learn more - apple vision pro" aria-label="Learn more, Apple Vision Pro">Learn more</a>
                  <a className="button button-tertiary" href="/us/shop/goto/buy_vision/apple_vision_pro" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="pre-order - apple vision pro" aria-label="Pre-order, Apple Vision Pro">Pre-order</a>
                </div>
              </div>
              <div className="unit-image-wrapper">
                <figure className="unit-image unit-image-apple-vision-pro-m5-promo-apple-vision-pro-m5-announce" role="img" aria-label="Person wearing Apple Vision Pro, assembled with Dual Knit Band">
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div data-unit-id="airpods-pro-3" data-analytics-section-engagement="name:promo-airpods-pro-3">
          <div className="module-content">
            <div className="unit-wrapper">
              <a className="unit-link" href="/airpods-pro/" target="_self" rel="follow" data-analytics-region="learn more" aria-hidden="true" tabIndex="-1">&nbsp;</a>
              <div className="unit-copy-wrapper">
                <h3 className="headline">AirPods Pro 3</h3>
                <p className="subhead">The world’s best in-ear Active Noise Cancellation.</p>
                <div className="cta-links">
                  <a className="button button-primary" href="/airpods-pro/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="learn more - airpods pro 3" aria-label="Learn more, AirPods Pro 3">Learn more</a>
                  <a className="button button-tertiary" href="/us/shop/goto/buy_airpods/airpods_pro_3" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="buy - airpods pro 3" aria-label="Buy, AirPods Pro 3">Buy</a>
                </div>
              </div>
              <div className="unit-image-wrapper">
                <figure className="unit-image unit-image-airpods-pro-3-promo-airpodspro-3" role="img" aria-label="AirPods Pro 3, wireless headphones, white color, silicone tips" data-anim-lazy-image="">
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div data-unit-id="apple-watch-series-11" data-analytics-section-engagement="name:promo-apple-watch-series-11">
          <div className="module-content">
            <div className="unit-wrapper">
              <a className="unit-link" href="/apple-watch-series-11/" target="_self" rel="follow" data-analytics-region="learn more" aria-hidden="true" tabIndex="-1">&nbsp;</a>
              <div className="unit-copy-wrapper">
                <h3 className="logo-image logo-image-apple-watch-series-11-promo-logo-apple-watch-series-11 headline"><span className="visuallyhidden">Apple Watch Series 11</span></h3>
                <p className="subhead">The ultimate way to watch your health.</p>
                <div className="cta-links">
                  <a className="button button-primary" href="/apple-watch-series-11/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="learn more - apple watch series 11" aria-label="Learn more, Apple Watch Series 11">Learn more</a>
                  <a className="button button-tertiary" href="/us/shop/goto/buy_watch/apple_watch_series_11" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="buy - apple watch series 11" aria-label="Buy, Apple Watch Series 11">Buy</a>
                </div>
              </div>
              <div className="unit-image-wrapper">
                <figure className="unit-image unit-image-apple-watch-series-11-promo-apple-watch-series-11" role="img" aria-label="Apple Watch Series 11, rose gold color, aluminum case, sleep score, right side exterior, Digital Crown, microphone, side button, starlight Sport Band" data-anim-lazy-image="">
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div data-unit-id="iphone-tradein" data-analytics-section-engagement="name:promo-iphone-tradein">
          <div className="module-content">
            <div className="unit-wrapper">
              <a className="unit-link" href="/us/shop/goto/trade_in" target="_self" rel="follow" data-analytics-region="buy" aria-hidden="true" tabIndex="-1">&nbsp;</a>
              <div className="unit-copy-wrapper">
                <h3 className="logo-image logo-image-iphone-tradein-promo-logo-iphone-tradein headline"><span className="visuallyhidden">Apple Trade In</span></h3>
                <p className="subhead">Get up to $200–$700 in&nbsp;credit when you trade&nbsp;in iPhone&nbsp;13 or higher.<sup className="footnote footnote-number" aria-label="Footnote 1">1</sup></p>
                <div className="cta-links">
                  <a className="button button-primary" href="/us/shop/goto/trade_in" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="get your estimate" aria-label="Get your estimate">Get your estimate</a>
                </div>
              </div>
              <div className="unit-image-wrapper">
                <figure className="unit-image unit-image-iphone-tradein-promo-iphone-tradein" role="img" aria-label="Side-by-side, hand holding iPhone 13 in silicon case with stickers on back exterior, trade-in with hand holding new iPhone box for iPhone 17 Pro" data-anim-lazy-image="">
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div data-unit-id="apple-card" data-analytics-section-engagement="name:promo-apple-card">
          <div className="module-content">
            <div className="unit-wrapper">
              <a className="unit-link" href="/apple-card/" target="_self" rel="follow" data-analytics-region="learn more" aria-hidden="true" tabIndex="-1">&nbsp;</a>
              <div className="unit-copy-wrapper">
                <h3 className="logo-image logo-image-apple-card-logo headline"><span className="visuallyhidden">Apple Card</span></h3>
                <p className="subhead">Get up to 3% Daily&nbsp;Cash back with every purchase.</p>
                <div className="cta-links">
                  <a className="button button-primary" href="/apple-card/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="learn more - apple card" aria-label="Learn more, Apple Card">Learn more</a>
                  <a className="default button button-tertiary" href="https://card.apple.com/apply/application?referrer=cid%3Dapy-200-10000036&amp;start=false" data-rid-relay="{&quot;287&quot;:&quot;referrer&quot;}" data-analytics-exit-link="" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="Apply now - Apple Card" aria-label="Apply now, Apple Card">Apply now</a>
                  <a className="ios button button-tertiary" href="https://wallet.apple.com/apple-card/setup/feature/ccs?referrer=cid%3Dapy-200-10000036" data-rid-relay="{&quot;287&quot;:&quot;referrer&quot;}" data-analytics-exit-link="" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="Apply now - Apple Card" aria-label="Apply now, Apple Card">Apply now</a>
                </div>
              </div>
              <div className="unit-image-wrapper">
                <figure className="unit-image unit-image-apple-card-promo-apple-card" role="img" aria-label="Apple Card, front, Apple logo in top left, cardholder name in middle left Marisa Robertson, card chip in middle right." data-anim-lazy-image="">
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-3 */}
      <section className="homepage-section standalone-module" data-module-template="tv-plus-gallery" data-analytics-region="tv-plus-gallery">
        <div className="module-content">
          <div id="tv-plus-gallery" data-analytics-gallery-id="Tv Plus Gallery" data-analytics-section-engagement="name:tv-plus-gallery" aria-label="Gallery of Apple TV+ shows, movies, and sports." role="group" className="gallery" data-watch-now="Stream now" data-preview-now="Preview now" data-watch-now-aria="Stream now, {title}" data-preview-now-aria="Preview now, {title}" data-token="itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622" data-play-aria="play Apple TV plus gallery" data-pause-aria="pause Apple TV plus gallery" data-dotnav-item-aria="Item {n}" data-prev-aria-template="Show previous TV Series, ${title}" data-next-aria-template="Show next TV Series, ${title}">
            <h3 className="visuallyhidden">Apple TV+</h3>
            <div className="item-container" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
              <div id="tv-plus-gallery-item-1" data-analytics-gallery-item-id="Tv Plus Gallery item 1" data-ac-gallery-item="" className="gallery-item theme-dark current" role="tabpanel" aria-labelledby="tv-plus-gallery-item-1-trigger" style={{ '--progress': 0, zIndex: 1, opacity: 1, transform: 'translate(0px, 0px)' }}>
                <a href="https://tv.apple.com/us/show/loot/umc.cmc.5erbujil1mpazuerhr1udnk45?l=en-US?itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622" style={{ backgroundImage: 'url(https://is1-ssl.mzstatic.com/image/thumb/E6TMrjuZQl_6PX5D5NgGpA/1250x703.jpg)' }} data-analytics-title="stream now" data-rid-relay="{&quot;289&quot;:&quot;itsct&quot;}" data-analytics-exit-link="" data-analytics-activitymap-region-id="tv-plus-gallery-loot">
                  <div className="inner">
                    <div className="info-top">
                      <figure className="atv-plus-icon show-icon"></figure>
                      <figure className="logo" style={{ backgroundImage: 'url(https://is1-ssl.mzstatic.com/image/thumb/3ckGZ-c2a_OIvhMJ6MXNaA/548x228.png)' }}></figure>
                    </div>
                    <div className="info-bottom">
                      <div className="custom-button button-primary-light" aria-label="Stream now, Loot">Stream now</div>
                      <p className="typography-shows-genre"><span className="genre">Comedy</span> <span className="m-dot" aria-hidden="true">·</span> New season.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div id="tv-plus-gallery-item-2" data-analytics-gallery-item-id="Tv Plus Gallery item 2" data-ac-gallery-item="" className="gallery-item theme-dark" role="tabpanel" aria-labelledby="tv-plus-gallery-item-2-trigger" data-original-aria-hidden="" aria-hidden="true" style={{ '--progress': 1, zIndex: 0, opacity: 1, transform: 'translate(1265px, 0px)' }}>
                <a href="https://tv.apple.com/us/show/the-last-frontier/umc.cmc.6kmzwhcm9cj30piuuiymr4u7m?l=en-US?itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622" style={{ backgroundImage: 'url(https://is1-ssl.mzstatic.com/image/thumb/0pX0OGKnucGvr-5dk9KAjw/1250x703.jpg)' }} data-analytics-title="stream now" data-rid-relay="{&quot;289&quot;:&quot;itsct&quot;}" data-analytics-exit-link="" data-analytics-activitymap-region-id="tv-plus-gallery-the last frontier" data-original-tabindex="" tabIndex="-1">
                  <div className="inner">
                    <div className="info-top">
                      <figure className="atv-plus-icon show-icon"></figure>
                      <figure className="logo" style={{ backgroundImage: 'url(https://is1-ssl.mzstatic.com/image/thumb/0YJe8Md4RmFdG7Pc8mEd_w/548x284.png)' }}></figure>
                    </div>
                    <div className="info-bottom">
                      <div className="custom-button button-primary-light" aria-label="Stream now, The Last Frontier">Stream now</div>
                      <p className="typography-shows-genre"><span className="genre">Action</span> <span className="m-dot" aria-hidden="true">·</span> 600,000 square miles. Nowhere to hide.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div id="tv-plus-gallery-item-3" data-analytics-gallery-item-id="Tv Plus Gallery item 3" data-ac-gallery-item="" className="gallery-item theme-dark" role="tabpanel" aria-labelledby="tv-plus-gallery-item-3-trigger" data-original-aria-hidden="" aria-hidden="true" style={{ '--progress': 2, zIndex: 0, opacity: 1, transform: 'translate(2530px, 0px)' }}>
                <a href="https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o?l=en-US?itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622" style={{ backgroundImage: 'url(https://is1-ssl.mzstatic.com/image/thumb/V_qCiloAabdoxI690aQUqQ/1250x703.jpg)' }} data-analytics-title="stream now" data-rid-relay="{&quot;289&quot;:&quot;itsct&quot;}" data-analytics-exit-link="" data-analytics-activitymap-region-id="tv-plus-gallery-slow horses" data-original-tabindex="" tabIndex="-1">
                  <div className="inner">
                    <div className="info-top">
                      <figure className="atv-plus-icon show-icon"></figure>
                      <figure className="logo" style={{ backgroundImage: 'url(https://is1-ssl.mzstatic.com/image/thumb/EJSCPD6sWV9Ib13RNrmy2g/548x107.png)' }}></figure>
                    </div>
                    <div className="info-bottom">
                      <div className="custom-button button-primary-light" aria-label="Stream now, Slow Horses">Stream now</div>
                      <p className="typography-shows-genre"><span className="genre">Thriller</span> <span className="m-dot" aria-hidden="true">·</span> Old sins cast new shadows.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div id="tv-plus-gallery-item-4" data-analytics-gallery-item-id="Tv Plus Gallery item 4" data-ac-gallery-item="" className="gallery-item theme-dark" role="tabpanel" aria-labelledby="tv-plus-gallery-item-4-trigger" data-original-aria-hidden="" aria-hidden="true" style={{ '--progress': 3, zIndex: 0, opacity: 1, transform: 'translate(3795px, 0px)' }}>
                <a href="https://tv.apple.com/us/show/the-morning-show/umc.cmc.25tn3v8ku4b39tr6ccgb8nl6m?l=en-US?itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622" style={{ backgroundImage: 'url(https://is1-ssl.mzstatic.com/image/thumb/v1Wvp6Byt-9VCCddt0YALA/1250x703.jpg)' }} data-analytics-title="stream now" data-rid-relay="{&quot;289&quot;:&quot;itsct&quot;}" data-analytics-exit-link="" data-analytics-activitymap-region-id="tv-plus-gallery-the morning show" data-original-tabindex="" tabIndex="-1">
                  <div className="inner">
                    <div className="info-top">
                      <figure className="atv-plus-icon show-icon"></figure>
                      <figure className="logo" style={{ backgroundImage: 'url(https://is1-ssl.mzstatic.com/image/thumb/oif7hHIsgsaCP0ZL4RKmpg/548x165.png)' }}></figure>
                    </div>
                    <div className="info-bottom">
                      <div className="custom-button button-primary-light" aria-label="Stream now, The Morning Show">Stream now</div>
                      <p className="typography-shows-genre"><span className="genre">Drama</span> <span className="m-dot" aria-hidden="true">·</span> The truth is the top story.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div id="tv-plus-gallery-item-5" data-analytics-gallery-item-id="Tv Plus Gallery item 5" data-ac-gallery-item="" className="gallery-item theme-light" role="tabpanel" aria-labelledby="tv-plus-gallery-item-5-trigger" data-original-aria-hidden="" aria-hidden="true" style={{ '--progress': 4, zIndex: 0, opacity: 1, transform: 'translate(5060px, 0px)' }}>
                <a href="https://tv.apple.com/us/channel/mls-season-pass/tvs.sbd.7000?itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622" style={{ backgroundImage: 'url(https://is1-ssl.mzstatic.com/image/thumb/Features/v4/97/3c/ad/973cad18-1b22-8b11-41d0-0ce92fd4317b/eeb71960-77a5-4cec-a541-2fc280c1a128.png/1250x703.jpg)' }} data-analytics-title="see the schedule" data-rid-relay="{&quot;289&quot;:&quot;itsct&quot;}" data-analytics-exit-link="" data-analytics-activitymap-region-id="tv-plus-gallery-mls season pass" data-original-tabindex="" tabIndex="-1">
                  <div className="inner">
                    <div className="info-top">
                      <figure className="atv-plus-icon hide-icon"></figure>
                      <figure className="logo" style={{ backgroundImage: 'url(https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/3f/45/3e/3f453e9d-3050-c03c-9aa8-dd049904efe8/b0ad48f3-51e6-46e6-9b6b-f0e306068221.png/548x180.png)' }}></figure>
                    </div>
                    <div className="info-bottom">
                      <div className="custom-button button-primary-light" aria-label="See the schedule, MLS Season Pass">See the schedule</div>
                      <p className="typography-shows-genre">Watch every club, every match, live—all season long.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div id="tv-plus-gallery-item-6" data-analytics-gallery-item-id="Tv Plus Gallery item 6" data-ac-gallery-item="" className="gallery-item theme-dark" role="tabpanel" aria-labelledby="tv-plus-gallery-item-6-trigger" data-original-aria-hidden="" aria-hidden="true" style={{ '--progress': 5, zIndex: 0, opacity: 1, transform: 'translate(6325px, 0px)' }}>
                <a href="https://tv.apple.com/us/show/mr-scorsese/umc.cmc.4a06j5lm5pxny9nx505zo5g0y?l=en-US?itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622" style={{ backgroundImage: 'url(https://is1-ssl.mzstatic.com/image/thumb/OuYM1CG9vuJ8HoxP2qnp5A/1250x703.jpg)' }} data-analytics-title="stream now" data-rid-relay="{&quot;289&quot;:&quot;itsct&quot;}" data-analytics-exit-link="" data-analytics-activitymap-region-id="tv-plus-gallery-mr. scorsese" data-original-tabindex="" tabIndex="-1">
                  <div className="inner">
                    <div className="info-top">
                      <figure className="atv-plus-icon show-icon"></figure>
                      <figure className="logo" style={{ backgroundImage: 'url(https://is1-ssl.mzstatic.com/image/thumb/CAjdoCL5DsZ_VmtsLSzS4g/548x134.png)' }}></figure>
                    </div>
                    <div className="info-bottom">
                      <div className="custom-button button-primary-light" aria-label="Stream now, Mr. Scorsese">Stream now</div>
                      <p className="typography-shows-genre"><span className="genre">Documentary</span> <span className="m-dot" aria-hidden="true">·</span> Director. Writer. Icon. Martin Scorsese opens up like he never has before.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div id="tv-plus-gallery-item-7" data-analytics-gallery-item-id="Tv Plus Gallery item 7" data-ac-gallery-item="" className="gallery-item theme-dark" role="tabpanel" aria-labelledby="tv-plus-gallery-item-7-trigger" data-original-aria-hidden="" aria-hidden="true" style={{ '--progress': 6, zIndex: 0, opacity: 1, transform: 'translate(7590px, 0px)' }}>
                <a href="https://tv.apple.com/us/movie/its-the-great-pumpkin-charlie-brown/umc.cmc.1c5nvp802hos5t3u0umlukkwh?l=en-US?itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622" style={{ backgroundImage: 'url(https://is1-ssl.mzstatic.com/image/thumb/7QggTvk_fHz-FE9Pru2GxA/1250x703.jpg)' }} data-analytics-title="stream now" data-rid-relay="{&quot;289&quot;:&quot;itsct&quot;}" data-analytics-exit-link="" data-analytics-activitymap-region-id="tv-plus-gallery-it’s the great pumpkin, charlie brown" data-original-tabindex="" tabIndex="-1">
                  <div className="inner">
                    <div className="info-top">
                      <figure className="atv-plus-icon show-icon"></figure>
                      <figure className="logo" style={{ backgroundImage: 'url(https://is1-ssl.mzstatic.com/image/thumb/dzlkc3x4KOFiOc34cnD2cQ/548x158.png)' }}></figure>
                    </div>
                    <div className="info-bottom">
                      <div className="custom-button button-primary-light" aria-label="Stream now, It’s the Great Pumpkin, Charlie Brown">Stream now</div>
                      <p className="typography-shows-genre"><span className="genre">Animation</span> <span className="m-dot" aria-hidden="true">·</span> Happiness is a Halloween tradition.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div id="tv-plus-gallery-item-8" data-analytics-gallery-item-id="Tv Plus Gallery item 8" data-ac-gallery-item="" className="gallery-item theme-dark" role="tabpanel" aria-labelledby="tv-plus-gallery-item-8-trigger" data-original-aria-hidden="" aria-hidden="true" style={{ '--progress': 7, zIndex: 0, opacity: 1, transform: 'translate(8855px, 0px)' }}>
                <a href="https://tv.apple.com/us/movie/the-lost-bus/umc.cmc.4p7gv4trt1rt0kuiwzmitibiv?l=en-US?itscg=10000&amp;itsct=atv-apl_hp-stream_now--220622" style={{ backgroundImage: 'url(https://is1-ssl.mzstatic.com/image/thumb/9dce-B0hUgREvlPfPw7ZFA/1250x703.jpg)' }} data-analytics-title="stream now" data-rid-relay="{&quot;289&quot;:&quot;itsct&quot;}" data-analytics-exit-link="" data-analytics-activitymap-region-id="tv-plus-gallery-the lost bus" data-original-tabindex="" tabIndex="-1">
                  <div className="inner">
                    <div className="info-top">
                      <figure className="atv-plus-icon show-icon"></figure>
                      <figure className="logo" style={{ backgroundImage: 'url(https://is1-ssl.mzstatic.com/image/thumb/2nZLddN1I0mVmRHi8D4f7w/548x248.png)' }}></figure>
                    </div>
                    <div className="info-bottom">
                      <div className="custom-button button-primary-light" aria-label="Stream now, The Lost Bus">Stream now</div>
                      <p className="typography-shows-genre"><span className="genre">Drama</span> <span className="m-dot" aria-hidden="true">·</span> An unforgettable ride.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-4 */}
      <section className="homepage-section standalone-module" tabIndex="-1" data-module-template="fam-gallery" data-analytics-region="fam-gallery">
        <div className="module-content">
          <link rel="stylesheet" type="text/css" href="/autopush/us/fam-gallery/fam-gallery.built.css" />
          <div id="fam-gallery" className="fam-gallery" data-fam-component-list="famGallery" data-analytics-section-engagement="name:fam-gallery" data-analytics-gallery-id="fam-gallery" aria-label="Gallery of Apple services, including Fitness Plus, Apple Arcade, and Apple Music" data-anim-scroll-group="famGalleryVisible">
            <h3 className="visuallyhidden">FAM Gallery</h3>
            <div className="fam-gallery-marquee" data-anim-time-group="famGalleryMarquee" style={{ transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>
              <div className="fam-gallery-item fgi-clone" data-gallery-id="1647864828" data-analytics-gallery-item-id="fam-gallery-item-1" data-ac-gallery-item="" data-gallery-item-theme="dark">
                <a className="fam-gallery-link" data-analytics-title="watch now - strong and calm combos for busy days" data-analytics-exit-link="" data-rid-relay="{&quot;299&quot;:&quot;itsct&quot;}" href="https://fitness.apple.com/us/studio-collection/strong-and-calm-combos-for-busy-days/1647864828?itscg=10000&amp;itsct=afp-apl_hp-watch_now--240326">
                  <div className="fam-gallery-bg fam-gallery-bg-1 fam-gallery-bg-6" style={{ backgroundColor: '#9acb94' }} data-fam-lazy-image="">
                    <div className="fam-gallery-logo fam-gallery-logo-fitness is-theme-light">
                      <svg viewBox="0 0 449 80"><path d="M78.6,78.56V5.5h45.62v9.77H89.94v23.14h31.39v9.57H89.94v30.58H78.6z M131.86,11.22c0-3.49,2.83-6.28,6.33-6.28 c3.49,0,6.33,2.79,6.33,6.28c0,3.44-2.83,6.28-6.33,6.28C134.69,17.5,131.86,14.67,131.86,11.22z M132.72,25.3h10.94v53.26h-10.94 V25.3z M170.68,12.69V25.3h10.12v8.66h-10.12v29.36c0,4.61,2.02,6.68,6.48,6.68c1.11,0,2.89-0.1,3.59-0.25v8.66 c-1.21,0.3-3.64,0.51-6.08,0.51c-10.78,0-14.99-4.1-14.99-14.38V33.96h-7.75V25.3h7.75V12.69H170.68z M189.98,25.3h10.43v8.91h0.25 c2.89-6.08,8.56-9.82,16.76-9.82c11.75,0,18.48,7.49,18.48,19.69v34.48h-10.99V46.21c0-8-3.75-12.4-11.34-12.4 c-7.7,0-12.66,5.47-12.66,13.72v31.04h-10.94V25.3z M291.07,62.91c-1.52,9.72-10.73,16.66-22.93,16.66 c-15.64,0-25.11-10.58-25.11-27.39c0-16.71,9.62-27.85,24.66-27.85c14.78,0,24,10.43,24,26.58v3.75h-37.62v0.66 c0,9.26,5.57,15.39,14.33,15.39c6.23,0,10.84-3.14,12.3-7.8H291.07z M254.11,47.02h26.63c-0.25-8.15-5.42-13.87-13.06-13.87 C260.03,33.15,254.66,38.97,254.11,47.02z M319.62,24.34c12.4,0,20.45,6.89,20.81,16.71h-10.28c-0.61-5.16-4.4-8.4-10.53-8.4 c-5.92,0-9.87,2.89-9.87,7.14c0,3.34,2.43,5.62,8.2,6.94l8.66,1.97c10.89,2.53,15.04,6.78,15.04,14.48c0,9.72-9.06,16.4-21.62,16.4 c-13.32,0-21.32-6.53-22.33-16.66h10.83c1.01,5.57,4.81,8.3,11.49,8.3c6.58,0,10.63-2.73,10.63-7.09c0-3.44-1.97-5.47-7.8-6.79 l-8.66-2.02c-10.13-2.33-15.14-7.19-15.14-14.94C299.07,30.87,307.37,24.34,319.62,24.34z M369.08,24.34 c12.4,0,20.45,6.89,20.81,16.71h-10.28c-0.61-5.16-4.4-8.4-10.53-8.4c-5.92,0-9.87,2.89-9.87,7.14c0,3.34,2.43,5.62,8.2,6.94 l8.66,1.97c10.89,2.53,15.04,6.78,15.04,14.48c0,9.72-9.06,16.4-21.62,16.4c-13.32,0-21.32-6.53-22.33-16.66h10.83 c1.01,5.57,4.81,8.3,11.49,8.3c6.58,0,10.63-2.73,10.63-7.09c0-3.44-1.97-5.47-7.8-6.79l-8.66-2.02 c-10.13-2.33-15.14-7.19-15.14-14.94C348.52,30.87,356.83,24.34,369.08,24.34z M428.07,78.63h-9.97V56.93h-20.66v-9.87h20.66V25.37 h9.97v21.69h20.71v9.87h-20.71V78.63z M43.87,12.64C46.64,9.29,48.5,4.63,47.99,0c-3.98,0.16-8.8,2.65-11.66,6 c-2.56,2.96-4.81,7.71-4.2,12.25C36.57,18.59,41.11,15.99,43.87,12.64z M47.89,19.13c-6.52-0.48-12.05,3.64-15.13,3.64 c-3.13,0-7.96-3.54-13.07-3.44c-6.72,0.1-12.91,3.91-16.38,9.93c-6.98,12.11-1.78,30.06,5.02,39.89c3.33,4.8,7.29,10.22,12.5,10.02 c5.01-0.2,6.91-3.24,12.97-3.24c6.06,0,7.77,3.24,13.07,3.15c5.4-0.1,8.82-4.9,12.12-9.73c3.82-5.57,5.39-10.97,5.48-11.26 c-0.12-0.05-10.52-4.04-10.62-16.02c-0.09-10.02,8.18-14.83,8.55-15.07C57.7,20.08,50.45,19.32,47.89,19.13z"></path></svg>
                    </div>
                    <div className="fam-gallery-overlay">
                      <span className="fam-gallery-button button button-primary-light">Watch now</span>
                    </div>
                  </div>
                  <div className="fam-gallery-copy">
                    <p className="fam-gallery-title">Strong and Calm Combos for Busy Days</p>
                  </div>
                </a>
              </div>
              <div className="fam-gallery-item fgi-clone" data-gallery-id="ra.1807563289" data-analytics-gallery-item-id="fam-gallery-item-2" data-ac-gallery-item="" data-gallery-item-theme="dark">
                <a className="fam-gallery-link" data-analytics-title="listen now - seth rogen: the zane lowe interview" data-analytics-exit-link="" data-rid-relay="{&quot;286&quot;:&quot;itsct&quot;}" href="https://music.apple.com/us/station/seth-rogen-the-zane-lowe-interview/ra.1807563289?itscg=10000&amp;itsct=am-apl_hp-listen_now--240326">
                  <div className="fam-gallery-bg-music" style={{ backgroundColor: 'rgb(38,38,38)' }}>
                    <div className="fam-gallery-logo is-theme-dark fam-gallery-logo-music is-theme-light">
                      <svg viewBox="0 0 339 80"><path d="M142.14,78.63V24.86h-0.35l-22.02,53.77h-8.4L89.28,24.86h-0.35v53.77H78.6V5.57h13.11l23.64,58.22h0.41l23.59-58.22h13.16 v73.06H142.14z M209.62,78.63h-10.48v-9.01h-0.25c-2.94,6.38-8.35,9.97-16.5,9.97c-11.59,0-18.68-7.54-18.68-19.75V25.36h10.94 v32.35c0,8.1,3.85,12.45,11.39,12.45c7.9,0,12.66-5.47,12.66-13.77V25.36h10.94L209.62,78.63z M239.59,24.4 c12.4,0,20.45,6.89,20.81,16.71h-10.28c-0.61-5.16-4.4-8.4-10.53-8.4c-5.92,0-9.87,2.89-9.87,7.14c0,3.34,2.43,5.62,8.2,6.94 l8.66,1.97c10.89,2.53,15.04,6.78,15.04,14.48c0,9.72-9.06,16.4-21.62,16.4c-13.32,0-21.32-6.53-22.33-16.66h10.84 c1.01,5.57,4.81,8.3,11.49,8.3c6.58,0,10.63-2.73,10.63-7.09c0-3.44-1.97-5.47-7.8-6.79l-8.66-2.02 c-10.13-2.33-15.14-7.19-15.14-14.94C219.03,30.93,227.34,24.4,239.59,24.4L239.59,24.4z M269.26,11.34 c-0.07-3.51,2.72-6.41,6.23-6.48s6.41,2.72,6.48,6.23s-2.72,6.41-6.23,6.48c-0.05,0-0.1,0-0.15,0 C272.12,17.59,269.29,14.81,269.26,11.34L269.26,11.34z M270.12,25.36h10.94v53.26h-10.94V25.36z M327.22,43.69 c-1.11-5.67-5.37-10.18-12.5-10.18c-8.46,0-14.02,7.04-14.02,18.48c0,11.7,5.62,18.48,14.13,18.48c6.73,0,11.14-3.7,12.4-9.87h10.53 c-1.17,11.34-10.23,19.04-23.04,19.04c-15.24,0-25.16-10.43-25.16-27.64c0-16.91,9.92-27.59,25.06-27.59 c13.72,0,22.07,8.81,23.04,19.29L327.22,43.69z M43.87,12.7c2.96-3.54,4.43-8.09,4.1-12.7c-4.54,0.43-8.74,2.6-11.71,6.06 c-2.54,2.93-4.78,7.71-4.2,12.21C36.55,18.66,41.04,16.02,43.87,12.7 M47.91,19.14c-6.52-0.39-12.07,3.7-15.18,3.7 c-3.12,0-7.89-3.51-13.04-3.41c-6.83,0.17-13.05,3.95-16.35,9.93c-7.01,12.08-1.85,30,4.97,39.83c3.31,4.87,7.3,10.23,12.55,10.03 C25.83,79.03,27.77,76,33.81,76c6.03,0,7.78,3.22,13.04,3.12c5.45-0.1,8.86-4.87,12.17-9.74c2.35-3.45,4.18-7.22,5.45-11.2 c-0.1-0.1-10.51-4.09-10.61-16.07c-0.1-10.03,8.18-14.8,8.56-15.1C57.75,20.12,50.45,19.34,47.91,19.14"></path></svg>
                    </div>
                    <div className="fam-gallery-overlay">
                      <span className="fam-gallery-button button button-primary-light">Listen now</span>
                    </div>
                    <div className="fam-gallery-album-art fam-gallery-album-art-1 fam-gallery-album-art-2" data-fam-lazy-image=""></div>
                  </div>
                  <div className="fam-gallery-copy-music is-theme-dark">
                    <p className="fam-gallery-title">Seth Rogen: The Zane Lowe Interview</p>
                  </div>
                </a>
              </div>
              <div className="fam-gallery-item fgi-clone" data-gallery-id="6545262709" data-analytics-gallery-item-id="fam-gallery-item-3" data-ac-gallery-item="" data-gallery-item-theme="dark">
                <a className="fam-gallery-link" data-analytics-title="play now - pga tour pro golf" data-analytics-exit-link="" data-rid-relay="{&quot;288&quot;:&quot;itsct&quot;}" href="https://apps.apple.com/us/app/pga-tour-pro-golf/id6545262709?itscg=10000&amp;itsct=aa-apl_hp-play_now--240326">
                  <div className="fam-gallery-bg fam-gallery-bg-3 fam-gallery-bg-6" style={{ backgroundColor: '#141414' }} data-fam-lazy-image="">
                    <div className="fam-gallery-logo fam-gallery-logo-arcade is-theme-light">
                      <svg viewBox="0 0 387 80"><path d="M117.81,58.88H89.96l-6.68,19.75h-11.8L97.86,5.57h12.25l26.38,73.06h-12L117.81,58.88z M92.85,49.77h22.07l-10.89-32.05 h-0.3L92.85,49.77z M142.71,25.36h10.43v9.06h0.25c1.77-6.23,6.53-9.92,12.81-9.92c1.57,0,2.94,0.25,3.75,0.41v10.18 c-0.86-0.35-2.78-0.61-4.91-0.61c-7.04,0-11.39,4.71-11.39,12.25v31.9h-10.94V25.36z M209.95,43.69 c-1.11-5.67-5.37-10.18-12.5-10.18c-8.46,0-14.02,7.04-14.02,18.48c0,11.7,5.62,18.48,14.13,18.48c6.73,0,11.14-3.7,12.4-9.87h10.53 c-1.17,11.34-10.23,19.04-23.04,19.04c-15.24,0-25.16-10.43-25.16-27.64c0-16.91,9.92-27.59,25.06-27.59 c13.72,0,22.07,8.81,23.04,19.29L209.95,43.69L209.95,43.69z M226.11,63.49c0-9.32,7.14-15.04,19.8-15.75l14.58-0.86v-4.1 c0-5.92-4-9.47-10.68-9.47c-6.33,0-10.28,3.04-11.24,7.8h-10.33c0.61-9.62,8.81-16.71,21.97-16.71c12.91,0,21.16,6.83,21.16,17.52 v36.71h-10.48v-8.76h-0.25c-3.09,5.92-9.82,9.67-16.81,9.67C233.4,79.54,226.11,73.06,226.11,63.49z M260.49,58.68v-4.2l-13.11,0.81 c-6.53,0.46-10.23,3.34-10.23,7.9c0,4.66,3.85,7.7,9.72,7.7C254.51,70.88,260.49,65.62,260.49,58.68z M279.06,52 c0-16.81,8.91-27.49,22.28-27.49c7.64,0,13.72,3.85,16.71,9.72h0.2V5.57h10.99v73.06H318.6v-9.06h-0.2 c-3.14,6.07-9.21,9.97-16.96,9.97C287.97,79.54,279.06,68.8,279.06,52z M290.25,52c0,11.24,5.42,18.28,14.08,18.28 c8.4,0,14.02-7.14,14.02-18.28c0-11.04-5.62-18.28-14.02-18.28C295.67,33.72,290.25,40.81,290.25,52z M385.16,62.98 c-1.52,9.72-10.73,16.66-22.93,16.66c-15.64,0-25.11-10.58-25.11-27.39c0-16.71,9.62-27.85,24.66-27.85c14.78,0,24,10.43,24,26.58 v3.75h-37.62v0.66c0,9.26,5.57,15.39,14.33,15.39c6.23,0,10.83-3.14,12.3-7.8C374.78,62.98,385.16,62.98,385.16,62.98z M348.2,47.08 h26.63c-0.25-8.15-5.42-13.87-13.06-13.87C354.13,33.21,348.76,39.03,348.2,47.08z M43.87,12.7c2.73-3.42,4.59-8.01,4.1-12.7 c-4,0.2-8.88,2.64-11.71,6.06c-2.54,2.93-4.78,7.71-4.2,12.21C36.55,18.66,41.04,16.02,43.87,12.7 M47.92,19.14 c-6.52-0.39-12.07,3.7-15.18,3.7c-3.12,0-7.89-3.51-13.04-3.41c-6.71,0.1-12.94,3.89-16.35,9.93c-7.01,12.08-1.85,30,4.97,39.83 c3.31,4.87,7.3,10.23,12.55,10.03c4.97-0.19,6.91-3.22,12.95-3.22c6.03,0,7.78,3.22,13.04,3.12c5.45-0.1,8.86-4.87,12.17-9.74 c3.8-5.55,5.35-10.91,5.45-11.2c-0.1-0.1-10.51-4.09-10.61-16.07c-0.1-10.03,8.18-14.8,8.56-15.1C57.75,20.12,50.45,19.34,47.92,19.14"></path></svg>
                    </div>
                    <div className="fam-gallery-overlay">
                      <span className="fam-gallery-button button button-primary-light">Play now</span>
                    </div>
                  </div>
                  <div className="fam-gallery-copy">
                    <p className="fam-gallery-title">PGA TOUR Pro Golf</p>
                  </div>
                </a>
              </div>
              <div className="fam-gallery-item fgi-clone" data-gallery-id="1785344154" data-analytics-gallery-item-id="fam-gallery-item-4" data-ac-gallery-item="" data-gallery-item-theme="dark">
                <a className="fam-gallery-link" data-analytics-title="watch now - strength with gregg" data-analytics-exit-link="" data-rid-relay="{&quot;299&quot;:&quot;itsct&quot;}" href="https://fitness.apple.com/us/workout/strength-with-gregg/1785344154?itscg=10000&amp;itsct=afp-apl_hp-watch_now--240326">
                  <div className="fam-gallery-bg fam-gallery-bg-4 fam-gallery-bg-6" style={{ backgroundColor: '#0a0303' }} data-fam-lazy-image="">
                    <div className="fam-gallery-logo fam-gallery-logo-fitness is-theme-light">
                      <svg viewBox="0 0 449 80"><path d="M78.6,78.56V5.5h45.62v9.77H89.94v23.14h31.39v9.57H89.94v30.58H78.6z M131.86,11.22c0-3.49,2.83-6.28,6.33-6.28 c3.49,0,6.33,2.79,6.33,6.28c0,3.44-2.83,6.28-6.33,6.28C134.69,17.5,131.86,14.67,131.86,11.22z M132.72,25.3h10.94v53.26h-10.94 V25.3z M170.68,12.69V25.3h10.12v8.66h-10.12v29.36c0,4.61,2.02,6.68,6.48,6.68c1.11,0,2.89-0.1,3.59-0.25v8.66 c-1.21,0.3-3.64,0.51-6.08,0.51c-10.78,0-14.99-4.1-14.99-14.38V33.96h-7.75V25.3h7.75V12.69H170.68z M189.98,25.3h10.43v8.91h0.25 c2.89-6.08,8.56-9.82,16.76-9.82c11.75,0,18.48,7.49,18.48,19.69v34.48h-10.99V46.21c0-8-3.75-12.4-11.34-12.4 c-7.7,0-12.66,5.47-12.66,13.72v31.04h-10.94V25.3z M291.07,62.91c-1.52,9.72-10.73,16.66-22.93,16.66 c-15.64,0-25.11-10.58-25.11-27.39c0-16.71,9.62-27.85,24.66-27.85c14.78,0,24,10.43,24,26.58v3.75h-37.62v0.66 c0,9.26,5.57,15.39,14.33,15.39c6.23,0,10.84-3.14,12.3-7.8H291.07z M254.11,47.02h26.63c-0.25-8.15-5.42-13.87-13.06-13.87 C260.03,33.15,254.66,38.97,254.11,47.02z M319.62,24.34c12.4,0,20.45,6.89,20.81,16.71h-10.28c-0.61-5.16-4.4-8.4-10.53-8.4 c-5.92,0-9.87,2.89-9.87,7.14c0,3.34,2.43,5.62,8.2,6.94l8.66,1.97c10.89,2.53,15.04,6.78,15.04,14.48c0,9.72-9.06,16.4-21.62,16.4 c-13.32,0-21.32-6.53-22.33-16.66h10.83c1.01,5.57,4.81,8.3,11.49,8.3c6.58,0,10.63-2.73,10.63-7.09c0-3.44-1.97-5.47-7.8-6.79l-8.66-2.02 c-10.13-2.33-15.14-7.19-15.14-14.94C348.52,30.87,356.83,24.34,369.08,24.34z M428.07,78.63h-9.97V56.93h-20.66v-9.87h20.66V25.37 h9.97v21.69h20.71v9.87h-20.71V78.63z M43.87,12.7c2.96-3.54,4.43-8.09,4.1-12.7c-4.54,0.43-8.74,2.6-11.71,6.06 c-2.54,2.93-4.78,7.71-4.2,12.21C36.55,18.66,41.04,16.02,43.87,12.7 M47.91,19.14c-6.52-0.39-12.07,3.7-15.18,3.7 c-3.12,0-7.89-3.51-13.04-3.41c-6.71,0.1-12.94,3.89-16.35,9.93c-7.01,12.08-1.85,30,4.97,39.83 c3.31,4.87,7.3,10.23,12.55,10.03C25.83,79.03,27.77,76,33.81,76c6.03,0,7.78,3.22,13.04,3.12c5.45-0.1,8.86-4.87,12.17-9.74 c3.8-5.55,5.35-10.91,5.45-11.2c-0.1-0.1-10.51-4.09-10.61-16.07c-0.1-10.03,8.18-14.8,8.56-15.1C57.75,20.12,50.45,19.34,47.91,19.14"></path></svg>
                    </div>
                    <div className="fam-gallery-overlay">
                      <span className="fam-gallery-button button button-primary-light">Watch now</span>
                    </div>
                  </div>
                  <div className="fam-gallery-copy">
                    <p className="fam-gallery-title">Strength with Gregg</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-5 */}
      <section className="ac-gf-sosumi" aria-label="Footnotes">
          <ul>
              <li>
                  <span id="footnote-1" className="tax-holiday-legal-hide">
                      1. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.
                  </span>
              </li>
              <li>
                  Available in the U.S. on <a href="/">apple.com</a>, in the Apple Store app, and at Apple Stores.
              </li>
              <li>
                  To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
              </li>
              <li>
                  Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank.
              </li>
              <li>
                  If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
              </li>
              <li>
                  Learn more about how Apple Card applications are evaluated at <a href="https://support.apple.com/kb/HT209218">support.apple.com/kb/HT209218</a>.
              </li>
              <li style={{ display: 'none' }}>
                  <span className="tv-plus-legal">Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All rights reserved.</span>
              </li>
              <li>
                  <span className="fam-legal">A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV+.</span>
              </li>
              <li>
                  Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
              </li>
          </ul>
      </section>

      {/* SECTION-6 */}
      <section className="ac-gf-footer">
          <div className="ac-gf-footer-shop" x-ms-format-detection="none">
              More ways to shop: <a href="/retail/" data-analytics-title="find an apple store">Find an Apple Store</a> or <a href="https://locate.apple.com/" data-analytics-title="other retailers or resellers" data-analytics-exit-link="">other retailer</a> near you. <span className="nowrap">Or call <a href="tel:1-800-692-7753">1-800-MY-APPLE</a> (1-800-692-7753).</span>
          </div>
          <div className="ac-gf-footer-locale">
              <a className="ac-gf-footer-locale-link" href="/choose-country-region/" title="Choose your country or region" aria-label="United States. Choose your country or region" data-analytics-title="choose your country">United States</a>
          </div>
          <div className="ac-gf-footer-legal">
              <div className="ac-gf-footer-legal-copyright">Copyright ©
                  2025
                   Apple Inc. All rights reserved.
              </div>
              <ul className="ac-gf-footer-legal-links" role="list">
                  <li className="ac-gf-footer-legal-links-item" role="listitem">
                      <a className="ac-gf-footer-legal-link" href="/legal/privacy/" data-analytics-title="privacy policy">Privacy Policy</a>
                  </li>
                  <li className="ac-gf-footer-legal-links-item" role="listitem">
                      <a className="ac-gf-footer-legal-link" href="/legal/internet-services/terms/site.html" data-analytics-title="terms of use">Terms of Use</a>
                  </li>
                  <li className="ac-gf-footer-legal-links-item" role="listitem">
                      <a className="ac-gf-footer-legal-link" href="/us/shop/goto/help/sales_refunds" data-analytics-title="sales and refunds">Sales and Refunds</a>
                  </li>
                  <li className="ac-gf-footer-legal-links-item" role="listitem">
                      <a className="ac-gf-footer-legal-link" href="/legal/" data-analytics-title="legal">Legal</a>
                  </li>
                  <li className="ac-gf-footer-legal-links-item" role="listitem">
                      <a className="ac-gf-footer-legal-link" href="/sitemap/" data-analytics-title="site map">Site Map</a>
                  </li>
              </ul>
          </div>
      </section>

      {/* FOOTER */}
      <footer className="js" lang="en-US" id="ac-globalfooter" data-analytics-region="global footer" role="contentinfo" aria-labelledby="ac-gf-label">
      	<div className="ac-gf-content" data-nosnippet="">
      		<h2 className="ac-gf-label" id="ac-gf-label">Apple Footer</h2>
      
      		<section className="ac-gf-sosumi" aria-label="Footnotes">
      
      			<ul>
      				<li><span id="footnote-1" className="tax-holiday-legal-hide">1. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple&nbsp;Gift&nbsp;Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple&nbsp;Gift&nbsp;Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may&nbsp;apply.</span>
      				</li>
      				<li>Available in the U.S. on <a href="/">apple.com</a>, in the Apple&nbsp;Store app, and at Apple&nbsp;Stores.</li>
      				<li>To access and use all Apple&nbsp;Card features and products available only to Apple&nbsp;Card users, you must add Apple&nbsp;Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple&nbsp;Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.</li>
      				<li>Apple&nbsp;Payments Services LLC, a subsidiary of Apple&nbsp;Inc., is a service provider of Goldman Sachs Bank USA for Apple&nbsp;Card and Savings accounts. Neither Apple&nbsp;Inc. nor Apple&nbsp;Payments Services LLC is a bank.</li>
      				<li>If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple&nbsp;Card.</li>
      				<li>Learn more about how Apple&nbsp;Card applications are evaluated at <a href="https://support.apple.com/kb/HT209218">support.apple.com/kb/HT209218</a>.</li>
      				<li style={{ display: "none" }}><span className="tv-plus-legal">Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All rights reserved.</span></li>
      				<li><span className="fam-legal">A subscription is required for Apple&nbsp;Arcade, Apple&nbsp;Fitness+, Apple&nbsp;Music, and Apple&nbsp;TV+.</span></li>
      				<li>Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.</li>
      			</ul>
      		</section>
      
      		<nav className="ac-gf-directory with-5-columns" aria-label="Apple Directory" role="navigation">
      			<div className="ac-gf-directory-column">
      				<div className="ac-gf-directory-column-section">
      					<h3 className="ac-gf-directory-column-section-title">
      						<span className="ac-gf-directory-column-section-title-text">Shop and Learn</span>
      						<button className="ac-gf-directory-column-section-title-button" disabled="">
      							<span className="ac-gf-directory-column-section-title-text">Shop and Learn</span>
      							<span className="ac-gf-directory-column-section-title-icon" aria-hidden="true">
      								<svg className="footer-icon-svg" width="11" height="6" viewBox="0 0 11 6">
      									<polyline data-footer-icon-shape="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" fillRule="evenodd" points="10.075 0.675 5.5 5.323 0.925 0.675">
      										<animate data-footer-animate="expand" attributeName="points" values="10.075 0.675 5.5 5.323 0.925 0.675; 10.075 3 5.5 3 0.925 3; 10.075 5.325 5.5 0.676 0.925 5.325" dur="320ms" begin="indefinite" fill="freeze" keyTimes="0; 0.5; 1" calcMode="spline" keySplines="0.12, 0, 0.38, 0; 0.2, 1, 0.68, 1"></animate>
      										<animate data-footer-animate="collapse" attributeName="points" values="10.075 5.325 5.5 0.676 0.925 5.325; 10.075 3 5.5 3 0.925 3; 10.075 0.675 5.5 5.323 0.925 0.675" dur="320ms" begin="indefinite" fill="freeze" keyTimes="0; 0.5; 1" calcMode="spline" keySplines="0.2, 0, 0.68, 0; 0.2, 1, 0.68, 1"></animate>
      									</polyline>
      								</svg>
      							</span>
      						</button>
      					</h3>
      					<ul id="footer-directory-column-section-products" className="ac-gf-directory-column-section-list" role="list">
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/us/shop/goto/store" data-analytics-title="store">Store</a>
      						</li>
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/mac/" data-analytics-title="mac">Mac</a>
      						</li>
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/ipad/" data-analytics-title="ipad">iPad</a>
      						</li>
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/iphone/" data-analytics-title="iphone">iPhone</a>
      						</li>
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/watch/" data-analytics-title="watch">Watch</a>
      						</li>
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/apple-vision-pro/" data-analytics-title="vision">Vision</a>
      						</li>
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/airpods/" data-analytics-title="airpods">AirPods</a>
      						</li>
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/tv-home/" data-analytics-title="tv and home">TV &amp; Home</a>
      						</li>
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/airtag/" data-analytics-title="airtag">AirTag</a>
      						</li>
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/us/shop/goto/buy_accessories" data-analytics-title="accessories">Accessories</a>
      						</li>
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/us/shop/goto/giftcards" data-analytics-title="gift cards">Gift Cards</a>
      						</li>
      					</ul>
      				</div>
      				<div className="ac-gf-directory-column-section">
      					<h3 className="ac-gf-directory-column-section-title">
      						<span className="ac-gf-directory-column-section-title-text">Apple Wallet</span>
      						<button className="ac-gf-directory-column-section-title-button" disabled="">
      							<span className="ac-gf-directory-column-section-title-text">Apple Wallet</span>
      							<span className="ac-gf-directory-column-section-title-icon" aria-hidden="true">
      								<svg className="footer-icon-svg" width="11" height="6" viewBox="0 0 11 6">
      									<polyline data-footer-icon-shape="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" fillRule="evenodd" points="10.075 0.675 5.5 5.323 0.925 0.675">
      										<animate data-footer-animate="expand" attributeName="points" values="10.075 0.675 5.5 5.323 0.925 0.675; 10.075 3 5.5 3 0.925 3; 10.075 5.325 5.5 0.676 0.925 5.325" dur="320ms" begin="indefinite" fill="freeze" keyTimes="0; 0.5; 1" calcMode="spline" keySplines="0.12, 0, 0.38, 0; 0.2, 1, 0.68, 1"></animate>
      										<animate data-footer-animate="collapse" attributeName="points" values="10.075 5.325 5.5 0.676 0.925 5.325; 10.075 3 5.5 3 0.925 3; 10.075 0.675 5.5 5.323 0.925 0.675" dur="320ms" begin="indefinite" fill="freeze" keyTimes="0; 0.5; 1" calcMode="spline" keySplines="0.2, 0, 0.68, 0; 0.2, 1, 0.68, 1"></animate>
      									</polyline>
      								</svg>
      							</span>
      						</button>
      					</h3>
      					<ul id="footer-directory-column-section-applewallet" className="ac-gf-directory-column-section-list" role="list">
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/wallet/" data-analytics-title="wallet">Wallet</a>
      						</li>
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/apple-card/" data-analytics-title="apple card">Apple&nbsp;Card</a>
      						</li>
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/apple-pay/" data-analytics-title="apple pay">Apple&nbsp;Pay</a>
      						</li>
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/apple-cash/" data-analytics-title="apple cash">Apple&nbsp;Cash</a>
      						</li>
      					</ul>
      				</div>
      			</div>
      			<div className="ac-gf-directory-column">
      				<div className="ac-gf-directory-column-section">
      					<h3 className="ac-gf-directory-column-section-title">
      						<span className="ac-gf-directory-column-section-title-text">Account</span>
      						<button className="ac-gf-directory-column-section-title-button" disabled="">
      							<span className="ac-gf-directory-column-section-title-text">Account</span>
      							<span className="ac-gf-directory-column-section-title-icon" aria-hidden="true">
      								<svg className="footer-icon-svg" width="11" height="6" viewBox="0 0 11 6">
      									<polyline data-footer-icon-shape="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" fillRule="evenodd" points="10.075 0.675 5.5 5.323 0.925 0.675">
      										<animate data-footer-animate="expand" attributeName="points" values="10.075 0.675 5.5 5.323 0.925 0.675; 10.075 3 5.5 3 0.925 3; 10.075 5.325 5.5 0.676 0.925 5.325" dur="320ms" begin="indefinite" fill="freeze" keyTimes="0; 0.5; 1" calcMode="spline" keySplines="0.12, 0, 0.38, 0; 0.2, 1, 0.68, 1"></animate>
      										<animate data-footer-animate="collapse" attributeName="points" values="10.075 5.325 5.5 0.676 0.925 5.325; 10.075 3 5.5 3 0.925 3; 10.075 0.675 5.5 5.323 0.925 0.675" dur="320ms" begin="indefinite" fill="freeze" keyTimes="0; 0.5; 1" calcMode="spline" keySplines="0.2, 0, 0.68, 0; 0.2, 1, 0.68, 1"></animate>
      									</polyline>
      								</svg>
      							</span>
      						</button>
      					</h3>
      					<ul id="footer-directory-column-section-accounts" className="ac-gf-directory-column-section-list" role="list">
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="https://account.apple.com/" data-analytics-title="apple account" data-analytics-exit-link="">Manage Your Apple Account</a>
      						</li>
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/us/shop/goto/account" data-analytics-title="apple store account">Apple Store Account</a>
      						</li>
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="https://www.icloud.com" data-analytics-title="icloud.com" data-analytics-exit-link="">iCloud.com</a>
      						</li>
      					</ul>
      				</div>
      				<div className="ac-gf-directory-column-section">
      					<h3 className="ac-gf-directory-column-section-title">
      						<span className="ac-gf-directory-column-section-title-text">Entertainment</span>
      						<button className="ac-gf-directory-column-section-title-button" disabled="">
      							<span className="ac-gf-directory-column-section-title-text">Entertainment</span>
      							<span className="ac-gf-directory-column-section-title-icon" aria-hidden="true">
      								<svg className="footer-icon-svg" width="11" height="6" viewBox="0 0 11 6">
      									<polyline data-footer-icon-shape="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" fillRule="evenodd" points="10.075 0.675 5.5 5.323 0.925 0.675">
      										<animate data-footer-animate="expand" attributeName="points" values="10.075 0.675 5.5 5.323 0.925 0.675; 10.075 3 5.5 3 0.925 3; 10.075 5.325 5.5 0.676 0.925 5.325" dur="320ms" begin="indefinite" fill="freeze" keyTimes="0; 0.5; 1" calcMode="spline" keySplines="0.12, 0, 0.38, 0; 0.2, 1, 0.68, 1"></animate>
      										<animate data-footer-animate="collapse" attributeName="points" values="10.075 5.325 5.5 0.676 0.925 5.325; 10.075 3 5.5 3 0.925 3; 10.075 0.675 5.5 5.323 0.925 0.675" dur="320ms" begin="indefinite" fill="freeze" keyTimes="0; 0.5; 1" calcMode="spline" keySplines="0.2, 0, 0.68, 0; 0.2, 1, 0.68, 1"></animate>
      									</polyline>
      								</svg>
      							</span>
      						</button>
      					</h3>
      					<ul className="ac-gf-directory-column-section-list" role="list">
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/apple-tv/" data-analytics-title="home">Apple TV</a>
      						</li>
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/apple-music/" data-analytics-title="music">Apple Music</a>
      						</li>
      						<li className="ac-gf-directory-column-section-item" role="listitem">
      							<a className="ac-gf-directory-column-section-link" href="/apple-arcade/" data-analytics-title="arcade">Apple Arcade</a>
      						</li>
      					</ul>
      				</div>
      			</div>
      		</nav>
      	</div>
      </footer>
    </div>
  );
}</div></li></ul></div></nav></div>