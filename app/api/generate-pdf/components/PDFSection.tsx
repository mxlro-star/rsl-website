import { View, Text } from '@react-pdf/renderer';
import { styles } from './PDFStyles';
import type { PDFSection } from '../content/sections';

export default function PDFSectionComponent({ number, title, content }: PDFSection) {
  // Special styling for specific sections
  const isNoticeSection = number === 10;

  return (
    <View wrap={true}>
      {/* Section header with colored background - wrap={false} prevents orphaning */}
      <View style={styles.sectionHeader} wrap={false}>
        <Text style={styles.sectionTitle}>
          SECTION {number} — {title}
        </Text>
      </View>

      {content.map((item, index) => {
        // Handle string (paragraph)
        if (typeof item === 'string') {
          return (
            <Text key={index} style={styles.paragraph} orphans={2} widows={2}>
              {item}
            </Text>
          );
        }

        // Handle list with improved styling
        if ('type' in item && item.type === 'list') {
          return (
            <View key={index} style={styles.listContainer}>
              {item.items.map((listItem, listIndex) => (
                <View key={listIndex} style={styles.listItem}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text style={styles.listItemText}>{listItem}</Text>
                </View>
              ))}
            </View>
          );
        }

        // Handle callout with enhanced styling
        if ('type' in item && item.type === 'callout') {
          const lines = item.text.split('\n').filter(line => line.trim());
          const calloutTitle = lines[0];
          const calloutBody = lines.slice(1);

          return (
            <View key={index} style={styles.calloutBox} wrap={false}>
              <Text style={styles.calloutTitle}>{calloutTitle}</Text>
              {calloutBody.map((line, lineIndex) => (
                <Text key={lineIndex} style={styles.calloutText} orphans={2} widows={2}>
                  {line}
                </Text>
              ))}
            </View>
          );
        }

        return null;
      })}

      {/* Special handling for Important Notice section */}
      {isNoticeSection && (
        <View style={styles.noticeBox} wrap={false}>
          <Text style={styles.noticeTitle}>IMPORTANT NOTICE</Text>
          <Text style={styles.noticeText} orphans={2} widows={2}>
            Please review all requirements carefully before submitting your application.
            Meeting the criteria does not guarantee acceptance into the framework.
          </Text>
        </View>
      )}
    </View>
  );
}
