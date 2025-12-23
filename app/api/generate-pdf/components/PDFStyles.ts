import { StyleSheet } from '@react-pdf/renderer';

// Professional social housing charity palette - trustworthy, community-focused
const colors = {
  // Core institutional colors
  black: '#000000',
  white: '#FFFFFF',

  // Primary palette - traditional charity blues
  primary: '#1E3A8A',         // Deep institutional blue - trust, stability
  primaryLight: '#DBEAFE',    // Light blue background
  primaryDark: '#1E40AF',     // Darker blue for emphasis

  // Supporting palette - community colors
  accent: '#047857',          // Forest green - growth, community, hope
  accentLight: '#D1FAE5',     // Light green background

  // Secondary - warm, inclusive
  secondary: '#6D28D9',       // Deep purple - supportive, inclusive
  secondaryLight: '#EDE9FE',  // Light purple background

  // Tertiary - earthy, accessible
  tertiary: '#B45309',        // Warm amber - accessible, welcoming
  tertiaryLight: '#FEF3C7',   // Light amber background

  // Status colors
  success: '#059669',         // Emerald - positive outcomes
  warning: '#D97706',         // Amber - attention
  danger: '#DC2626',          // Red - important notices

  // Text colors
  textPrimary: '#1F2937',     // Dark gray (softer than pure black)
  textSecondary: '#4B5563',   // Medium gray
  textMuted: '#6B7280',       // Light gray

  // Backgrounds
  backgroundGrey: '#F9FAFB',  // Very light gray
  backgroundWarm: '#FFFBEB',  // Warm tint
  border: '#E5E7EB',          // Soft border
  borderDark: '#374151',      // Dark border (softer than black)
};

export const styles = StyleSheet.create({
  // Page layout - A4 with comfortable margins
  page: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 70.87,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.6,
    color: colors.textPrimary,
    backgroundColor: colors.white,
  },

  // Content area container
  contentArea: {
    flex: 1,
    flexDirection: 'column',
  },

  // Header - inline flow layout (no absolute positioning)
  headerInline: {
    paddingBottom: 16,
    marginBottom: 12,
    borderBottomWidth: 3,
    borderBottomColor: colors.primary,
    backgroundColor: colors.white,
  },

  headerLogoContainer: {
    flexDirection: 'column',
  },

  headerLogoText: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
    letterSpacing: 1,
    marginBottom: 4,
  },

  headerLogoSubtext: {
    fontSize: 9,
    fontFamily: 'Helvetica',
    color: colors.textSecondary,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },

  // Footer - inline flow layout with fixed prop
  footerInline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 14,
    marginTop: 12,
    borderTopWidth: 2,
    borderTopColor: colors.border,
    backgroundColor: colors.white,
  },

  footerText: {
    fontSize: 9,
    fontFamily: 'Helvetica',
    color: colors.textSecondary,
  },

  pageNumber: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: colors.textSecondary,
  },

  // Cover page
  coverPage: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    minHeight: 600,
    paddingHorizontal: 20,
  },

  // Cover banner - institutional and welcoming
  coverBanner: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    padding: 36,
    marginBottom: 32,
  },

  coverTitle: {
    fontSize: 30,
    fontFamily: 'Helvetica-Bold',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 1.3,
    letterSpacing: 1.2,
  },

  coverSubtitle: {
    fontSize: 17,
    fontFamily: 'Helvetica-Bold',
    color: colors.white,
    textAlign: 'center',
    letterSpacing: 1,
  },

  coverDescription: {
    fontSize: 11.5,
    fontFamily: 'Helvetica',
    color: colors.textPrimary,
    textAlign: 'left',
    lineHeight: 1.7,
    marginBottom: 28,
    paddingHorizontal: 10,
  },

  // Key points box - welcoming design
  keyPointsBox: {
    backgroundColor: colors.backgroundGrey,
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 6,
    padding: 24,
    marginVertical: 16,
  },

  keyPointsTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
    marginBottom: 16,
    letterSpacing: 0.8,
  },

  keyPoint: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
  },

  keyPointBullet: {
    width: 15,
    fontSize: 12,
    color: colors.primary,
    fontFamily: 'Helvetica',
    marginRight: 10,
    lineHeight: 1.6,
  },

  keyPointText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 1.6,
    color: colors.textPrimary,
    fontFamily: 'Helvetica',
  },

  // Section header - clean professional design for social housing
  sectionHeader: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: colors.white,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },

  sectionSubtitle: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: colors.textPrimary,
    marginTop: 16,
    marginBottom: 10,
  },

  // Body text - readable and comfortable
  paragraph: {
    fontSize: 10.5,
    lineHeight: 1.6,
    color: colors.textPrimary,
    marginBottom: 10,
    textAlign: 'left',
  },

  // Lists - clean and clear
  listContainer: {
    marginBottom: 12,
    marginLeft: 0,
  },

  listItem: {
    flexDirection: 'row',
    marginBottom: 7,
    alignItems: 'flex-start',
  },

  bulletPoint: {
    width: 15,
    fontSize: 12,
    color: colors.primary,
    fontFamily: 'Helvetica',
    marginRight: 10,
    lineHeight: 1.6,
  },

  listItemText: {
    flex: 1,
    fontSize: 10.5,
    lineHeight: 1.7,
    color: colors.textPrimary,
  },

  // Callout box - professional institutional style
  calloutBox: {
    backgroundColor: colors.backgroundGrey,
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 16,
    marginVertical: 14,
  },

  calloutTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
    marginBottom: 10,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },

  calloutText: {
    fontSize: 10.5,
    lineHeight: 1.7,
    color: colors.textPrimary,
    marginBottom: 6,
  },

  // Information box - helpful and clear
  infoBox: {
    backgroundColor: colors.backgroundGrey,
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 5,
    padding: 20,
    marginVertical: 14,
  },

  infoBoxTitle: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
    marginBottom: 12,
    letterSpacing: 0.6,
  },

  infoBoxText: {
    fontSize: 10.5,
    lineHeight: 1.7,
    color: colors.textPrimary,
    marginBottom: 6,
  },

  // Fee box - clear and professional
  feeBox: {
    backgroundColor: colors.primaryLight,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 4,
    padding: 18,
    marginVertical: 12,
  },

  feeBoxTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
    marginBottom: 8,
    textAlign: 'center',
  },

  feeAmount: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 6,
  },

  feeDescription: {
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: colors.textSecondary,
    textAlign: 'center',
  },

  // Notice box - professional institutional style
  noticeBox: {
    backgroundColor: colors.backgroundGrey,
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 16,
    marginVertical: 14,
  },

  noticeTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
    marginBottom: 10,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },

  noticeText: {
    fontSize: 10.5,
    lineHeight: 1.7,
    color: colors.textPrimary,
  },

  // Dividers - subtle
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    marginVertical: 14,
  },

  thickDivider: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    marginVertical: 20,
  },

  // Spacing utilities
  spacerSmall: {
    height: 8,
  },

  spacerMedium: {
    height: 14,
  },

  spacerLarge: {
    height: 22,
  },

  // Typography utilities
  bold: {
    fontFamily: 'Helvetica-Bold',
  },

  textCenter: {
    textAlign: 'center',
  },
});

export { colors };
