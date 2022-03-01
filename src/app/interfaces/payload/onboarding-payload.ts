export interface OnboardingPayload {
  steps: {
    hasOrder: boolean;
    ticketPayed: boolean;
    hasSeat: boolean;
  },
  ticket: null | {
    download: string;
    qr: string;
  }
}
