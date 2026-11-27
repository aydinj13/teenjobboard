import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Teen Job Board",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="November 27, 2026">
      <LegalSection heading="Overview">
        <p>
          Teen Job Board helps teens in the Northeast Ohio region find job
          openings. This policy explains what information we handle when you
          use this website.
        </p>
      </LegalSection>

      <LegalSection heading="Information we collect">
        <p>
          You don&apos;t need an account to browse listings, and we don&apos;t
          ask you to submit personal information on this site.
        </p>
        <p>
          If you email us, we receive your email address and whatever you
          include in your message. We use it only to respond to you.
        </p>
        <p>
          Like most websites, our hosting provider may automatically log
          technical information such as IP address, browser type, and pages
          visited, for security and to keep the site running.
        </p>
      </LegalSection>

      <LegalSection heading="Third-party links">
        <p>
          Job listings link to employers&apos; own websites and application
          pages. Once you leave our site, that employer&apos;s privacy
          practices apply, not ours. Please review them before sharing personal
          information.
        </p>
      </LegalSection>

      <LegalSection heading="Children and teens">
        <p>
          This site is intended for teens and their families. We do not
          knowingly collect personal information from children under 13. If you
          believe a child has sent us personal information, contact us and
          we&apos;ll delete it.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        <p>
          We may update this policy from time to time. The date at the top shows
          when it was last changed.
        </p>
      </LegalSection>
    </LegalPage>
  );
}