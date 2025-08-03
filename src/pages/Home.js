import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
    return (
        <div className="home-root">
            <header className="home-header text-center py-4">
                <h1 className="home-title">Safe Space</h1>
                <p className="lead home-subtitle">
                    Mindful social media — no ads, no pressure, just you.
                </p>
            </header>

            <section className="hero-section text-center py-5">
                <Container>
                    <h2 className="hero-title mb-4">Download the App</h2>
                    <div>
                        <a
                            // href="https://play.google.com/store/apps/details?id=com.example.safespace"
                            href=""
                            // target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/googleplay.svg`}
                                alt="Get it on Google Play"
                                className="store-badge"
                            />
                        </a>
                        <a
                            // href="https://apps.apple.com/app/id123456789"
                            href=""
                            // target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/appstore.svg`}
                                alt="Download on the App Store"
                                className="store-badge"
                            />
                        </a>
                    </div>
                </Container>
            </section>

            <section className="features-section py-5">
                <Container>
                    <Row className="g-4">
                        <Feature title="No Ads, No Algorithms" desc="Enjoy a clean, uncluttered feed with no targeted ads or manipulative algorithms. Fair Visibility for All." />
                        <Feature title="Intentional Use" desc="Built to reduce doomscrolling and support genuine connection." />
                        <Feature title="Inclusive & Respectful" desc="Body-positive and LGBTQ+ friendly. Moderated with care." />
                        <Feature title="Focus on Mental Wellness" desc="No follower counts, no public like numbers. Social media should not be a popularity contest." />
                    </Row>
                </Container>
            </section>
        </div>
    );
}

function Feature({ title, desc }) {
    return (
        <Col md={6} lg={3} className="d-flex align-items-center justify-content-center">
            <div className="feature-card text-center">
                <h5 className="feature-title">{title}</h5>
                <p className="feature-text">{desc}</p>
            </div>
        </Col>
    );
}
