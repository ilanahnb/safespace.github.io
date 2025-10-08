import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
    return (
        <div className="privacy-container py-5">
            <div className="container">
                <h1 className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>Privacy Policy</h1>
                <p className="text-label">Last updated: 8 October 2025</p>

                <p>
                    This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our mobile application ("the App"). Your privacy and well-being are our top priorities, and we are committed to maintaining a safe, transparent, and respectful platform that complies with global privacy regulations including the EU General Data Protection Regulation (GDPR), the UK Data Protection Act, Australian Privacy Act, New Zealand Privacy Act, Canadian Personal Information Protection and Electronic Documents Act (PIPEDA), and relevant provincial privacy laws. This app complies with international privacy frameworks, including the EU GDPR, Brazil's LGPD, and equivalent laws in Latin America such as Mexico's LFPDPPP and Chile's Law 19.628.
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

                <Section title="4. Why We Collect It and Our Legal Bases">
                    <ul>
                        <Bullet> Allow you to create and manage an account (contract performance) </Bullet>
                        <Bullet> Provide personalized and relevant content based on your interests (legitimate interest) </Bullet>
                        <Bullet> Moderate content to maintain a safe, respectful community (legal obligation and legitimate interest) </Bullet>
                        <Bullet> Prevent abuse, spam, and platform misuse (legitimate interest) </Bullet>
                        <Bullet> Respond to help requests or reports (contract performance) </Bullet>
                        <Bullet> Improve the app's functionality and performance (legitimate interest) </Bullet>
                    </ul>
                    <p>Under the GDPR and similar regulations, we process your data based on the following legal grounds:</p>
                    <Bullet> Contract performance: Processing necessary to provide you the service you have requested </Bullet>
                    <Bullet> Consent: When you explicitly agree to specific data processing activities </Bullet>
                    <Bullet> Legitimate interests: When processing is necessary for our legitimate interests or those of a third party, provided your rights don\'t override these interests </Bullet>
                    <Bullet> Legal obligation: When we need to process data to comply with a legal requirement </Bullet>
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
                        We rely on user reporting and moderation tools to ensure SafeSpace remains a respectful, non-exploitative platform.
                        Content that violates these standards may be removed, and repeated violations may result in account suspension or
                        termination.
                    </p>
                </Section>

                <Section title="8. Child Safety Standards and Protection Against CSAE">
                    <p>
                        SafeSpace is committed to maintaining a platform that is completely free from Child Sexual Abuse and Exploitation (CSAE)
                        and Child Sexual Abuse Material (CSAM). While our platform is exclusively for users 18 years of age and older, we maintain
                        the highest standards of child protection.
                    </p>

                    <h6 className="text-white mt-3 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Prohibited Content and Behavior</h6>
                    <p>We strictly prohibit and will immediately remove any content or behavior that:</p>
                    <ul>
                        <Bullet> Contains, promotes, or facilitates child sexual abuse or exploitation in any form </Bullet>
                        <Bullet> Depicts, encourages, or promotes sexual abuse of minors </Bullet>
                        <Bullet> Involves child grooming, sextortion, or trafficking </Bullet>
                        <Bullet> Portrays children in a manner that could result in sexual exploitation </Bullet>
                        <Bullet> Constitutes or contains Child Sexual Abuse Material (CSAM) </Bullet>
                    </ul>

                    <h6 className="text-white mt-3 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Reporting Mechanisms</h6>
                    <p>
                        We provide multiple ways for users to report concerns about CSAE or CSAM:
                    </p>
                    <ul>
                        <Bullet> In-app reporting feature on all content and user profiles </Bullet>
                        <Bullet> Direct contact through our <Link className='privacy-link' to="/contact">email</Link> </Bullet>
                        <Bullet> Emergency reporting for immediate safety concerns </Bullet>
                    </ul>

                    <h6 className="text-white mt-3 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Response Protocol</h6>
                    <p>Upon receiving reports or obtaining knowledge of CSAE/CSAM content, we will:</p>
                    <ul>
                        <Bullet> Review all reports within 24 hours of receipt </Bullet>
                        <Bullet> Immediately investigate and remove violating content upon confirmation </Bullet>
                        <Bullet> Permanently ban accounts involved in CSAE activities </Bullet>
                        <Bullet> Report confirmed CSAM to NCMEC and relevant authorities within 24-48 hours as required by law </Bullet>
                        <Bullet> Cooperate fully with law enforcement investigations </Bullet>
                        <Bullet> Preserve evidence as required by applicable laws </Bullet>
                        <Bullet> Conduct follow-up reviews to prevent similar violations </Bullet>
                    </ul>

                    <h6 className="text-white mt-3 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Legal Compliance</h6>
                    <p>
                        We comply with all applicable child safety laws and regulations, including mandatory reporting requirements. As an Australian-based platform, we maintain processes to identify, report, and respond to CSAM in accordance with Australian law and international standards, including:
                    </p>
                    <ul>
                        <Bullet> Australia: eSafety Commissioner reporting requirements and Online Safety Act compliance </Bullet>
                        <Bullet> International cooperation with relevant authorities as required </Bullet>
                        <Bullet> Compliance with mandatory reporting laws and child protection regulations </Bullet>
                    </ul>

                    <h6 className="text-white mt-3 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Child Safety Contact</h6>
                    <p>
                        For child safety concerns or if you believe a child is in danger, please:
                    </p>
                    <ul>
                        <Bullet> Contact local law enforcement immediately (emergency situations) </Bullet>
                        <Bullet> Report to the eSafety Commissioner at esafety.gov.au (Australia) </Bullet>
                        <Bullet> Contact our designated child safety representative at <strong>support@safe-space.app</strong> </Bullet>
                        <Bullet> Use our in-app reporting feature for immediate concerns </Bullet>
                    </ul>
                </Section>

                <Section title="9. Data Storage, Security & Retention">
                    <p>
                        All personal data is securely stored using industry-standard encryption and access controls. We take reasonable precautions to protect your information from unauthorized access, loss, misuse, or alteration.
                    </p>
                    <p>
                        We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. Different types of data have different retention periods:
                    </p>
                    <ul>
                        <Bullet> Account information: For as long as your account is active plus 30 days after deletion </Bullet>
                        <Bullet> User content (including comments): Until you delete it or your account is terminated </Bullet>
                        <Bullet> Usage data (app analytics, performance metrics, device information): Retained for up to 12 months for analysis, then anonymized </Bullet>
                        <Bullet> Communications with support (help requests, reports, inquiries): Retained for the duration of your account plus 1 year for service improvement </Bullet>
                    </ul>
                </Section>

                <Section title="10. International Data Transfers">
                    <p>
                        Your data may be transferred to and processed in countries outside your country of residence, including countries where our servers are located. These countries may have different data protection laws. When we transfer data internationally, we implement appropriate safeguards such as:
                    </p>
                    <ul>
                        <Bullet> EU Standard Contractual Clauses </Bullet>
                        <Bullet> UK International Data Transfer Agreements </Bullet>
                        <Bullet> Brazilian Standard Contractual Clauses (CCTs) for LGPD compliance </Bullet>
                        <Bullet> Binding contractual commitments in compliance with Mexico's LFPDPPP </Bullet>
                        <Bullet> Ensuring adequate levels of data protection in recipient countries </Bullet>
                        <Bullet> Obtaining your explicit consent where required </Bullet>
                    </ul>
                    <p>
                        For Latin American users: In accordance with regional privacy laws including Brazil's LGPD, we obtain your explicit consent for international data transfers when registering for our service. We ensure that any third parties receiving your data provide adequate levels of protection in line with the standards set by Latin American privacy regulations. You have the right to withdraw your consent to international transfers at any time, though this may affect our ability to provide certain services.
                    </p>
                </Section>

                <Section title="11. Automated Decision Making">
                    <p>
                        We do not make decisions solely based on automated processing, including profiling, that produce legal or similarly significant effects on you. Some content moderation may use automated tools, but significant decisions involve human review.
                    </p>
                </Section>

                <Section title="12. Cookies and Similar Technologies">
                    <p>
                        Our app uses minimal technical storage (similar to cookies) that is strictly necessary for the functioning of the app. We do not use cookies for advertising or non-essential tracking purposes. By using our app, you consent to the storage of the following essential data on your device:
                    </p>
                    <ul>
                        <Bullet> Authentication tokens to keep you logged in </Bullet>
                        <Bullet> App preferences to remember your settings </Bullet>
                        <Bullet> Technical identifiers necessary for app stability </Bullet>
                        <Bullet> Cached media files (such as images, videos and audio) to improve performance and reduce data usage </Bullet>
                        <Bullet> User authentication information to maintain your session </Bullet>
                    </ul>
                    <p>
                        For Latin American users (including Brazil, Mexico, Colombia, Argentina, Chile, and Peru): In accordance with local privacy laws such as Brazil's LGPD and similar regulations, we explicitly inform you that these technical storage mechanisms are essential for the app's functionality and security. We do not use this stored data for advertising, tracking across other apps/sites, or any purpose beyond providing and improving our service to you.
                    </p>
                    <p>
                        You can control and manage your local storage in the following ways:
                    </p>
                    <ul>
                        <Bullet> Clear cache: You can clear cached media files through your device settings or in-app settings while preserving your account </Bullet>
                        <Bullet> Log out: You can log out to remove authentication tokens and session data </Bullet>
                        <Bullet> Uninstall: You can clear all local data by uninstalling the app, though this will also remove your saved preferences </Bullet>
                    </ul>
                    <p>
                        In line with privacy regulations in Latin America and globally, you have the right to access information about what data is stored on your device. You may contact us at support@safe-space.app to request this information.
                    </p>
                </Section>

                <Section title="13. Data Breach Notification">
                    <p>
                        In case of a personal data breach that poses a risk to your rights and freedoms, we will notify relevant supervisory authorities within 72 hours of becoming aware of the breach, where feasible. If the breach is likely to result in a high risk to your rights and freedoms, we will also notify you directly without undue delay. Our notification will include:
                    </p>
                    <ul>
                        <Bullet> The nature of the breach </Bullet>
                        <Bullet> Categories and approximate number of individuals concerned </Bullet>
                        <Bullet> Likely consequences of the breach </Bullet>
                        <Bullet> Measures taken or proposed to address the breach </Bullet>
                        <Bullet> Contact information for follow-up questions </Bullet>
                    </ul>
                </Section>

                <Section title="14. Third-Party Services">
                    <p>
                        We may use privacy-respecting third-party services (e.g., cloud hosting, analytics) solely to operate and improve the App. These providers are required to handle your data securely and in compliance with applicable laws.
                    </p>
                </Section>

                <Section title="15. Your Data Protection Rights">
                    <p>
                        Under data protection laws including GDPR, you have the following rights:
                    </p>
                    <ul>
                        <Bullet> Right to access: You can request copies of your personal data </Bullet>
                        <Bullet> Right to rectification: You can request correction of inaccurate or incomplete information </Bullet>
                        <Bullet> Right to erasure: You can request deletion of your data under certain circumstances </Bullet>
                        <Bullet> Right to restrict processing: You can request we limit the processing of your data </Bullet>
                        <Bullet> Right to data portability: You can request transfer of your data in a machine-readable format </Bullet>
                        <Bullet> Right to object: You can object to our processing of your data based on legitimate interests </Bullet>
                        <Bullet> Right to withdraw consent: You can withdraw previously given consent at any time </Bullet>
                    </ul>
                    <p>
                        We adhere to the following timeframes when responding to data subject requests:
                    </p>
                    <ul>
                        <Bullet> EU/UK users (GDPR): Within 30 days, with possible extension of up to 2 months for complex requests </Bullet>
                        <Bullet> Brazilian users (LGPD): Within 15 days </Bullet>
                        <Bullet> Mexican users (LFPDPPP): Within 20 days, with possible 20-day extension </Bullet>
                        <Bullet> Colombian users (Law 1581): Within 10 business days for information requests, 15 business days for other requests </Bullet>
                        <Bullet> Peruvian users (Law 29733): Within 20 days, with possible 10-day extension </Bullet>
                        <Bullet> Argentinian users (Law 25.326): Within 10 days </Bullet>
                        <Bullet> Users in other countries: Within 30 days </Bullet>
                    </ul>
                    <p>
                        There is no fee for exercising these rights unless requests are manifestly unfounded or excessive.
                    </p>
                    <p>
                        If you are located in the EU/EEA, UK, Australia, New Zealand, or Latin America, you also have the right to lodge a complaint with your local data protection authority if you believe that we have not complied with applicable data protection laws. Key authorities include:
                    </p>
                    <ul>
                        <Bullet> EU: Your national Data Protection Authority (in Sweden: Integritetsskyddsmyndigheten) </Bullet>
                        <Bullet> UK: Information Commissioner's Office (ICO) </Bullet>
                        <Bullet> Australia: Office of the Australian Information Commissioner (OAIC) </Bullet>
                        <Bullet> New Zealand: Office of the Privacy Commissioner </Bullet>
                        <Bullet> Canada: Office of the Privacy Commissioner of Canada or your provincial privacy commissioner </Bullet>
                        <Bullet> Brazil: National Data Protection Authority (ANPD) </Bullet>
                        <Bullet> Mexico: National Institute for Transparency, Access to Information and Personal Data Protection (INAI) </Bullet>
                        <Bullet> Colombia: Superintendence of Industry and Commerce </Bullet>
                        <Bullet> Peru: National Authority for Data Protection </Bullet>
                        <Bullet> Argentina: Agency of Access to Public Information </Bullet>
                    </ul>
                    <p>
                        To exercise any of these rights, <Link className='privacy-link' to="/contact">contact us here</Link>.
                    </p>
                </Section>

                <Section title="16. EU Digital Services Act Compliance">
                    <p>
                        For users in the European Union, we comply with the Digital Services Act (DSA). This includes:
                    </p>
                    <ul>
                        <Bullet> Transparent reporting on content moderation decisions </Bullet>
                        <Bullet> Clear procedures for reporting illegal content </Bullet>
                        <Bullet> Timely processing of notices about illegal content </Bullet>
                        <Bullet> Providing information about content restrictions in our Terms of Use </Bullet>
                        <Bullet> Implementing effective safeguards against misuse of our service </Bullet>
                    </ul>
                    <p>
                        EU users have the right to lodge complaints about systemic issues with our content moderation with their national Digital Services Coordinator.
                    </p>
                </Section>

                <Section title="17. Latin American Privacy Laws Compliance">
                    <p>
                        For users in Latin America, we comply with various data protection laws including:
                    </p>
                    <ul>
                        <Bullet> Brazil: Lei Geral de Proteção de Dados (LGPD) - We respect your rights as a data subject, including rights to access, correct, delete, and port your personal data </Bullet>
                        <Bullet> Mexico: Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP) - We obtain your consent before processing personal data and provide clear information on how it will be used </Bullet>
                        <Bullet> Chile: Law No. 19.628 on the Protection of Private Life - We process your data lawfully and with respect for your privacy rights </Bullet>
                        <Bullet> Colombia: Statutory Law 1581 of 2012 - We implement appropriate security measures to protect your data and respect your right to update and rectify information </Bullet>
                        <Bullet> Argentina: Personal Data Protection Law No. 25.326 - We maintain data accuracy and confidentiality while respecting your rights as a data subject </Bullet>
                        <Bullet> Peru: Personal Data Protection Law No. 29733 - We only process data with valid legal basis and respect rights to information access </Bullet>
                    </ul>
                    <p>
                        In all these jurisdictions, you have the right to access your personal data, request corrections, and in certain circumstances, request deletion. You may exercise these rights by contacting us at support@safe-space.app.
                    </p>
                </Section>

                <Section title="18. Changes to This Policy">
                    We may update this Privacy Policy from time to time. Significant changes will be communicated within the App or via email.
                    Your continued use of the App after any changes constitutes acceptance of the revised policy.
                </Section>

                <Section title="19. Contact Us">
                    <p>
                        For privacy or data protection queries, including complaints or data subject requests (including those related to GDPR, LGPD, or other privacy regulations), you can contact our privacy team at:
                    </p>
                    <p>support@safe-space.app</p>
                    <p>SafeSpace</p>
                    <p>
                        While we do not have a formally appointed Data Protection Officer (DPO), we have designated individuals responsible for data protection compliance within our organization. All privacy inquiries will be handled with the same level of care and diligence as required by applicable privacy laws.
                    </p>
                    <p>You can <Link className='privacy-link' to="/contact">contact us here</Link>.</p>
                </Section>

                <p className="mt-5">
                    Thank you for being part of a community that values trust, safety, and mindful social connection.
                </p>
            </div>
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
