import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';

const reactPlugin = new ReactPlugin();

const appInsights = new ApplicationInsights({
  config: {
    connectionString: `InstrumentationKey=${process.env.REACT_APP_APPINSIGHTS_INSTRUMENTATIONKEY}`,
    extensions: [reactPlugin],
    enableAutoRouteTracking: true,
    disableAjaxTracking: false,
    autoTrackPageVisitTime: true,
    enableCorsCorrelation: true,
    enableRequestHeaderTracking: true,
    enableResponseHeaderTracking: true,
    samplingPercentage: 50, // Only send 50% of telemetry (reduces volume)
    maxBatchInterval: 15000, // Batch telemetry every 15 seconds
    disableTelemetry: false,
  }
});

appInsights.loadAppInsights();

export { reactPlugin, appInsights };
