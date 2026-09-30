export interface AnalyticsEvent {
  event: string;
  timestamp: string;
  source: string;
  totalClicks?: number;
}

export const trackEvent = (eventName: string, source: string = 'floating_whatsapp') => {
  const storedClicks = parseInt(localStorage.getItem('atelier_whatsapp_clicks') || '0', 10);
  const newClicks = storedClicks + 1;
  localStorage.setItem('atelier_whatsapp_clicks', newClicks.toString());

  const eventData: AnalyticsEvent = {
    event: eventName,
    timestamp: new Date().toISOString(),
    source,
    totalClicks: newClicks
  };

  // Simulated Analytics Service logging
  console.group('📊 [Simulated Analytics Service]');
  console.log('Event Tracked:', eventName);
  console.log('Source:', source);
  console.log('Total Accumulated Clicks:', newClicks);
  console.log('Timestamp:', eventData.timestamp);
  console.groupEnd();

  return newClicks;
};
