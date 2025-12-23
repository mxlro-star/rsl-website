import { Document, Page, View, Text } from '@react-pdf/renderer';
import { styles } from './PDFStyles';
import PDFSectionComponent from './PDFSection';
import { pdfSections } from '../content/sections';

// Inline header component - no absolute positioning
function InlineHeader() {
  return (
    <View style={styles.headerInline}>
      <View style={styles.headerLogoContainer}>
        <Text style={styles.headerLogoText}>FUTURE SOCIAL HOUSING</Text>
        <Text style={styles.headerLogoSubtext}>Regulated Accommodation Framework</Text>
      </View>
    </View>
  );
}

// Inline footer component - uses fixed prop for page numbers
function InlineFooter() {
  return (
    <View style={styles.footerInline} fixed>
      <Text style={styles.footerText}>Future Social Housing</Text>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
      />
    </View>
  );
}

export default function LandlordOnboardingPDF() {
  return (
    <Document
      title="Landlord Onboarding Pack - Future Social Housing"
      author="Future Social Housing"
      subject="Landlord Onboarding Requirements and Process"
      creator="Future Social Housing"
      keywords="landlord, onboarding, social housing, regulated accommodation, framework"
    >
      {/* Cover Page - Neo-Brutalist Design */}
      <Page size="A4" style={styles.page}>
        <InlineHeader />

        <View style={styles.coverPage}>
          {/* Main title banner - bold blue box */}
          <View style={styles.coverBanner}>
            <Text style={styles.coverTitle}>LANDLORD{'\n'}ONBOARDING PACK</Text>
            <Text style={styles.coverSubtitle}>FUTURE SOCIAL HOUSING</Text>
          </View>

          {/* Description */}
          <Text style={styles.coverDescription}>
            A structured route for onboarding properties into the Future Social Housing Framework.
            This document outlines the requirements, responsibilities, and process for landlords
            joining our regulated accommodation framework.
          </Text>

          {/* What's Inside - fixed layout with full width */}
          <View style={styles.keyPointsBox}>
            <Text style={styles.keyPointsTitle}>WHAT'S INSIDE</Text>

            <View style={styles.keyPoint}>
              <Text style={styles.keyPointBullet}>•</Text>
              <Text style={styles.keyPointText}>Framework overview and suitability criteria</Text>
            </View>

            <View style={styles.keyPoint}>
              <Text style={styles.keyPointBullet}>•</Text>
              <Text style={styles.keyPointText}>Property standards and licensing requirements</Text>
            </View>

            <View style={styles.keyPoint}>
              <Text style={styles.keyPointBullet}>•</Text>
              <Text style={styles.keyPointText}>Complete compliance documentation checklist</Text>
            </View>

            <View style={styles.keyPoint}>
              <Text style={styles.keyPointBullet}>•</Text>
              <Text style={styles.keyPointText}>Onboarding process and timeline details</Text>
            </View>

            <View style={styles.keyPoint}>
              <Text style={styles.keyPointBullet}>•</Text>
              <Text style={styles.keyPointText}>Fee structure and payment requirements</Text>
            </View>

            <View style={styles.keyPoint}>
              <Text style={styles.keyPointBullet}>•</Text>
              <Text style={styles.keyPointText}>Next steps and contact information</Text>
            </View>
          </View>
        </View>

        <InlineFooter />
      </Page>

      {/* All Content Pages - Flow naturally */}
      <Page size="A4" style={styles.page} wrap>
        <InlineHeader />

        <View style={styles.contentArea}>
          {/* All 10 sections flowing naturally */}
          {pdfSections.map((section, index) => (
            <PDFSectionComponent key={index} {...section} />
          ))}

          {/* Ready to Get Started section */}
          <View style={styles.spacerLarge} />
          <View style={styles.thickDivider} />
          <View style={styles.spacerLarge} />

          <View style={styles.infoBox} wrap={false}>
            <Text style={styles.infoBoxTitle}>READY TO GET STARTED?</Text>
            <Text style={styles.infoBoxText}>
              If you have reviewed this pack and believe your property meets the requirements,
              please proceed with submitting property details and documentation by email, along with all
              required compliance documentation.
            </Text>
            <View style={styles.spacerMedium} />
            <Text style={styles.infoBoxTitle}>CONTACT ONBOARDING TEAM</Text>
            <View style={styles.spacerSmall} />
            <Text style={styles.infoBoxText}>
              Email: onboarding@futuresocialhousing.co.uk
            </Text>
            <Text style={styles.infoBoxText}>
              Phone: 0121 514 8889
            </Text>
          </View>
        </View>

        <InlineFooter />
      </Page>
    </Document>
  );
}
