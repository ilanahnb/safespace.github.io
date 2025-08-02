import React from 'react';
import '../App.css';

export default function PrivacyPolicy() {
    return (
        <div className="container py-5 text-body" style={{ backgroundColor: '#0f0f0f', fontFamily: 'Nunito, sans-serif', color: '#b8b8b8' }}>
            <h1 className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>Privacy Policy</h1>
            <p className="text-muted">Last updated: 12 May 2025</p>

            <p>
                This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our mobile
                application ("the App"). Your privacy and well-being are our top priorities, and we are committed to maintaining a safe,
                transparent, and respectful platform.
            </p>

            <hr className="my-4" />

            <Section title="1. Who We Are">
                We are the creators of a mobile-only, ad-free social media platform designed to reduce doomscrolling, promote positive
                engagement, and prioritize mental health. We do not run advertisements or sell user data.
            </Section>

            <Section title="2. Age Requirement">
                The App is intended for individuals 18 years of age or older. We do not knowingly collect personal data from users under
                the age of 18. If we become aware that we have inadvertently collected data from a minor, we will delete that data
                promptly.
            </Section>

            <Section title="3. What We Collect">
                <ul>
                    <Bullet> Name or display name </Bullet>
                    <Bullet> Email address </Bullet>
                    <Bullet> Date of birth (to confirm age) </Bullet>
                    <Bullet> Profile details (e.g., bio, interests, profile picture) </Bullet>
                    <Bullet> Posts, reactions, and other content you upload </Bullet>
                    <Bullet> Reports you submit or receive </Bullet>
                    <Bullet> Basic device and usage data (to improve app stability and security) </Bullet>
                </ul>
                <p>We do not collect data for advertising purposes.</p>
            </Section>

            <Section title="4. Why We Collect It">
                <ul>
                    <Bullet> Allow you to create and manage an account </Bullet>
                    <Bullet> Provide personalized and relevant content based on your interests </Bullet>
                    <Bullet> Moderate content to maintain a safe, respectful community </Bullet>
                    <Bullet> Prevent abuse, spam, and platform misuse </Bullet>
                    <Bullet> Respond to help requests or reports </Bullet>
                    <Bullet> Improve the app's functionality and performance </Bullet>
                </ul>
            </Section>

            <Section title="5. No Advertising, No Data Selling">
                <ul>
                    <Bullet> We DO NOT run commercial advertisements </Bullet>
                    <Bullet> We DO NOT track you across other apps or websites </Bullet>
                    <Bullet> We DO NOT sell or share your data with advertisers or third-party marketers </Bullet>
                </ul>
                <p>This allows us to focus entirely on the user experience, privacy, and emotional well-being of our community.</p>
            </Section>

            <Section title="6. Social Design Choices for Mental Health">
                <ul>
                    <Bullet> Like, comment, share, and follower counts are hidden from public view </Bullet>
                    <Bullet> We do not promote influencer culture or popularity-based rankings </Bullet>
                    <Bullet> Reactions are designed to express support, not competition </Bullet>
                </ul>
                <p>
                    These decisions are core to our mission to reduce anxiety and build authentic, low-pressure connections.
                </p>
            </Section>

            <Section title="7. Content Guidelines and Sensitive Material">
                <p>
                    This platform may contain user-generated content that includes non-sexual, artistic, or body-positive nudity, such as
                    photography, art, or personal expression. Such content is permitted as long as it aligns with our community values of
                    respect, inclusion, and safety.
                </p>
                <p>However, the following are strictly prohibited and will be actively moderated:</p>
                <ul>
                    <Bullet> Sexually explicit content or pornography </Bullet>
                    <Bullet> Sexual acts or genital close-ups </Bullet>
                    <Bullet> Content intended to arouse or exploit </Bullet>
                    <Bullet> Any form of sexual harassment or solicitation </Bullet>
                </ul>
                <p>
                    We rely on user reporting and moderation tools to ensure Safe Space remains a respectful, non-exploitative platform.
                    Content that violates these standards may be removed, and repeated violations may result in account suspension or
                    termination.
                </p>
            </Section>

            <Section title="8. Data Storage & Security">
                All personal data is securely stored using industry-standard encryption and access controls. We take reasonable
                precautions to protect your information from unauthorized access, loss, misuse, or alteration.
            </Section>

            <Section title="9. Third-Party Services">
                We may use privacy-respecting third-party services (e.g., cloud hosting, analytics) solely to operate and improve the App.
                These providers are required to handle your data securely and in compliance with applicable laws.
            </Section>

            <Section title="10. Access, Correction & Deletion">
                <ul>
                    <Bullet> Access the personal information we hold about you </Bullet>
                    <Bullet> Request correction of inaccurate data </Bullet>
                    <Bullet> Request deletion of your account and associated data </Bullet>
                </ul>
                <p>
                    To make a request, please <a href="/contact">contact us here</a>.
                </p>
            </Section>

            <Section title="11. Changes to This Policy">
                We may update this Privacy Policy from time to time. Significant changes will be communicated within the App or via email.
                Your continued use of the App after any changes constitutes acceptance of the revised policy.
            </Section>

            <Section title="12. Contact Us">
                <p>Safe Space</p>
                <p>You can <a href="/contact">contact us here</a>.</p>
            </Section>

            <p className="mt-5">
                Thank you for being part of a community that values trust, safety, and mindful social connection.
            </p>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <section className="mb-5">
            <h5 className="text-white mt-4 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{title}</h5>
            {children}
        </section>
    );
}

function Bullet({ children }) {
    return <li className="mb-2">{children}</li>;
}
