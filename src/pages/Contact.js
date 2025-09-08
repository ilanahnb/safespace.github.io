import React from 'react';
import { Container } from 'react-bootstrap';

export default function Contact() {
    return (
        <div className="privacy-container">
            <Container>
                <h1 className="privacy-title">Contact Us</h1>

                <section className="privacy-section">
                    <h5 className="privacy-section-title">Support with Your Account</h5>
                    <p>
                        If you're trying to delete your account or data, you can do this directly in the app. However, if you are experiencing issues or are unable to access the app, please email us:
                    </p>
                    <p>
                        <strong>📩 support@safe-space.app</strong>
                    </p>
                </section>

                <section className="privacy-section">
                    <h5 className="privacy-section-title">General Inquiries</h5>
                    <p>
                        For questions about SafeSpace, partnerships, media, or any other general topic, please reach out to our team:
                    </p>
                    <p>
                        <strong>📩 contact@safe-space.app</strong>
                    </p>
                </section>

                <p className="mt-5">
                    Thank you for being part of the SafeSpace community.
                </p>
            </Container>
        </div>
    );
}
