import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Teen Job Board",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="November 27, 2026">
      <LegalSection heading="Acceptance of terms">
        <p>
          By using Teen Job Board, you agree to these terms. If you don&apos;t
          agree, please don&apos;t use the site.
        </p>
      </LegalSection>

      <LegalSection heading="What this site is">
        <p>
          Teen Job Board is an informational directory of job openings. We
          don&apos;t employ, recruit, or hire anyone, and we aren&apos;t a party
          to any arrangement between you and an employer.
        </p>
      </LegalSection>

      <LegalSection heading="Listings and accuracy">
        <p>
          Listings are provided by employers or submitted to us for posting. We
          try to keep them accurate and current, but we don&apos;t guarantee
          that any listing is accurate, complete, or still available, and we
          don&apos;t endorse any employer.
        </p>
      </LegalSection>

      <LegalSection heading="Your responsibility and safety">
        <p>
          Always research an employer before applying. Be cautious of any
          opening that asks you to pay a fee, share sensitive information such
          as a Social Security number before being hired, or meet somewhere
          unsafe. We recommend talking with a parent or guardian before
          accepting any job, and following local laws on work permits and hours
          for minors.
        </p>
      </LegalSection>

      <LegalSection heading="External links">
        <p>
          Our listings link to third-party websites that we don&apos;t control.
          We aren&apos;t responsible for their content, policies, or practices.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          The site design and original content belong to Teen Job Board. Company
          names and logos belong to their respective owners.
        </p>
      </LegalSection>

      <LegalSection heading="Disclaimer and limitation of liability">
        <p>
          The site is provided &quot;as is&quot; without warranties of any kind.
          To the fullest extent permitted by law, Teen Job Board isn&apos;t
          liable for any damages arising from your use of the site or from any
          dealings with an employer found through it.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to these terms">
        <p>
          We may update these terms at any time. Continued use of the site after
          changes means you accept the updated terms.
        </p>
      </LegalSection>
    </LegalPage>
  );
}